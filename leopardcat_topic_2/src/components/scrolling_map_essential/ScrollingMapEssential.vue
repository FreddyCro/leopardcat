<template>
  <div class="scrolling-map-container">
    <div
      class="map-card-sup"
      :style="{ height: supHeight + 'px'}"
    ></div>
    <MapCard
      v-for="(item, index) in script"
      :key="index"
      :control="script[index]"
      :textScrollFlag=textScrollFlag
      :textPosition=textPosition
    >
    </MapCard>
  </div>
</template>

<script>
import MapCard from './MapCard.vue';
import Utils from 'udn-newmedia-utils';

export default {
  name: 'ScrollingMap',
  components: {
    MapCard,
  },
  props: {
    script: {
      type: Array,
      required: true,
    },
    textScrollFlag: {
      type: Boolean,
      default: false,
    },
    textPosition: {
      type: String,
      default: 'left',
    },
  },
  data() {
    return {
      fixedFlag: false,
    };
  },
  computed: {
    supHeight() {
      // 留100vh緩衝
      return window.innerHeight * (this.script.length + 1);
    },
  },
  methods: {
    enterMapFlag() {
      if (window.pageYOffset > this.$el.offsetTop && window.pageYOffset <= this.$el.offsetTop + this.supHeight) {
        return true;
      } else {
        return false;
      }
    },
    handleScroll() {
      // if (this.enterMapFlag()) {
      //   this.fixedFlag = true;
      // } else {
      //   this.fixedFlag = false;
      // }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
  .scrolling-map-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: lightgreen;
    
    .map-card-sup {
      position: relative;
      width: 100%;
    }
  }

  .fixed {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
  }
</style>
