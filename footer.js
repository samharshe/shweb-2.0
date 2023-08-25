function rotatingSign(){
    var text = "samharshe.com"

    const textLength = text.length
    const numCharactersToShow = 1

    let textStringBuilder = ""
    let index = 0;

    setInterval(function(){
        textStringBuilder = text.substring(index, Math.min(index+numCharactersToShow, textLength)) + text.substring(0, Math.max(index-textLength+numCharactersToShow))

        document.querySelector('#scrolling-text').innerHTML = textStringBuilder

        if(index == textLength){
            index = 0;
        } else {
            index++;
        }
    }, 500)
}

rotatingSign()