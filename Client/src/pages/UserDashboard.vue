<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/user/userp">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/user/tableu">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link>
       <sidebar-link to="/user/AddTeam">
        <md-icon class="material-icons">add_task</md-icon>
        <p>Team Management</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">

      <topnavbar-user> </topnavbar-user>
<dashboard-content> </dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopnavbarUser from "@/pages/user/TopnavbarUser.vue";
import ContentFooter from "@/pages/Layout/ContentFooter.vue";
import DashboardContent from "@/pages/Layout/Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopnavbarUser,
    ContentFooter,
    MobileMenu,
    DashboardContent
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
