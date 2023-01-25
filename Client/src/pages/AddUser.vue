<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <add-user-form data-background-color="green"> </add-user-form>
      </div>
    </div>
  </div>
</template>

<script>

import AddUserForm from './UserProfile/AddUserForm.vue';



export default {
  name:"Users Management",
  components: {
    AddUserForm,
  },
};
</script>
