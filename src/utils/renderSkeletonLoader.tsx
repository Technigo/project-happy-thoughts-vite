import { ComponentType } from "react";
import "react-loading-skeleton/dist/skeleton.css";

type RenderSkeletonProps<P> = {
  Component: ComponentType<P>;
  count: number;
  props: P;
};

export const renderSkeletonLoader = <P extends {}>({
  Component,
  count,
  props,
}: RenderSkeletonProps<P>) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <Component
          key={index}
          {...props}
        />
      ))}
    </>
  );
};
