<template>
  <div
    class="cover-container"
  >
    <div class="cover-title-wrapper">
      <h1>誰殺了石虎<span>之一</span></h1>
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
      <img src="img/share_fb.svg" @click="shareFB" alt="fb-icon">
      <img src="img/share_line.svg" @click="shareLine" alt="line-icon">
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
            'og:url': 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/',
            'og:title': '【誰殺了石虎之一】馬路變墳場 8年75隻石虎遭路殺',
            'og:description': '2008年石虎被官方提升到瀕臨絕種等級，但石虎路殺悲歌沒有停過。8年間全台有75筆石虎路殺紀錄，超過半數的石虎路殺都發生在苗栗縣境，苗29線、苗140縣道成為「石虎死亡公路」！其次為南投、台中與彰化。',
            'og:image': 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/fb_meta.jpg',
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
