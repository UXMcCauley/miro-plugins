$('#testClick').on("click", function () {
  console.log(this);
  miro.board.widgets.create({
    "type": "sticker",
    "text": "Test Sticker Here",
    "x": 0,
    "y": 0
  })
})
