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
            <p>Please make you post shorter than 140 characters.</p>
          )}
          {isPostEmpty && <p>Don&#39;t leave an empty post.</p>}
        </>
      )}
    </>
  );
};
