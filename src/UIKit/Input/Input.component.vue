<template>
  <div :class="inputClass">
    <label
      v-if="!!label"
      class="eduk-input__label eduk-u-mb-1"
      :for="id"
    >
      {{label}}
    </label>
    <div class="eduk-input__flex">
      <div slot-scope="test">{{test.feedback}}</div>
      <slot name="prefix" v-if="$slots.prefix" />
      <div class="eduk-input__icon">
        <textarea
          v-if="rows > 1"
          :rows="rows"
          :class="inputFieldClass"
          :placeholder="placeholder"
          :disabled="disabled"
          :id="id"
          @change="inputChange"
        />
        <input
          :class="inputFieldClass"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :id="id"
          @change="inputChange"
          v-else
        />
        <span class="fa-icon" v-if="icon">
          <font-awesome-icon :icon="icon" />
        </span>
        <span class="fa-validation" v-if="feedback && !feedbackMsg">
          <font-awesome-icon :icon="iconValidationName" />
        </span>
      </div>
      <slot name="suffix" v-if="$slots.suffix" />
    </div>
    <p
      class="eduk-input__msg eduk-u-mt-2"
      v-if="!!feedback && !!feedbackMsg"
    >
      <font-awesome-icon :icon="iconMessageName" />
      <span class="eduk-u-ml-1">{{feedbackMsg}}</span>
    </p>
  </div>
</template>

<script>
import {
  INPUT_CLASS_NAME,
  INPUT_FIELD_CLASS_NAME,
  INPUT_FEEDBACK_DEFAULT,
  INPUT_FEEDBACK_SUCCESS,
  INPUT_FEEDBACK_ERROR,
  INPUT_FEEDBACK_STATES,
} from './Input.config';

export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    feedback: {
      type: String,
      validator: (value) => {
        return INPUT_FEEDBACK_STATES.includes(value);
      },
    },
    feedbackMsg: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    inputClass() {
      if (this.feedback) {
        return {
          [INPUT_CLASS_NAME]: true,
          [`${INPUT_CLASS_NAME}--${this.feedback}`]: true,
        };
      }

      return {
        [INPUT_CLASS_NAME]: true,
      };
    },
    inputFieldClass() {
      return {
        [INPUT_FIELD_CLASS_NAME]: true,
        [`${INPUT_FIELD_CLASS_NAME}--pl`]: !!this.icon,
        [`${INPUT_FIELD_CLASS_NAME}--pr`]: !!this.feedback,
      };
    },
    iconValidationName() {
      if (this.feedback) {
        switch (this.feedback) {
        case INPUT_FEEDBACK_SUCCESS:
          return 'check';
        case INPUT_FEEDBACK_ERROR:
          return 'times';
        case INPUT_FEEDBACK_DEFAULT:
        default:
          return '';
        }
      }

      return '';
    },
    iconMessageName() {
      if (this.feedback) {
        switch (this.feedback) {
        case INPUT_FEEDBACK_SUCCESS:
          return 'check-circle';
        case INPUT_FEEDBACK_ERROR:
          return 'times-circle';
        case INPUT_FEEDBACK_DEFAULT:
        default:
          return 'info-circle';
        }
      }

      return '';
    },
  },
  methods: {
    inputChange(ev) {
      this.$emit('change', ev);
    },
  },
};
</script>
