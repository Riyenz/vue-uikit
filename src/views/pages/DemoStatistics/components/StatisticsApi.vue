<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th class="" style="width: 120px;">
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
              <td style="max-width: 120px;">
                <code class="highlighter">value</code>
              </td>
              <td style="text-align: left;">Stats value to display. Auto formats number</td>
              <td style="text-align: left;">Number | String</td>
              <td style="text-align: left;">
                -
              </td>
              <td style="text-align: left;">
                <code class="highlighter">
                  0
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">description</code>
              </td>
              <td style="text-align: left;">Adds description below the stats value</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                -
              </td>
              <td style="text-align: left;">
                -
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">icon</code>
              </td>
              <td style="text-align: left;">Adds icon before stats value</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                -
              </td>
              <td style="text-align: left;">
                -
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">variant</code>
              </td>
              <td style="text-align: left;">Stats variant</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">primary</code>,
                <code class="highlighter">secondary</code>,
                <code class="highlighter">tertiary</code>,
                <code class="highlighter">success</code>,
                <code class="highlighter">warning</code>,
                <code class="highlighter">danger</code>,
                <code class="highlighter">info</code>,
                <code class="highlighter">light</code>,
                <code class="highlighter">dark</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">
                  primary
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">inverted</code>
              </td>
              <td style="text-align: left;">Inverts the position of stats value and description</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">
                -
              </td>
              <td style="text-align: left;">
                -
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
  components: {
    TabContent,
  },
};
</script>
