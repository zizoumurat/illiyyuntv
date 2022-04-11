<template>
  <div>
    <Header  />
    <div class="d-inline-block; w-100 mt-5">
      <HorizontalPosts :posts="posts" />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const { data } = await this.$axios.get("/blogs");
    const { data: banner } = await this.$axios.get("/blog-banner");

    data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

    this.banner = banner.image ? banner.image.url : "";
    this.posts = data;
  },
  data() {
    return {
      posts: [],
      banner: "",
    };
  },
};
</script>

<style scoped>
#cover {
  height: 400px;
}
</style>