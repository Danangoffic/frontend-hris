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
        <input v-model="email" type="email" class="input-field" />
      </div>
      <div class="form-group">
        <label for="" class="text-grey">Password</label>
        <input v-model="password" type="password" class="input-field" />
      </div>
      <!-- <a href="index.html" class="w-full btn btn-primary mt-[14px]"> Sign In </a> -->
      <button type="submit" class="w-full btn btn-primary mt-[14px]">Sign In</button>
      <a href="/register" class="w-full mx-auto mt-8 text-blue-800"
        >Click here to register</a
      >
    </form>
  </section>
</template>
<script>
export default {
  name: "LoginPage",
  head() {
    return {
      title: "PowerHuman HRIS - Login",
    };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // login function with email and password here authenticated with nuxt auth sanctum
    async login() {
      const response = await this.$auth.loginWith("laravelSanctum", {
        data: {
          email: "",
          password: "",
        },
      });
      console.log(response);
      if (response.ok) {
        this.$router.push({ name: "IndexPage" });
      }
    },
  },
};
</script>
