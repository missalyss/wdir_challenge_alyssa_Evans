(function () {
  $('.file-upload').change(() => {
    let $file = $('#json-file')[0]['files']
    let file = $file[0]
    let parseObj

    let fr = new FileReader()
    fr.readAsText(file)
    fr.onload = (function () {
      return readAndParse
    })()

    function readAndParse(e) {
     let result = e.target.result
     parseObj = JSON.parse(result)
     return jsonRecursion(parseObj)
    }

    function jsonRecursion(obj) {
      if (Array.isArray(obj)){
        console.log('is array');
        for (var i = 0; i < parseObj.length; i++) {
          console.log(obj[i]);
          append(obj[i].tag, obj[i].content)

          if (obj[i].content.tag) {
            jsonRecursion(obj[i].content)
            append(obj[i].content.tag, obj[i].content.content)
          }
        }
      }
    }

    function append (tag, content) {
      return $('.json-render').append(`<${tag}>${content}</${tag}>`)
    }

  })
})()
