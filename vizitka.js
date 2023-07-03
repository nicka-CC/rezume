const photo = document.getElementsByClassName('photo')[0]
const im = document.getElementsByClassName('im')[0]
const cont = document.getElementsByClassName('container')[0]
const fDev = document.getElementsByTagName('h3')[0]
const heading = document.getElementsByClassName('1stCard')[0]
const heading2 = document.getElementsByClassName('2stCard')[0]
const heading3 = document.getElementsByClassName('3stCard')[0]
const a = document.getElementsByTagName('a')[0]
const a1 = document.getElementsByTagName('a')[1]
const a2 = document.getElementsByTagName('a')[2]



setTimeout(() => {
    setImage(photo)
    
}, 1000);

setTimeout(() => {
    firstInformation(im)
    setContainer(cont)
    removeDecor(document.getElementsByTagName('hr')[0],'')
    removeDecor(document.getElementsByTagName('ul')[0],'34')
    
}, 2000);

setTimeout(() => {
    removeDecor(document.getElementsByTagName('hr')[1],'')
    textChange(fDev, '3px','15px', 'italic', '#686868','','')
    SocialMedia(document.getElementsByTagName('a')[0],'1')
    SocialMedia(document.getElementsByTagName('a')[1],'2')
    textChange(document.getElementsByTagName('h3')[1],'','20px','','','','')
    
}, 3000);

setTimeout(() => {
    removeDecor(document.getElementsByTagName('hr')[2],'')
    
    cardBackground(heading,'#bccbde')
    textChange(document.getElementsByClassName('languages')[0],'','25px','','','','')
    
}, 4000);

setTimeout(() => {
    removeDecor(document.getElementsByTagName('hr')[3],'')
    cardBackground(heading2,'#e7d36c')
    setTable(document.getElementsByTagName('table')[0])
    textChange(document.getElementsByTagName('a')[2],'','','','black','none','')
    textChange(document.getElementsByTagName('h2')[3],'','','','black','none','center')
}, 5000);
setTimeout(() => {
    cardBackground(heading3,'#c2dde6')
    setLabel(document.getElementsByClassName('labels')[0])
    setInput(document.getElementById('nick'))
}, 6000);

setTimeout(() => {
    setLabel(document.getElementsByClassName('labels')[1])
    setInput(document.getElementById('email'))
}, 7000);

setTimeout(() => {
    setLabel(document.getElementsByClassName('labels')[2])
    setInput(document.getElementById('message'))
    
}, 8000);
setTimeout(() => {
    setButtom(document.getElementById('pres'))
}, 9000);


function SocialMedia(obj,n){
    if(n == 1){
        obj.style.cssText=`margin-top: -5px; margin-left:-38px;  font-size:15px; color: gray; text-decoration: none; `
    }else{
        obj.style.cssText=`margin-left:-12px; font-size:15px; color: gray; text-decoration: none; `

    }
}

function setTable(obj){
    obj.style.cssText=`width:100%`
}
function setContainer(obj) {
    obj.style.cssText=`
    max-width: 850px;
    margin:auto;
    padding-top: 20px;`
}

function removeDecor(obj, m){
    if (m != '') {
       obj.style.cssText=`list-style-type: none; display:flex;` 
    }else{
        obj.style.cssText=`
    display:none;`
    }
}
function cardBackground(obj, color){
    obj.style.background = color
    obj.style.paddingTop = '15px'
    obj.style.paddingBottom = '15px'
    obj.style.paddingLeft = '20px'
    obj.style.marginBottom = '20px'
    obj.style.borderRadius = '30px'
}


function setImage(obj) {
    obj.style.cssText=`
    width:250px;
    border-radius:1000px;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.25);`
}

function firstInformation(inf){
    inf.style.color = '#000155'
    inf.style.cssText=`
    text-align: left;
    font-Size: 19px;
    margin-top: 60px;
    margin-left: 40px;
    l`
}

function textChange(obj, lS, Size, fStyle = 'normal', color, tD, align){
    obj.style.letterSpacing = lS
    obj.style.fontSize = Size
    obj.style.fontStyle = fStyle
    obj.style.color = color
    obj.style.textDecoration = tD
    obj.style.textAlign = align
}

function setLabel(obj){
    obj.style.cssText=`display:block;
    font-size: 14px;
    color:rgb(99, 99, 99)`
}
function setInput(obj){
    obj.style.cssText=`
    width: 100%;
    box-sizing: border-box;
    border: none;
    background:local;
    border-bottom: 1px solid rgb(161, 148, 148);
    color: black;
    padding: 19px 0 10px;
    outline: none;
    font-family: inherit;`
}

function setButtom(obj){
    obj.style.cssText=`
    background:#2e2e2d;
    padding: 15px 20px;
    color:rgb(196, 196, 196);
    border: none;
    font-family:inherit;
    cursor:pointer;
    border-radius: 10000px;`
}
heading.addEventListener('mouseover',() => {
    if (heading.style.color === 'black'){
        heading.style.color = '#242424'
        heading.style.backgroundColor = '#b4c3d6'
    }else{
        heading.style.color = 'black'
        heading.style.backgroundColor = '#bccbde'
    }
})

heading2.addEventListener('mouseover',() => {
    if (heading2.style.color === 'black'){
        heading2.style.color = '#242424'
        heading2.style.backgroundColor = '#d3c062'
    }else{
        heading2.style.color = 'black'
        heading2.style.backgroundColor = '#e7d36c'
    }
})

heading3.addEventListener('mouseover',() => {
    if (heading3.style.color === 'black'){
        heading3.style.color = '#242424'
        heading3.style.backgroundColor = '#b7d1da'
    }else{
        heading3.style.color = 'black'
        heading3.style.backgroundColor = '#c2dde6'
    }
})
a.addEventListener('mouseover',() => {
    if(a.style.color != 'blue'){
        a.style.color = 'blue'
    }
})
a.addEventListener('mouseout',() => {
    if(a.style.color != 'gray'){
        a.style.color = 'gray'
    }
})
a1.addEventListener('mouseover',() => {
    if(a1.style.color != 'blue'){
        a1.style.color = 'blue'
    }
})
a1.addEventListener('mouseout',() => {
    if(a1.style.color != 'gray'){
        a1.style.color = 'gray'
    }
})
a2.addEventListener('mouseover',() => {
    if(a2.style.color != 'blue'){
        a2.style.color = 'blue'
    }
})
a2.addEventListener('mouseout',() => {
    if(a2.style.color != 'black'){
        a2.style.color = 'black'
    }
})

