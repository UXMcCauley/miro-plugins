$('#testClick').on("click", function () {
  console.log(this);
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
