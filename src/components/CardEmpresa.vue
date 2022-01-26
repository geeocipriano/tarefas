<template>
  <div>
    <v-row dense>
      <v-col :cols="12">
        <v-card
          class="ma-2 d-flex justify-space-between"
          color="#292D30"
          dark
          v-for="comp in CompanyList"
          :key="comp.id"
        >
          <div class="d-flex align-center">
            <div
              class="l-side-card d-flex flex-column align-center justify-center text-uppercase"
            >
              <v-card-title class="text-h6 title"> {{ comp.razaoSocial }} </v-card-title>
              <v-card-subtitle class="text-caption">{{ comp.cnpj }}</v-card-subtitle>
            </div>
            <v-divider vertical class="mx-3"></v-divider>
          </div>

          <v-card-actions>
            <v-chip class="ma-2"> XML </v-chip>
            <v-chip class="ma-2"> Sintegra </v-chip>
            <v-chip class="ma-2"> Procuração </v-chip>
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
import { db } from "../firebase/fireconfig";
export default {
  name: "CardEmpresa",
  data: () => ({
    CompanyList: [],
    razaoSocial:'',
  }),
  methods: {
    readCompany(){
      let CompanyList = [];
      db.collection("company")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          CompanyList.push({
            id: doc.id,
            razaoSocial: doc.data().razaoSocial
          });
          console.log(CompanyList.length)
        });
        return CompanyList
      })
      .catch((error) => {
        console.log("Erro ao buscar documentos", error)
      })
    }
  },
  mounted() {
    this.readCompany()
  },
};
</script>
<style>
.l-side-card {
  width: 300px;
}
</style>
