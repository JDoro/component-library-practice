import { FormFieldWrapper } from '../form-field-wrapper/FormFieldWrapper.component';

export interface TextAreaProps {
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
  /**
   * The maximum length of the input (prevent unbounded inputs)
   */
  maxLength?: number;
}

export function TextArea ({ value, onChange, label, maxLength = 1000 }: TextAreaProps) {
  return (
    <FormFieldWrapper label={label} htmlFor="textarea">
      <textarea
        id="textarea"
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-[1px] border-secondary rounded-md resize-none"
      />
    </FormFieldWrapper>
  );
}
