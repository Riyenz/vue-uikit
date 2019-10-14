<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Blockquotes</h2>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      For quoting blocks of content from another source within your document.
    </p>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic</h3>
    <Basic />
    <h3 class="eduk-h3 eduk-u-mb-3">Blockquote with Image</h3>
    <WithImage />
    <h3 class="eduk-h3 eduk-u-mb-3">Blockquote with Image and Border</h3>
    <WithImageBorder />
    <h3 class="eduk-h3 eduk-u-mb-3">Compact</h3>
    <Compact />
    <h3 class="eduk-h3 eduk-u-mb-3">Others</h3>
    <CustomFooter />
  </div>
</template>

<script>
import Basic from './Basic.vue';
import WithImage from './WithImage.vue';
import WithImageBorder from './WithImageBorder.vue';
import Compact from './Compact.vue';
import CustomFooter from './CustomFooter.vue';

export default {
  name: 'Code',
  components: {
    Basic,
    WithImage,
    WithImageBorder,
    Compact,
    CustomFooter,
  },
};
</script>
