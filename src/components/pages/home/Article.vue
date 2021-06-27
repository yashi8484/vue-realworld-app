<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html">
        <img :src="article.author.image" :alt="article.author.username" />
      </a>
      <div class="info">
        <a href="" class="author">{{ article.author.username }}</a>
        <span class="date">{{ article.updatedAt.toString() }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import type { PropType } from "vue";
import type { Article } from "../../../types";

export default defineComponent({
  name: "Article",
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
});
</script>
<style scoped></style>
