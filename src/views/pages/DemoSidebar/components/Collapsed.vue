<template>
  <Preview>
    <template slot="example">
      <div class="demo">
        <Sidebar
          :menus="menus"
          :user="user"
          :profileProgress="profileProgress"
          :achievements="achievements"
          :footerLinks="footerLinks"
          :footerLinksSecondary="footerLinksSecondary"
          collapsed
        />
      </div>
    </template>
    <template slot="vue-code">
      <code class="language-html">
        &lt;Sidebar
          :menus=&quot;menus&quot;
          :user=&quot;user&quot;
          :profileProgress=&quot;profileProgress&quot;
          :achievements=&quot;achievements&quot;
          :footerLinks=&quot;footerLinks&quot;
          :footerLinksSecondary=&quot;footerLinksSecondary&quot;
          collapsed
        /&gt;
      </code>
    </template>
    <template slot="vanilla-code">
      <code class="language-html">
        &lt;div class=&quot;eduk-sidebar eduk-sidebar--collapsed&quot;&gt;
          &lt;div class=&quot;eduk-sidebar__main&quot;&gt;
            &lt;div class=&quot;eduk-sidebar-profile&quot;&gt;
              &lt;div class=&quot;eduk-sidebar-profile__img-wrapper&quot;&gt;
                &lt;img src=&quot;/img/avatar-placeholder-male.af139d26.svg&quot;
                alt=&quot;Some person&quot; class=&quot;eduk-sidebar-profile__img&quot;&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-sidebar-menu&quot;&gt;
              &lt;div&gt;
                &lt;a href=&quot;#/&quot; class=&quot;router-link-active eduk-sidebar-menu__item&quot;&gt;
                  &lt;i class=&quot;fas fa-home&quot;&gt;&lt;/i&gt;
                  &lt;span class=&quot;eduk-sidebar-menu__item-text&quot;&gt;Home&lt;/span&gt;
                &lt;/a&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;a href=&quot;#/notifications&quot; class=&quot;eduk-sidebar-menu__item&quot;&gt;
                  &lt;i class=&quot;fas fa-bell&quot;&gt;&lt;/i&gt;
                  &lt;span class=&quot;eduk-sidebar-menu__item-text&quot;&gt;Notifications&lt;/span&gt;
                &lt;/a&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;a href=&quot;#/sidebar&quot;
                class=&quot;router-link-exact-active router-link-active eduk-sidebar-menu__item
                eduk-sidebar-menu__item--active&quot;&gt;
                  &lt;i class=&quot;fas fa-book&quot;&gt;&lt;/i&gt;
                  &lt;span class=&quot;eduk-sidebar-menu__item-text&quot;&gt;Sidebar Docs&lt;/span&gt;
                &lt;/a&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;div class=&quot;eduk-sidebar-list&quot;&gt;
                  &lt;a class=&quot;eduk-sidebar-list__item&quot;&gt;
                    &lt;i class=&quot;fas fa-bars&quot;&gt;&lt;/i&gt;
                    &lt;span class=&quot;eduk-sidebar-list__item-text&quot;&gt;Pages&lt;/span&gt;
                    &lt;i class=&quot;fas fa-caret-down&quot;&gt;&lt;/i&gt;
                  &lt;/a&gt;
                  &lt;div class=&quot;eduk-sidebar-list__options&quot;&gt;
                    &lt;div&gt;
                      &lt;a href=&quot;#/&quot; class=&quot;router-link-active eduk-sidebar-list__sub-item&quot;&gt;
                        Home
                      &lt;/a&gt;
                      &lt;a href=&quot;#/notifications&quot; class=&quot;eduk-sidebar-list__sub-item&quot;&gt;
                        Notifications
                      &lt;/a&gt;
                      &lt;a href=&quot;#/settings&quot; class=&quot;eduk-sidebar-list__sub-item&quot;&gt;
                        Settings
                      &lt;/a&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </template>
  </Preview>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Sidebar from '@/UIKit/Sidebar/Sidebar.component.vue';

import {
  MENUS,
  USER,
  PROFILE_PROGRESS,
  ACHIEVEMENTS,
  FOOTER_LINKS,
  FOOTER_LINKS_SECONDARY,
} from '../config';

export default {
  name: 'CollapsedSidebar',
  components: {
    Preview,
    Sidebar,
  },
  data() {
    return {
      menus: MENUS,
      user: USER,
      profileProgress: PROFILE_PROGRESS,
      achievements: ACHIEVEMENTS,
      footerLinks: FOOTER_LINKS,
      footerLinksSecondary: FOOTER_LINKS_SECONDARY,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo {
  height: 500px;
  overflow: auto;

  /deep/ {
    > .eduk-sidebar {
      margin: auto;
    }
  }
}
</style>
