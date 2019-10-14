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
                <code class="highlighter">avatar</code>
              </td>
              <td style="text-align: left;">Blockquote avatar</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">heading</code>
              </td>
              <td style="text-align: left;">Content quote</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">compact</code>
              </td>
              <td style="text-align: left;">Compact blockquote</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">
                &mdash;
              </td>
              <td style="text-align: left;">
                <code class="highlighter">
                  false
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">bordered</code>
              </td>
              <td style="text-align: left;">Bordered blockquote</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">
                &mdash;
              </td>
              <td style="text-align: left;">
                <code class="highlighter">
                  false
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">horizontal</code>
              </td>
              <td style="text-align: left;">Horizontal aligned quote</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">
                &mdash;
              </td>
              <td style="text-align: left;">
                <code class="highlighter">
                  false
                </code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template slot="slots">
      <div>
        <div class="eduk-table">
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
                  <code class="highlighter">footer</code>
                </td>
                <td style="text-align: left;">For citations slot</td>
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
  name: 'BlockquoteApi',
  components: {
    TabContent,
  },
};
</script>
