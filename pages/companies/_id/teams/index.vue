<template>
  <div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
    <!-- Top Section -->
    <SearchNavbar :page_name="`My Teams`" />

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
          <div>
            <div class="text-xl font-medium text-dark">Available</div>
            <p class="text-grey">Empower company</p>
          </div>
          <nuxt-link :to="{ name: 'companies-id-teams-create' }" class="btn btn-primary"
            >Build New Team</nuxt-link
          >
        </div>
      </div>
      <p v-if="$fetchState.pending">Fetching Teams...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div
        v-else
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3"
      >
        <TeamsCard v-for="team in teams" :key="team.id" :team="team" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dashboard",
  data() {
    return {
      teams: [],
    };
  },
  async fetch() {
    const response = await this.$axios.get("/team", {
      params: { company_id: this.$route.params.id, limit: 1000 },
    });
    const { result } = response.data;
    this.teams = result.data;
    // console.log(this.teams);
  },
};
</script>
