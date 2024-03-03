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
    <div className="flex flex-col">
      <label htmlFor="input" className="text-md mb-1">
        {label}
      </label>
      <input
        id="input"
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-[1px] border-secondary rounded-md"
      />
    </div>
  );
}
