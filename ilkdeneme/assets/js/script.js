var allElements = document.querySelectorAll('.editable')

console.log(allElements);

allElements.forEach(el=>el.setAttribute('contenteditable','true'))

var img = document.querySelector('img')

img.addEventListener('click',(e)=>{
    e.target.getAttribute('src')
    var newUri = prompt("Yeni resim uri",e.target.getAttribute('src'))
    if (newUri != null && newUri != '' ) {
        e.target.setAttribute('src',newUri)
    }
    //e.target.setAttribute('src',newUri)
})

//assets/images/resim2.jpeg
//assets/images/IMG_2184.jpeg


function size(width) {
   let frame = document.querySelector('iframe')
   frame.width = width
}


// document.body.addEventListener('click',(event)=>{
//     console.log(event.target);
//     var elem = event.target.setAttribute('contenteditable','true')
//     console.log(elem);
// })