<template>
  <div>
    <Header />
    <Video :videoItem="videoItem" :relatedItems="url" @ended="ended"></Video>
  </div>
</template>

<script>
export default {
  middleware: "generalControls",
  head() {
    return {
      title: this.videoItem.name,
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content:
            this.videoItem.name + " başlıklı kur'an videosu || illiyyun tv",
        },
      ],
    };
  },
  async asyncData({ params, $axios, store }) {
    let config = {
      headers: {
        Authorization: "bearer 7ff64c7012578270af241ddbe0db2349",
        Accept:
          "application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4",
        "Content-Type": "application/json",
      },
    };

    const videoItem = await $axios.$get(
      "https://api.vimeo.com/videos/" + params.videoId + "?filter=playable",
      config
    );
    const url =
      "https://api.vimeo.com/me/videos?sort=last_user_action_event_date&filter=playable";

    await store.dispatch(
      "getVideosForHorizontalVidCard",
      url + "&per_page=12" + "&page=1"
    );

    return { url, videoItem };
  },
  beforeDestroy() {
    //sayfa kapanmadan önce store daki comments arrayını boşaltıyoruz ki buradaki yorumlar diğer routeda görünmesin
    this.$store.commit("deleteAllComments");
  },

  methods: {
    ended() {
      const videos = this.$store.state.horizonVidCardData.videos;
      const activeVideo = videos.find(video => video.uri === `/videos/${this.$route.params.videoId}`)
      const nextVideo = videos[videos.indexOf(activeVideo) + 1];
      this.$router.push('/videos/watch/' + nextVideo.link.split('/')[3]);
    }
  }
};
</script>
