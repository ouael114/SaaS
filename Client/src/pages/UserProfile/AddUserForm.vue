<template>
  <div>
    <h2>Add User Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" v-model="name" class="form-control" />
        <span v-if="!$v.name.required && $v.name.$dirty" class="text-danger">Full Name is required!</span>
      </div>

        <div class="form-group">
        <label>Company Name</label>
        <input type="text" v-model="companyname" class="form-control" />
        <span v-if="!$v.companyname.required && $v.companyname.$dirty" class="text-danger">Company Name is required!</span>
       
      </div>

      <div class="form-group">
        <label >Email</label>
        <input type="email" v-model="email" class="form-control" />
       <span v-if="!$v.email.required && $v.email.$dirty" class="text-danger">Email  is required!</span>
      </div>

      <div class="form-group">
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
      </div>
      <div class="form-group">
        <label for>Role</label>
        <select v-model="role" class="form-control">
          <option value="SUPER_ADMIN">SUPER_ADMIN</option>
          <option value="ADMIN">ADMIN</option>
          <option value="MEMBER">MEMBER</option>
        </select>
        <span v-if="!$v.role.required && $v.role.$dirty" class="text-danger">Role is required!</span>
      </div>
  
       <br>
       <button type="submit" class="btn btn-success">Ajouter</button>
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
    name: "",
    companyname:"",
    email: "",
    password: "",
    role:""
 }},
  validations: {
    name: {
      required,
      alpha
    },
    email: {
      required,
      
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6)
    },
    companyname:{
      required
    },
    role:{
      required
    }

  },
  methods: {
    submitForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
            axios.post('http://localhost:3000/users/signup/', {
              fullname:this.name,
              companyname:this.companyname,
              email: this.email,
              password: this.password,
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