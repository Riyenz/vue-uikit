import { APP_NAME } from '../config';

export const COMPONENT_NAME = 'Ratings';
export const RATINGS_CLASS_NAME = 'eduk-ratings';
export const ERROR_MESSAGE = `${APP_NAME} ${COMPONENT_NAME}: this is a sample error message`;

/** Rating Sizes */
export const AVAILABLE_SIZES = [
  'sm',
  'lg',
];

export const INVALID_RATING = `${APP_NAME} ${COMPONENT_NAME}: prop 'rating' must not be greater than 5`;

export const SIZE_DOESNT_EXIST = `${APP_NAME} ${COMPONENT_NAME}: prop 'size' provided doesn't exists`;
