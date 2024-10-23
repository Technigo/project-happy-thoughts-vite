import "react-loading-skeleton/dist/skeleton.css";

export const renderSkeletonLoader = (Component, count, props) => {
  return Array.from({ length: count }, (_, index) => (
    <Component key={index} {...props} />
  ));
};
