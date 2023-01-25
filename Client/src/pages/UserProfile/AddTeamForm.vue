<template>
  <div>
    <h2>Add Team Member</h2>
    <form @submit.prevent="submitForm">
      <b-form-group>
        <label>Full Name</label>
        <input type="text" v-model="name" class="form-control" />
        <span v-if="!$v.name.required && $v.name.$dirty" class="text-danger">Full Name is required!</span>
      </b-form-group>
      <b-form-group>
        <label >Email</label>
        <input type="email" v-model="email" class="form-control" />
        <span
          v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
          class="text-danger"
        >Valid Email is required!</span>
      </b-form-group>

      <b-form-group>
        <label>Password</label>
        <input type="password" v-model="password" class="form-control" />
        <span
          v-if="!$v.password.required && $v.password.$dirty" 
          class="text-danger"
        >Password is required!</span>
        <span
          v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty"
          class="text-danger"
        >Password must be between {{ $v.password.$params.minLength.min}} and {{ $v.password.$params.maxLength.max}} characters!</span>
      </b-form-group>
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
   mounted() {
    axios
      .get("http://localhost:3000/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.adminEmail = res.data.user.email;
        this.companyname = res.data.user.companyname;
      });
    console.log(res);
  },
  data(){
    return {
    adminEmail:"",
    name: "",
    companyname:"",
    email: "",
    password: "",
    role:"MEMBER"
 }},
  validations: {
    name: {
      required,
      
    },
    email: {
      required,
      email
      
    },
    password: {
      required,
      
    },
    companyname:{
      required
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
          axios.put('http://localhost:3000/companies/add-member', {
           adminemail:this.adminEmail,
           fullname:this.name,
           email:this.email,
           password:this.password,
           companyname:this.companyname,
           role:this.role
            })
          .then(response=> console.log(response))
          .catch(error=> console.log(error))
      }
alert("User Submited")
     
    }
  }
};
</script>

<style scoped>
</style>