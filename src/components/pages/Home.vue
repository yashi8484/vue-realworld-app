<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <div v-if="articlesError">{{ articlesError.message }}</div>
          <div v-if="articles?.length">
            <Article v-for="article in articles" :article="article" />
          </div>
          <div v-else>Loading articles...</div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div v-if="tagsError">{{ tagsError.message }}</div>
            <div v-if="tags?.length" class="tag-list">
              <a v-for="tag in tags" href="" class="tag-pill tag-default">{{ tag }}</a>
            </div>
            <div v-else>Loading tags...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useArticles } from "../../composables/useArticles";
import { useTags } from "../../composables/useTags";
import Article from "./home/Article.vue";

export default defineComponent({
  name: "Home",
  components: { Article },
  setup: () => {
    const { articles, error: articlesError, load: loadArticles } = useArticles();
    const { tags, error: tagsError, load: loadTags } = useTags();

    loadArticles();
    loadTags();

    return {
      articles,
      tags,
      articlesError,
      tagsError
    };
  },
});
</script>
<style scoped></style>
