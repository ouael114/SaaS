<template>
    <div class="content">
      <router-link to="/a/addcompany">
        <md-button type="button" style="font-size : 10px; height:25px; width:125px" class="md-round md-success" id ="a">Ajouter Company</md-button>
    </router-link>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Companies Table</h4>
          </md-card-header>
          <md-card-content>
            <company-table table-header-color="green"></company-table>
          </md-card-content>
        </md-card>
      </div>
      </div>
      </div>
</template>

<script>
import { CompanyTable } from "@/components";
export default {
name: "CompanyList",
  components: {
    CompanyTable,
  },
}
</script>

<style>
#a{
  left:1100px
}
</style>