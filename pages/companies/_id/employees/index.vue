<template>
  <div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
    <!-- Top Section -->
    <section
      class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row"
    >
      <div class="flex items-center justify-between gap-4">
        <a href="#" id="toggleOpenSidebar" class="lg:hidden">
          <svg
            class="w-6 h-6 text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            ></path>
          </svg>
        </a>
        <div class="text-[32px] font-semibold text-dark">Employees</div>
      </div>
      <div class="flex items-center gap-4">
        <form class="shrink md:w-[516px] w-full">
          <input
            type="text"
            name=""
            id=""
            class="input-field !outline-none !border-none italic form-icon-search ring-indigo-200 focus:ring-2 transition-all duration-300 w-full"
            placeholder="Search people, team, project"
          />
        </form>
        <a
          href="#"
          class="flex-none w-[46px] h-[46px] bg-white rounded-full p-[11px] relative notification-dot"
        >
          <img src="/assets/svgs/ic-bell.svg" alt="" />
        </a>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
          <div>
            <div class="text-xl font-medium text-dark">Statistics</div>
            <p class="text-grey">Your team powers</p>
          </div>
          <nuxt-link
            :to="{
              name: 'companies-id-employees-create',
              params: { id: this.$route.params.id },
            }"
            class="btn btn-primary"
            >Add Employee</nuxt-link
          >
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">In Total</p>
              <div
                class="text-[16px] font-bold text-dark mt-[6px]"
                v-if="loadingEmployee"
              >
                Loading..
              </div>
              <div class="text-[32px] font-bold text-dark mt-[6px]" v-else>
                {{ totalEmployees }}
              </div>
            </div>
          </div>
        </div>
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">Active</p>
              <div class="text-[32px] font-bold text-dark mt-[6px]">205,399</div>
            </div>
          </div>
        </div>
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">Inactive</p>
              <div class="text-[32px] font-bold text-dark mt-[6px]">142,593</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div class="flex items-center justify-between gap-6">
          <div>
            <div class="text-xl font-medium text-dark">People</div>
            <p class="text-grey">The rangers</p>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3"
      >
        <!-- Card -->
        <EmployeeCard
          v-for="(employee, index) in employees"
          :key="index"
          :employee="employee"
        />
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
      employees: [],
      totalEmployees: 0,
      loadingEmployee: true,
    };
  },
  async fetch() {
    try {
      const responseEmployees = await this.$axios.get("/api/employee", {
        params: {
          company_id: this.$route.params.id,
          limit: 1000,
        },
      });
      if (responseEmployees.data.meta.code === 200) {
        const employees = responseEmployees.data.result.data;
        // console.log({ employees });
        const responseTotalEmployees = responseEmployees.data.result.total;
        this.totalEmployees = responseTotalEmployees;
        this.employees = employees;
      } else {
        this.employees = [];
      }
      this.loadingEmployee = false;
    } catch (error) {
      console.error(error);
      this.employees = [];
    }
  },
};
</script>
