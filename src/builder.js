$('#testClick').on("click", function () {
  console.log("v1.1");
  miro.board.widgets.create({
    "type": "card",
    "title": "developer card",,
    "tags": ["tag name"],
    "style": {
      "backgroundColor": "#ff00ff"
    }
  })
})
