import { useState, useEffect } from "react";

interface UseGetResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Custom hook to perform GET requests.
 * @template T - The expected type of the response data.
 * @param url - The endpoint to fetch data from.
 * @param options - Optional configuration for the fetch request.
 * @returns Object containing `data`, `isLoading`, and `error`.
 */
const useGet = <T,>(url: string, options?: RequestInit): UseGetResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            // Request was canceled; do nothing
            return;
          }
          setError(err); // Set the error state for other errors
        } else {
          setError(new Error("Unknown error occurred"));
        }
      } finally {
        setIsLoading(false); // Ensure isLoading is set to false
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cancel the request if the component unmounts
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useGet;
