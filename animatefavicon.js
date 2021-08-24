var favicon_images = [
                    'fav/fav00.png',
                    'fav/fav01.png',
                    'fav/fav02.png',
                    'fav/fav03.png',
                    'fav/fav04.png',
                    'fav/fav05.png',
                    'fav/fav06.png',
                    'fav/fav07.png',
                    'fav/fav08.png',
                    'fav/fav09.png',
                    'fav/fav10.png',
                    'fav/fav11.png',
                    'fav/fav12.png',
                    'fav/fav13.png',
                    'fav/fav14.png',
                    'fav/fav15.png',
                    'fav/fav16.png',
                    'fav/fav17.png',
                    'fav/fav18.png',
                    'fav/fav19.png',
                    'fav/fav20.png',
                    'fav/fav21.png',
                    'fav/fav22.png',
                    'fav/fav23.png',
                    'fav/fav24.png',
                    'fav/fav25.png',
                    'fav/fav26.png',
                    'fav/fav27.png',
                    'fav/fav28.png',
                    'fav/fav29.png',
                    'fav/fav30.png',
                    'fav/fav31.png'

                ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    // remove current favicon
    if(document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if(document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();
        
    // add new favicon image
    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/png">');
    
    // If last image then goto first image
    // Else go to next image    
    if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 70);