<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table scollable">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th class="" style="width: 190px;">
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
              <td style="max-width: 190px;">
                <code class="highlighter">block</code>
              </td>
              <td style="text-align: left;">Option to fit button width to its parent width</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">horizontal</code>
              </td>
              <td style="text-align: left;">Stack content horizontally</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">horizontalInvert</code>
              </td>
              <td style="text-align: left;">Invert card content and featured image position</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">actions</code>
              </td>
              <td style="text-align: left;">Show like and share action</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">actionsBaseline</code>
              </td>
              <td style="text-align: left;">Align action at the bottom</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">elevated</code>
              </td>
              <td style="text-align: left;">Adds shadow for elevated effect</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">noPadding</code>
              </td>
              <td style="text-align: left;">Removes default content padding</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">badge</code>
              </td>
              <td style="text-align: left;">Adds badge in featured image</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">featuredImg</code>
              </td>
              <td style="text-align: left;">Card featured image</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">bgImage</code>
              </td>
              <td style="text-align: left;">Card background image</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">
                  false
                </code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 190px;">
                <code class="highlighter">loading</code>
              </td>
              <td style="text-align: left;">Adds a loading animation</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
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
                <code class="highlighter">@share</code>
              </td>
              <td style="text-align: left;">Triggered on share</td>
              <td style="text-align: left;">
                <code class="highlighter">event</code>
                - Native event action information
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">@like</code>
              </td>
              <td style="text-align: left;">Triggered when like state changes</td>
              <td style="text-align: left;">
                <code class="highlighter">value</code>
                - Boolean value
              </td>
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
                  <code class="highlighter">header</code>
                </td>
                <td style="text-align: left;">Content for the Card header</td>
              </tr>
              <tr>
                <td style="max-width: 140px;">
                  <code class="highlighter">content</code>
                </td>
                <td style="text-align: left;">Content for the Card</td>
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
  name: 'CardApi',
  components: {
    TabContent,
  },
};
</script>
