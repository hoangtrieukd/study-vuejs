<template>
  <div class="login-page">
    <a-form
      id="components-form-demo-normal-login"
      class="login-form"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            }
          ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            }
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true
            }
          ]"
          class="remember-button"
        >
          Remember me
        </a-checkbox>

        <a class="login-form-forgot">
          Forgot password
        </a>

        <a-button type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>

        <a class="register-link">
          Or register now!
        </a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          localStorage.setItem("access-token", "access-token");
          this.$router.push({ name: "home" });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $sd;

  .login-form {
    padding: 20px;
    background-color: white;
  }
}

.remember-button {
  float: left;
}

.register-link {
  float: left;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
