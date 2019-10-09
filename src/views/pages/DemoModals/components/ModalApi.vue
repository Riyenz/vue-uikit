<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table scollable">
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
                <code class="highlighter">title</code>
              </td>
              <td style="text-align: left;">Modal title</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">navLogo</code>
              </td>
              <td style="text-align: left;">Modal nav logo</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">Image Url</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">closeSubText</code>
              </td>
              <td style="text-align: left;">Close sub-content action button text</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">Close Window</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">chevronDownIcon</code>
              </td>
              <td style="text-align: left;">Sub-content chevron down icon</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">Image Url</td>
              <td style="text-align: left;">
                <code class="highlighter">/assets/icons/chevron-down.png</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">horizontalLineIcon</code>
              </td>
              <td style="text-align: left;">Sub-content horizontal line icon</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">Image Url</td>
              <td style="text-align: left;">
                <code class="highlighter">/assets/icons/horizontal-line.png</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 200px;">
                <code class="highlighter">noSeparator</code>
              </td>
              <td style="text-align: left;">Remove shadow separator on header</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
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
                  <code class="highlighter">content</code>
                </td>
                <td style="text-align: left;">Content for the body section</td>
              </tr>
              <tr>
                <td style="max-width: 140px;">
                  <code class="highlighter">footer</code>
                </td>
                <td style="text-align: left;">Content for the footer section</td>
              </tr>
              <tr>
                <td style="max-width: 140px;">
                  <code class="highlighter">subActions</code>
                </td>
                <td style="text-align: left;">Content for the sub actions</td>
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
  name: 'ModalApi',
  components: {
    TabContent,
  },
};
</script>
