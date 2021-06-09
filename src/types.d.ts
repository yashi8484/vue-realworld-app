import type { HTTPError } from "ky";

interface SuccessResponse<T> {
  status: "success";
  data: T;
}

interface ErrorResponse {
  status: "error";
  data: HTTPError;
}

type Response<T> = SuccessResponse<T> | ErrorResponse;
