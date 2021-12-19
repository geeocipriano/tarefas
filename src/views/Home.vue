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
              ></v-text-field>
              <v-text-field
                required
                class="mx-3 mb-n4"
                solo
                label="Nome Fantasia"
              ></v-text-field>
              <v-text-field required class="mx-3 mb-n4" solo label="CNPJ"></v-text-field>
              <div class="d-flex mx-5">
                <v-switch
                  v-model="ex11"
                  label="XML"
                  color="orange"
                  value="orange"
                  hide-detail
                  class="mr-3"
                ></v-switch>
                <v-switch
                  v-model="ex11"
                  label="Sintegra"
                  color="orange"
                  value="orange"
                  hide-detail
                  class="mr-3"
                ></v-switch>
                <v-switch
                  v-model="ex11"
                  label="Procuração"
                  color="orange"
                  value="orange"
                  hide-detail
                  class="mr-3"
                ></v-switch>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="warning" dark @click="dialog = false"> Salvar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-col>
    </v-app-bar>

    <v-main>
      <v-row dense>
        <v-col :cols="12">
          <v-card class="ma-2" color="#292D30" dark>
            <v-card-title> Top western road trips </v-card-title>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could
                  deliver. You won't have time for sleeping, soldier, not with all the bed
                  making you'll be doing. Then we'll go with that data file! Hey, you add
                  a one and two zeros to that or we walk! You're going to do his laundry?
                  I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="ma-2" color="#292D30" dark>
            <v-card-title> Top western road trips </v-card-title>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could
                  deliver. You won't have time for sleeping, soldier, not with all the bed
                  making you'll be doing. Then we'll go with that data file! Hey, you add
                  a one and two zeros to that or we walk! You're going to do his laundry?
                  I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
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
    items: [
      { title: "Executando", icon: "mdi-view-dashboard", color: "#F78812" },
      { title: "Concluidas", icon: "mdi-image" },
      { title: "Tarefas", icon: "mdi-help-box" },
    ],
    show: false,
    dialog: false,
  }),
};
</script>
