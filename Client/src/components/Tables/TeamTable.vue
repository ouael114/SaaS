<template>
  <body>
    <div class="container mt-4" id="app">
      <table class="table table-border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(companie, _id) in companiies" :key="_id">
          <th scope="row"></th>
          <td>{{ companie.fullname }}</td>
          <td>{{ companie.email }}</td>
          <td>{{ companie.role }}</td>
          <td>
            <button @click="deletemumber(companie._id)" class="btn btn-sm btn-outline-danger js-sweetalert">Delete</button>
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
  name:'team-table-vue',
  data(){
    return{
      companiies:[]
    }
  },
     mounted: function () {
    axios
      .get("http://localhost:3000/userbycompany", {
        headers: { companyname: localStorage.getItem("companyname") },
      })
      .then((response) => {
        this.companiies = response.data.usera;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    deletemumber(_id)
        {
         axios.delete("http://localhost:3000/mumber/"+_id)
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
