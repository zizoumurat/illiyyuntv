export { default as CommentItem } from '../../components/video/CommentItem.vue'
export { default as HorizontalVideoCard } from '../../components/video/HorizontalVideoCard.vue'
export { default as InsertComment } from '../../components/video/InsertComment.vue'
export { default as Video } from '../../components/video/Video.vue'
export { default as Videos } from '../../components/video/Videos.vue'
export { default as PhotoGallery } from '../../components/photos/PhotoGallery.vue'
export { default as PhotoModal } from '../../components/photos/PhotoModal.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HorizontalPosts } from '../../components/HorizontalPosts.vue'
export { default as Posts } from '../../components/posts/Posts.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
