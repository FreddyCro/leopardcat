<template>
  <div
    :id="mapId"
    class="map-container"
  >
    <div
      v-if="certifyMapFixed"
      class="map-image-wrapper sup"
    ></div>
    <div
      :class="{
        'map-image-wrapper': true,
        'map-fixed': certifyMapFixed,
        'fixed-fade-in': fadeFlag,
        'fixed-fade-out': !fadeFlag,
      }"
      :style="{ 
        opacity: certifyMapOpacity,
        backgroundColor: introBackgroundColor,
      }"
    >
      <div class="overlap-image-wrapper">
        <div :class="{
          'bottom-image': true,
          'image-transformation': imageTransformationFlag,
          }"
        >
          <img :src="certifyDevice ? imgSrcWeb : imgSrcMob" alt="誰殺了石虎">
        </div>
      </div>
      <slot name="title"></slot>
    </div>
    <div
      v-if="!noText"
      class="intro-text-container"
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
        <slot name="intro"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: "ScrollingMapTw",
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
      imageFadinFlag: false,
      imageTransformationFlag: false,
    };
  },
  computed: {
    certifyDevice() {
      if (window.innerWidth > 768) {
        return true;
      } else {
        return false;
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
          window.pageYOffset > document.getElementById(this.mapId).offsetTop &&
          window.pageYOffset <=
            document.getElementById(this.mapId).offsetTop +
            document.getElementById(this.mapId).offsetHeight
        ) {          
          this.fadeFlag = true;
          // 滑到圖片70%圖片移動變大
          if (window.pageYOffset > document.getElementById(this.mapId).offsetTop + document.getElementById(this.mapId).offsetHeight * 0.3) {
            this.imageTransformationFlag = true;
          }
        } else {
          this.fadeFlag = false;
          this.imageFadinFlag = false;

          // 讓圖片晚一點回復原始大小位置
          if (
            window.pageYOffset > 
              document.getElementById(this.mapId).offsetTop +
              document.getElementById(this.mapId).offsetHeight * 1.5
            ||
            window.pageYOffset <=
              document.getElementById(this.mapId).offsetTop -
              document.getElementById(this.mapId).offsetHeight * 1) {
            this.imageTransformationFlag = false;
          }
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

    .overlap-image-wrapper {
      position: relative;
      width: 100%;
      
      .bottom-image, .top-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5% 10%;
        transform: translate(5%, 0);

        // 電腦
        @media screen and (min-width: 1025px) {
          justify-content: flex-end;
          transform: translate(0, 0);
        }

        // 平板
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          transform: translate(15%, 0);
        }

        img {
          height: 90%;
        }
      }

      .top-image {
        opacity: 0;
      }

      .image-fade-in {
        opacity: 1;
        animation-name: fadeIn;
        animation-duration: .666s;
        transform-origin: 50% 50%;
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      }

      .image-transformation {
        transform: translate(20%, 15%) scale(1.8);
        animation-name: transformation;
        animation-duration: 1s;
        transform-origin: 50% 50%;
        @keyframes transformation {
          0% {
            transform: translate(5%, 0) scale(1);
          }
          100% {
            opacity: 1;
            transform: translate(20%, 15%) scale(1.8);
          }
        }

        // 電腦
        @media screen and (min-width: 1025px) {
          transform: translate(-50%, 50%) scale(3);
          animation-name: transformationWeb;
          justify-content: flex-end;
        }
        @keyframes transformationWeb {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 50%) scale(3);
          }
        }

        // 平板
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          transform: translate(10%, 25%) scale(2.5);
          animation-name: transformationPad;
          justify-content: flex-end;
        }
        @keyframes transformationPad {
          0% {
            transform: translate(15%, 0);
          }
          100% {
            opacity: 1;
            transform: translate(10%, 25%) scale(2.5);
          }
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

    .intro-text-wrapper {
      position: relative;
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7%;
      margin: 0 auto;
      font-size: 17px;
      text-align: justify;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
      @media screen and (min-width: 1024px) {
        width: 40%;
        padding: 5%;
        margin: 0;
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

    .full {
      width: 100%;
      height: 100vh;
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
