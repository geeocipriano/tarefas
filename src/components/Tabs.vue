<template>
  <div>
    <v-list-item v-for="item in items" :key="item.title" link style="color: #f78812">
      <v-list-item-icon>
        <v-icon color="#F78812">{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  data: () => ({
    items: [
      { title: "Executando", icon: "mdi-view-dashboard", color: "#F78812" },
      { title: "Concluidas", icon: "mdi-image" },
      { title: "Tarefas", icon: "mdi-help-box" },
    ],
  }),
};
</script>
