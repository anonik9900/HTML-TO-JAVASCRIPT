function highlight(x){
document.forms[x].elements[0].focus()
document.forms[x].elements[0].select()
}



function scriptIt(val){
val.value=val.value.replace(/"/gi,"&#34;")
val.value=val.value.replace(/'/gi,"&#39;")
valArr=escape(val.value).split("%0D%0A")
val.value=""
for (i=0; i<valArr.length; i++){
val.value+= (i==0) ? "<script language=\"JavaScript\">\ninfo=" : ""
val.value+= "\"" + unescape(valArr[i])
val.value+= (i!=valArr.length-1) ? "\" + \n" : "\"\n"
}
val.value+="\ndocument.write(info)\n<\/script>"
}

function ctrlA(el) {
with(el){
focus(); select()
}
if(document.all){
txt=el.createTextRange()
txt.execCommand("Copy")
window.status='Selected and copied to clipboard!'
}
else window.status='Press ctrl-c to copy the text to the clipboard'
setTimeout("window.status=''",3000)
}
