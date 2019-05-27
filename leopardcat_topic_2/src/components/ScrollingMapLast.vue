<template>
  <div
    :id="mapId"
    class="map-container"
  >
    <div
      :class="{
        'map-image-wrapper': true,
        'fixed-fade-in': fadeFlag,
      }"
      :style="{ 
        backgroundImage: 'url(' + certifyDevice + ')',
      }"
    >
      <slot name="title"></slot>
    <div
      v-if="showTitleFlag"
      :class="{
        'intro-text-container': true,
        'title-fade-in': showTitleFlag,
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
        :style="{
          backgroundColor: introBackgroundColor,
        }"
      >
        <div :class="{
          'title-scale': showTitleFlag
          }"
        >
          <slot name="intro"></slot>
        </div>
      </div>
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
  },
  data() {
    return {
      fadeFlag: false,
      showTitleFlag: false,      
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
  },
  methods: {
    handleScroll() {
      if (this.useFadeFlag) {
        // 處理fade-in, fade-out
        if (
          // 如果圖片不在最上面，且視窗滑到圖片的範圍裡
          window.pageYOffset > document.getElementById(this.mapId).offsetTop &&
          window.pageYOffset <=
            document.getElementById(this.mapId).offsetTop +
              document.getElementById(this.mapId).offsetHeight
        ) {
          this.fadeFlag = true;

        } else {
          this.fadeFlag = false;
        }
      } else {
        if (
          // 滑到圖片50%顯示文字
          window.pageYOffset > document.getElementById(this.mapId).offsetTop - document.getElementById(this.mapId).offsetHeight * 0.3 &&
          window.pageYOffset <=
            document.getElementById(this.mapId).offsetTop +
              document.getElementById(this.mapId).offsetHeight
        ) {
          this.showTitleFlag = true;
        } else {
          this.showTitleFlag = false;
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
    transition: opacity 0.5s ease-in-out;

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
    min-height: 100vh;
    // height: 100vh;
    opacity: 0.8;

    .intro-text-wrapper {
      position: relative;
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5%;
      margin: 0 auto;
      font-size: 17px;
      text-align: left;
      @media screen and (min-width: 1024px) {
        padding: calc(50vw - 440px);
        margin: 0;
      }

      h3 {
        font-weight: bold;
      }

      .title-scale {
        animation-name: scale;
        animation-duration: .333s;
        transform-origin: 50% 50%;
        @keyframes scale {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }

    @media screen and (min-width: 1024px) {
      .center {
        margin: 0 auto;
      }
    }

    .full {
      width: 100%;
      height: 100vh;
    }
  }

  .title-fade-in {
    opacity: 0.7;
    animation-name: fadeIn;
    animation-duration: .666s;
    transform-origin: 50% 50%;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.7;
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
