<template>
  <div>
    <Header />
    <PhotoGallery :gallery="gallery" />
    
  </div>
</template>

<script>
export default {
  async fetch() {
    const { data: banner } = await this.$axios.get("/gallery-banner");
    const { data } = await this.$axios.get("/galleries");
    
    this.gallery = data;
    this.banner = banner.image ? banner.image.url : "";
  },

  data() {
    return {
      banner: '',
      gallery: []
    }
  }
}
</script>
