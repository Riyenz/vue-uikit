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
                <code class="highlighter">variant</code>
              </td>
              <td style="text-align: left;">Btn variant</td>
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
                <code class="highlighter">size</code>
              </td>
              <td style="text-align: left;">Sizes of button</td>
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
                <code class="highlighter">link</code>
              </td>
              <td style="text-align: left;">Converts button to anchor tag with link attachment</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                Any valid URL
              </td>
              <td style="text-align: left;">
                &mdash;
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">disabled</code>
              </td>
              <td style="text-align: left;">Disabled state of button</td>
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
                <code class="highlighter">outline</code>
              </td>
              <td style="text-align: left;">Outlined state of button</td>
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
                <code class="highlighter">block</code>
              </td>
              <td style="text-align: left;">Option to fit button width to its parent width</td>
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
                <code class="highlighter">loading</code>
              </td>
              <td style="text-align: left;">Adds a loading animation to the button</td>
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
                Arguments
              </th>
            </tr>
          </thead>
          <tbody class="eduk-table__tbody">
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">@click</code>
              </td>
              <td style="text-align: left;">Button click event</td>
              <td style="text-align: left;">
                <code class="highlighter">event</code>
                - Native event action information
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
                <td style="text-align: left;">content for the button</td>
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
  name: 'ButtonApi',
  components: {
    TabContent,
  },
};
</script>
