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
     $('.file-render').replaceWith(parseObj)
     return loop(parseObj, '.json-render')
    }

    function loop(jsonObj, parent) {
      jsonObj.forEach(obj => {
        console.log('fe obj ', obj);
        if (obj.content.tag) {
          return jsonRecursion(obj, parent)
        } else if (Array.isArray(obj.content)) {
          $(parent).append(`<${obj.tag}>`)
          return loop(obj.content, obj.tag)
        } else {
          return $(parent).append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
        }
      })
    }
//either its appending twice at the beginning or end.
    function jsonRecursion(obj, parent) {
      console.log('justObj ', obj)
      if (obj.content.tag) {
        $(parent).append(`<${obj.tag}>`)
        return $(`${obj.tag}`).append(jsonRecursion(obj.content, obj.tag))
      } else if (Array.isArray(obj.content)) {
        $(parent).append(`<${obj.tag}>`)
        return loop(obj.content, obj.tag)
      }
      return $(parent).append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
    }

  })
