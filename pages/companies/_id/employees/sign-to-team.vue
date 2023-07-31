<template>
  <section class="py-[70px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark">Add to Team</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Add your new people to grow the <br />
      company reaching their goals
    </p>
    <div class="w-full card !max-w-[560px] sm:!flex-row items-center justify-between">
      <div class="flex flex-row items-center gap-4">
        <img src="/assets/images/user-f-1.png" width="70" alt="" />
        <div>
          <div class="text-lg font-semibold">{{ name }}</div>
          <p class="text-base text-grey">{{ email }}</p>
        </div>
      </div>
      <p class="text-right text-grey">{{ role_name }}</p>
    </div>

    <!-- Your Teams -->
    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div class="flex items-center justify-between gap-6">
          <div>
            <div class="text-xl font-medium text-dark">Your Teams</div>
            <p class="text-grey">Improve your growth</p>
          </div>
        </div>
      </div>
      <p v-if="$fetchState.pending">Fetching Teams...</p>
      <form v-else @submit.prevent="submitEmployee">
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3 mb-[50px]"
        >
          <div
            v-for="team in teams"
            :key="team.id"
            class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
          >
            <input
              :value="team.id"
              type="radio"
              name="team"
              :id="`team-${team.id}`"
              @click="setTeamId"
              class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none"
            />
            <img src="/assets/svgs/ric-box.svg" alt="" />
            <div class="mt-6 mb-1 font-semibold text-center text-dark">
              {{ team.name }}
            </div>
            <p class="text-center text-grey">{{ team.employees_count }} People</p>
          </div>
        </div>
        <div class="flex justify-center">
          <button type="submit" id="continueBtn" class="btn btn-primary">Save</button>
        </div>
      </form>
    </section>
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
  },
  data() {
    return {
      role_name: "",
      continueBtnClass: "hidden",
      teams: [],
    };
  },
  async fetch() {
    let role = this.$store.state.employee.role_id;
    const response = await this.$axios.$get(`/api/role`, {
      params: { id: role, company_id: this.$route.params.id },
    });
    this.role_name = response.result.name;
    await this.fetchTeams();
  },
  methods: {
    continueBtnClick() {
      this.continueBtn = "";
    },
    async fetchTeams() {
      const response = await this.$axios.get("/api/team", {
        params: {
          company_id: this.$route.params.id,
          limit: 1000,
        },
      });
      this.teams = response.data.result.data;
    },
    setTeamId(e) {
      this.$store.commit("employee/updateTeamId", e.target.value);
    },
    async submitEmployee() {
      const responsePost = await this.$axios.post("/api/employee", {
        company_id: this.$route.params.id,
        role_id: this.$store.state.employee.role_id,
        team_id: this.$store.state.employee.team_id,
        name: this.$store.state.employee.name,
        email: this.$store.state.employee.email,
        gender: this.$store.state.employee.gender,
        age: this.$store.state.employee.age,
        phone: this.$store.state.employee.phone,
      });
      this.$router.push({ name: "companies-id-employees" });
    },
  },
};
</script>
