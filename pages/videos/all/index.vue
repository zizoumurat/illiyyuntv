<template>
  <div>
    <Header  />
    <HorizontalVideoCard :url="'&per_page=12&page=1'"></HorizontalVideoCard>
  </div>
</template>
<script>
export default {
  async fetch() {
    await this.$store.dispatch(
      "getVideosForHorizontalVidCard",
      "&per_page=12&page=1"
    );
    const { data: banner } = await this.$axios.get("/videos-banner");

    this.banner = banner.image ? banner.image.url : "";
  },

  data() {
    return {
      banner: ''
    };
  },
};
</script>

