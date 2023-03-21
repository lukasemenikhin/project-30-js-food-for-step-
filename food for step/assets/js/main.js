// let food = ['bakery_dining', 'ramen_dining', 'liquor', 'lunch_dining'];

// for (let i = 0; i < food.length; i++) {
//     $('body').prepend('<span class="material-symbols-outlined">' + food[i] + '</span>');
// }



// let food = ['bakery_dining', 'ramen_dining', 'liquor', 'lunch_dining'];

// for (let i = 0; i < food.length; i++) {
//     let x = $(window).width() - 50;
//     let y = $(window).height() - 50;

//     let randomX = Math.floor((Math.random() * x) + 1);
//     let randomY = Math.floor((Math.random() * y) + 1);
//     $('body').prepend('<span class="material-symbols-outlined" style="left: ' + randomX + 'px; top: ' + randomY + 'px">' + food[i] + '</span>');
// }



let food = ['bakery_dining', 'ramen_dining', 'liquor', 'lunch_dining'];

for (let i = 0; i < food.length; i++) {
    let x = $(window).width() - 50;
    let y = $(window).height() - 50;

    let randomX = Math.floor((Math.random() * x) + 1);
    let randomY = Math.floor((Math.random() * y) + 1);

    $('body').prepend(`<span class="material-symbols-outlined ${i == 3 ? "target" : ""}" style="left: ${randomX}px; top: ${randomY}px">${food[i]}</span>`);
}

alert('იპოვე ბურგერი!');

$('span').on('click', function (e) {

    let target = $('.target').offset();

    let mouseX = e.pageX;
    let mouseY = e.pageY;

    // console.log(target.left - mouseX);

    // if ((target.left - mouseX) <= 80 && (target.left - mouseX) >= -80) {
    //     console.log('Please');
    // }

    if (((target.left - mouseX) <= 80 && (target.left - mouseX) >= -80) && ((target.top - mouseY) <= 80 && (target.top - mouseY) >= -80)) {
        alert('გილოცავ!');
    }

})