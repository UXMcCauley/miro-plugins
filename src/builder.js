$('#form').on('submit', function (e) {
  console.log('submit button clicked')
  e.preventDefault();

  var file = document.getElementById('fileItem').files[0];

  Papa.parse(file, {
    complete: function (results) {
      console.log(results)
    }
  });

})
