setTimeout(() => {
    show(document.getElementsByTagName('h1')[0])
    show(document.getElementsByTagName('h1')[1])
    show(document.getElementsByTagName('h1')[2])
}, 1000);

setInterval(() => {
    show(document.getElementsByClassName('text')[1])
    show(document.getElementsByClassName('text')[2])
}, 1500);
setInterval(() => {
    show(document.getElementsByClassName('text')[3])
    show(document.getElementsByClassName('text')[4])
}, 2000);
setInterval(() => {
    show(document.getElementsByClassName('text')[5])
    show(document.getElementsByClassName('text')[6])
}, 2500);
setInterval(() => {
    show(document.getElementsByClassName('text')[7])
    show(document.getElementsByClassName('text')[8])
}, 3000);


hide(document.getElementsByTagName('h1')[0])
hide(document.getElementsByTagName('h1')[1])
hide(document.getElementsByTagName('h1')[2])
hide(document.getElementsByClassName('text')[1])
hide(document.getElementsByClassName('text')[2])
hide(document.getElementsByClassName('text')[3])
hide(document.getElementsByClassName('text')[4])
hide(document.getElementsByClassName('text')[5])
hide(document.getElementsByClassName('text')[6])
hide(document.getElementsByClassName('text')[7])
hide(document.getElementsByClassName('text')[8])



function hide(obj){
    obj.style.cssText=`display:none`
}
function show(obj){
    obj.style.cssText=`display:unset;`
}