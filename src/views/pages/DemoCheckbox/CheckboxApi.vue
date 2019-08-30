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
                <code class="highlighter">id</code>
              </td>
              <td style="text-align: left;">Checkbox identifier</td>
              <td style="text-align: left;">String (required)</td>
              <td style="text-align: left;">
                &mdash;
              </td>
              <td style="text-align: left;">
                &mdash;
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">theme</code>
              </td>
              <td style="text-align: left;">Checkbox theme</td>
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
                <code class="highlighter">variant</code>
              </td>
              <td style="text-align: left;">Checkbox variant</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">indeterminate</code> or unassigned
              </td>
              <td style="text-align: left;">
                &mdash;
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">size</code>
              </td>
              <td style="text-align: left;">Sizes of checbox</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">sm</code>,
                <code class="highlighter">lg</code>
              </td>
              <td style="text-align: left;">
                &mdash;
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">position</code>
              </td>
              <td style="text-align: left;">Option to fit checkbox width to its parent width</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">inline</code>,
                <code class="highlighter">block</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">block</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">checked</code>
              </td>
              <td style="text-align: left;">Checked state of checkbox</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">false</td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">disabled</code>
              </td>
              <td style="text-align: left;">Disabled state of checkbox</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">false</td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">list</code>
              </td>
              <td style="text-align: left;">Nested checkbox list</td>
              <td style="text-align: left;">Array of checkbox items</td>
              <td style="text-align: left;">
                <code class="highlighter">
                  ["item-1", "item-2", { value: "item-3", checked: true, disabled: false },...]
                </code>
              </td>
              <td style="text-align: left;">&mdash;</td>
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
                <code class="highlighter">@toggleChanges</code>
              </td>
              <td style="text-align: left;">Triggered when state changes within the list or single item checkbox.</td>
              <td style="text-align: left;">
                <code class="highlighter">list</code>
                - checkbox items w/ the latest state changes
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
                  <code class="highlighter">default</code>
                </td>
                <td style="text-align: left;">Checkbox label</td>
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
  name: 'CheckboxApi',
  components: {
    TabContent,
  },
};
</script>
