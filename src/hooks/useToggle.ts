import { useState, useCallback } from 'react';

export interface UseToggleOptions {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
}

export const useToggle = (options: UseToggleOptions = {}) => {
  const { initialValue = false, onChange } = options;
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => {
      const newValue = !prev;
      onChange?.(newValue);
      return newValue;
    });
  }, [onChange]);

  const setTrue = useCallback(() => {
    setValue(true);
    onChange?.(true);
  }, [onChange]);

  const setFalse = useCallback(() => {
    setValue(false);
    onChange?.(false);
  }, [onChange]);

  return { value, toggle, setTrue, setFalse };
};
