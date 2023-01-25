<template>
  <form @submit.prevent="update(this.userr._id)">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Full Name</label>
              <md-input v-model="fullname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Company Name</label>
              <md-input v-model="companyname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email Adresse</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="update()" class="md-round md-success">Update</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios'
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      userr:[],

      fullname:"",
      companyname:"",
      email:"",
      password:"",
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
    };
  },
   mounted() {
    axios
      .get("http://localhost:3000/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((response) => {
        this.userr = response.data.user;
        console.log(this.userr._id);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
     update(){
        axios.put("http://localhost:3000/users/"+this.userr._id,{
          fullname:this.fullname,
          companyname:this.companyname,
          email:this.email,
          password:this.password
        })
        .then(response=> console.log(response))
        .catch(error=> console.log(error))
        alert("Profile Updated")
     }
     
  }
};
</script>
<style></style>
