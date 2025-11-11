import {ReactNode, useEffect} from 'react';
import {Portal} from '../portal/Portal.component.tsx';

interface ModalProps {
  /**
   * Is the modal open?
   */
  isOpen: boolean;
  /**
   * Function to call when the modal should close
   */
  onClose: () => void;
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal content
   */
  children: ReactNode;
  /**
   * How large should the modal be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Should clicking the overlay close the modal?
   */
  closeOnOverlayClick?: boolean;
  /**
   * Should pressing ESC close the modal?
   */
  closeOnEsc?: boolean;
}

function getSizeClasses(size: string): string {
  if (size === 'small') {
    return 'max-w-md';
  }
  if (size === 'large') {
    return 'max-w-4xl';
  }
  return 'max-w-2xl';
}

/**
 * Modal component for displaying content in an overlay
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen || !closeOnEsc) {
      return;
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, closeOnEsc, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <div
          className={[
            'bg-white',
            'rounded-lg',
            'shadow-xl',
            'w-full',
            getSizeClasses(size),
            'max-h-[90vh]',
            'overflow-hidden',
            'flex',
            'flex-col',
          ].join(' ')}
          onClick={(e) => e.stopPropagation()}
        >
          {title && (
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
          )}
          <div className="px-6 py-4 overflow-y-auto flex-1">
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
