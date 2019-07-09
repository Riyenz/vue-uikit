<template>
  <div class="basic-itemlist">
    <h3 class="eduk-h3 eduk-u-mb-3">Basic Item List</h3>
    <Preview wide>
      <template slot="example">
        <Itemlist>
          <template slot="header">
            <h4 class="eduk-head">
              Aliqua deserunt sint fugiat voluptate sint pariatur ex cupidatat exercitation pariatur quis ad.
            </h4>
          </template>
          <template slot="description">
            <p class="eduk-text">
              Reprehenderit ut elit excepteur officia. Aliqua dolor veniam culpa non officia laboris fugiat magna ipsum.
              Nostrud voluptate eiusmod veniam ea esse. Eu laborum sint pariatur voluptate pariatur.
            </p>
          </template>
          <template slot="actions">
            <Btn noMargin outline class="eduk-u-d-none eduk-u-d-lg-block">
              <font-awesome-icon icon="heart" class="eduk-u-mr-2 eduk-u-mt-1"/>
              Saved
            </Btn>
            <a href="#" class="eduk-link eduk-link--primary">
              <font-awesome-icon :icon="['far', 'heart']" size="lg" class="eduk-u-d-lg-none"/>
            </a>
          </template>
        </Itemlist>
      </template>
      <template slot="vue-code">
        <code class="language-html">
&lt;Itemlist&gt;
  &lt;template slot=&quot;header&quot;&gt;
    &lt;h4 class=&quot;eduk-head&quot;&gt;
      Aliqua deserunt sint fugiat voluptate sint pariatur ex cupidatat exercitation pariatur quis ad.
    &lt;/h4&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;description&quot;&gt;
    &lt;p class=&quot;eduk-text&quot;&gt;
      Reprehenderit ut elit excepteur officia. Aliqua dolor veniam culpa non officia laboris fugiat magna ipsum.
      Nostrud voluptate eiusmod veniam ea esse. Eu laborum sint pariatur voluptate pariatur.
    &lt;/p&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;actions&quot;&gt;
    &lt;Btn noMargin outline class=&quot;eduk-u-d-none eduk-u-d-lg-block&quot;&gt;
      &lt;font-awesome-icon icon=&quot;heart&quot; class=&quot;eduk-u-mr-2 eduk-u-mt-1&quot;/&gt;
      Saved
    &lt;/Btn&gt;
    &lt;a href=&quot;#&quot; class=&quot;eduk-link eduk-link--primary&quot;&gt;
      &lt;font-awesome-icon :icon=&quot;[&apos;far&apos;, &apos;heart&apos;]&quot; size=&quot;lg&quot; class=&quot;eduk-u-d-lg-none&quot;/&gt;
    &lt;/a&gt;
  &lt;/template&gt;
&lt;/Itemlist&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&lt;div class=&quot;eduk-itemlist&quot;&gt;
  &lt;div class=&quot;eduk-itemlist__img&quot; style=&apos;background-image: url(&quot;/img/logo-placeholder.png&quot;);&apos;&gt;&lt;/div&gt;
  &lt;div class=&quot;eduk-itemlist__header&quot;&gt;
    &lt;h4 class=&quot;eduk-head&quot;&gt;
      Aliqua deserunt sint fugiat voluptate sint pariatur ex cupidatat
      exercitation pariatur quis ad.
    &lt;/h4&gt;
  &lt;/div&gt;
  &lt;div class=&quot;eduk-itemlist__description&quot;&gt;
    &lt;p class=&quot;eduk-text&quot;&gt;
      Reprehenderit ut elit excepteur officia. Aliqua dolor veniam culpa non
      officia laboris fugiat magna ipsum. Nostrud voluptate eiusmod veniam ea
      esse. Eu laborum sint pariatur voluptate pariatur.
    &lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;eduk-itemlist__actions eduk-itemlist__actions--full-row&quot;&gt;
    &lt;button class=&quot;eduk-u-d-none eduk-u-d-lg-block eduk-btn eduk-btn-primary-outline&quot;&gt;
      &lt;i class=&quot;eduk-u-mr-2 eduk-u-mt-1 fa-heart&quot;/&gt;
      Saved
    &lt;/button&gt;
    &lt;a href=&quot;#&quot; class=&quot;eduk-link eduk-link--primary&quot;&gt;
      &lt;i class=&quot;eduk-u-d-lg-none fa-heart fa-lg&quot;/&gt;
    &lt;/a&gt;
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

export default {
  name: 'BasicItemlist',
  components: {
    Preview,
    Itemlist,
    Btn,
  },
};
</script>
