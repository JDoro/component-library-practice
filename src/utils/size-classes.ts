/**
 * Size type for components that support small, medium, and large sizes
 */
export type Size = 'small' | 'medium' | 'large';

/**
 * Gets Tailwind CSS classes for a given size with customizable padding and text sizes
 * @param size - The size variant (small, medium, or large)
 * @param style - The style variant (default or compact)
 * @returns String of Tailwind CSS classes
 */
export function getSizeClasses(
  size: Size,
  style: 'default' | 'compact' = 'default'
): string {
  if (style === 'compact') {
    // Compact style used by Button component
    if (size === 'small') {
      return 'text-[12px] px-[16px] py-[10px]';
    }
    if (size === 'large') {
      return 'text-[16px] px-[24px] py-[12px]';
    }
    return 'text-[14px] px-[20px] py-[11px]';
  }

  // Default style used by Combobox and similar components
  if (size === 'small') {
    return 'text-sm px-3 py-1.5';
  }
  if (size === 'large') {
    return 'text-lg px-4 py-3';
  }
  return 'text-base px-3 py-2';
}
