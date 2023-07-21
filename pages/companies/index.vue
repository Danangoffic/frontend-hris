<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
    <div class="w-full card">
      <div class="form-group">
        <label for="" class="text-grey">Companies</label>
        <select
          name="companies"
          id=""
          class="appearance-none input-field form-icon-chevron_down"
        >
          <option>Company 1</option>
        </select>
      </div>
      <button type="button" class="w-full btn btn-primary mt-[14px]">Continue</button>
      <div class="text-center">or</div>
      <NuxtLink to="" class="w-full border btn btn-white"> Create New Company </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  middleware: "auth",
  name: "Companies",
};
</script>
