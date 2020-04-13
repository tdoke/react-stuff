var firstDiv = document.getElementsByTagName('div')[0];
console.log('printin div attributes', firstDiv.parentNode.childNodes);
console.log('get child nodes of an element', firstDiv.childNodes);
console.log('get parent node of an element', firstDiv.parentNode);
// add new node in DOM tree

var newParagraph = document.createElement('p');
var pText= document.createTextNode('prograammitacaly added paragraph');
newParagraph.appendChild(pText);

firstDiv.appendChild(newParagraph);
