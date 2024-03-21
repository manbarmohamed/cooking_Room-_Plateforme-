let bigImage=document.getElementById('big-img');

function myDish(dish) {
    bigImage.src = dish;
    if (dish === healthyimg.src) {
        healthy();
    }
    if (dish === luxaryimg.src) {
        luxary();
    }
    if (dish === deliciousimg.src) {
        delicious();
    }
}
let healthyimg=document.getElementById("healthy")
let luxaryimg=document.getElementById("luxary")
let deliciousimg=document.getElementById("delicious")
let title=document.getElementById("title")
let desc1=document.getElementById("desc1")
let desc2=document.getElementById("desc2")
let desc3=document.getElementById("desc3")

function healthy(){
    title.innerText="Healthy"
    desc1.innerText="Embrace a nutritious and wholesome culinary journey."
    desc2.innerText="Our healthy recipes are carefully crafted to nourish your body while tantalizing your taste buds."
    desc3.innerText="Explore a world of vibrant ingredients and balanced flavors that promote well-being and vitality."
}

function luxary(){
    title.innerText="Luxary"
    desc1.innerText="Discover exquisite recipes crafted for royalty's refined palate."
    desc2.innerText="Indulge in culinary creations that combine opulence with unforgettable flavors. "
    desc3.innerText="Elevate your dining experience with our luxurious dishes that embody sophistication decadence." 
}

function delicious(){
    title.innerText="Delicious"
    desc1.innerText="Dive into a paradise of delightful flavors and culinary delights."
    desc2.innerText="Our delicious recipes are a celebration of taste and pleasure, offering a symphony of aromas and textures that will leave you craving for more."
    desc3.innerText="Experience pure gastronomic joy with every bite." 
}

