function rotatingSign(){
    const path = window.location.pathname
    var text
    console.log(path)
    switch(path){
        case 'file:///Users/samharshe/Documents/Programming/shweb%202.0/new.html':
            text = "Use the left and right arrowkeys to navigate to a new photo. Press the spacebar to view the gallery. "
            break
        case '/Users/samharshe/Documents/Programming/shweb%202.0/home.html':
            text = "Click on a photo to enlarge it. "
            break
    }

    const textLength = text.length
    const numCharactersToShow = 40

    let textStringBuilder = ""
    let index = 0;

    setInterval(function(){
        textStringBuilder = text.substring(index, Math.min(index+numCharactersToShow, textLength)) + text.substring(0, Math.min(index+textLength-numCharactersToShow,0))

        document.querySelector('#footerText').innerHTML = textStringBuilder
        if(index == textLength){
            index = 0;
        } else {
            index++;
        }
    }, 500);
}

rotatingSign()