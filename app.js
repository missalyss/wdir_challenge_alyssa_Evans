// On selecting a json file, the file is read, parsed, and sent to loop function and jsonRecursion to read deep into the objects.

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
})


function loop(jsonObj, parent) {
  let objMap = jsonObj.map(obj => {
    console.log('4e obj ', obj);
    return $('.file-render').replaceWith(jsonRecursion(obj, parent))

    // if (obj.content.tag) {
    // } else if (Array.isArray(obj.content)) {
    //   // $(parent).append(`<${obj.tag}>`)
    //   return jsonRecursion(obj, parent)
    // } else {
    //   return $(parent).append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
    // }
    //
  })
  console.log('objmap ', objMap);
}

function jsonRecursion(obj, parent) {
  console.log('justObj ', obj)

  if (obj.content.tag) {
    $(parent).append(`<${obj.tag}>`)
    return $(`${obj.tag}`).append(jsonRecursion(obj.content, obj.tag))
  }
  else if (Array.isArray(obj.content)) {
    $(parent).append(`<${obj.tag}>`)
    obj.content.forEach(el => {

      return jsonRecursion(el, obj.tag)
    })
  }
  return $(parent).append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
}
