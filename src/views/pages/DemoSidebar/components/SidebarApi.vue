<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th class="" style="width: 200px;">
                Name
              </th>
              <th class="" style="width: 0px;">
                Description
              </th>
              <th class="" style="width: 0px;">
                Type
              </th>
              <th class="" style="width: 0px;">
                Values
              </th>
              <th class="" style="width: 0px;">
                Default
              </th>
            </tr>
          </thead>
          <tbody class="eduk-table__tbody">
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">collapsed</code>
              </td>
              <td style="text-align: left;">Collapsed sidebar</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">user</code>
              </td>
              <td style="text-align: left;">User details to be shown in the sidebar</td>
              <td style="text-align: left;">Object</td>
              <td style="text-align: left;">
                <pre class="code__preview">
                  <code class="language-javascript">
{
  role: 'Edukasyon Admin',
  name: 'Kristel Balbido',
  initials: 'kb',
  profile: '/me',
  settings: {
    type: 'router',
    url: '/me/settings',
  },
  picture: 'https://via.placeholder.com/70',
}
                  </code>
                </pre>
              </td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">profileProgress</code>
              </td>
              <td style="text-align: left;">User account progress</td>
              <td style="text-align: left;">Object</td>
              <td style="text-align: left;">
                <pre class="code__preview">
                  <code class="language-javascript">
{
  level: 26,
  progress: 54,
}
                  </code>
                </pre>
              </td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">achievements</code>
              </td>
              <td style="text-align: left;">List of user badge achievements</td>
              <td style="text-align: left;">Array</td>
              <td style="text-align: left;">
                <pre class="code__preview">
                  <code class="language-javascript">
[
  { icon: 'https://via.placeholder.com/75', tooltip: 'Bronze Medal' },
  { icon: 'https://via.placeholder.com/75', tooltip: 'Silver Medal' },...
]
                  </code>
                </pre>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">[]</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">menus</code>
              </td>
              <td style="text-align: left;">List of sidebar links</td>
              <td style="text-align: left;">Array</td>
              <td style="text-align: left;">
                <pre class="code__preview">
                  <code class="language-javascript">
[
  {
    icon: 'home',
    name: 'Home',
    type: 'link', // default menu link
    href: '/',
  },
  {
    icon: 'bars',
    name: 'Pages',
    type: 'list', // collapsible menu item with sub-items
    items: [
      {
        name: 'Home',
        href: '/',
      },...
    ],
  },...
]
                  </code>
                </pre>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">[]</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">footerLinks</code>
              </td>
              <td style="text-align: left;">Sidebar primary footer links</td>
              <td style="text-align: left;">Array</td>
              <td style="text-align: left;">
                <pre class="code__preview">
                  <code class="language-javascript">
[
  {
    name: 'About',
    href: '/',
  },...
]
                  </code>
                </pre>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">[]</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">footerLinksSecondary</code>
              </td>
              <td style="text-align: left;">Sidebar secondary footer links</td>
              <td style="text-align: left;">Array</td>
              <td style="text-align: left;">
                <pre class="code__preview">
                  <code class="language-javascript">
[
  {
    name: 'FAQ',
    href: '/',
  },...
]
                  </code>
                </pre>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">[]</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template slot="events">
      <div class="eduk-table scollable">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th class="" style="width: 180px;">
                Name
              </th>
              <th class="" style="width: 0px;">
                Description
              </th>
              <th class="" style="width: 0px;">
                Arguments
              </th>
            </tr>
          </thead>
          <tbody class="eduk-table__tbody">
            <tr>
              <td style="max-width: 180px;">
                <code class="highlighter">@change</code>
              </td>
              <td style="text-align: left;">
                triggered when router link is clicked within the sidebar
              </td>
              <td style="text-align: left;">
                <code class="highlighter">path</code>
                - the selected path
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

export default {
  name: 'SidebarApi',
  components: {
    TabContent,
  },
};
</script>
