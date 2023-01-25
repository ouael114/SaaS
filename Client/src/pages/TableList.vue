<template>
  <div class="content">
    <router-link to="/a/adduser">
      <md-button type="button" style="font-size : 10px; height:25px; width:125px" class="md-round md-success" id ="a">Ajouter Utilisateur</md-button>
    </router-link>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Users Table</h4>
          </md-card-header>
          <md-card-content>
            <user-table table-header-color="green"></user-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script >
import {  UserTable,} from "@/components";
export default {
  name: "TableList",
  components: {
    UserTable,
  },
};
</script>
<style scoped>
#a{
  left:1100px;
}
</style>
