$('#testClick').on("click", function () {
  console.log(v1);
  miro.board.widgets.create({
    "type": "sticker",
    "text": "Test Sticker Here",
    "x": 0,
    "y": 0,
    "style": {
      "background-color": "#ea94bb"
    }
  })
})
