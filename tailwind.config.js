/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('./presets/massa-station-preset.js')],
  safelist: [
    'mas-banner',
    'mas-title',
    'mas-subtitle',
    'mas-h2',
    'mas-h3',
    'mas-buttons',
    'mas-menu-active',
    'mas-menu-default',
    'mas-menu-underline',
    'mas-body',
    'mas-body2',
    'mas-caption',
  ],
};
