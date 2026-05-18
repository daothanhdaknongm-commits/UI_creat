export const colors = {
  primary: {
    50: 'var(--color-primary-50)',
    100: 'var(--color-primary-100)',
    200: 'var(--color-primary-200)',
    300: 'var(--color-primary-300)',
    400: 'var(--color-primary-400)',
    500: 'var(--color-primary-500)',
    600: 'var(--color-primary-600)',
    700: 'var(--color-primary-700)',
    800: 'var(--color-primary-800)',
    900: 'var(--color-primary-900)',
  },
  secondary: {
    50: 'var(--color-secondary-50)',
    100: 'var(--color-secondary-100)',
    200: 'var(--color-secondary-200)',
    300: 'var(--color-secondary-300)',
    400: 'var(--color-secondary-400)',
    500: 'var(--color-secondary-500)',
    600: 'var(--color-secondary-600)',
    700: 'var(--color-secondary-700)',
    800: 'var(--color-secondary-800)',
    900: 'var(--color-secondary-900)',
  },
  success: {
    50: 'var(--color-success-50)',
    100: 'var(--color-success-100)',
    200: 'var(--color-success-200)',
    300: 'var(--color-success-300)',
    400: 'var(--color-success-400)',
    500: 'var(--color-success-500)',
    600: 'var(--color-success-600)',
    700: 'var(--color-success-700)',
    800: 'var(--color-success-800)',
    900: 'var(--color-success-900)',
  },
  warning: {
    50: 'var(--color-warning-50)',
    100: 'var(--color-warning-100)',
    200: 'var(--color-warning-200)',
    300: 'var(--color-warning-300)',
    400: 'var(--color-warning-400)',
    500: 'var(--color-warning-500)',
    600: 'var(--color-warning-600)',
    700: 'var(--color-warning-700)',
    800: 'var(--color-warning-800)',
    900: 'var(--color-warning-900)',
  },
  danger: {
    50: 'var(--color-danger-50)',
    100: 'var(--color-danger-100)',
    200: 'var(--color-danger-200)',
    300: 'var(--color-danger-300)',
    400: 'var(--color-danger-400)',
    500: 'var(--color-danger-500)',
    600: 'var(--color-danger-600)',
    700: 'var(--color-danger-700)',
    800: 'var(--color-danger-800)',
    900: 'var(--color-danger-900)',
  },
  gray: {
    50: 'var(--color-gray-50)',
    100: 'var(--color-gray-100)',
    200: 'var(--color-gray-200)',
    300: 'var(--color-gray-300)',
    400: 'var(--color-gray-400)',
    500: 'var(--color-gray-500)',
    600: 'var(--color-gray-600)',
    700: 'var(--color-gray-700)',
    800: 'var(--color-gray-800)',
    900: 'var(--color-gray-900)',
  },
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export const cssVariables = `
  :root {
    /* Primary */
    --color-primary-50: #eef2ff;
    --color-primary-100: #e0e7ff;
    --color-primary-200: #c7d2fe;
    --color-primary-300: #a5b4fc;
    --color-primary-400: #818cf8;
    --color-primary-500: #6366f1;
    --color-primary-600: #4f46e5;
    --color-primary-700: #4338ca;
    --color-primary-800: #3730a3;
    --color-primary-900: #312e81;

    /* Secondary */
    --color-secondary-50: #f5f3ff;
    --color-secondary-100: #ede9fe;
    --color-secondary-200: #ddd6fe;
    --color-secondary-300: #c4b5fd;
    --color-secondary-400: #a78bfa;
    --color-secondary-500: #8b5cf6;
    --color-secondary-600: #7c3aed;
    --color-secondary-700: #6d28d9;
    --color-secondary-800: #5b21b6;
    --color-secondary-900: #4c1d95;

    /* Success */
    --color-success-50: #ecfdf5;
    --color-success-100: #d1fae5;
    --color-success-200: #a7f3d0;
    --color-success-300: #6ee7b7;
    --color-success-400: #34d399;
    --color-success-500: #10b981;
    --color-success-600: #059669;
    --color-success-700: #047857;
    --color-success-800: #065f46;
    --color-success-900: #064e3b;

    /* Warning */
    --color-warning-50: #fffbeb;
    --color-warning-100: #fef3c7;
    --color-warning-200: #fde68a;
    --color-warning-300: #fcd34d;
    --color-warning-400: #fbbf24;
    --color-warning-500: #f59e0b;
    --color-warning-600: #d97706;
    --color-warning-700: #b45309;
    --color-warning-800: #92400e;
    --color-warning-900: #78350f;

    /* Danger */
    --color-danger-50: #fef2f2;
    --color-danger-100: #fee2e2;
    --color-danger-200: #fecaca;
    --color-danger-300: #fca5a5;
    --color-danger-400: #f87171;
    --color-danger-500: #ef4444;
    --color-danger-600: #dc2626;
    --color-danger-700: #b91c1c;
    --color-danger-800: #991b1b;
    --color-danger-900: #7f1d1d;

    /* Gray */
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;
  }
`;

export type Colors = typeof colors;
