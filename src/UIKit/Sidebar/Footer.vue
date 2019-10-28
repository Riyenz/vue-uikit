<template>
  <footer :class="footerClassName">
    <div class="eduk-sidebar-footer__links" v-if="footerLinks.length > 0">
      <div class="eduk-sidebar-footer__link" v-for="(item, index) in footerLinks" :key="index">
        <a v-if="item.type === 'anchor'" :href="item.href">{{item.name}}</a>
        <router-link v-else-if="item.type === 'router'" :to="item.href">{{item.name}}</router-link>
      </div>
    </div>
    <div
      class="eduk-sidebar-footer__links eduk-sidebar-footer__links--secondary"
      v-if="footerLinksSecondary.length > 0"
    >
      <div class="eduk-sidebar-footer__link" v-for="(item, index) in footerLinksSecondary" :key="index">
        <a v-if="item.type === 'anchor'" :href="item.href">{{item.name}}</a>
        <router-link v-else-if="item.type === 'router'" :to="item.href">{{item.name}}</router-link>
      </div>
    </div>
    <p class="eduk-sidebar-footer__copy">
      &copy; {{new Date().getFullYear()}} Edukasyon.ph is operated by
      <br />Engadin Corporation. All rights reserved.
    </p>
  </footer>
</template>

<script>
import { SIDEBAR_FOOTER_CLASS_NAME } from './Sidebar.config';

export default {
  name: 'SidebarFooter',
  props: {
    footerLinks: Array,
    footerLinksSecondary: Array,
  },
  computed: {
    footerClassName() {
      return { [SIDEBAR_FOOTER_CLASS_NAME]: true };
    },
  },
};
</script>
