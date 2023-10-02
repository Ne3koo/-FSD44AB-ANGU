let numClick = 0;
let handle = null;

document.addEventListener('click',
() => {
    clearInterval(handle);
    numClick++;
    handle = setInterval(
        () => {
            if(numClick > 3){
                console.log(`Too many clicks ! ${numClick}`)
            }
            numClick = 0 ;
        }, 
        250)
})