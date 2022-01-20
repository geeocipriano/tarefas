<template>
  <div>
    <v-card>
      <v-card-title class="text-h5"> Cadastro de Tarefa </v-card-title>
      <v-text-field
        required
        class="mx-3 mb-n4"
        solo
        label="Razão Social"
        v-model="inpSocial"
      ></v-text-field>
      <v-text-field
        required
        class="mx-3 mb-n4"
        solo
        label="CNPJ"
        v-model="inpCnpj"
      ></v-text-field>
      <div class="d-flex justify-space-between mx-3">
        <v-checkbox v-model="checkXml" label="XML" class="mr-2"></v-checkbox>
        <v-checkbox v-model="checkSintegra" label="Sintegra" class="mr-2"></v-checkbox>
        <v-checkbox v-model="checkProc" label="Procuração" class="mr-2"></v-checkbox>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="warning" dark v-on:click="createCompany"> Salvar </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import {db} from "../firebase/fireconfig";
export default {
  name: "CardCreate",
  data: () => ({
    inpSocial: "",
    inpCnpj: "",
    checkXml: false,
    checkSintegra: false,
    checkProc: false,
  }),
  methods: {
    createCompany(){
      db.collection("company").add({
        razaoSocial: this.inpSocial,
        cnpjEmpresa: this.inpCnpj,
        xmlEmpresa: this.checkXml,
        sintegraEmpresa: this.checkSintegra,
        procuracaoEmpresa: this.checkProc
      })
      .then(() =>{
        console.log("Deu Certo")
      })
      .catch((error) => {
        console.error("Erro", error)
      })
      this.inpSocial='',
      this.inpCnpj=''
    }
  }
};
</script>
