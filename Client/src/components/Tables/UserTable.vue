<template>
  <body class="a">
    <div class="container mt-4" id="app">
      <table class="table table-border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" >Full name</th>
            <th scope="col">Company Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, _id) in users" :key="_id">
          <th scope="row"></th>
            <td>{{ user.fullname }}</td>
            <td>{{ user.companyname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="deleteuser(user._id)" class="btn btn-sm btn-outline-danger js-sweetalert">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    }
  },
  name: "user-table",
  mounted: function () {
    axios
      .get("http://localhost:3000/users/get")
      .then((response) => {
        this.users = response.data.userData;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    deleteuser(_id)
        {
         axios.delete("http://localhost:3000/"+_id)
         this.function()
         .then(response=> console.log(response))
          .catch(error=> console.log(error))
        },
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },

};
</script>
<style  scoped>

.mt-3{
  background: gris;
color: gris;
}
</style>
