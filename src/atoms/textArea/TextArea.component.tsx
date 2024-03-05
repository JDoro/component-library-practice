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
}

export function TextArea ({ value, onChange, label }: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="textarea" className="text-md mb-1">
        {label}
      </label>
      <textarea
        id="textarea"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-[1px] border-secondary rounded-md resize-none"
      />
    </div>
  );
}
