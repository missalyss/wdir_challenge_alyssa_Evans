(function () {

  $('.formy').submit(e => {
    e.preventDefault()
    var $file = $('#jsonFile')[0]['files']
    let file = $file[0]
    console.log('filey ', file);

    var fr = new FileReader()
    fr.readAsText(file)
    fr.onload = (function(theFile) {
      return function(e) {
       let result = e.target.result
       let parseObj = JSON.parse(result)
       console.log(parseObj);
      }
    })()
  })

})()
