<template>
  <section class="py-[70px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark">Give a Role</div>
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
        <label for="" class="text-grey">Select Role</label>
        <select
          :value="role_id"
          @change="updateRoleId"
          name=""
          id=""
          class="appearance-none input-field form-icon-chevron_down"
        >
          <option value="" disabled selected>Select Role</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">
            {{ role.name }}
          </option>
        </select>
      </div>

      <!-- Responsibilities -->
      <EmployeeResponsibilities :responsibilities="responsibilities" />

      <nuxt-link
        :to="{ name: 'companies-id-employees-sign-to-team' }"
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
  computed: {
    name() {
      return this.$store.state.employee.name;
    },
    email() {
      return this.$store.state.employee.email;
    },
    role_id() {
      return this.$store.state.employee.role_id;
    },
  },
  data() {
    return {
      roles: [],
      responsibilities: [],
    };
  },
  async fetch() {
    const response = await this.$axios.get("/role", {
      params: { company_id: this.$route.params.id, limit: 100, with_responsibilities: 1 },
    });
    const { result } = response.data;
    this.roles = result.data;
  },
  methods: {
    getResponsibilities(v) {
      const findRole = this.roles.find((r) => r.id == v);
      this.responsibilities = findRole.responsibilities || [];
    },
    updateRoleId(e) {
      this.$store.commit("employee/updateRoleId", e.target.value);
      this.getResponsibilities(e.target.value);
    },
  },
};
</script>
