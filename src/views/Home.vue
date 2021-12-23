<template>
  <v-app id="inspire" style="background: #202427">
    <v-navigation-drawer v-model="drawer" app color="#292D30">
      <v-list dense nav>
        <v-list-tem class="d-flex">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title style="color: white">John Leider</v-list-item-title>
        </v-list-tem>

        <v-list-item v-for="item in items" :key="item.title" link style="color: #f78812">
          <v-list-item-icon>
            <v-icon color="#F78812">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#292D30" dark>
      <v-col cols="6" class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="ml-2">Tarefas - Executando</v-toolbar-title>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <v-text-field label="Buscar" outlined dense class="mt-6 mx-2"></v-text-field>
        <v-btn color="warning" dark class="mx-1">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn color="warning" dark class="mx-1" @click.stop="dialog = true">
          <v-icon>mdi-plus-circle</v-icon>
          <v-dialog v-model="dialog" max-width="600" dark>
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
                label="Nome Fantasia"
                v-model="inpFantasia"
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
                <v-checkbox
                  v-model="checkSintegra"
                  label="Sintegra"
                  class="mr-2"
                ></v-checkbox>
                <v-checkbox
                  v-model="checkProc"
                  label="Procuração"
                  class="mr-2"
                ></v-checkbox>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="warning" dark @click="dialog = false" v-on:click="addTask">
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-col>
    </v-app-bar>

    <v-main>
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
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    inpSocial: "",
    inpFantasia: "",
    inpCnpj: "",
    checkXml: false,
    checkSintegra: false,
    checkProc: false,
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
    items: [
      { title: "Executando", icon: "mdi-view-dashboard", color: "#F78812" },
      { title: "Concluidas", icon: "mdi-image" },
      { title: "Tarefas", icon: "mdi-help-box" },
    ],
    show: false,
    dialog: false,
  }),
  methods: {
    addTask() {
      this.tasks.push({
        rsocial: this.inpSocial,
        nfantasia: this.inpFantasia,
        cnpj: this.inpCnpj,
        docxml: this.checkXml,
        sintegra: this.checkSintegra,
        proc: this.checkProc,
      });
      this.inpSocial = "";
      this.inpFantasia = "";
      this.inpCnpj = "";
      this.checkXml = false;
      this.checkSintegra = false;
      this.checkProc = false;
    },
  },
};
</script>
