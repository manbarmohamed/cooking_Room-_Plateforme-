// let ArryRecipes = [
//     {
//         photo: "images/images/dish/2.png",
//         // title : "Cream prawen,inspired by morocco",
//         title2: "salade Perry",
//         descreption: "Salade nesoiase test de ca cord",
//         likes: 30,
//         comments: 10,
//     },
//     {
//         photo: "images/images/dish/1.png",
//         // title : "Cream prawen,inspired by morocco",
//         title2: "salade Maroccan",
//         descreption: "Salade nesoiase test de ca cord",
//         likes: 3,
//         comments: 90,
//     },
// ];

// let card = document.getElementById("cont-card");

// for (let i = 0; i < ArryRecipes.length; i++) {
//     let cardDiv = document.createElement('div');
//     cardDiv.classList.add('col');
//     cardDiv.innerHTML = `
//     <div class="card d-flex justify-content-center align-items-center mt-5">
//     <img src="${ArryRecipes[i].photo}" alt="" class="card-img rounded-circle w-50">
//     <div class="card-body d-flex justify-content-center align-items-center flex-column">

//         <h4 class="card-title">${ArryRecipes[i].title2}</h4>
//             <p class="card-text"> ${ArryRecipes[i].descreption}</p>
//             <div class="feedback">
//                 <p><i class="fa-regular fa-heart text-start like-click" onclick="likesCount(this)"> <span class="like-count">0</span></i></p>
//                 <p><i class="fa-regular fa-comment like-click" onclick="commentsCount(this)"> <span class="like-count">0</span></i></p>
//             </div>
        
//     </div>
// </div>`;
//     card.appendChild(cardDiv);
// }

// function likesCount(element){
//     let likeCountSpan = element.querySelector('.like-count');
//     let currentLikes = parseInt(likeCountSpan.textContent);
//     likeCountSpan.textContent = currentLikes + 1;
// }

// function commentsCount(element){
//     let commentCountSpan = element.querySelector('.like-count');
//     let currentComments = parseInt(commentCountSpan.textContent);
//     commentCountSpan.textContent = currentComments + 1;
// }
let ArryRecipes = [
    {
        photo: "images/images/dish/2.png",
        title: "salade Perry",
        description: "Salade nesoiase test de ca cord",
        likes: 30,
        comments: 10,
    },
    {
        photo: "images/images/dish/1.png",
        title: "salade Maroccan",
        description: "Salade nesoiase test de ca cord",
        likes: 3,
        comments: 90,
    },
    {
        photo: "images/images/dish/1.png",
        title: "salade Maroccan",
        description: "Salade nesoiase test de ca cord",
        likes: 3,
        comments: 90,
    },
    {
        photo: "images/images/dish/1.png",
        title: "salade Maroccan",
        description: "Salade nesoiase test de ca cord",
        likes: 3,
        comments: 90,
    },
    {
        photo: "images/images/dish/1.png",
        title: "salade Maroccan",
        description: "Salade nesoiase test de ca cord",
        likes: 3,
        comments: 90,
    },
    {
        photo: "images/images/dish/1.png",
        title: "salade Maroccan",
        description: "Salade nesoiase test de ca cord",
        likes: 3,
        comments: 90,
    },
];
function getCard(){
    
let cardHTML = "";

for (let i = 0; i < ArryRecipes.length; i++) {
    cardHTML += `
    <div class="col">
        <div class="card d-flex justify-content-center align-items-center mt-5">
            <img src="${ArryRecipes[i].photo}" alt="" class="card-img rounded-circle w-50">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <h4 class="card-title">${ArryRecipes[i].title}</h4>
                <p class="card-text">${ArryRecipes[i].description}</p>
                <div class="feedback">
                    <p><i class="fa-regular fa-heart text-start like-click" onclick="likesCount(this)"> <span class="like-count">0</span></i></p>
                    <p><i class="fa-regular fa-comment like-click" onclick="commentsCount(this)"> <span class="comment-count">0</span></i></p>
                </div>
            </div>
        </div>
    </div>`;
}
document.getElementById("cont-card").innerHTML = cardHTML;
}
getCard()

function likesCount(element){
    let likeCountSpan = element.querySelector('.like-count');
    let currentLikes = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = currentLikes + 1;
}

function commentsCount(element){
    let commentCountSpan = element.querySelector('.comment-count');
    let currentComments = parseInt(commentCountSpan.textContent);
    commentCountSpan.textContent = currentComments + 1;
}



let img=document.getElementById("img-recette")
let titlerecette=document.getElementById("title-recette")
let descriptionR=document.getElementById("descr-recette")

function addCards(){

    const card={
        photo: img.files.length > 0 ? URL.createObjectURL(img.files[0]) : '',
        title:titlerecette.value,
        description: descriptionR.value
    }
    ArryRecipes.push(card)
}
document.getElementById("send").onclick = function(){
    // document.getElementById("cont-card").innerHTML =""; 
    
    img.onchange=function(){
        img.src=URL.createObjectURL(img.files[0])
    }

    addCards();
    getCard();
}