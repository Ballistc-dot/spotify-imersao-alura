/** @type {import('tailwindcss').Config} */
export default{
 content: [
    
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "DM-sans":["DM Sans",'sans-serif']
      }
    },
  },
  plugins: [],
}