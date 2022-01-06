<template>
  <div>
    <v-row dense>
      <v-col :cols="12">
        <v-card
          class="ma-2 d-flex justify-space-between"
          color="#292D30"
          dark
          v-for="task in tasks"
          v-bind:key="task.id"
        >
          <div class="d-flex align-center">
            <div>
              <v-card-title class="text-h6"> {{ task.rsocial }} </v-card-title>
              <v-card-subtitle class="text-caption">{{ task.cnpj }}</v-card-subtitle>
            </div>
            <v-divider vertical class="mx-3"></v-divider>
            <v-card-subtitle>{{ task.nfantasia }}</v-card-subtitle>
          </div>

          <v-card-actions>
            <v-chip class="ma-2" v-if="task.docxml"> XML </v-chip>
            <v-chip class="ma-2" v-if="task.sintegra"> Sintegra </v-chip>
            <v-chip class="ma-2" v-if="task.proc"> Procuração </v-chip>
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
export default {
  name: 'CardEmpresa',
  data: () => ({
    tasks: [
      {
        id: 1,
        rsocial: "Correta Soluções Tributarias",
        nfantasia: "Correta",
        cnpj: 199000101,
        docxml: true,
        sintegra: true,
        proc: false,
      },
    ],
  }),
};
</script>
