<template>
  <div>
    <v-row dense>
      <v-col :cols="12">
        <v-card
          class="ma-2 d-flex justify-space-between"
          color="#292D30"
          dark
          v-for="Todo in Todos"
          v-bind:key="Todo.id"
        >
          <div class="d-flex align-center">
            <div class="l-side-card">
              <v-card-title class="text-h6"> {{ Todo.rsocial }} </v-card-title>
              <v-card-subtitle class="text-caption">{{ Todo.cnpj }}</v-card-subtitle>
            </div>
            <v-divider vertical class="mx-3"></v-divider>
            <v-card-subtitle>{{ Todo.nfantasia }}</v-card-subtitle>
          </div>

          <v-card-actions>
            <v-chip class="ma-2" v-if="Todo.docxml"> XML </v-chip>
            <v-chip class="ma-2" v-if="Todo.sintegra"> Sintegra </v-chip>
            <v-chip class="ma-2" v-if="Todo.proc"> Procuração </v-chip>
            <v-btn color="orange" class="ml-6">
              <v-icon>mdi-ballot</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { db } from "../firebase/db";
export default {
  name: "CardEmpresa",
  data: () => ({
    Todos: [{}],
  }),
  firestore: {
    Todos: db.collection("Todos").orderBy("rsocial","asc"),
  },
};
</script>
<style>
.l-side-card{
  width: 300px;
}
</style>
