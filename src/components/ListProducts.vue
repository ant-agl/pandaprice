<template>
  <div class="list">
    <h4 class="list__title">{{ title }}</h4>
    <div class="list__wrap">
      <div class="list__cards">
        <CardProduct
          v-for="product in products"
          :key="product.id"
          :card="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct";

export default {
  components: { CardProduct },
  props: {
    title: String,
    products: Array,
  },
};
</script>

<style lang="scss" scoped>
.list {
  &__title {
    color: #fff;
    font-family: "Jura", sans-serif;
    font-size: 25px;
  }
  &__wrap {
    overflow-x: auto;
    background-color: rgb(58, 58, 62);
    padding: 20px;
    border-radius: 30px;
    display: flex;
  }
  &__cards {
    display: flex;
    gap: 20px;
  }
}
</style>
