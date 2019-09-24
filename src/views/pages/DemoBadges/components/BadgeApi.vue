<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table scollable">
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
                <code class="highlighter">variant</code>
              </td>
              <td style="text-align: left;">Badge variant</td>
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
          </tbody>
        </table>
      </div>
    </template>
    <template slot="slots">
      <div>
        <div class="eduk-table scollable">
          <table class="eduk-table__table">
            <thead class="eduk-table__thead">
              <tr>
                <th class="" style="width: 140px;">
                  Slot
                </th>
                <th class="" style="width: 0px;">
                  Description
                </th>
              </tr>
            </thead>
            <tbody class="eduk-table__tbody">
              <tr>
                <td style="max-width: 140px;">
                  <code class="highlighter">default</code>
                </td>
                <td style="text-align: left;">Content for the Badge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

export default {
  name: 'BadgeApi',
  components: {
    TabContent,
  },
};
</script>
