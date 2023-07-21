<template>
  <section class="py-[50px] flex flex-col items-center justify-center px-4">
    <img src="/assets/svgs/logo-type.svg" alt="" />
    <div class="text-[32px] font-semibold text-dark mt-[70px]">Sign Up</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Manage your employees to achieve <br />
      a bigger goals for your company
    </p>
    <form class="w-full card" @submit.prevent="userRegister">
      <div class="form-group">
        <label for="name" class="text-grey">Name</label>
        <input id="name" type="text" v-model="registerForm.name" class="input-field" />
      </div>
      <div class="form-group">
        <label for="email" class="text-grey">Email Address</label>
        <input id="email" type="email" v-model="registerForm.email" class="input-field" />
      </div>
      <div class="form-group">
        <label for="password" class="text-grey">Password</label>
        <input
          id="password"
          type="password"
          v-model="registerForm.password"
          class="input-field"
        />
      </div>
      <!-- <a href="signin.html" class="w-full btn btn-primary mt-[14px]"> Continue </a> -->
      <button type="submit" class="w-full btn btn-primary mt-[14px]">Continue</button>
      <div class="text-center">or</div>
      <NuxtLink to="/login" class="w-full border border-gray-400 btn btn-white">
        Login
      </NuxtLink>
    </form>
  </section>
</template>
<script>
export default {
  auth: 'guest',
  name: "RegisterPage",
  head() {
    return {
      title: "PowerHuman HRIS - Register",
    };
  },
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userRegister() {
      try {
        const responseRegister = await this.$axios.post("/register", this.registerForm);
        const meta = responseRegister.data.meta;
        console.log({ code: meta.code, message: meta.message });
        if (meta.code === 200) {
          try {
            let responselogin = await this.$auth.loginWith("local", {
              data: this.registerForm,
            });
            console.log(responselogin);
          } catch (err) {
            console.log(err);
          }
        } else {
          console.error(responseRegister);
        }
      } catch (error) {
        console.error(error);
        console.error(error.message);
      }
    },
  },
};
</script>
