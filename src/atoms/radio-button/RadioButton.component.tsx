import {
  FORM_INPUT_CONTAINER_CLASSES,
  FORM_INPUT_LABEL_CLASSES,
  getRadioClasses,
} from '../../utils/form-input-classes';

export interface RadioButtonProps {
  /**
   * The id of the radio button
   */
  id?: string;
  /**
   * The name of the radio button group
   */
  name: string;
  /**
   * The value of the radio button
   */
  value: string;
  /**
   * Whether the radio button is checked
   */
  checked?: boolean;
  /**
   * Function to call when the radio button is selected
   * @param {string} value
   */
  onChange?: (value: string) => void;
  /**
   * The label for the radio button
   */
  label?: string;
}

export function RadioButton({
  id,
  name,
  value,
  checked,
  onChange,
  label,
}: RadioButtonProps) {
  const radioId = id || `radio-${name}-${value}`;

  return (
    <div className={FORM_INPUT_CONTAINER_CLASSES}>
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange?.(e.target.value)}
        className={getRadioClasses()}
      />
      <label className={FORM_INPUT_LABEL_CLASSES} htmlFor={radioId}>
        {label}
      </label>
    </div>
  );
}
