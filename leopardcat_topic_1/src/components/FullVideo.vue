<template>
  <div class="full-video-container" :style="{ backgroundColor: backgroundColor }">
    <div
      class="video-wrapper"
      :style="{
        transform: 'scale(' + calcScale + ') translateX(' + calcTranslation + 'px)',
      }"
    >
      <video
        ref="videoRef"
        :src="certifyDevice ? videoSrcWeb : videoSrcMob"
        width="100%"
        autoplay
        muted
        loop
        playsinline
        webkit-playsinline>
      </video>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FullVideo',
  props: {
    videoSrcMob: {
      type: String,
      required: true,
    },
    videoSrcWeb: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: '#f6f6f6',
    },
    videoSize: {
      type: Object,
    }
  },
  computed: {
    certifyDevice() {
      if (window.innerWidth > 1024) {
        return true;
      } else {
        return false;
      }
    },
    isFullHeight() {
      if(window.innerWidth > 1024 || window.innerWidth < 768) {
        if (window.innerHeight > window.innerWidth) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    calcScale() {
      if (!this.isFullHeight) {
        const aspectRatioVideo = this.videoSize.web.height / this.videoSize.web.width;
        const aspectRationWindow = window.innerHeight / window.innerWidth;
        return aspectRatioVideo > aspectRationWindow ? aspectRatioVideo / aspectRationWindow : aspectRationWindow / aspectRatioVideo;
      } else {
        const aspectRatioVideo = this.videoSize.mob.height / this.videoSize.mob.width;
        const aspectRationWindow = window.innerHeight / window.innerWidth;
        return aspectRatioVideo > aspectRationWindow ? aspectRatioVideo / aspectRationWindow : aspectRationWindow / aspectRatioVideo;
      }
    },
    calcTranslation() {
      if (this.isFullHeight) {
        return window.innerWidth > this.videoSize.mob.width ? (this.videoSize.mob.width - window.innerWidth) * (this.videoSize.mob.width /  window.innerWidth) * 0.3: (window.innerWidth - this.videoSize.mob.width) * (window.innerWidth / this.videoSize.mob.width) * 0.3;
      } else {
        return 0;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  .full-video-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    .full-video-text {
      position: relative;
      width: 100%;
      padding: 5px 15px;
      font-size: 17px;
      color: #808080;
      text-align: left;
      @media screen and (min-width: 1024px) {
        width: 800px;
        margin: 0 auto;
        padding: 5px 0;
      }
    }
  }
  .video-wrapper {
    transform-origin: left top;
  }
</style>
