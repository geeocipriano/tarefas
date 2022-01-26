<template>
  <div>
    <CardEmpresa />
    <Pagination />
  </div>
</template>
<script>
import CardEmpresa from "../components/CardEmpresa.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Complete",
  components: { CardEmpresa, Pagination },
};
</script>
