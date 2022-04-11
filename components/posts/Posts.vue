<template>
  <div>
    <div class="p-4 mt-5 postCard">
      <div>
        <div class="ornek">
          <img
            v-if="post.image && post.image.url"
            :src="`${post.image.url}`"
            class="sola-kaydir"
            style="width: 450px; max-width: 100%; border: 1px solid #4e4e4e"
          />
          <h2>
            {{ post.title }}
          </h2>
          <p class="text-muted">
            <small
              ><i class="fa fa-clock-o" aria-hidden="true"></i> {{convertDate(post.created_at)}}
            </small>
          </p>
          <markdown-it-vue
            class="mt-3"
            :content="post.detail ? post.detail : ''"
            :class="{
              postContentClosed: !collapseStatus,
              postContentOpened: collapseStatus,
            }"
          />
          <!-- <div
            v-html="post.detail"
            :class="{
              postContentClosed: !collapseStatus,
              postContentOpened: collapseStatus,
            }"
          ></div> -->
          <nuxt-link :to="`/blog/${post.slug}`">
            <a style="float: right" v-if="collapseStatus" href="">Devamını oku</a>
          </nuxt-link>
          <div :class="{ readMoreShadow: !collapseStatus }"></div>
        </div>

        <div id="plusIconDiv">
          <i
            @click="collapseStatus = !collapseStatus"
            :class="{
              'fa fa-times-circle': collapseStatus,
              'fa fa-plus-circle': !collapseStatus,
            }"
            id="plusIcon"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "~/mixins/url.js";

export default {
  mixins: [url],
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      collapseStatus: false,
    };
  },
  methods: {
    convertDate(date) {
      const newDate = new Date(date);
      const monthNames = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ];
      const day = newDate.getDate();
      const monthIndex = newDate.getMonth();
      const year = newDate.getFullYear();
      return `${day} ${monthNames[monthIndex]} ${year}`;
    },
  },
};
</script>

<style scoped>
.postContentClosed {
  overflow: hidden;
  height: 220px !important;
}
.postContentOpened {
  /* height: 355px !important; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 20; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
#plusIcon {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
#plusIconDiv i {
  bottom: -17px;
}
.readMoreShadow {
  width: 100%;
  height: 250px;
  position: absolute;
  left: 0;
  bottom: 20px;
  background: linear-gradient(transparent 0px, #111111);
}

.ornek {
  margin: auto;
}
.sola-kaydir {
  float: left;
  margin: 0 40px 40px 0;
}
</style>
