const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

let controller = {
    UP:false,
    DOWN:false,
    LEFT:false,
    RIGHT:false,
};

document.addEventListener('keydown', function(event) {
    if(event.keyCode > 36 && event.keyCode < 41){
        controller[event.keyCode] = true;
    }

});

document.addEventListener('keyup', function(event) {
    if(event.keyCode > 36 && event.keyCode < 41){
        controller[event.keyCode] = false;
    }
});