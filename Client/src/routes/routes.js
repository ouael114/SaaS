import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import HomeP from "@/pages/HomeP.vue";
import LoGin from "@/pages/LoGin.vue";
import ReGister from "@/pages/ReGister.vue";
import AddUser from "@/pages/AddUser.vue";
import UserDashboard from "@/pages/UserDashboard.vue";
import UserProfileU from "@/pages/user/UserProfileU.vue";
import TableListU from "@/pages/user/TableListU.vue";
import AddTeam from "@/pages/user/AddTeam.vue";
import CompanyList from "@/pages/CompanyList.vue";
import Addcompany from "@/pages/Addcompany.vue";


function auth (to, from, next){
  if (localStorage.role === 'SUPER_ADMIN'){
    next();
  }else next ({name: 'LoGin'})
}

const routes = [
  {
    path: "/a",
    component: DashboardLayout,
    beforeEnter: auth,
    redirect: (to) => {
      return "/a/dashboard";
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "adduser",
        name: "Users Management",
        component: AddUser,
      },
      {
        path: "addcompany",
        name: "Add Company",
        component: Addcompany,
      },
      {
        path: "companylist",
        name: "CompanyList",
        component: CompanyList,
      },
    ],
  },
  {
    path: "/",
    name: "HomeP",
  
    component: HomeP,
  },
  {
    path: "/login",

    name: "LoGin",
    component: LoGin,
  },
  {
    path: "/register",
    name: "ReGister",
    component: ReGister,
  },
  {
    path: "/user",
    name: "user",
    component: UserDashboard,
    redirect: (to) => {
      return "/user/userp";
    },
    children: [
      {
        path: "userp",
        name: "User ProfileU",
        component: UserProfileU,
      },
      {
        path: "tableu",
        name: "Table useru",
        component: TableListU,
      },
      {
        path: "AddTeam",
        name: "AddTeam",
        component: AddTeam,
      },
      
    ]
  },
];

export default routes;
