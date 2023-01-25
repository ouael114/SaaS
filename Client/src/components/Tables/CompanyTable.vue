<template>
  <body>
    <div class="container mt-4" id="app">
      <table class="table table-border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Companie Name</th>
            <th scope="col">Admin Email</th>
            <th scope="col">Web Site</th>
            <th scope="col">License</th>
            <th scope="col">Package</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(companie, _id) in companies" :key="_id">
          <th scope="row"></th>
          <td>{{ companie.nom }}</td>
          <td>{{ companie.adminEmail }}</td>
          <td>{{ companie.siteWeb }}</td>
          <td>{{ companie.license }}</td>
          <td>{{ companie.pack }}</td>
          <td>
            <button @click="deletecompany(companie._id)" class="btn btn-sm btn-outline-danger js-sweetalert">Delete</button>
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
  data(){
    return{
      companies:[]
    }
  },
  name: "company-table",
  mounted: function () {
    axios
      .get("http://localhost:3000/users/getcompanie")
      .then((response) => {
        this.companies = response.data.companyData;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
    methods:{
    deletecompany(_id)
        {
         axios.delete("http://localhost:3000/company/"+_id)
         this.companies.save()
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
