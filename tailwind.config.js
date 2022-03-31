module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'Lato': ["Lato"]
    },
    extend: {
      backgroundImage: {
        'my-Picture': "url('/src/dov.jpeg')",
        "dot-pattern": "url('/src/img/White_dot.svg')" // https://upload.wikimedia.org/wikipedia/commons/d/da/White_dot.svg
      }
    },
    container: {
      center: true,
    },

  },
  plugins: [],
}
