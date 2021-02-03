<template>
  <div class="dropdown">
    <div class="dropdown__btn" @click="isOpen = !isOpen">
      <span :class="['icon', 'caret', 'dropdown__caret', {'open': isOpen}]"></span>
      <div class="dropdown__text">
        <slot name="dropdown__text">{{ text }}</slot>
      </div>
      <slot name="dropdown__icon"></slot>
    </div>

    <div class="dropdown__items" v-if="isOpen" v-click-outside="onClickOutside">
      <div class="dropdown__item" v-for="item in items" :key="item.value">
        <div @click.prevent="selectItem(item)" class="dropdown__text" v-html="item.label"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    /**
     * items: [
     *  item: {
     *    label: '',
     *    value: '',
     *  }
     * ]
     */
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultText: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      isOpen: false,
      text: '',
    };
  },
  methods: {
    selectItem(item) {
      this.text = item.label;
      this.$emit('selected', item);
      this.isOpen = false;
    },
    onClickOutside() {
      this.isOpen = false;
    },
  },
  mounted() {
    if(this.defaultText.length > 0) {
      this.text = this.defaultText;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/components/dropdown.scss";
</style>