<template>
  <div class="suggestion-container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="list">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suggestion',
};
</script>

<style lang="scss" scoped>
  .suggestion-container {
    position: relative;
    background-color: #eeeeee;
    padding: 30px 10px;
    @media screen and (min-width: 1024px) {
      font-size: 21px;
    }
  }

  .title {
    font-weight: bold;
    padding-left: 20px;
  }

  .list {
    padding-top: 20px;
  }
</style>

