<template>
  <div>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="p-4">
            <div v-if="blog.detailImage" class="image-container">
              <img :src="blog.detailImage.url" :alt="blog.title" />
            </div>
            <div class="blog-content">
              <h1>{{ blog.title }}</h1>
              <markdown-it-vue
                class="mt-5"
                :content="blog.detail ? blog.detail : ''"
              />
            </div>
          </div>
        </div>
        <div class="col col-posts">
          <div class="p-4">
            <div
              class="card mb-4 box-shadow"
              v-for="(post, index) in otherBlogs"
              :key="`blog-${index}`"
            >
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
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const { data } = await this.$axios.get(
      `/blogs?slug=${this.$route.params.slug}`
    );

    this.blog = data[0];

    const { data: blogs } = await this.$axios.get(`/blogs`);

    this.otherBlogs = blogs.filter((blog) => blog.id !== this.blog.id);
  },

  data() {
    return {
      blog: {},
      otherBlogs: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.col-posts {
  flex: 0 0 300px;
}
.image-container {
  height: 500px;
  text-align: center;
}
.card {
  background: none;
  .card-body {
    padding: 10px 0;
    font-size: 18px;
  }
  .card-link {
    img {
      max-width: 100%;
    }
  }
}
</style>>
