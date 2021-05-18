const allData = new Array;

$('#form').on('submit', function (e) {
  e.preventDefault();

  var file = document.getElementById('fileItem').files[0];
  if(file){
    Papa.parse(file, {
      complete: function (results) {
        if(results) {
          makeDataArray(results.data);
          makeStickers(allData, "Comment", "Sticky Color");
          addStickerTags();
        } else {
          Alert("Oh no! A thing happened that we're not too sure about. Try again, friend.")
        }
      },
      error: function (err) {
        Alert("Oh no! A thing happened that we're not too sure about. Try again, friend.");
      }
    });
  } else {
    $('span').addClass('errorText');
  }
  $('#fileItem').val("");
});

function makeStickers (data, contentColumnTitle, colorColumnTitle) {

  let vertical = 0;
  let horizontal = 0;

  for (var i = 0; i < data.length; i++) {
    // check to see of the remainder of iteration divided by 10 is 0 - new row if it is.
    if( ( i ) % 10 === 0 ){
      vertical++
    }
    miro.board.widgets.create({
      "type": "sticker",
      "text": data[i][contentColumnTitle],
      "x": ( 220 * horizontal ),
      "y": ( 220 * vertical ),
      style: {
        "stickerBackgroundColor": mapStickyColor(data[i][colorColumnTitle])
      }
    })

    // check to see if the remainder of iteration +1 divided by 10 is 0 - new column if it is.
    if( ( i + 1 ) % 10 === 0 ){
      horizontal = 0
    } else {
      horizontal++
    }
  }
}

function addStickerTags () {
  let allStickers = await miro.board.widgets.get({type: 'sticker'});
  miro.board.tags.create({title: 'Red tag', color: '#F24726', widgetIds: allStickers});
}

function mapStickyColor (color) {
  let stickyColor;
    switch (color) {
      case "White":
        stickyColor = "#f5f6f8";
        break;
      case "Light Orange":
        stickyColor = "#f5d128";
        break;
      case "Olive":
        stickyColor = "#d0e17a";
        break;
      case "Green":
        stickyColor = "#d5f692";
        break;
      case "Pastel Blue":
        stickyColor = "#a6ccf5";
        break;
      case "Aqua":
        stickyColor = "#67c6c0";
        break;
      case "Blue":
        stickyColor = "#23bfe7";
        break;
      case "Orange":
        stickyColor = "#23bfe7";
        break;
      case "Pink":
        stickyColor = "#ea94bb";
        break;
      case "Red":
        stickyColor = "#f16c7f";
        break;
      case "Purple":
        stickyColor = "#b384bb";
        break;
      }
      return stickyColor;
}

function makeDataArray (data) {
  // console.log(data);
  const dataKeys = data[0];
  for (var i = 0; i < data.length; i++) {
    let currentObject = new Object;
    // make object keys from first line in table/CSV
    for (var j = 0; j < dataKeys.length; j++) {
      let currentKey = dataKeys[j]
      currentObject[currentKey] = data[i][j];
    }
    allData.push(currentObject);
  };
  allData.splice(0,1);
}
