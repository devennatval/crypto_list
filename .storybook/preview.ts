import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#111111' },
      ]
    },
    viewport: {
      viewports: {
        small: {
          name: 'Small',
          styles: {
            width: '375px',
            height: '667px',
          },
          type: 'mobile',
        },
        medium: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
          type: 'tablet',
        },
        large: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
          type: 'desktop',
        },
      },
      defaultViewport: 'large',
    },
  },
};

export default preview;
