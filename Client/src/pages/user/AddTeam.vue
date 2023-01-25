<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <add-team-form data-background-color="green"> </add-team-form>
      </div>

    </div>
  </div>
</template>

<script>

import AddTeamForm from '@/pages/UserProfile/AddTeamForm.vue';



export default {
  name:"AddTeam",
  components: {
    AddTeamForm,
    

  },
};
</script>
