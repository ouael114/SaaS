<template>
  <div class="content">
    <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-size-66">
        <add-company-form data-background-color="green"> </add-company-form>
      </div>
    </div>
  </div>
</template>

<script>
import AddCompanyForm from './UserProfile/AddCompanyForm.vue';
export default {
name:"Users Management",
  components: {
    AddCompanyForm,
  },
}
</script>

<style>

</style>