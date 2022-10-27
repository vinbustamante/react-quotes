import { PropsWithChildren } from "react";
import { AsyncStatusEnum } from "../hooks/useAsync";
import LoadingSpinner from "./UI/LoadingSpinner";

type AsyncStatusRender = PropsWithChildren<{
  status: AsyncStatusEnum;
}>;

export default function AsyncResponse({ status, children }: AsyncStatusRender) {
  return (
    <>
      {status === AsyncStatusEnum.pending && (
        <div className="centered">
          <LoadingSpinner />{" "}
        </div>
      )}
      {status === AsyncStatusEnum.error && (
        <p className="centered focus">There was an error</p>
      )}
      {status === AsyncStatusEnum.completed && children}
    </>
  );
}
