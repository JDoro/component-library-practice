import { useState } from "react";

export interface TypeaheadProps {
  /**
   * The value of the input
   */
  value?: string;
  /**
   * The options to show in the dropdown
   */
  options: string[];
  /**
   * The function to call when the value changes
   */
  onChange: (value: string) => void;
  /**
   * The function to call when an option is selected
   */
  onSelect: (value: string) => void;
}

export function Typeahead({ value, options, onChange, onSelect }: TypeaheadProps) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="cursor-pointer text-accent bg-base" >
      <input
        className="inline-block w-full bg-base"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setShowOptions(true)}
      />
      {showOptions && (
      <ul className="absolute bg-base w-full">
        {options.map((option) => (
          <li key={option} onClick={() => onSelect(option)}>
            {option}
          </li>
        ))}
      </ul>)}
    </div>
  );
}
