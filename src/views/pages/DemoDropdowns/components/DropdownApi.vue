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
              <td style="max-width: 140px;">
                <code class="highlighter">options</code>
              </td>
              <td style="text-align: left;">Dropdown options</td>
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
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">title</code>
              </td>
              <td style="text-align: left;">Dropdown button text</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">placement</code>
              </td>
              <td style="text-align: left;">Dictates dropdown options visible position</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">left</code>,
                <code class="highlighter">center</code>,
                <code class="highlighter">right</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">left</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">size</code>
              </td>
              <td style="text-align: left;">Sizes of dropdown</td>
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
              <td style="max-width: 140px;">
                <code class="highlighter">icon</code>
              </td>
              <td style="text-align: left;">Add icon in dropdown</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                Name of icon from <a href="https://github.com/FortAwesome/vue-fontawesome" target="_blank">font awesome</a> library.
              </td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">iconPlacement</code>
              </td>
              <td style="text-align: left;">Dictate icon position</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">left</code>,
                <code class="highlighter">right</code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">left</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">iconTrigger</code>
              </td>
              <td style="text-align: left;">Trigger dropdown options by clicking the icon only</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">
                  false
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">searchable</code>
              </td>
              <td style="text-align: left;">Adds search for dropdown options</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">
                  false
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">outline</code>
              </td>
              <td style="text-align: left;">Outlined state of dropdown</td>
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
                <code class="highlighter">@select</code>
              </td>
              <td style="text-align: left;">Triggered when an option is selected.</td>
              <td style="text-align: left;">
                <code class="highlighter">option</code>
                - dropdown option object
              </td>
            </tr>
            <tr>
              <td style="max-width: 180px;">
                <code class="highlighter">@action</code>
              </td>
              <td style="text-align: left;">
                Tiggered when CTA button is clicked.<br /><i>Note: Only available when an
                <code class="highlighter">icon</code> is provided and
                <code class="highlighter">iconTrigger</code> is set to
                <code class="highlighter">true</code></i>.
              </td>
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
  name: 'DropdownApi',
  components: {
    TabContent,
  },
};
</script>
