import ky from "ky";
import type { ky as kyType } from "ky/distribution/types/ky";
import type { Input } from "ky/distribution/types/options";
import type { ApiResponse, ArticleEdge, TagEdge } from "../types";

let kyInstance: kyType | undefined = undefined;

const createClient = () =>
  ky.create({ prefixUrl: "https://conduit.productionready.io/api" });

const getClient = () => kyInstance ?? (kyInstance = createClient());

const fetchUrl = <DataType>(url: Input) => {
  const client = getClient();
  return client.get(url).json<DataType>();
};

const getData = async <DataType>(
  url: Input
): Promise<ApiResponse<DataType>> => {
  try {
    const data = await fetchUrl<DataType>(url);
    return {
      status: "success",
      data,
    };
  } catch (error) {
    return {
      status: "error",
      data: error,
    };
  }
};

export const getArticles = async () => {
  const data = await getData<ArticleEdge>("articles");
  return data;
};

export const getTags = async () => {
  const data = await getData<TagEdge>("tags");
  return data;
};
