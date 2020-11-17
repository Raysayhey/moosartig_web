import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.44,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  googleFonts: [
    {
      name: "Courier",
      styles: ["400"],
    },
    {
      name: "Playfair Display",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Courier", "serif"],
  bodyFontFamily: ["Courier", "serif"],
  headerColor: "d8d8d8#",
  bodyColor: "#d8d8d8",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography;