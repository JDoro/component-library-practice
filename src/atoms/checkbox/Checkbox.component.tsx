import {
  FORM_INPUT_CONTAINER_CLASSES,
  FORM_INPUT_LABEL_CLASSES,
  getCheckboxClasses,
} from '../../utils/form-input-classes';

export interface CheckboxProps {
  /**
   * The id of the checkbox
   */
  id?: string;
  /**
   * The value of the checkbox
   */
  value?: boolean;
  /**
   * function to call when the value changes
   * @param {boolean} value
   */
  onChange?: (value: boolean) => void;
  /**
   * The label for the checkbox
   */
  label?: string;
}

export function Checkbox ({ id = 'checkbox', value, onChange, label }: CheckboxProps) {
  return (
    <div className={FORM_INPUT_CONTAINER_CLASSES}>
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange?.(e.target.checked)}
        className={getCheckboxClasses()}
      />
      <label className={FORM_INPUT_LABEL_CLASSES} htmlFor={id}>{label}</label>
    </div>
  );
}
