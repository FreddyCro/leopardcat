<template>
  <div class="full-image-container" :style="{ backgroundColor: backgroundColor }">
    <div class="full-image-wrapper" :style="{ backgroundColor: backgroundColor }">
      <img :src="certifyDevice" alt="">
      <div class="full-image-text">{{description}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FullImage',
  props: {
    imgSrcMob: {
      type: String,
      required: true,
    },
    imgSrcWeb: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    description: {
      type: String,      
    }
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
}
</script>

<style lang='scss' scoped>
  .full-image-wrapper {
    position: relative;
    width: 100%;
    z-index: 150;
    img {
      width: 100%;
    }

    .full-image-text, .image-text {
      position: relative;
      width: 100%;
      font-size: 15px;
      color: #808080;
      text-align: justify;
      @media screen and (min-width: 1024px) {
        width: 880px;
        margin: 0 auto;
        font-size: 17px;
      }
    }

    .full-image-text {
      padding: 5px 15px;
      @media screen and (min-width: 1024px) {
        padding: 5px 0;
      }
    }
    
    .image-text {
      padding: 5px 0;
      @media screen and (min-width: 1024px) {
        padding: 5px 0;
      }
    }
  }
</style>
