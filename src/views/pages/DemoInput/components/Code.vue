<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Input Field</h2>
    <p class="eduk-text eduk-u-mb-4">An input is a field used to elicit a response from a user</p>
    <Basic />
    <BasicWithIcon />
    <FormItem />
    <TextArea />
    <WithActions />
    <InputApi />
  </div>
</template>

<script>
import Basic from './Basic.vue';
import BasicWithIcon from './BasicWithIcon.vue';
import FormItem from './FormItem.vue';
import WithActions from './WithActions.vue';
import TextArea from './TextArea.vue';
import InputApi from './InputApi.vue';

export default {
  name: 'Code',
  components: {
    Basic,
    BasicWithIcon,
    FormItem,
    WithActions,
    TextArea,
    InputApi,
  },
};
</script>
