<template>
  <footer :class="footerClassName">
    <div class="eduk-sidebar-footer__links" v-if="footerLinks.length > 0">
      <router-link
        v-for="(item, index) in footerLinks"
        :key="index"
        :to="item.href"
      >
        {{item.name}}
      </router-link>
    </div>
    <div
      class="eduk-sidebar-footer__links eduk-sidebar-footer__links--secondary"
      v-if="footerLinksSecondary.length > 0"
    >
      <router-link
        v-for="(item, index) in footerLinksSecondary"
        :key="index"
        :to="item.href"
      >
        {{item.name}}
      </router-link>
    </div>
    <p class="eduk-sidebar-footer__copy">
      &copy; {{new Date().getFullYear()}} Edukasyon.ph is operated by<br />
      Engadin Corporation. All rights reserved.
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
