<template>
  <div>
    <transition name="home">
      <div id="searchModal" v-if="isActiveSearchModal">
        <div class="d-flex justify-content-end">
          <i
            class="fa fa-close p-2 bg-danger m-2 btn text-white"
            style="font-size: 30px"
            @click="isActiveSearchModal = false"
          ></i>
        </div>

        <div id="modalStyle">
          <div class="input-group">
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Ara"
              id="modalSearchBar"
              v-model="searchText"
              @keyup.enter="search"
            />

            <i
              class="fa fa-search text-secondary p-3 c-p"
              id="modalSearchButton"
              @click="search"
            ></i>
          </div>
        </div>
      </div>
    </transition>

    <transition name="home">
      <div id="menuModal" v-if="isActiveMenuModal">
        <div class="d-flex justify-content-end">
          <i
            class="fa fa-close p-2 bg-danger m-2 btn text-white"
            style="font-size: 30px"
            @click="isActiveMenuModal = false"
          ></i>
        </div>

        <div id="modalStyle">
          <div style="font-size: 25px; font-family: Montserrat">
            <div class="itemIcon p-1 text-white">
              <p>
                <nuxt-link to="/" class="text-center">
                  <i class="fa fa-home" aria-hidden="true"></i>
                  Ana Sayfa</nuxt-link
                >
              </p>
            </div>
            <div class="itemIcon p-1 text-white">
              <p>
                <nuxt-link to="/blog" class="text-center">
                  <i class="fa fa-comment" aria-hidden="true"></i>
                  Yazılar</nuxt-link
                >
              </p>
            </div>
            <div class="itemIcon p-1 text-white">
              <p>
                <nuxt-link to="/photos" class="text-center">
                  <i class="fa fa-picture-o" aria-hidden="true"></i>
                  Resimler</nuxt-link
                >
              </p>
            </div>
            <div class="itemIcon p-1 text-white">
              <p>
                <nuxt-link to="/videos/all" class="text-center">
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  Videolar</nuxt-link
                >
              </p>
            </div>
            <div class="itemIcon p-1 text-white">
              <p>
                <nuxt-link to="/account/settings" class="text-center">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Hesabım</nuxt-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      id="cover"
      class="centeredBackgroundImage mobilHeightCover mb-2"
      :class="className"
      :style="[
        bannerImageUrl.length > 0
          ? { 'background-image': `url(${bannerImageUrl})` }
          : '',
      ]"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div id="pcMenu" class="menu d-flex justify-content-between p-4">
              <div id="logo">
                <nuxt-link to="/">
                  <img :src="logo" alt="İlliyyun Tv" />
                </nuxt-link>
              </div>
              <div class="d-flex align-items-center flex-column bd-highlight">
                <div class="mt-1 bd-highlight" id="searchDiv">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control search-input"
                      placeholder="Aranacak içerik..."
                      v-model="searchText"
                      @keyup.enter="search"
                    />
                    <div class="input-group-append">
                      <button class="btn search-btn" @click="search">
                        <b>ARA</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between" id="headerIcons">
                <div class="itemIcon p-1">
                  <nuxt-link to="/blog">
                    <i class="fa fa-comment"></i>
                    <span>Yazılar</span>
                  </nuxt-link>
                </div>
                <div class="itemIcon p-1">
                  <nuxt-link to="/photos">
                    <i class="fa fa-picture-o"></i>
                    <span>Resimler</span>
                  </nuxt-link>
                </div>
                <div class="itemIcon p-1">
                  <nuxt-link to="/videos/all">
                    <i class="fa fa-video-camera"></i>
                    <span>Videolar</span>
                  </nuxt-link>
                </div>
                <div v-if="$store.state.userData.isLogin" class="itemIcon p-1">
                  <nuxt-link to="/account/settings">
                    <i class="fa fa-user-circle"></i>
                    <span>Hesabım</span>
                  </nuxt-link>
                </div>

                <div
                  v-if="$store.state.userData.isLogin"
                  class="itemIcon p-1"
                  @click="logOut"
                >
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                  <p><a href="">Çıkış</a></p>
                </div>
                <div class="itemIcon p-1" v-else>
                  <nuxt-link to="/account">
                    <i class="fa fa-sign-in"></i>
                    <span>Kayıt / Giriş</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div
              id="mobilMenu"
              class="d-flex justify-content-between pt-2 mobilMenuDivPadding"
            >
              <div>
                <i
                  class="fa fa-bars text-white btn p-0"
                  style="font-size: 35px"
                  aria-hidden="true"
                  @click="isActiveMenuModal = true"
                ></i>
              </div>
              <div>
                <img :src="logo" alt="İlliyyun Tv" style="width: 110px" />
              </div>
              <div>
                <i
                  class="fa fa-search btn btn-danger btn-sm p-2"
                  id="mobilSearchButton"
                  @click="isActiveSearchModal = true"
                  aria-hidden="true"
                ></i>
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
  props: {
    bannerImageUrl: {
      default: "",
    },
  },

  async fetch() {
    const { data } = await this.$axios.get("/logo");

    this.logo = data.Image ? data.Image.url : "";
  },

  data() {
    return {
      searchText: "",
      logo: "",
      isActiveMenuModal: false,
      isActiveSearchModal: false,
    };
  },

  methods: {
    search() {},
  },

  computed: {
    className() {
      return this.$route.path === '/' ? 'home-cover' : ''
    }
  }
};
</script>

<style scoped>
#searchDiv {
  width: 500px;
  max-width: 95%;
}

.home-cover {
  height: 550px;
}

.search-input {
  height: 44px;
}
</style>