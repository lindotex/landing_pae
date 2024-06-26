/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'slack-purple': '#541554',
        'slack-gold': "#ecb22e",
        'slack-bege':"#f4ede4",
        'slack-bege-tone':"#f4efe8"
      },
      language: {
      'en': 'en',
      'pt':'pt'
      }
    },
  },
  plugins: [],
};
