<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Create Companies</div>
    <form class="w-full card" @submit.prevent="createCompany">
      <div class="form-group">
        <label for="" class="text-grey">Name</label>
        <input
          type="text"
          v-model="company.name"
          required
          class="input-field"
          name="name"
        />
      </div>
      <button type="submit" class="w-full btn btn-primary mt-[14px]">Save</button>
    </form>
  </section>
</template>
<script>
export default {
  middleware: "auth",
  name: "CreateCompany",
  data() {
    return {
      company: {
        name: "",
      },
    };
  },
  methods: {
    async createCompany() {
      try {
        const response = await this.$axios.post("/api/company", this.company);
        const data = response.data.result;
        if (response.data.meta.code === 200) {
          this.$router.push({
            name: "companies-id",
            params: {
              id: data.id,
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
