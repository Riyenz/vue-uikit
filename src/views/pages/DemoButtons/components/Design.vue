<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Button</h2>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Allow users to take actions, and make choices, with a single click or
      tap.<br />Buttons can contain a combination of a clear label and an icon
      while links are usually text.
    </p>
    <section class="well">
      <Btn>Primary</Btn>
      <Btn outline>Outlined</Btn>
    </section>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-0">
      They are usually placed throughout your User Interface, typically in places like:
    </p>
    <ul class="eduk-u-mb-4 eduk-u-mt-0">
      <li class="eduk-text eduk-u-text-semi-bold eduk-u-mb-0">Modals</li>
      <li class="eduk-text eduk-u-text-semi-bold eduk-u-mb-0">Forms</li>
      <li class="eduk-text eduk-u-text-semi-bold eduk-u-mb-0">Cards</li>
      <li class="eduk-text eduk-u-text-semi-bold eduk-u-mb-0">Sidebars</li>
      <li class="eduk-text eduk-u-text-semi-bold eduk-u-mb-0">Header Navbars</li>
    </ul>
    <h3 class="eduk-h3 eduk-u-mb-3">Types</h3>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">contained (highest emphasis)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Contained buttons have more emphasis, as they use a color fill and
      sometimes shadow (depends on the use case). Usually used for <a>primary
      buttons</a>.
    </p>
    <div class="eduk-u-mb-3">
      <Btn>Primary</Btn>
    </div>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Outlined (Medium Emphasis)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Outlined buttons are used for more emphasis than text buttons due
      to the stroke or ghost outline used. Typically indicate actions that
      are important but not the primary action on a page. Usually used for
      normal state of <a>secondary buttons</a>.
    </p>
    <div class="eduk-u-mb-3">
      <Btn outline>Outlined</Btn>
    </div>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Text link (Lowest Emphasis)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Text buttons are typically used for less important actions.
    </p>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Icon (Mobile, Limited Spaces or to add Support)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Icons are usually used for mobile or on limited spaces. It can also be used to support contained buttons to convey clearer action or meaning.
    </p>
    <h3 class="eduk-h3 eduk-u-mb-3">Variations</h3>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Primary Buttons (Eduk-PrimaryBtn)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      To draw attention to an action on an application form, or highlight the
      strongest call to action on a page. Primary buttons should only appear
      once per screen. Not every screen requires a primary button.
    </p>
  </div>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'Design',
  components: {
    Btn,
  },
};
</script>
