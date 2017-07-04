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
     return loop(parseObj, '.json-render')
    }

    function loop(jsonFile, parent) {
      jsonFile.forEach(obj => {
        console.log('fe obj ', obj);
        if (obj.content.tag) {
          jsonRecursion(obj, parent)
        } else if (Array.isArray(obj.content)) {
          $(parent).append(`<${obj.tag}>`)
          loop(obj.content, obj.tag)
        } else {
          return $(parent).append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
        }
      })
    }

    function jsonRecursion(obj, parent) {
      console.log('justObj ', obj)
      if (obj.content.tag) {
        $(parent).append(`<${obj.tag}>`)
        return $(`${obj.tag}`).append(jsonRecursion(obj.content, obj.tag))
      } else if (Array.isArray(obj.content)) {
        $(parent).append(`<${obj.tag}>`)
        loop(obj.content, obj.tag)
      }
      return $(parent).append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
    }

  })
})()
