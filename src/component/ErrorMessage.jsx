import { useEffect, useState } from "react";

export const ErrorMessage = ({
  isMaxLengthExceeded,
  isPostEmpty,
  postError,
  submitted,
}) => {
  const [errMessageVisible, setErrMesaageVisible] = useState(false);

  useEffect(() => {
    if (postError && submitted) {
      setErrMesaageVisible(true);
    } else {
      setErrMesaageVisible(false);
    }
  }, [postError, submitted]);

  return (
    <>
      {errMessageVisible && (
        <>
          {isMaxLengthExceeded && (
            <p className="error-message">
              Please post less than 140 characters
            </p>
          )}
          {isPostEmpty && (
            <p className="error-message">Don&#39;t leave an empty post</p>
          )}
        </>
      )}
    </>
  );
};
