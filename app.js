(function () {

  $('.formy').submit(e => {
    e.preventDefault()
    var $file = $('#jsonFile')[0]['files']
    let file = $file[0]
    console.log(file);
    // var jsony = new File(file, 'filey')
    console.log('filey ', file);

    var fr = new FileReader()

    fr.onload = (function(theFile) {
      return function(e) {
       let result = e.target.result
       console.log('result', result);
      }
    })()

    fr.readAsText(file)
    console.log('post ', fr.result);
    let jsonResult = fr.result
    console.log(jsonResult);
  })

})()
