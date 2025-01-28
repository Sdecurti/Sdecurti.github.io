module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px'
      },
    },
    colors: {
      'sRed': '#ef333f',
      'sYellow': '#fdf950',
      'sGray': '#5c6473',
      'sBlue': '#497891',
    },
    borderRadius: {
      '6xl': '6rem'
    }
  }
}
}