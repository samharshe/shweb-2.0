const addImagesOnPageLoad = function(){
    const initialImages = document.querySelectorAll('img')
    console.log(initialImages)
    initialImages.forEach(image => image.src = getImageName(nums.pop()))
}

const addImagesOnButtonClick = function(){
    for(let i = 0; i < 4; i++){
        const images = document.querySelectorAll('img')
        lastImg = images[images.length - 1]

        let imgToAdd = document.createElement('img');
        imgToAdd.src = getImageName(nums.pop())

        lastImg.insertAdjacentElement('afterend', imgToAdd)
        numImagesShowing++;
    }

    if(nums.length == 0){
        morePhotosButton.remove();
    }
}

const getImageName = function(n){
    if(n < 10){
        return `files/0${n}.jpeg`
    } else {
        return `files/${n}.jpeg`
    }
}

const shuffle = function(array){
    let l = array.length, t, i

    while(l){
        i = Math.floor(Math.random() * l)
        l--

        t = array[l]
        array[l] = array[i]
        array[i] = t
    }

    return array
}

let nums = shuffle(Array.from({length: 152}, (_, i) => i + 1))

// let numImagesShowing = 12;
// const morePhotosButton = document.querySelector('#morePhotosButton')
// morePhotosButton.addEventListener('click', addImagesOnButtonClick)

addImagesOnPageLoad()