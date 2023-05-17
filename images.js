const addImagesOnPageLoad = function(){
    const initialImages = Array.from(document.querySelectorAll('img')).slice(16)
    initialImages.forEach(image => image.src = getImageName(nums.pop()))
}

const addImagesOnScroll = function(){
    for(let i = 0; i < 4; i++){
        const images = Array.from(document.querySelectorAll('img')).slice(16)
        lastImg = images[images.length - 1]

        let imgToAdd = document.createElement('img');
        imgToAdd.src = getImageName(nums.pop())

        lastImg.insertAdjacentElement('afterend', imgToAdd)
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

const handleInfiniteScroll = function(){
    throttle(() => {
      const endOfPage =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      if (endOfPage) {
        addImagesOnScroll()
      }
      if (nums.length == 0) {
        removeInfiniteScroll()
      }
    }, 1000)
}

const throttle = function(callback, time){
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  };
  
  const removeInfiniteScroll = function(){
      loader.remove();
      window.removeEventListener("scroll", handleInfiniteScroll);
  };

window.addEventListener("scroll", handleInfiniteScroll);

var nums = shuffle(Array.from({length: 152}, (_, i) => i + 1))

var throttleTimer;

addImagesOnPageLoad()