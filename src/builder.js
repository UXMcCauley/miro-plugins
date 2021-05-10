$('#form').on('submit', function (e) {
  e.preventDefault();

  var file = document.getElementById('fileItem').files[0];
  if(file){
    Papa.parse(file, {
      complete: function (results) {
        if(results) {
          console.log(results)
          console.log("has results")
        } else {
          console.log("something went wrong")
        }
      }
    });
  } else {
    $('span').addClass('errorText');
  }


})
