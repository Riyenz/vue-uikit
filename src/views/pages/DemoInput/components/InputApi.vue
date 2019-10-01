<template>
  <TabContent>
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
                <code class="highlighter">id</code>
              </td>
              <td style="text-align: left;">Form control id</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">placeholder</code>
              </td>
              <td style="text-align: left;">Input label helper</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">type</code>
              </td>
              <td style="text-align: left;">Input type</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">text</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">icon</code>
              </td>
              <td style="text-align: left;">Input icon</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                Name of icon from <a href="https://github.com/FortAwesome/vue-fontawesome" target="_blank">font awesome</a> library.
              </td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">label</code>
              </td>
              <td style="text-align: left;">Form item label</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">feedback</code>
              </td>
              <td style="text-align: left;">Input feedback state</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">default</code>, <code class="highlighter">success</code>, <code class="highlighter">error</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">default</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">feedbackMsg</code>
              </td>
              <td style="text-align: left;">Feedback description</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">disabled</code>
              </td>
              <td style="text-align: left;">Input disabled state</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">rows</code>
              </td>
              <td style="text-align: left;">
                Input rows. If rows is greater than 1, textarea will be used.
              </td>
              <td style="text-align: left;">Number</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">1</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">v-model</code>
              </td>
              <td style="text-align: left;">
                Control's two way binding property
              </td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template slot="slots">
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
                <code class="highlighter">prefix</code>
              </td>
              <td style="text-align: left;">Input prefixed elements</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">suffix</code>
              </td>
              <td style="text-align: left;">Input suffixed elements</td>
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
              <td style="text-align: left;">Triggered when input value changed.</td>
              <td style="text-align: left;">
                <code class="highlighter">event</code>
                - Native event action information
              </td>
            </tr>
            <tr>
              <td style="max-width: 180px;">
                <code class="highlighter">@blur</code>
              </td>
              <td style="text-align: left;">Triggered when the input loses focus.</td>
              <td style="text-align: left;">
                <code class="highlighter">event</code>
                - Native event action information
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
  name: 'InputApi',
  components: {
    TabContent,
  },
};
</script>
