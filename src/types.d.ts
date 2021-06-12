import type { HTTPError } from "ky";

interface SuccessResponse<T> {
  status: "success";
  data: T;
}

interface ErrorResponse {
  status: "error";
  data: HTTPError;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Tag[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

interface ArticleEdge {
  articles: Article[];
  articlesCount: number;
}

type Tag = string;

interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
