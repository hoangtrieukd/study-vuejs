<template>
  <a-layout id="private-layout">
    <Sider v-bind:collapsed="collapsed" />

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Sider from "./components/Sider.vue";

export default {
  name: "PrivateLayout",
  components: {
    Sider
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="scss">
#private-layout {
  height: 100%;
}

#private-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#private-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
