function rotatingSign(){
    const text = "Designed and built by Samuel Harshe. "
    const textLength = text.length
    const numCharactersToShow = 25

    let textStringBuilder = ""
    let index = 0;

    setInterval(function(){
        textStringBuilder = text.substring(index, Math.max(index+numCharactersToShow, textLength)) + text.substring(0, Math.max(index+textLength-numCharactersToShow,0))

        document.querySelector('#lol').innerHTML = textStringBuilder
        if(index == textLength){
            index = 0;
        } else {
            index++;
        }
    }, 500);
}

rotatingSign()