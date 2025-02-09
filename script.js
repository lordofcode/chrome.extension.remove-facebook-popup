var body=window.document.body;
var divs=body.getElementsByTagName('div');
for(var k=0; k < divs.length; k++) {
    try{
        if (!divs[k].classList.contains('__fb-light-mode')){
            continue;
        }
        divs[k].remove();
    }
    catch(e){console.log(e);}
}