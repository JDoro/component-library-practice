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
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange?.(e.target.checked)}
        className="h-5 w-5 rounded-md border-[1px] border-secondary"
      />
      <label className="ml-2" htmlFor={id}>{label}</label>
    </div>
  );
}
