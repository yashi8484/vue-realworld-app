import type { HTTPError } from "ky";
import type { Tag } from "../types";
import { ref } from "vue";
import { getTags } from "../utils/restClient";

export const useTags = () => {
  const tags = ref<Tag[] | undefined>(undefined);
  const error = ref<HTTPError | undefined>(undefined);

  const load = async () => {
    const response = await getTags();

    if (response.status === "error") {
      tags.value = undefined
      error.value = response.data
      return;
    }
    error.value = undefined;
    tags.value = response.data.tags;
  }

  return { tags, error, load }
}
