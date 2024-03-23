/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        9.5: "2.375rem", //38px,
      },
      fontFamily: {
        mont: [" Mont Heavy DEMO, sans-serif;"],
        inter: ["Inter, sans-serif"],
      },
      fontSize: {
        17: "1.063rem", //17px,
        22: "1.375rem", //22px,
        "2.1xl": "1.563rem", //25px,
        "2.4xl": "1.75rem", //28px,
      },
      colors: {
        body: "#F5F7FA",
        search: "#8BA3CB",
        border: "#E6EFF5",
        "gray-1": "#B1B1B1",
        blue: "#2D60FF",
        indigo: "#343C6A",
      },
      spacing: {
        6.1: "1.563rem", //25px,
        6.5: "1.625rem", //26px,
        7.5: "1.875rem", //30px,
        16.5: "3.75rem", //60px,
        11.1: "2.813rem", //45px,
        12.5: "3.125rem", //50px,
        21: "5.563rem", //89px,
        25: "6.313rem", //101px,
        58: "14.375rem", //230px,
        62: "15.625rem", //250px,
      },
      borderWidth: {
        6: "6px",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
