<template>
  <div class="card">
    <img :src="card.img" alt="" class="card__img" />
    <p class="card__price">{{ Number(card.price).toLocaleString() }} руб.</p>
    <p class="card__name">{{ card.name }}</p>
    <AppBtn>Купить</AppBtn>
  </div>
</template>

<script>
import AppBtn from "@/components/AppBtn";

export default {
  components: { AppBtn },
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 230px;
  width: 230px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: rgba(28, 28, 30, 1);

  &__img {
    border-radius: 15px;
  }
  &__price {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }
  &__name {
    color: #fff;
    font-size: 18px;
  }
}
</style>
