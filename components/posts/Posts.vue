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
              ><i class="fa fa-clock-o" aria-hidden="true"></i> 7 Şubat 2021
            </small>
          </p>
          <div
            v-html="post.detail"
            :class="{
              postContentClosed: !collapseStatus,
              postContentOpened: collapseStatus,
            }"
          ></div>
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
};
</script>

<style scoped>
.postContentClosed {
  overflow: hidden;
  height: 220px !important;
}
.postContentOpened {
  height: auto !important;
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
