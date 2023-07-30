<template>
  <section class="py-[70px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark">Empower Your Team</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Add your new people to grow the <br />
      company reaching their goals
    </p>
    <form class="w-full card">
      <div class="form-group">
        <label for="" class="text-grey">Complete Name</label>
        <input @input="updateName" type="text" :value="name" class="input-field" />
      </div>
      <div class="form-group">
        <label for="" class="text-grey">Email Address</label>
        <input @input="updateEmail" type="email" :value="email" class="input-field" />
      </div>
      <div class="form-group">
        <label for="" class="text-grey">Gender</label>
        <select
          @change="updateGender"
          name="gender"
          id="gender"
          :value="gender"
          class="appearance-none input-field form-icon-chevron_down"
        >
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label for="" class="text-grey">Age</label>
        <input @input="updateAge" type="number" :value="age" class="input-field" />
      </div>
      <nuxt-link
        :to="{ name: 'companies-id-employees-finalizing' }"
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
  //     name: "",
  //     email: "",
  //     gender: "",
  //     age: "",
  //   };
  // },
  computed: {
    // get name, email, gender, age from store employee
    name() {
      return this.$store.state.employee.name;
    },
    email() {
      return this.$store.state.employee.email;
    },
    gender() {
      return this.$store.state.employee.gender;
    },
    age() {
      return this.$store.state.employee.age;
    },
  },
  methods: {
    updateName(e) {
      this.$store.commit("employee/updateName", e.target.value);
    },
    updateEmail(e) {
      this.$store.commit("employee/updateEmail", e.target.value);
    },
    updateGender(e) {
      this.$store.commit("employee/updateGender", e.target.value);
    },
    updateAge(e) {
      this.$store.commit("employee/updateAge", e.target.value);
    },
  },
};
</script>
