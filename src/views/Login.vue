<template>
  <v-app id="inspire">
    <v-content class="dark">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 orange--text text--darken-1">
                          Acessar a Task
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn
                            class="mx-2"
                            fab
                            color="black"
                            outlined
                            v-for="alt in altLogin"
                            :key="alt.icon"
                          >
                            <v-icon>{{ alt.icon }}</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Insira seu email para acessar
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-at"
                            type="text"
                            color="orange darken-1"
                          />

                          <v-text-field
                            id="password"
                            label="Senha"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="orange darken-1"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Esqueceu sua senha ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3 mb-5">
                        <v-btn rounded color="orange darken-1" dark>LOG IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="orange darken-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Faça seu Cadastro</h1>
                        <h5 class="text-center">
                          Informe seus dados para começar a utilizar o aplicativo
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">Registrar</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="orange darken-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Acessar Agora!</h1>
                        <h5 class="text-center">
                          Faça login para acessar suas tarefas
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">LOGIN</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 orange--text text--darken-1">
                          Criar Conta
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn
                            class="mx-2"
                            fab
                            color="black"
                            outlined
                            v-for="alt in altLogin"
                            :key="alt.icon"
                          >
                            <v-icon>{{ alt.icon }}</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Digite seu email para registrar
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Nome"
                            name="Name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="orange darken-1"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-at"
                            type="text"
                            color="orange darken-1"
                          />

                          <v-text-field
                            id="password"
                            label="Senha"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="orange darken-1"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-5">
                        <v-btn rounded color="orange darken-1" dark>REGISTRAR</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    step: 1,
    altLogin: [
      { icon: "mdi-google" },
      { icon: "mdi-facebook" },
      { icon: "mdi-linkedin" },
    ],
  }),
  props: {
    source: String,
  },
};
</script>
<style scoped>
.dark {
  background-color: #212121;
}
.light-orange {
  background-color: #e76f51;
}
.dark-orange {
  background-color: #e76f51;
}
</style>
