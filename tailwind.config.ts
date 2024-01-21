import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      listStyleType: {
        circle: 'circle'
      },
      keyframes: {
        "accordion-down-opacity": {
          from: { opacity: "0" },
          to: { opacity: "1"  },
        },
        "accordion-up-opacity": {
          from: { opacity: "1"  },
          to: { opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--accordion-content-height)"  },
        },
        "accordion-up": {
          from: { height: "var(--accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out 0s, accordion-down-opacity 0.15s ease 0s",
        "accordion-up": "accordion-up 0.2s ease-out 0s, accordion-up-opacity 0.15s ease 0s",
      },
    },
  },
  plugins: [],
}
export default config
