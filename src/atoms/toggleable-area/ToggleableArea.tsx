import { ReactNode, useState } from 'react';

interface ToggleableAreaProps {
  toggle: (showArea: () => void) => ReactNode;
  toggledArea: (hideArea: () => void) => ReactNode;
}
export function ToggleableArea({toggle, toggledArea}: ToggleableAreaProps) {
  const [show, setShow] = useState(false);
  return <>
    {toggle(() => setShow(true))}
    {show && toggledArea(() => setShow(false))}
  </>
}
