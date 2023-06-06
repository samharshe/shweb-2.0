const mod = function(n, k){
  if(n < 0){
    return k + n
  }
  if(n > nums.length){
    return n % k
  }
  return n
}

const addImagesOnPageLoad = function(){
    const initialImages = Array.from(document.querySelectorAll('img')).slice(16)
    for(var i = 0; i < initialImages.length; i++){
      initialImages[i].src = getImageName(nums[i])
    }
}

const addImagesOnScroll = function(){
    for(let i = 0; i < 4; i++){
        const images = Array.from(document.querySelectorAll('img')).slice(16)
        lastImg = images[images.length - 1]

        let imgToAdd = document.createElement('img');
        imgToAdd.src = getImageName(nums.pop())
        imgToAdd.className = "gallery_image"

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

window.addEventListener("keydown", (e) => {
  if(e.code == 'ArrowLeft'){
    console.log("leftkeypress")
    currentImageNumber--
    billboard_image.src = getImageName(nums[mod(currentImageNumber, nums.length)])
  }
  if(e.code == 'ArrowRight'){
    console.log("rightkeypress")
    currentImageNumber++
    billboard_image.src = getImageName(nums[mod(currentImageNumber, nums.length)])
  }
});

const billboard_image = document.querySelector("#billboard_image")
var currentImageNumber = 0;

billboard_image.addEventListener("click", () => {
  billboard_image.id = ""
  billboard_image.className = "gallery_image"
  document.querySelectorAll('.invisible_image').forEach(e => e.className = "gallery_image")

  var galleryImages = document.querySelectorAll(".gallery_image")

  galleryImages.forEach(e => e.addEventListener("click", () => {
    galleryImages.forEach(f => f.className = "invisible_image")
    e.className = ""
    e.id = "billboard_image"
  })) 
})

var nums = shuffle(Array.from({length: 164}, (_, i) => i + 1))

var throttleTimer;

addImagesOnPageLoad()