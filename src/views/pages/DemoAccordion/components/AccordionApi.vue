<template>
  <div class="eduk-u-mb-3">
    <h3 class="eduk-h3 eduk-u-mb-3">Accordion API</h3>
    <TabContent>
      <template slot="properties">
        <div>
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
                    <code class="highlighter">variant</code>
                  </td>
                  <td style="text-align: left;">Accordion variant</td>
                  <td style="text-align: left;">String</td>
                  <td style="text-align: left;">
                    <code class="highlighter">primary</code>,
                    <code class="highlighter">secondary</code>,
                    <code class="highlighter">tertiary</code>,
                    <code class="highlighter">success</code>,
                    <code class="highlighter">info</code>,
                    <code class="highlighter">warning</code>,
                    <code class="highlighter">danger</code>,
                    <code class="highlighter">light</code>,
                    <code class="highlighter">dark</code>
                  </td>
                  <td style="text-align: left;">&mdash;</td>
                </tr>
                <tr>
                  <td style="max-width: 70px;">
                    <code class="highlighter">bordered</code>
                  </td>
                  <td style="text-align: left;">Bordered Accordion</td>
                  <td style="text-align: left;">Boolean</td>
                  <td style="text-align: left;">&mdash;</td>
                  <td style="text-align: left;">
                    <code class="highlighter">false</code>
                  </td>
                </tr>
                <tr>
                  <td style="max-width: 70px;">
                    <code class="highlighter">thick</code>
                  </td>
                  <td style="text-align: left;">Accortion title extra padding</td>
                  <td style="text-align: left;">Boolean</td>
                  <td style="text-align: left;">&mdash;</td>
                  <td style="text-align: left;">
                    <code class="highlighter">false</code>
                  </td>
                </tr>
                <tr>
                  <td style="max-width: 70px;">
                    <code class="highlighter">menu</code>
                  </td>
                  <td style="text-align: left;">Reverse title and arrow</td>
                  <td style="text-align: left;">Boolean</td>
                  <td style="text-align: left;">&mdash;</td>
                  <td style="text-align: left;">
                    <code class="highlighter">false</code>
                  </td>
                </tr>
                <tr>
                  <td style="max-width: 70px;">
                    <code class="highlighter">loading</code>
                  </td>
                  <td style="text-align: left;">Adds 3 loading <code class="highlighter">AccordionItem</code></td>
                  <td style="text-align: left;">Boolean</td>
                  <td style="text-align: left;">&mdash;</td>
                  <td style="text-align: left;">
                    <code class="highlighter">false</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
                    <code class="highlighter">default</code>
                  </td>
                  <td style="text-align: left;">Contains AccordionItem Components</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </TabContent>
  </div>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

export default {
  name: 'AccordionApi',
  components: {
    TabContent,
  },
};
</script>
