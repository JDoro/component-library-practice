import { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  /**
   * The current value of the combobox
   */
  value?: string;
  /**
   * The options to display in the dropdown
   */
  options: ComboboxOption[];
  /**
   * Function called when the value changes
   */
  onChange?: (value: string) => void;
  /**
   * Function called when an option is selected
   */
  onSelect?: (option: ComboboxOption) => void;
  /**
   * Placeholder text for the input
   */
  placeholder?: string;
  /**
   * Whether the combobox is disabled
   */
  disabled?: boolean;
  /**
   * Whether to allow custom values not in the options list
   */
  allowCustomValue?: boolean;
  /**
   * Whether the combobox is in a loading state
   */
  loading?: boolean;
  /**
   * Label for the combobox
   */
  label?: string;
  /**
   * Size variant of the combobox
   */
  size?: 'small' | 'medium' | 'large';
}

function getSizeClasses(size: string): string {
  if (size === 'small') {
    return 'text-sm px-3 py-2';
  }
  if (size === 'large') {
    return 'text-lg px-4 py-3';
  }
  return 'text-base px-3 py-2';
}

/**
 * A combobox component that combines an input field with a dropdown list of options
 */
export const Combobox = ({
  value = '',
  options = [],
  onChange,
  onSelect,
  placeholder = 'Select or type...',
  disabled = false,
  allowCustomValue = true,
  loading = false,
  label,
  size = 'medium',
}: ComboboxProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Filter options based on input value
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Update input value when prop value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    setFocusedIndex(-1);
    onChange?.(newValue);
  };

  // Handle option selection
  const handleOptionSelect = (option: ComboboxOption) => {
    setInputValue(option.label);
    setIsOpen(false);
    setFocusedIndex(-1);
    onChange?.(option.value);
    onSelect?.(option);
    inputRef.current?.focus();
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true);
      setFocusedIndex(0);
      e.preventDefault();
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleOptionSelect(filteredOptions[focusedIndex]);
        } else if (allowCustomValue && inputValue.trim()) {
          setIsOpen(false);
          onChange?.(inputValue);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  // Handle input focus
  const handleInputFocus = () => {
    if (!disabled) {
      setIsOpen(true);
    }
  };

  // Handle input blur
  const handleInputBlur = (e: React.FocusEvent) => {
    // Don't close if clicking on an option
    if (listRef.current?.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const sizeClasses = getSizeClasses(size);

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={[
            'w-full border border-gray-300 rounded-md shadow-sm',
            'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'disabled:bg-gray-100 disabled:cursor-not-allowed',
            sizeClasses,
          ].join(' ')}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          role="combobox"
        />
        
        {/* Dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {loading ? (
            <svg className="w-4 h-4 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <svg 
              className={`w-4 h-4 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </div>

      {/* Dropdown list */}
      {isOpen && !disabled && (
        <ul
          ref={listRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {filteredOptions.length === 0 ? (
            <li className="px-3 py-2 text-gray-500 text-sm">
              {loading ? 'Loading...' : 'No options found'}
            </li>
          ) : (
            filteredOptions.map((option, index) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className={[
                  'cursor-pointer px-3 py-2 text-sm',
                  'hover:bg-blue-50',
                  focusedIndex === index ? 'bg-blue-100 text-blue-900' : 'text-gray-900',
                ].join(' ')}
                role="option"
                aria-selected={focusedIndex === index}
              >
                {option.label}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};