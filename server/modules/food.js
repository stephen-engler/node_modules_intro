let grub = ['sandwich', 'pie'];

function logGrub(){
    for( let food of grub){
        console.log(food);
    }
}

module.exports = {foodArray: grub, printFood: logGrub}; //this now exports both function and array