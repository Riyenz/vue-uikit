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
                <code class="highlighter">image</code>
              </td>
              <td style="text-align: left;">Item list image</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">Any valid URL</td>
              <td style="text-align: left;">
                <code class="highlighter">/assets/img/logo-placeholder.png</code>
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
                  <code class="highlighter">header</code>
                </td>
                <td style="text-align: left;">Content for the header section</td>
              </tr>
            </tbody>
            <tbody class="eduk-table__tbody">
              <tr>
                <td style="max-width: 140px;">
                  <code class="highlighter">description</code>
                </td>
                <td style="text-align: left;">Content for the description section</td>
              </tr>
            </tbody>
            <tbody class="eduk-table__tbody">
              <tr>
                <td style="max-width: 140px;">
                  <code class="highlighter">actions</code>
                </td>
                <td style="text-align: left;">Content for the actions section</td>
              </tr>
            </tbody>
            <tbody class="eduk-table__tbody">
              <tr>
                <td style="max-width: 140px;">
                  <code class="highlighter">status</code>
                </td>
                <td style="text-align: left;">Content for the status section</td>
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
  name: 'ItemListApi',
  components: {
    TabContent,
  },
};
</script>
