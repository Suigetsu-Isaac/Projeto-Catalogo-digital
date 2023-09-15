/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      
      textColor:[
      {primaryTextColor: "#ffffff"},
      {secoundTextColor: "#312e2d"},
      {titleTextColor: "#000000"},
      {inversionTextColor: "#0c6980"},
      {inversionMenu:"#00a8a8"}
      ],
      backgroundColor:[
        {secoundBackground: "#f4f4f4"},
        {darkBackground: "#212932"},
        {primaryBackground: "#0c6980"},
        {backgroundMenu: "#00a8a8"},
      ],
      backgroundImage:[
        {slider1: "url('/img/slider1.jpg')"}
      ]
    },
  },
  plugins: [],
}

