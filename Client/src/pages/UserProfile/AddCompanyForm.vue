<template>
  <div>
    <h2>Add Companie Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Admin Email</label>
        <input type="text" v-model="adminEmail" class="form-control" />
        <span v-if="!$v.adminEmail.required && $v.adminEmail.$dirty" class="text-danger">Admin Email is required!</span>
      </div>
        <div class="form-group">
        <label>Company Name</label>
        <input type="text" v-model="nom" class="form-control" />
        <span v-if="!$v.nom.required && $v.nom.$dirty" class="text-danger">Company Name is required!</span>
      </div>
              <div class="form-group">
        <label>Site Web</label>
        <input type="text" v-model="siteWeb" class="form-control" />
        <span v-if="!$v.siteWeb.required && $v.siteWeb.$dirty" class="text-danger">Web Site is required!</span>
      </div>
              <div class="form-group">
        <label>License</label>
        <input type="number" v-model="license" class="form-control" />
        <span v-if="!$v.license.required && $v.license.$dirty" class="text-danger">License is required!</span>
      </div>
      <div class="form-group">
        <label for>Package</label>
        <select v-model="pack" class="form-control">
          <option value="STARTER">STARTER</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LARGER">LARGER</option>
        </select>
        <span v-if="!$v.pack.required && $v.pack.$dirty" class="text-danger">Package is required!</span>
      </div>
  
       <br>
       <md-button type="submit" class="md-round md-success">Ajouter</md-button>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  email
} from "vuelidate/lib/validators";
import axios from 'axios'
export default {
  data(){
    return {
    adminEmail: "",
    nom:"",
    siteWeb: "",
    pack: "",
    license:""
 }},
  validations: {
    adminEmail: {
      required,
    },
    nom: {
      required,
    },
    siteWeb: {
      required,
    },
    pack:{
      required
    },
    license:{
      required
    }

  },
  methods: {
    submitForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
            axios.post('http://localhost:3000/companies/create', {
              adminEmail:this.adminEmail,
              nom:this.nom,
              siteWeb: this.siteWeb,
              pack: this.pack,
              license:this.license
            })
          .then(response=> console.log(response))
          .catch(error=> console.log(error))
          alert("Company Submitted")

      }


     
    }
  }
};
</script>

<style scoped>
</style>