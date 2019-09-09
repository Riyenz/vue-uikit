<template>
  <div class="basic-itemlist">
    <h3 class="eduk-h3 eduk-u-mb-3">Item List w/ Badge</h3>
    <Preview wide>
      <template slot="example">
        <Itemlist>
          <template slot="header">
            <h4 class="eduk-head">
              Eu id ut occaecat nostrud.
            </h4>
            <a href="#" class="eduk-link eduk-u-mb-2">
              Aliqua ipsum nulla.
            </a>
          </template>
          <template slot="description">
            <p class="eduk-text">
              Cillum consectetur elit aliquip exercitation consectetur qui fugiat et.
              Sit tempor laborum do ea ea eu laborum quis duis aliquip reprehenderit non quis pariatur.
              Ut esse cillum fugiat qui aliquip tempor qui.
            </p>
            <p class="eduk-text eduk-u-text-muted eduk-u-text-sm">
              Cupidatat consectetur qui aliquip enim.
            </p>
          </template>
          <template slot="status">
            <Badge variant="success" class="eduk-u-mb-3">Availability: Open for Applications</Badge>
          </template>
          <template slot="actions">
            <div class="eduk-u-d-flex eduk-u-flex-column eduk-u-justify-content-stretch">
              <Btn noMargin class="eduk-u-d-none eduk-u-d-lg-block">
                View Result
              </Btn>
              <Btn noMargin outline class="eduk-u-d-none eduk-u-d-lg-block eduk-u-mt-2">
                View Details
              </Btn>
            </div>
          </template>
        </Itemlist>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Itemlist&gt;
            &lt;template slot=&quot;header&quot;&gt;
              &lt;h4 class=&quot;eduk-head&quot;&gt;
                Eu id ut occaecat nostrud.
              &lt;/h4&gt;
              &lt;a href=&quot;#&quot; class=&quot;eduk-link eduk-u-mb-2&quot;&gt;
                Aliqua ipsum nulla.
              &lt;/a&gt;
            &lt;/template&gt;
            &lt;template slot=&quot;description&quot;&gt;
              &lt;p class=&quot;eduk-text&quot;&gt;
                Cillum consectetur elit aliquip exercitation consectetur qui fugiat et.
                Sit tempor laborum do ea ea eu laborum quis duis aliquip reprehenderit non quis pariatur.
                Ut esse cillum fugiat qui aliquip tempor qui.
              &lt;/p&gt;
              &lt;p class=&quot;eduk-text eduk-u-text-muted eduk-u-text-sm&quot;&gt;
                Cupidatat consectetur qui aliquip enim.
              &lt;/p&gt;
            &lt;/template&gt;
            &lt;template slot=&quot;status&quot;&gt;
              &lt;Badge variant=&quot;success&quot; class=&quot;eduk-u-mb-3&quot;&gt;Availability: Open for Applications&lt;/Badge&gt;
            &lt;/template&gt;
            &lt;template slot=&quot;actions&quot;&gt;
              &lt;div class=&quot;eduk-u-d-flex eduk-u-flex-column eduk-u-justify-content-stretch&quot;&gt;
                &lt;Btn noMargin class=&quot;eduk-u-d-none eduk-u-d-lg-block&quot;&gt;
                  View Result
                &lt;/Btn&gt;
                &lt;Btn noMargin outline class=&quot;eduk-u-d-none eduk-u-d-lg-block eduk-u-mt-2&quot;&gt;
                  View Details
                &lt;/Btn&gt;
              &lt;/div&gt;
            &lt;/template&gt;
          &lt;/Itemlist&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-itemlist&quot;&gt;
            &lt;div class=&quot;eduk-itemlist__img&quot;
            style=&apos;background-image: url(&quot;/img/logo-placeholder.png&quot;);&apos;&gt;&lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__header&quot;&gt;
              &lt;h4 class=&quot;eduk-head&quot;&gt;
                Eu id ut occaecat nostrud.
              &lt;/h4&gt;&lt;a href=&quot;#&quot; class=&quot;eduk-link eduk-u-mb-2&quot;&gt;
                Aliqua ipsum nulla.
              &lt;/a&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__description&quot;&gt;
              &lt;p class=&quot;eduk-text&quot;&gt;
                Cillum consectetur elit aliquip exercitation consectetur qui fugiat et.
                Sit tempor laborum do ea ea eu laborum quis duis aliquip reprehenderit non quis pariatur.
                Ut esse cillum fugiat qui aliquip tempor qui.
              &lt;/p&gt;
              &lt;p class=&quot;eduk-text eduk-u-text-muted eduk-u-text-sm&quot;&gt;
                Cupidatat consectetur qui aliquip enim.
              &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__actions&quot;&gt;
              &lt;div class=&quot;eduk-u-d-flex eduk-u-flex-column eduk-u-justify-content-stretch&quot;&gt;
                &lt;button class=&quot;eduk-u-d-none eduk-u-d-lg-block eduk-btn eduk-btn--primary&quot;&gt;
                  View Result
                &lt;/button&gt;
                &lt;button class=&quot;eduk-u-d-none eduk-u-d-lg-block eduk-u-mt-2 eduk-btn eduk-btn--primary eduk-btn--outlined&quot;&gt;
                  View Details
                &lt;/button&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__status&quot;&gt;
              &lt;div class=&quot;eduk-u-mb-3 eduk-badge eduk-badge--success&quot;&gt;Availability: Open for Applications&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Itemlist from '@/UIKit/Itemlist/Itemlist.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import Badge from '@/UIKit/Badge/Badge.component.vue';

export default {
  name: 'BadgeItemlist',
  components: {
    Preview,
    Itemlist,
    Btn,
    Badge,
  },
};
</script>
