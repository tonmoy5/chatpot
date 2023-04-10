/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chat-cover': '#00A884',
        'chat-header': '#F0F2F5',
        'chat-hover': '#F5F6F6',
        'chat-receiver-text-bg': '#D9FDD3',
      },
    },
  },
  plugins: [],
}