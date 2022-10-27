import { PropsWithChildren, Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function SuspenseLoader({ children }: PropsWithChildren) {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
