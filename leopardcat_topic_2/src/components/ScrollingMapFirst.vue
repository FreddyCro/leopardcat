<template>
  <div
    :id="mapId"
    class="map-container"
  >
    <!-- <div
      v-if="certifyMapFixed"
      class="map-image-wrapper sup"
    ></div> -->
    <div
      :class="{
        'map-image-wrapper': true,
        'map-fixed': certifyMapFixed,
        'fixed-fade-in': fadeFlag,
        'fixed-fade-out': !fadeFlag,
      }"
      :style="{ 
        backgroundImage: 'url(' + certifyDevice + ')',
        opacity: certifyMapOpacity,
      }"
    >
      <slot name="title"></slot>
    </div>
    <div
      v-if="!noText"
      :class="{
        'intro-text-container': true,
        'fixed-fade-in': textFadeFlag,
        'fixed-fade-out': !textFadeFlag,
      }"
      :style="{
        backgroundColor: introBackgroundColor,
      }"
    >
      <div
        :class="{
          'intro-text-wrapper': true,
          'left': textPosition === 'left',
          'right': textPosition === 'right',
          'center': textPosition === 'center',
          'full': useFullFlag,
        }"
      >
        <slot name="intro"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: "ScrollingMap",
  props: {
    mapId: {
      type: String,
      required: true,
    },
    imgSrcMob: {
      type: String,
      required: true,
    },
    imgSrcWeb: {
      type: String,
      required: true,
    },
    introBackgroundColor: {
      type: String,
      default: '#ffffff',
    },
    textPosition: {
      type: String,
      default: 'left',
    },
    useFadeFlag: {
      type: Boolean,
      default: false,
    },
    useFullFlag: {
      type: Boolean,
      default: false,
    },
    noText: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fixedFlag: false,
      fadeFlag: false,
      textFadeFlag: false,
    };
  },
  computed: {
    certifyDevice() {
      if (window.innerWidth > 768) {
        return this.imgSrcWeb;
      } else {
        return this.imgSrcMob;
      }
    },
    certifyMapFixed() {
      if (this.useFadeFlag) {
        return true;
      } else {
        if (this.fixedFlag) {
          return true;
        } else return false;
      }
    },
    certifyMapOpacity() {
      if (this.useFadeFlag) {
        if (this.fadeFlag) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return 1
      }
    }
  },
  methods: {
    handleScroll() {
      if (this.useFadeFlag) {
        // 處理fade-in, fade-out
        if (
          // 如果圖片不在最上面，且視窗滑到圖片的範圍裡
          window.pageYOffset > document.getElementById(this.mapId).offsetTop - (document.getElementById(this.mapId).offsetHeight * 0.4) &&
          window.pageYOffset <=
            document.getElementById(this.mapId).offsetTop +
              document.getElementById(this.mapId).offsetHeight
        ) {
          this.fadeFlag = true;
          // 滑到圖片30%開啟淡入效果
          if (window.pageYOffset > document.getElementById(this.mapId).offsetTop - (document.getElementById(this.mapId).offsetHeight * 0.2)) {
            this.textFadeFlag = true;
          }
        } else {
          this.fadeFlag = false;
          this.textFadeFlag = false;
        }
      } else {
        if (
          // 如果圖片不在最上面，且視窗滑到圖片的範圍裡
          window.pageYOffset > document.getElementById(this.mapId).offsetTop &&
          window.pageYOffset <=
            document.getElementById(this.mapId).offsetTop +
              document.getElementById(this.mapId).offsetHeight
        ) {
          this.fixedFlag = true;
        } else {
          this.fixedFlag = false;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
};
</script>

<style lang="scss" scoped>
  .map-image-wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    transition: opacity 0.333s ease-in-out;

    .map-title-wrapper {
      position: absolute;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
      top: 10%;
      left: 10%;
      writing-mode: vertical-rl;
      text-orientation: upright;
      .major {
        font-size: 36px;
        letter-spacing: 5px;
        color: #2b2b2b;
        font-weight: 700;
      }
      .minor {
        font-size: 22px;
        letter-spacing: 10px;
        color: #3e3e3e;
        margin: 5px;
      }

      @media screen and (min-width: 1024px) {
        top: 20%;
        left: 40%;
        .minor {
          margin: 10px;
        }
      }
    }
  }

  .map-fixed {
    position: fixed;
    top: 0;
  }
  .fixed-fade-in {
    opacity: 1;
  }
  .fixed-fade-out {
    opacity: 0;
  }

  .intro-text-container {
    position: relative;
    z-index: 20;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 30% 15px 64px 15px;
    margin: 100vh auto;
    margin-bottom: 0;
    transition: opacity 2s ease-in-out;
    transition-delay: .111s;
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 30% 100px 64px 100px;
    }
    @media screen and (min-width: 1024px) {
      padding: 30% 0 84px 0;
    }

    .intro-text-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 17px;
      text-align: justify;
      @media screen and (min-width: 1024px) {
        width: 880px;
        margin: 0 auto;
        padding: 0;

      }
    }

    @media screen and (min-width: 1024px) {
      .left, .right, .center {
        div {

        }
      }
      .left {
        left: 20%;

      }
      .right {
        right: 20%;
      }
      .center {
        margin: 0 auto;
      }
    }
  }

  .share-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .share-btn {
      margin: 20px;
      opacity: 0.6;
      cursor: pointer;
      transition: .333s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }

</style>
