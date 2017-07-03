(function () {
  $('.formy').change(() => {
    let $file = $('#jsonFile')[0]['files']
    let file = $file[0]
    let parseObj

    let fr = new FileReader()
    let readed = fr.readAsText(file)
    console.log(readed);
    fr.onload = (function () {
      return readAndParse
    })()

    function readAndParse(e) {
     let result = e.target.result
     parseObj = JSON.parse(result)
     console.log(parseObj)
     jsonRecursion(parseObj)

    }

    function jsonRecursion(obj) {
      if (obj.content.tag) {
        jsonRecursion(obj.content)
      }
      $('.json').append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
    console.log(obj.content);
    }

  })
})()
