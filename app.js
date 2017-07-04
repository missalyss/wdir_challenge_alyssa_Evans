(function () {
  $('.file-upload').change(() => {
    let $file = $('#json-file')[0]['files']
    let file = $file[0]

    let fr = new FileReader()
    fr.readAsText(file)
    fr.onload = (function () {
      return readAndParse
    })()

    function readAndParse(e) {
     let result = e.target.result
     let parseObj = JSON.parse(result)
     return loop(parseObj)
    }

    function loop(jsonFile) {
      jsonFile.forEach(obj => {
        console.log('fe obj ', obj);
        if (obj.content.tag) {
          jsonRecursion(obj)
        } else if (Array.isArray(obj)) {
          loop(obj)
        } else {
          append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
        }
      })
    }

    function jsonRecursion(obj) {
      console.log('justObj ', obj)
      if (obj.content.tag) {
        append(`<${obj.tag}>`)
        return $(`${obj.tag}`).append(jsonRecursion(obj.content))
      }
      return `<${obj.tag}>${obj.content}</${obj.tag}>`
    }

    function append (html) {
      $('.json-render').append(html)
    }

  })
})()
