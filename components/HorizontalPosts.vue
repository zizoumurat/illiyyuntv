<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-md-3"
        v-for="(post, index) in posts"
        :key="`horizontal-post-${index}`"
      >
        <div class="card mb-4 box-shadow">
          <nuxt-link class="card-link" :to="`/blog/${post.slug}`">
            <img :src="post.image.url" alt="" />
          </nuxt-link>
          <div class="card-body">
            <p class="card-text">
              {{ post.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: none;
}
.card-link {
  height: 250px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>