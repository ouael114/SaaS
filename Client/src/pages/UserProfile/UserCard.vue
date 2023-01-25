<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>
    <md-card-content>
      <h6 id="role">{{ role }}</h6>
      <h4 >{{ fullname }}</h4>
      <p class="card-description">
        Don't be scared of the truth because we need to restart the human
        foundation in truth And I love you like Kanye loves Kanye I love Rick
        Owens’ bed design but the back is...
      </p>
      <md-button class="md-round md-success">Follow</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
import axios from 'axios'
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg"),
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.role = res.data.user.role;
        this.fullname = res.data.user.fullname;
      });
    console.log(res);
  },
  data() {
    return {
      role:"",
      fullname:""
    };
  },
};
</script>
<style></style>
