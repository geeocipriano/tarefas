<template>
  <v-app id="inspire" style="background: #202427">
    <v-navigation-drawer v-model="drawer" app color="#292D30">
      <v-list dense nav>
        <v-list-item class="d-flex">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title style="color: white">John Leider</v-list-item-title>
        </v-list-item>

        <v-list-item v-for="item in items" :key="item.title" link style="color: #f78812">
          <v-list-item-icon>
            <v-icon color="#F78812">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <router-link :to="item.route" style="text-decoration: none !important">
            <v-list-item-content style="color: #f78812">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
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

    <v-main>
      <div class="d-flex flex-column justify-space-between task-list">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import CardCreate from "../components/CardCreate.vue";
export default {
  components: { CardCreate },
  data: () => ({
    drawer: null,
    show: false,
    dialog: false,
    items: [
      {
        title: "Executando",
        icon: "mdi-view-dashboard",
        color: "#F78812",
        route: "/home/complete",
      },
      { title: "Concluidas", icon: "mdi-image", route: "/home/complete" },
      { title: "Tarefas", icon: "mdi-help-box", route: "/home/complete" },
    ],
  }),
};
</script>
<style>
.task-list {
  list-style: none;
  height: 90vh;
}
</style>
