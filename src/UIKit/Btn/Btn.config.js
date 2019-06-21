import { APP_NAME } from '../config';

export const COMPONENT_NAME = 'Btn';
export const BTN_CLASS_NAME = 'eduk-btn';
export const BTN_CLASS_DISABLED = 'disabled';

export const TEXT_IS_REQUIRED = `${APP_NAME} ${COMPONENT_NAME}: prop 'text' is required`;

/** Button Variants */
export const AVAILABLE_VARIANTS = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'danger',
  'info',
  'light',
  'dark',
];
export const VARIANT_DOESNT_EXISTS = `${APP_NAME} ${COMPONENT_NAME}: prop 'variant' provided doesn't exists. 
Here are the list of available variants: ${AVAILABLE_VARIANTS.join(', ')}.
`;

/** Button Sizes */
export const AVAILABLE_SIZES = [
  'sm',
  'lg',
];
export const SIZE_DOESNT_EXISTS = `${APP_NAME} ${COMPONENT_NAME}: prop 'size' provided doesn't exists`;
