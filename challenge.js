// On selecting a json file, the file is read, parsed, and sent to loop function then jsonRecursion to read deep into the objects and concatenate all html together.

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
  let html = file.reduce(function(accum, current){
    let str = accum.concat(jsonRecursion(current))

    return str
  }, '<div class="json-render">')

  html.concat('</div>')
  let thisFile = $('.json-render').replaceWith(html)

  return thisFile
}

function jsonRecursion(obj) {
  if (obj.content.tag) {
    return (`<${obj.tag}>`).concat(jsonRecursion(obj.content, obj.tag)).concat(`</${obj.tag}>`)
  }
  else if (Array.isArray(obj.content)) {
    
    let objHtml = obj.content.reduce(function(accum, current){
      let objStr = accum.concat(jsonRecursion(current))
      return objStr
    }, `<${obj.tag}>`)

    objHtml.concat(`</${obj.tag}>`)

    return objHtml
  }
  return `<${obj.tag}>${obj.content}</${obj.tag}>`
}
