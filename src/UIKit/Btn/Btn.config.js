import { APP_NAME, AVAILABLE_VARIANTS } from '../config';

export const COMPONENT_NAME = 'Btn';
export const BTN_CLASS_NAME = 'eduk-btn';
export const BTN_BLOCK_CLASS_NAME = 'eduk-btn--block';
export const BTN_LOADING_CLASS_NAME = 'eduk-btn--loading';
export const BTN_CLASS_DISABLED = 'disabled';

export const VARIANT_DOESNT_EXISTS = `${APP_NAME} ${COMPONENT_NAME}: prop 'variant' provided doesn't exists. 
Here are the list of available variants: ${AVAILABLE_VARIANTS.join(', ')}.
`;

/** Button Sizes */
export const AVAILABLE_SIZES = [
  'sm',
  'lg',
];
export const SIZE_DOESNT_EXISTS = `${APP_NAME} ${COMPONENT_NAME}: prop 'size' provided doesn't exists`;
