<template>
  <div
    class="cover-container"
  >
    <div class="cover-title-wrapper">
      <h1>誰殺了石虎<span>之三</span></h1>
    </div>
    <div class="cover-image-wrapper">
      <img
        :src="certifyDevice ? coverImageWeb : coverImageMob"
        alt="誰殺了石虎"
      >
    </div>
    <div class="intro-wrapper">
      <div class="intro-title">
        <slot name="title"></slot>
      </div>
      <div class="intro-text">
        <slot name="text"></slot>
      </div>
    </div>
    <div class="share-wrapper">
      <img src="../assets/img/share_fb.svg" @click="shareFB" alt="fb-icon">
      <img src="../assets/img/share_line.svg" @click="shareLine" alt="line-icon">
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'Cover',
  props: {
    titleSvg: {
      type: String,
      required: true,
    },
    coverImageWeb: {
      type: String,
      required: true,
    },
    coverImageMob: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
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
    shareFB() {
      window.FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:url': 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/',
            'og:title': '【誰殺了石虎之三】開發案圍攻 「像插在石虎心臟的刀」',
            'og:description': '石虎熱點、苗栗縣銅鑼西湖溪側的森林區域在新竹科學園區銅鑼基地興建後，近年間減少數百頃，現還有裕隆三義二廠等多件爭議開發案正包圍苗栗縣石虎棲地，各項開發案正一步步鯨吞蠶食石虎生存空間。',
            'og:image': 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/fb_meta_.jpg',
          },
        })
      })

      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [特製fb icon] [fb share]`,
      });
    },
    shareLine() {
      if (Utils.detectMob()) {
        // 手機
        window.open(`https://line.me/R/msg/text/?"${document.querySelector('title').innerHTML}%0D%0A%0D%0A${document.querySelector('meta[property="og:description"]').content}%0D%0A%0D%0A${this.href}`);
      } else {
        window.open(`https://lineit.line.me/share/ui?url=${this.href}`);
      }

      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [特製line icon] [line share]`,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
  .cover-container {
    position: relative;
    z-index: 20;
    background-size: cover;
    min-height: 100vh;
    background-color: #f9f9f9;

    .cover-title-wrapper {
      width: 100%;
      text-align: center;
      margin: 0 auto;
      font-family: 'Roboto', sans-serif;
      font-family: 'Noto Serif TC', serif;
      h1 {
        font-size: 35px;
        font-weight: bold;
        vertical-align: text-top;
        @media screen and (min-width: 1024px) {
          font-size: 70px;
        }
      }
      span {
        vertical-align: super;
        padding-left: 10px;
        font-size: 14px;
        @media screen and (min-width: 1024px) {
          font-size: 25px;
        }
      }
    }
    
    .cover-image-wrapper {
      width: 100%;
      margin: 25px 0;
      img {
        width: 100%;
      }
    }
    .intro-wrapper {
      color: #333333;
      .intro-title {
        padding: 20px 0;
        h1 {
          font-weight: bold;
          line-height: 1.2;
        }
      }
      .intro-text {
        padding: 20px 0;
      }
    }
    .share-wrapper {
      padding: 20px 0;

      img {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
</style>
