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
   return loop(parseObj)
  }
})

function loop(file) {
  let html = file.reduce(function(accum, current, index, array){
    let str = accum.concat(jsonRecursion(current))
    console.log('html str ', str);
    return str
  }, '<div class="json-render">')
  let thisFile = $('.json-render').replaceWith(html)
  console.log(thisFile);
  return thisFile
}

function jsonRecursion(obj) {
  if (obj.content.tag) {
    return (`<${obj.tag}>`).concat(jsonRecursion(obj.content, obj.tag)).concat(`</${obj.tag}>`)
  }
  return `<${obj.tag}>${obj.content}</${obj.tag}>`
}


//   $(parent).append(`<${obj.tag}>`)
//   return $(`${obj.tag}`).append(jsonRecursion(obj.content, obj.tag))
// }
// else if (Array.isArray(obj.content)) {
//   $(parent).append(`<${obj.tag}>`)
//   obj.content.forEach(el => {
//
//     return jsonRecursion(el, obj.tag)
//   })
// }
// return $(parent).append(`<${obj.tag}>${obj.content}</${obj.tag}>`)
