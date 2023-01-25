<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Team Table</h4>
          </md-card-header>
          <md-card-content>
            <team-table-vue table-header-color="green"></team-table-vue>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script >



import TeamTableVue from '../../components/Tables/TeamTable.vue';
export default {
  name: "Table useru",
  components: {
        TeamTableVue
  },
};
</script>
<style scoped>

</style>
