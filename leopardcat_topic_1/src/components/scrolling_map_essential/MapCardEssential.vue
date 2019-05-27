<template>
  <div
    :class="{
      'map-card-container': true,
      'fixed-fadeIn': fixedFlag,
      'fixed-fadeOut': !fixedFlag,
    }"
    :style="{
      backgroundColor: control.backgroundLayer,
    }"
  >
    <slot></slot>
    <div
      :class="{
        'text-wrapper': true,
        'text-left': textPosition === 'left',
        'text-right': textPosition === 'right',
        'text-center': textPosition === 'center',
      }"
    >
      <div class="text-title">
        <h1>石虎{{control.index}}</h1>
      </div>
      <div class="text-body">
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
        <p>石虎</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapCard',
  props: {
    control: {
      type: Object,
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
    startPosition() {
      return this.$el.parentNode.offsetTop + window.innerHeight * (this.control.index);
    },
    endPostion() {
      return this.$el.parentNode.offsetTop + window.innerHeight * (this.control.index + 1);
    },
  },
  methods: {
    handleScroll() {
      if (this.enterMapFlag()) {
        this.fixedFlag = true;
      } else {
        this.fixedFlag = false;
      }

      if (this.textScrollFlag) {
        this.textFlyEvent();
      }
    },
    enterMapFlag() {
      // 如果pageYOffset在卡片範圍內
      // 前後各留50vh緩衝
      if (
        window.pageYOffset > this.startPosition
        &&
        window.pageYOffset <= this.endPostion
      ) {
        return true;        
      } else {
        return false;
      }
    },
    textFlyEvent() {

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
  .map-card-container {
    border: solid 1px black;
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .text-wrapper {
      position: relative;
      border: solid 1px black;
      padding: 30px;
      background-color: lightblue;
    }
  }
  

  .fixed-fadeIn, .fixed-fadeOut {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;    
  }

  .fixed-fadeIn {
    opacity: 1;
    animation-name: fadeIn;
    animation-duration: .666s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .fixed-fadeOut {
    opacity: 0;
    animation-name: fadeOut;
    animation-duration: .333s;
    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  .text-left {

  }
  .text-right {
    
  }
  .text-center {
    
  }
</style>
