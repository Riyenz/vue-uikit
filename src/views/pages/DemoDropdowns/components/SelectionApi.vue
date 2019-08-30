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
              <td style="max-width: 140px;">
                <code class="highlighter">options</code>
              </td>
              <td style="text-align: left;">Select options</td>
              <td style="text-align: left;">Array of dropdown items</td>
              <td style="text-align: left;">
                <code class="highlighter">
                  [{ id: 1, name: "One" }, { id: 1, name: "Two" },...]
                </code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">
                  []
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">placeholder</code>
              </td>
              <td style="text-align: left;">Select placeholder text</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">multiselect</code>
              </td>
              <td style="text-align: left;">Enables multiselect from select options</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">hasImage</code>
              </td>
              <td style="text-align: left;">
                Add images to select options. Only available when <code class="highlighter">img</code><br />
                property is available to select option object.<br />
                i.e. <code class="highlighter">[{ id: 1, name: "One", img: "https://via.placeholder.com/150" }]</code>
              </td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template slot="events">
      <div class="eduk-table">
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
              <td style="text-align: left;">Triggered when selected option(s) changed.</td>
              <td style="text-align: left;">
                <code class="highlighter">value</code>
                - selected option object or options array for
                <code class="highlighter">mutiselect</code> enabled selection.
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
  name: 'SelectionApi',
  components: {
    TabContent,
  },
};
</script>
