const allData = new Array;

$('#form').on('submit', function (e) {
  e.preventDefault();

  var file = document.getElementById('fileItem').files[0];
  if(file){
    Papa.parse(file, {
      complete: function (results) {
        if(results) {
          makeDataArray(results.data);
          makeWidgets(allData, "sticker", "Comment", "Sticky Color");
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

function makeWidgets (data, widgetType, filter, color) {

  let vertical = 0;
  let horizontal = 0;

  for (var i = 0; i < data.length; i++) {
    let stickyColor;
    switch (data[i][color]) {
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
    // check to see of the remainder of iteration divided by 10 is 0 - new row if it is.
    if( ( i ) % 10 === 0 ){
      vertical++
    }
    miro.board.widgets.create({
      "type": widgetType,
      "text": data[i][filter],
      "x": ( 220 * horizontal ),
      "y": ( 220 * vertical )
    })

    // check to see if the remainder of iteration +1 divided by 10 is 0 - new column if it is.
    if( ( i + 1 ) % 10 === 0 ){
      horizontal = 0
    } else {
      horizontal++
    }
  }
}

function groupBy (value) {

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
