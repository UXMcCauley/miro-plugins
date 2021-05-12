$('.testClick').on("click", function () {
  miro.board.widgets.create({
    "type": "sticker",
    "style": {
      "backgroundColor": "#ea94bb",
      "fontFamily": "Bangers",
      "textAlign": "right"
    },
    "text": "Test Sticker Here",
    "x": 0,
    "y": 0
  })
})
