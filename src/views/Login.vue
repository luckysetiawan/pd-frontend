<template>
  <div class="bgLogin">
    <div class="container">
      <br />
      <div class="box1">
        <div class="is-column6" style="padding: 2rem">
          <h1 class="title" style="text-align: center">Login</h1>
          <b-field label="Email">
            <b-input
              v-model="person.email"
              placeholder="Insert Email"
            ></b-input>
          </b-field>
          <b-field label="Password">
            <b-input
              type="password"
              v-model="person.password"
              placeholder="Insert Password"
            ></b-input>
          </b-field>
          <center>
            <b-button
              type="is-danger"
              class="is-success"
              v-on:click="submitForm"
              >Login</b-button
            >
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoginService from "../services/LoginService";

export default {
  name: "SignUp",
  data() {
    return {
      person: {
        email: "",
        password: "",
      },
      data: [],
      loginService: new LoginService(),
    };
  },
  methods: {
    submitForm() {
      let tipeUser;
      axios
        .post("/login", {
          email: this.person.email,
          password: this.person.password,
        })
        .then((response) => {
          tipeUser = response.data.userType;
          this.loginService.addToUserType(tipeUser);
          location.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    isValid() {
      return true;
    },
  },
};
</script>

<style>
.container {
  width: 450px;
  height: 400px;
  margin: 9% auto;
  background-color: rgba(250, 250, 250, 0.295);
}
.bgLogin {
  background-image: url("../assets/login/BgLogin.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}
.box1 {
  background-color: white;
  margin: 5%;
  margin-top: 10px;
}
</style>
