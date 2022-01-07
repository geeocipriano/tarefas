<template>
  <v-app id="inspire" style="background: #202427">
    <!-- Inicio Sidebar -->
    <v-navigation-drawer v-model="drawer" app color="#292D30">
      <v-list dense nav>
        <v-list-tem class="d-flex">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title style="color: white">John Leider</v-list-item-title>
        </v-list-tem>
        <Tabs />
      </v-list>
    </v-navigation-drawer>
    <!-- Fim Sidebar -->

    <!-- Incio Navbar -->
    <v-app-bar app color="#292D30" dark>
      <v-col cols="6" class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="ml-2">Tarefas - Executando</v-toolbar-title>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <v-text-field label="Buscar" outlined dense class="mt-6 mx-2"></v-text-field>
        <v-btn color="warning" dark class="mx-1" @click="setPage()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn color="warning" dark class="mx-1" @click.stop="dialog = true">
          <v-icon>mdi-plus-circle</v-icon>
          <v-dialog v-model="dialog" max-width="600" dark>
            <CardCreate />
          </v-dialog>
        </v-btn>
      </v-col>
    </v-app-bar>
    <!-- Fim Navbar -->

    <v-main>
      <CardEmpresa />
    </v-main>
  </v-app>
</template>

<script>
import CardEmpresa from "../components/CardEmpresa.vue";
import CardCreate from "../components/CardCreate.vue";
import Tabs from "../components/Tabs.vue";
export default {
  components: { CardEmpresa, CardCreate, Tabs },
  data: () => ({
    drawer: null,
    show: false,
    dialog: false,
  }),
};
</script>
