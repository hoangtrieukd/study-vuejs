<template>
  <a-layout-sider class="sider" :trigger="null" collapsible v-model="collapsed">
    <div class="logo" />

    <a-menu class="menu-content" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item class="menu-item" key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>

      <a-menu-item class="menu-item" key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>

      <a-menu-item class="menu-item" key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "Sider",
  props: {
    collapsed: Boolean
  }
};
</script>

<style lang="scss">
.logo {
  height: 32px;
  background: red;
  margin: 16px;
}

#private-layout .sider {
  background: $prDrk;
}

#private-layout .menu-content {
  padding: 0 10px;
  background: $prDrk;
  color: $prLgt;
  border-right: 0px;
}

#private-layout .menu-item {
  border-radius: 5px;
}
</style>
