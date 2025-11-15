/**
 * Common Tailwind CSS classes for form inputs with labels
 */
export const FORM_INPUT_CONTAINER_CLASSES = 'flex items-center';

/**
 * Common Tailwind CSS classes for form input labels
 */
export const FORM_INPUT_LABEL_CLASSES = 'ml-2';

/**
 * Common Tailwind CSS classes for checkbox and radio inputs
 */
export const FORM_INPUT_BASE_CLASSES = 'h-5 w-5';

/**
 * Gets the complete classes for a checkbox input
 */
export function getCheckboxClasses(): string {
  return `${FORM_INPUT_BASE_CLASSES} rounded-md border-[1px] border-secondary`;
}

/**
 * Gets the complete classes for a radio input
 */
export function getRadioClasses(): string {
  return `${FORM_INPUT_BASE_CLASSES} border-[1px] border-secondary`;
}
