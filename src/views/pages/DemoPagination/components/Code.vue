<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Pagination</h2>
    <section class="well demo-pagination__code">
      <Pagination class="eduk-u-mb-3" :pageCount="20" :pageSize="10" :maxPages="3" @pageChanged="handler"/>
      <Pagination :pageCount="20" :pageSize="10" :maxPages="3" @pageChanged="handler" contained/>
    </section>
    <h3 class="eduk-h3 eduk-u-mb-3">HTML Structure</h3>
    <section class="well">
      <code class="language-html">
        &#x3C;Pagination :pageCount=&#x22;20&#x22; :pageSize=&#x22;10&#x22; :maxPages=&#x22;3&#x22; @pageChanged=&#x22;handler&#x22; contained/&#x3E;
      </code>
      <br />
      <code class="language-html">
        &#x3C;Pagination :pageCount=&#x22;20&#x22; :pageSize=&#x22;10&#x22; :maxPages=&#x22;3&#x22; @pageChanged=&#x22;handler&#x22;/&#x3E;
      </code>
    </section>
    <h3 class="eduk-h3 eduk-u-mb-3">Variations</h3>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Basic Text Only pagination</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Previous or Back should be disabled on the first page and Next should be disabled when user is on the last page.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <Pagination class="eduk-u-mb-3" :pageCount="20"/>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Pagination :pageCount=&quot;20&quot;/&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-u-mb-3 eduk-pagination&quot;&gt;
            &lt;ul class=&quot;eduk-pagination__page-list&quot;&gt;
              &lt;li class=&quot;eduk-pagination__page-item eduk-pagination__page-item--disabled&quot;&gt;
                Prev
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item active&quot;&gt;
                1
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                2
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                3
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__dots&quot;&gt;
                ...
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                20
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                Next
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Contained pagination</h5>
    <Preview>
      <template slot="example">
        <div>
          <Pagination :pageCount="20" contained/>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Pagination :pageCount=&quot;20&quot; contained/&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-pagination eduk-pagination--contained&quot;&gt;
            &lt;ul class=&quot;eduk-pagination__page-list&quot;&gt;
              &lt;li class=&quot;eduk-pagination__page-item eduk-pagination__page-item--disabled&quot;&gt;
                &lt;i class=&quot;fa fa-chevron-left&quot;&gt;&lt;/i&gt;
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item active&quot;&gt;
                1
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                2
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                3
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__dots&quot;&gt;
                ...
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                20
              &lt;/li&gt;
              &lt;li class=&quot;eduk-pagination__page-item&quot;&gt;
                &lt;i class=&quot;fa fa-chevron-right&quot;&gt;&lt;/i&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Pagination from '@/UIKit/Pagination/Pagination.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'Code',
  components: {
    Pagination,
    Preview,
  },
  methods: {
    handler(pagination) {
      return pagination;
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-pagination {
  &__code {
    display: flex;
    flex-direction: column;
  }
}
</style>
