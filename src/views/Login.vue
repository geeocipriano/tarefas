<template>
  <v-app>
    <v-main class="main">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-col cols="6">
            <v-img>
              <img src="../assets/task.png" width="80%" />
            </v-img>
          </v-col>
          <v-col cols="6">
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form ref="form" @submit.prevent="login()">
                  <v-text-field
                    v-model="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="username"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    required
                  ></v-text-field>
                  <v-btn type="submit" class="mt-4" color="primary" value="log in"
                    >Login</v-btn
                  >
                </form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
};
</script>
<style scoped>
.main {
  height: 100vh !important;
  background-color: black;
}
.left-side {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50%;
}
</style>
