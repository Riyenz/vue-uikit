<template><TabContent>
    <template slot="properties">
      <div class="eduk-table scollable">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th class="" style="width: 140px;">
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
              <td style="max-width: 140px;">
                <code class="highlighter">placement</code>
              </td>
              <td style="text-align: left;">Tooltip placement from element</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">top</code>,
                <code class="highlighter">right</code>,
                <code class="highlighter">bottom</code>,
                <code class="highlighter">left</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">top</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">content</code>
              </td>
              <td style="text-align: left;">Tooltip content text</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">behaviour</code>
              </td>
              <td style="text-align: left;">Tooltip behaviour</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">hover</code>,
                <code class="highlighter">click</code>,
                <code class="highlighter">fixed</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">hover</code>
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
  name: 'TooltipApi',
  components: {
    TabContent,
  },
};
</script>
