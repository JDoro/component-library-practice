import { ReactNode } from 'react';

export interface FormFieldWrapperProps {
  /**
   * The label for the form field
   */
  label?: string;
  /**
   * The htmlFor attribute for the label (should match the input id)
   */
  htmlFor: string;
  /**
   * The form field element (input, textarea, etc.)
   */
  children: ReactNode;
}

/**
 * A wrapper component for form fields that provides consistent label styling
 */
export function FormFieldWrapper({ label, htmlFor, children }: FormFieldWrapperProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={htmlFor} className="text-md mb-1">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
