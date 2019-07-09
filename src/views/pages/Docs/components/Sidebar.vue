<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <h3>Edukasyon Product<br />Design Language System</h3>
      <h4><router-link to="/">Introduction</router-link></h4>
      <section class="group">
        <h4 class="group__name">components</h4>
        <router-link
          v-for="route in componentRoutes"
          class="group__menu"
          :class="{'group__menu--active': route.name === currentRoute}"
          :key="route.name"
          :to="`/${route.path}`"
        >
          {{route.displayName}}
        </router-link>
      </section>
    </div>
    <footer class="sidebar__footer">
      <div class="footer-links">
        <a class="footer-links__item">About</a>
        <a class="footer-links__item">Advocacy</a>
        <a class="footer-links__item">Team</a>
        <a class="footer-links__item">Careers</a>
        <a class="footer-links__item">Contact</a>
      </div>
      <div class="footer-links footer-links--secondary">
        <a class="footer-links__item">FAQ</a>
        <a class="footer-links__item">Sitemap</a>
        <a class="footer-links__item">Privacy Policy</a>
        <a class="footer-links__item">Terms of Service</a>
        <a class="footer-links__item">Cookie Policy</a>
      </div>
      <div class="copyright">
        <p>&copy; 2019 Edukasyon.ph is operated by Engadin Corporation. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import demoRoutes from '@/demoRoutes';

export default {
  name: 'Sidebar',
  props: {
    currentRoute: String,
  },
  computed: {
    componentRoutes() {
      return this.demoRoutes.filter(r => r.name !== 'demo-intro');
    },
  },
  data() {
    return {
      demoRoutes,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "scss/variables";

.sidebar {
  color: $tertiary;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__top {
    padding: 35px 40px;
  }

  &__top > h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 30px;
  }

  &__top > h4 {
    font-size: 16px;
    font-weight: 300;
    margin: 0 0 30px;
  }

  &__top > h4 a {
    outline: none;
    text-decoration: none;
    color: inherit;
  }
}

.group {
  margin-bottom: 30px;

  &__name {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__menu {
    font-size: 16px;
    display: block;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    margin-bottom: 10px;
    color: inherit;
  }

  &__menu--active {
    color: inherit;
    font-weight: bold;
  }
}

.footer-links {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $gray-300;

  &__item {
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    outline: none;
  }

  &--secondary {
    justify-content: start;
    border-bottom: none;
    flex-wrap: wrap;
    max-width: 250px;
  }

  &--secondary &__item {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

.copyright {
  padding: 0 30px 20px;

  p {
    font-size: 12px;
  }
}
</style>
