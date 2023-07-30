<template>
  <section class="py-[70px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark">Finalizing Profile</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Complete the information to make it more <br />
      easier when introduce to team
    </p>
    <form class="w-full card">
      <div class="flex flex-col items-center mb-[14px]">
        <img src="/assets/images/user-f-1.png" width="70" alt="" />
        <div class="mt-6 mb-1 text-lg font-semibold">{{ name }}</div>
        <p class="text-base text-grey">{{ email }}</p>
      </div>
      <div class="form-group">
        <label for="" class="text-grey">Phone Number</label>
        <input type="number" @input="updatePhone" class="input-field" />
      </div>
      <nuxt-link
        :to="{ name: 'companies-id-employees-role' }"
        class="w-full btn btn-primary mt-[14px]"
      >
        Continue
      </nuxt-link>
    </form>
  </section>
</template>

<script>
export default {
  middleware: "auth",
  layout: "form",
  // data() {
  //   return {
  //     name: this.$store.employee.name,
  //     email: this.$store.employee.email,
  //   };
  // },

  computed: {
    // get name and email from store employee
    name() {
      return this.$store.state.employee.name;
    },
    email() {
      return this.$store.state.employee.email;
    },
    phone() {
      return this.$store.state.employee.phone;
    },
  },
  methods: {
    updatePhone(e) {
      this.$store.commit("employee/updatePhone", e.target.value);
    },
  },
};
</script>
