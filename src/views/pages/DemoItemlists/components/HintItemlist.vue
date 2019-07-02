<template>
  <div class="basic-itemlist">
    <h3 class="eduk-u-text-muted">Item List w/ Company Link and Hint</h3>
    <Itemlist>
      <template slot="header">
        <h4 class="eduk-head">
          Ea dolore commodo sunt ut anim ex esse aliquip et.
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
      <template slot="actions">
        <a href="#" class="eduk-link eduk-link--primary">
          <font-awesome-icon :icon="['far', 'heart']" size="lg" class="eduk-u-d-lg-none"/>
        </a>
        <div class="eduk-u-d-none eduk-u-d-lg-flex eduk-u-flex-column eduk-u-justify-content-between">
          <Btn noMargin outline>
            <font-awesome-icon icon="heart" class="eduk-u-mr-2 eduk-u-mt-1"/>
            Saved
          </Btn>
          <Btn noMargin>
            Primary
          </Btn>
        </div>
      </template>
    </Itemlist>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &lt;Itemlist&gt;
          &lt;template slot=&quot;header&quot;&gt;
            &lt;h4 class=&quot;eduk-head&quot;&gt;
              Ea dolore commodo sunt ut anim ex esse aliquip et.
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
          &lt;template slot=&quot;actions&quot;&gt;
            &lt;a href=&quot;#&quot; class=&quot;eduk-link eduk-link--primary&quot;&gt;
              &lt;font-awesome-icon :icon=&quot;[&apos;far&apos;, &apos;heart&apos;]&quot; size=&quot;lg&quot; class=&quot;eduk-u-d-lg-none&quot;/&gt;
            &lt;/a&gt;
            &lt;div class=&quot;eduk-u-d-none eduk-u-d-lg-flex eduk-u-flex-column eduk-u-justify-content-between&quot;&gt;
              &lt;Btn noMargin outline&gt;
                &lt;font-awesome-icon icon=&quot;heart&quot; class=&quot;eduk-u-mr-2 eduk-u-mt-1&quot;/&gt;
                Saved
              &lt;/Btn&gt;
              &lt;Btn noMargin&gt;
                Primary
              &lt;/Btn&gt;
            &lt;/div&gt;
          &lt;/template&gt;
        &lt;/Itemlist&gt;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &lt;div class=&quot;eduk-itemlist&quot;&gt;
          &lt;div class=&quot;eduk-itemlist__img&quot; style=&apos;background-image: url(&quot;/img/logo-placeholder.png&quot;);&apos;&gt;&lt;/div&gt;
          &lt;div class=&quot;eduk-itemlist__header&quot;&gt;
            &lt;h4 class=&quot;eduk-head&quot;&gt;
              Ea dolore commodo sunt ut anim ex esse aliquip et.
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
          &lt;div class=&quot;eduk-itemlist__actions eduk-itemlist__actions--full-row&quot;&gt;
            &lt;a href=&quot;#&quot; class=&quot;eduk-link eduk-link--primary&quot;&gt;
              &lt;i class=&quot;eduk-u-d-lg-none fa-heart fa-lg&quot;/&gt;
            &lt;/a&gt;
            &lt;div class=&quot;eduk-u-d-none eduk-u-d-lg-flex eduk-u-flex-column eduk-u-justify-content-between&quot;&gt;
              &lt;button class=&quot;eduk-u-d-none eduk-u-d-lg-block eduk-btn eduk-btn-primary-outline&quot;&gt;
                &lt;i class=&quot;eduk-u-mr-2 eduk-u-mt-1 fa-heart&quot;/&gt;
                Saved
              &lt;/button&gt;
              &lt;button class=&quot;eduk-btn eduk-btn-primary&quot;&gt;
                Primary
              &lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
  </div>
</template>

<script>
import Itemlist from '@/UIKit/Itemlist/Itemlist.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'HintItemlist',
  components: {
    Itemlist,
    Btn,
  },
};
</script>
