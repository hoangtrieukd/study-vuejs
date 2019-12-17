<template>
  <a-layout id="private-layout">
    <Sider v-bind:collapsed="collapsed" />

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0px">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />

        <a-popover placement="bottomRight">
          <template slot="content" style="cursor: pointer">
            <span class="user-setting" @click="logout">Logout</span>
          </template>
          <a-avatar class="avatar">USER</a-avatar>
        </a-popover>
      </a-layout-header>

      <a-layout-content class="layout-content">
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
  },
  methods: {
    logout() {
      localStorage.setItem("access-token", "");
      this.$router.push("login");
    }
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
  transition: color 0.3s;
  cursor: pointer;
}

#private-layout .avatar {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.layout-header {
  background: white;
}

.layout-content {
  margin: 24px 16px;
  padding: 24px;
  background: white;
  min-height: 280px;
}

.user-setting {
  cursor: pointer;
}
</style>
