import { FormFieldWrapper } from '../form-field-wrapper/FormFieldWrapper.component';

export interface InputProps {
  /**
   * The value of the input
   */
  value?: string;
  /**
   * function to call when the value changes
   * @param {string} value
   */
  onChange?: (value: string) => void;
  /**
   * The label for the input
   */
  label?: string;
}

export function Input ({ value, onChange, label }: InputProps) {
  return (
    <FormFieldWrapper label={label} htmlFor="input">
      <input
        id="input"
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-[1px] border-secondary rounded-md"
      />
    </FormFieldWrapper>
  );
}
