<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table">
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
                <code class="highlighter">variant</code>
              </td>
              <td style="text-align: left;">Toast Variant</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">primary</code>,
                <code class="highlighter">secondary</code>,
                <code class="highlighter">success</code>,
                <code class="highlighter">warning</code>,
                <code class="highlighter">danger</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">primary</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">text</code>
              </td>
              <td style="text-align: left;">Toast message</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">placement</code>
              </td>
              <td style="text-align: left;">Toast placement</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">top</code>,
                <code class="highlighter">top-left</code>,
                <code class="highlighter">top-right</code>,
                <code class="highlighter">bottom</code>,
                <code class="highlighter">bottom-left</code>,
                <code class="highlighter">bottom-right</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">top</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">duration</code>
              </td>
              <td style="text-align: left;">Duration before fadeOut</td>
              <td style="text-align: left;">Millisecond</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">3000</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">dismissable</code>
              </td>
              <td style="text-align: left;">Show/hide close button</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">true</code>
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
  name: 'ToastApi',
  components: {
    TabContent,
  },
};
</script>
