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
  maxLength?: number;
  type?: string;
}

export function Input ({ value, onChange, label, maxLength = 255, type = 'text' }: InputProps) {
  return (
    <FormFieldWrapper label={label} htmlFor="input">
      <input
        id="input"
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-[1px] border-secondary rounded-md"
      />
    </FormFieldWrapper>
  );
}
