<template>
  <div class="background-container">
    <div class="logo">
      <img src="@/assets/img/panda.png" alt="Panda" />
    </div>
    <router-view v-slot="{ Component, route }">
      <div :key="route.name" class="auth-form-container">
        <Transition appear>
          <component :is="Component" />
        </Transition>
      </div>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 220px;
}
.background-container {
  min-height: 100vh;
  background-color: rgba(28, 28, 30, 1);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  overflow-y: auto;
}

.auth-form-container {
  min-width: 400px;
  max-width: 620px;
  background-color: #fff;
  padding: 30px 80px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: 300;
  overflow-y: auto;
  @media (max-width: 768px) {
    min-width: auto;
    padding: 30px 50px;
  }
  @media (max-width: 375px) {
    padding: 10px 20px;
  }
  :deep(form) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
:deep(.information-container) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
:deep(.auth-header) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

:deep(.title) {
  font-size: 40px;
  font-weight: 600;
  font-family: "Jura", sans-serif;
  @media (max-width: 375px) {
    font-size: 30px;
  }
}

:deep(.subtitle) {
  font-size: 24px;
  text-align: center;
  @media (max-width: 375px) {
    font-size: 18px;
  }
}
:deep(.fields-container) {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

:deep(.privacy-policy-text) {
  font-weight: 600;
  font-size: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(.registration-text) {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 375px) {
    font-size: 16px;
  }
}

:deep(.icon-container) {
  // display: flex;
  display: none;
  justify-content: center;
  gap: 30px;
}
</style>
