<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
    <div class="w-full card">
      <div class="form-group">
        <label for="" class="text-grey">Companies</label>
        <p v-if="$fetchState.pending">Fetching companies...</p>
        <select
          v-else
          v-model="selectedCompany"
          name="companies"
          id=""
          class="appearance-none input-field form-icon-chevron_down"
        >
          <option v-for="company in companies" :key="company.id" :value="company.id">
            {{ company.name }}
          </option>
        </select>
      </div>
      <button
        type="button"
        @click="selectCompany"
        class="w-full btn btn-primary mt-[14px]"
      >
        Continue
      </button>
      <div class="text-center">or</div>
      <NuxtLink to="/companies/create" class="w-full border btn btn-white">
        Create New Company
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  middleware: "auth",
  async fetch() {
    try {
      const response = await this.$axios.get("/api/company");
      if (response.data.meta.code === 200) {
        const companiesData = response.data.result.data;
        this.companies = companiesData;
      } else {
        this.companies = null;
      }
    } catch (error) {
      console.error(error);
      this.companies = null;
    }
  },
  data() {
    return {
      companies: [],
      selectedCompany: "",
    };
  },
  methods: {
    selectCompany() {
      this.$router.push({
        name: "companies-id",
        params: {
          id: this.selectedCompany,
        },
      });
    },
  },
};
</script>
