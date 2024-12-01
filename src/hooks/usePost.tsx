import { useState } from "react";

interface UsePostResult<T> {
  postData: <B extends Record<string, unknown>>(
    url: string,
    body?: B,
    options?: RequestInit
  ) => Promise<T>;
  isPosting: boolean;
  error: Error | null;
}

/**
 * Custom hook to perform POST requests.
 * @template T - The expected type of the response data.
 * @returns Object containing `postData`, `isPosting`, and `error`.
 */
const usePost = <T,>(): UsePostResult<T> => {
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const postData = async <B extends Record<string, unknown>>(
    url: string,
    body?: B,
    options: RequestInit = {}
  ): Promise<T> => {
    setIsPosting(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
        body: body ? JSON.stringify(body) : undefined,
        ...options,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result: T = await response.json();
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsPosting(false);
    }
  };

  return { isPosting, error, postData };
};

export default usePost;
