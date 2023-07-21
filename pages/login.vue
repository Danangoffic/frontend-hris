<template>
  <section class="py-[50px] flex flex-col items-center justify-center px-4">
    <img src="/assets/svgs/logo-type.svg" alt="" />
    <div class="text-[32px] font-semibold text-dark mt-[70px]">Sign In</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Manage your employees to achieve <br />
      a bigger goals for your company
    </p>
    <form class="w-full card" @submit.prevent="login">
      <div class="form-group">
        <label for="" class="text-grey">Email Address</label>
        <input v-model="loginForm.email" type="email" class="input-field" />
      </div>
      <div class="form-group">
        <label for="" class="text-grey">Password</label>
        <input v-model="loginForm.password" type="password" class="input-field" />
      </div>
      <!-- <a href="index.html" class="w-full btn btn-primary mt-[14px]"> Sign In </a> -->
      <button type="submit" class="w-full btn btn-primary mt-[14px]">Sign In</button>
      <div class="text-center">or</div>
      <NuxtLink to="/register" class="w-full border border-gray-400 btn btn-white">
        Register
      </NuxtLink>
    </form>
  </section>
</template>
<script>
export default {
  auth: "guest",
  name: "LoginPage",
  head() {
    return {
      title: "PowerHuman HRIS - Login",
    };
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // login function with email and password here authenticated with nuxt auth sanctum
    async login() {
      try {
        let response = await this.$auth.loginWith("local", { data: this.loginForm });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
