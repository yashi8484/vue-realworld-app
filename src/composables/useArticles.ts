import type { HTTPError } from "ky";
import type { ArticleEdge } from "../types";
import { ref } from "vue";
import { getArticles } from "../utils/restClient";

export const useArticles = () => {
  const articles = ref<ArticleEdge['articles'] | undefined>(undefined);
  const error = ref<HTTPError | undefined>(undefined)

  const load = async () => {
    const response = await getArticles();

    if (response.status === "error") {
      articles.value = undefined
      error.value = response.data
      return;
    }
    error.value = undefined;
    articles.value = response.data.articles;
  }

  return { articles, error, load }
}
