var a = [11, 22, 33];
for (let item in a) {
  console.log(item);
}
for (let item of a) {
  console.log(item);
}


// =============  JS Generation
for (var _i = 0; _i < a.length; _i++) {
    var item = a[_i];
    console.log(item);
}

// ============= Limitations
let articleParagraphs = document.querySelectorAll("article > p");
// Error: Nodelist is not an array type or a string type
for (let paragraph of articleParagraphs) {
    paragraph.classList.add("read");
}