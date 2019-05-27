<template>
  <div class="comparistion-container" 
    @click="sendGA()"
  >
    <image-compare
      :before="certifyDevice ? beforeSrcWeb : beforeSrcMob"
      :after="certifyDevice ? afterSrcWeb : afterSrcMob"
    >
      <i style="font-size: 50px; padding-left: 50px;" class="fa fa-angle-left" aria-hidden="true" slot="icon-left"></i>
      <i style="font-size: 50px; padding-right: 50px;" class="fa fa-angle-right" aria-hidden="true" slot="icon-right"></i>
    </image-compare>
    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'ImageComparison',
  props: {
    beforeSrcMob: {
      type: String,
    },
    beforeSrcWeb: {
      type: String
    },
    afterSrcMob: {
      type: String,
    },
    afterSrcWeb: {
      type: String,
    },
  },
  computed: {
    certifyDevice() {
      if (window.innerWidth > 768) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    sendGA() {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "ImageComparison",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [比較圖 click]"
      })
    },
  }
};
</script>

<style lang="scss" scoped>
  .comparistion-container {
    position: relative;
    width: 100%;
    overflow: hidden;

    .description {
      position: relative;
      width: 100%;
      padding: 5px 15px;
      font-size: 15px;
      color: #808080;
      text-align: justify;
      @media screen and (min-width: 1024px) {
        width: 880px;
        padding: 5px 0;
        margin: 0 auto;
        font-size: 17px;
      }
    }
  }
</style>
