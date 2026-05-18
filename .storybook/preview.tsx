import type { Preview } from '@storybook/react';
import { allTokensCss } from '../src/tokens';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
    docs: {
      toc: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
        <style>{allTokensCss}</style>
        <Story />
      </div>
    ),
  ],
};

export default preview;
