const allData = new Array;

$('#form').on('submit', function (e) {
  e.preventDefault();

  var file = document.getElementById('fileItem').files[0];
  if(file){
    Papa.parse(file, {
      complete: function (results) {
        if(results) {
          makeDataArray(results.data);
          makeWidgets(allData, "Comment", "Sticky Color", 220);
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

function makeWidgets (data, filter, color) {
  let rowMarker, columnMarker = 0;
  for (var i = 0; i < data.length; i++) {
    if( ( i + 1 ) % 10 == 0 ){
      columnMarker = 0
      rowMarker++
    } else {
      columnMarker++
    }
    miro.board.widgets.create({
      "type": "sticker",
      "text": data[i][filter],
      "x": ( 220 * columnMarker ),
      "y": ( 220 * rowMarker ),
      "style": {
        "backgroundColor": mapColor(data[i][color])
      }
    })
  }
}

function groupBy (value) {

}

function makeDataArray (data) {
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
  return allData;
}

function mapColor (color) {
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
    default:
      stickyColor = "#fff9b1";
  }
  return stickyColor;
}
