<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="" class="logo__img" />
        <span class="logo__name">Panda Price</span>
      </div>

      <router-link to="/login" class="logout">
        <img src="@/assets/img/icons/logout.svg" alt="" class="logout__img" />
      </router-link>
    </div>

    <div class="list">
      <ListProducts title="Ozon" :products="products.ozon" />
      <ListProducts title="Wildberries" :products="products.wb" />
      <ListProducts title="Яндекс Маркет" :products="products.market" />
    </div>
  </div>
</template>

<script>
import ListProducts from "@/components/ListProducts";
import { mapGetters } from "vuex";

export default {
  components: { ListProducts },
  computed: {
    ...mapGetters(["products"]),
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 15px;

  &__img {
    width: 70px;

    @media (max-width: 700px) {
      width: 40px;
    }
  }
  &__name {
    color: #fff;
    font-family: "Jura", sans-serif;
    font-size: 40px;
    @media (max-width: 700px) {
      font-size: 25px;
    }
  }
}
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
}
.logout {
  background-color: var(--main-color);
  border-radius: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  }

  &__img {
    width: 25px;
    @media (max-width: 700px) {
      width: 20px;
    }
  }

  &:hover {
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.2) inset;
  }
}
</style>
