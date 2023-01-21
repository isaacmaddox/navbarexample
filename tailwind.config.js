/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': '"DM Sans", sans-serif',
    },
    extend: {
      colors: {
        "blue": {
          100: "#E6EFFE",
          200: "#AFCEFD",
          300: "#7FB0FC",
          400: "#6DA6FC",
          500: "#5496FB",
          600: "#4780D5",
          700: "#4173C1",
          800: "#3761A3",
          900: "#1D3458"
        },
        "sapphire": {
          100: "#DDE7EC",
          200: "#96B2C3",
          300: "#5785A0",
          400: "#417493",
          500: "#1F5C80",
          600: "#1A4E6D",
          700: "#184763",
          800: "#143C53",
          900: "#0B202D"
        },
        "salmon": {
          100: "#FBE8E6",
          200: "#F3B6B1",
          300: "#EC8B82",
          400: "#E97B71",
          500: "#E56458",
          600: "#C3554B",
          700: "#B04D44",
          800: "#954139",
          900: "#50231F"
        },
        "gray": {
          100: "#EDEDED",
          200: "#C7C7C7",
          300: "#A6A6A6",
          400: "#9A9A9A",
          500: "#888888",
          600: "#747474",
          700: "#696969",
          800: "#585858",
          900: "#303030"
        },
      },
      screens: {
        'mobile': { 'max': '950px' },
      },
      fontSize: {
        'header-mobile': 'calc(10vw + 1rem)',
      },
    },
  },
  plugins: [],
}
