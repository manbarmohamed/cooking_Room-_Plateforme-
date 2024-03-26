let bigImage = document.getElementById('big-img');

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
let healthyimg = document.getElementById("healthy")
let luxaryimg = document.getElementById("luxary")
let deliciousimg = document.getElementById("delicious")
let title = document.getElementById("title")
let desc1 = document.getElementById("desc1")
let desc2 = document.getElementById("desc2")
let desc3 = document.getElementById("desc3")

function healthy() {
  title.innerText = "Healthy"
  desc1.innerText = "Embrace a nutritious and wholesome culinary journey."
  desc2.innerText = "Our healthy recipes are carefully crafted to nourish your body while tantalizing your taste buds."
  desc3.innerText = "Explore a world of vibrant ingredients and balanced flavors that promote well-being and vitality."
}

function luxary() {
  title.innerText = "Luxary"
  desc1.innerText = "Discover exquisite recipes crafted for royalty's refined palate."
  desc2.innerText = "Indulge in culinary creations that combine opulence with unforgettable flavors. "
  desc3.innerText = "Elevate your dining experience with our luxurious dishes that embody sophistication decadence."
}

function delicious() {
  title.innerText = "Delicious"
  desc1.innerText = "Dive into a paradise of delightful flavors and culinary delights."
  desc2.innerText = "Our delicious recipes are a celebration of taste and pleasure, offering a symphony of aromas and textures that will leave you craving for more."
  desc3.innerText = "Experience pure gastronomic joy with every bite."
}

let ArryRecipes = [
  {
    photo: "images/images/dish/1.png",
    title: "salade Perry",
    description: "Salade nesoiase test de ca cord",
    likes: 30,
    comments: 10,
    categorie: "Salad",
    ingredient: "-pomme de terre -salamon",
    direction: "PREHEAT A LARGE HEAVY SKILLET OVER MEDIUM HEAT FOR 3 MINUTES",
    time: "-10min preparation time -10min cooking time",
    serving: "this specific recipe serves up to four people. ",
    nat_value: "-100kcal -25.6g -23g ",
  },
  {
    photo: "images/images/dish/2.png",
    title: "salade Maroccan",
    description: "Salade nesoiase test de ca cord",
    likes: 3,
    comments: 90,
    categorie: "Salad",
    ingredient: "tomate -pomme de terre -salamon",
    direction: "PREHEAT A LARGE HEAVY SKILLET OVER MEDIUM HEAT FOR 3 MINUTES",
    time: "-10min preparation time -10min cooking time",
    serving: "this specific recipe serves up to four people. ",
    nat_value: "-100kcal -25.6g -23g ",
  },
  {
    photo: "images/images/dish/3.png",
    title: "salade Maroccan",
    description: "Salade nesoiase test de ca cord",
    likes: 3,
    comments: 90,
    categorie: "Fast Food",
    ingredient: "tomate -pomme de terre -salamon",
    direction: "PREHEAT A LARGE HEAVY SKILLET OVER MEDIUM HEAT FOR 3 MINUTES",
    time: "-10min preparation time -10min cooking time",
    serving: "this specific recipe serves up to four people. ",
    nat_value: "-100kcal -25.6g -23g ",
  },
  {
    photo: "images/images/dish/4.png",
    title: "salade Maroccan",
    description: "Salade nesoiase test de ca cord",
    likes: 3,
    comments: 90,
    categorie: "Burger",
    ingredient: "tomate -pomme de terre -salamon",
    direction: "PREHEAT A LARGE HEAVY SKILLET OVER MEDIUM HEAT FOR 3 MINUTES",
    time: "-10min preparation time -10min cooking time",
    serving: "this specific recipe serves up to four people. ",
    nat_value: "-100kcal -25.6g -23g ",
  },
  {
    photo: "images/images/dish/5.png",
    title: "salade Maroccan",
    description: "Salade nesoiase test de ca cord",
    likes: 3,
    comments: 90,
    categorie: "Salad",
    ingredient: "tomate -pomme de terre -salamon",
    direction: "PREHEAT A LARGE HEAVY SKILLET OVER MEDIUM HEAT FOR 3 MINUTES",
    time: "-10min preparation time -10min cooking time",
    serving: "this specific recipe serves up to four people. ",
    nat_value: "-100kcal -25.6g -23g ",
  },
  {
    photo: "images/images/dish/6.png",
    title: "salade Maroccan",
    description: "Salade nesoiase test de ca cord",
    likes: 3,
    comments: 90,
    categorie: "Burger",
    ingredient: "tomate -pomme de terre -salamon",
    direction: "PREHEAT A LARGE HEAVY SKILLET OVER MEDIUM HEAT FOR 3 MINUTES",
    time: "-10min preparation time -10min cooking time",
    serving: "this specific recipe serves up to four people. ",
    nat_value: "-100kcal -25.6g -23g ",
  },
];
function getCard(recipes) {

  let cardHTML = "";

  for (let i = 0; i < recipes.length; i++) {
    cardHTML += `
    <div class="col card-search" data-index="${i}">
        <div class="card d-flex justify-content-center align-items-center mt-5 rounded-4">
            <img onclick="ingredient(${i})" src="${recipes[i].photo}" alt="" class="card-img rounded-circle w-75">
            <div class="card-body d-flex justify-content-center align-items-center flex-column" style="width: 80%;">
                <h4 class="card-title">${recipes[i].title}</h4>
                <p class="card-text">${recipes[i].description}</p>
                <div class="feedback">
    <p><i class="fa-regular fa-heart text-start like-click" onclick="likesCount(this)"> <span class="like-count">${recipes[i].likes}</span></i></p>
                <p type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
  data-bs-whatever="@getbootstrap" id="add-recipe"><i class="fa-regular fa-comment like-click"> <span id="comment-count-1" class="comment-count">${recipes[i].comments}</span></i>
</p>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Recipe</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="container-rate">
              <div class="post">
                <div class="text">Thanks for rating us!</div>
                <div class="edit">EDIT</div>
              </div>
              <div class="star-widget">
                <input type="radio" name="rate" id="rate-5">
                <label for="rate-5" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-4">
                <label for="rate-4" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-3">
                <label for="rate-3" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-2">
                <label for="rate-2" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-1">
                <label for="rate-1" class="fas fa-star"></label>
                <form class="form-rate" action="#">
                  <header></header>
                  <div class="textarea">
                    <textarea cols="30" placeholder="Describe your experience.."></textarea>
                  </div>
                  <div class="btn">
                    <button type="button" onclick="commentsCount(event)" id="submit">Post</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
  </div>
</div>
                </div>
            </div>
        </div>
    </div>`;
  }
  document.getElementById("cont-card").innerHTML = cardHTML;
  let cardElements = document.querySelectorAll('.card-search');
  cardElements.forEach((element, index) => {
    ArryRecipes[index].element = element;
  });
}
//getCard()


let search = document.getElementById("search");
search.addEventListener("input", e => {
  let value = e.target.value.toLowerCase();
  ArryRecipes.forEach(card => {
    let found = card.title.toLowerCase().includes(value) || card.description.toLowerCase().includes(value);
    card.element.classList.toggle("hide", !found)
  });
});

/*let search = document.getElementById("search");

let search = document.getElementById("search");

/*search.addEventListener("input", e => {
    let value = e.target.value.trim().toLowerCase();

    let cardElements = document.querySelectorAll('.col.card-search');
    cardElements.forEach(element => {
        let index = element.getAttribute('data-index');
        let card = ArryRecipes[index];
        if (card.title.toLowerCase().includes(value) || card.description.toLowerCase().includes(value)) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
});*/
function likesCount(element) {
  let likeCountSpan = element.querySelector(".like-count");
  let currentLikes = parseInt(likeCountSpan.textContent);
  likeCountSpan.textContent = currentLikes + 1;
}
function commentsCount(event) {
  event.preventDefault();
  let commentCountElement = document.getElementById('comment-count-1');
  if (commentCountElement) {
    let currentComments = parseInt(commentCountElement.textContent);
    let newComments = currentComments + 1;
    commentCountElement.textContent = newComments;
  }
}



/*function commentsCount(element) {
        let commentCountSpan = element.querySelector('.comment-count');
        let currentComments = parseInt(commentCountSpan.textContent);
        commentCountSpan.textContent = currentComments + 1;
}*/


let submit = document.getElementById("submit")
let img = document.getElementById("img-recette")
let titlerecette = document.getElementById("title-recette")
let descriptionR = document.getElementById("descr-recette")
let cate = document.getElementById("cat")
let inger = document.getElementById("ingr");
let direc = document.getElementById("direc");
let time = document.getElementById("time");
let serv = document.getElementById("serv");
let nt_value = document.getElementById("nt-value");







function addCards() {
  const card = {
    photo: img.files.length > 0 ? URL.createObjectURL(img.files[0]) : "",
    title: titlerecette.value,
    description: descriptionR.value,
    likes: 0,
    comments: 0,
    categorie: cate.value,
    ingredient: inger.value,
    direction: direc.value,
    time: time.value,
    serving: serv.value,
    nat_value: nt_value.value,
  };
  ArryRecipes.push(card);
}

document.getElementById("send").onclick = function () {
  // document.getElementById("cont-card").innerHTML ="";

  img.onchange = function () {
    img.src = URL.createObjectURL(img.files[0])
  }

  addCards();
  paginationChange();
}




//pagination



function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

// Fonction pour afficher les recettes
function paginationChange() {
  document.addEventListener("DOMContentLoaded", function () {
    const PAGE_SIZE = 3;
    let currentPage = 1;
    getCard(paginate(ArryRecipes, PAGE_SIZE, currentPage))
    // console.log(currentPage);
    const paginationLinks = document.querySelectorAll(".page-link");
    paginationLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const pageNumber = parseInt(e.target.innerText);
        if (!isNaN(pageNumber)) {
          currentPage = pageNumber;
          getCard(paginate(ArryRecipes, PAGE_SIZE, currentPage));
        }
      });
    });

    document.getElementById("previous-button").addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        getCard(paginate(ArryRecipes, PAGE_SIZE, currentPage));
      }
    });

    document.getElementById("next-button").addEventListener("click", function (e) {
      e.preventDefault();
      const totalPages = Math.ceil(ArryRecipes.length / PAGE_SIZE);
      if (currentPage < totalPages) {
        currentPage++;
        getCard(paginate(ArryRecipes, PAGE_SIZE, currentPage));
      }
    });

  });

}
paginationChange()


function filtreByCategorie(categore) {
  let filtreCard = ArryRecipes.filter(Arr => Arr.categorie === categore)
  getCard(filtreCard)
}

const catlink = document.querySelectorAll(".categorie")
catlink.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const cate = e.target.dataset.category;
    filtreByCategorie(cate)
  })
})


//Rating


const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = () => {
    widget.style.display = "block";
    post.style.display = "none";
  }
  return false;
}
// ------------popuuuuuuuuuuuuuuuuuuuuuuuup---------------
// Fonction pour afficher les détails du produit dans la modale
function showProductDetails(
  ingredientsTab,
  directionsTab,
  timeTab,
  servingTab,
  nutritionTab,
  i
) {
  // for (let j = 0; j < recipe.length; j++) {
    // Mettre à jour les éléments de la modale avec les détails du produit
    ingredientsTab.innerHTML =
      `<h3>Ingredients</h3>
      <p>${ArryRecipes[i].ingredient}</p>`
      ;

    directionsTab.innerHTML =
      `<h3>Directions</h3>
      <p>
        ${ArryRecipes[i].direction}
      </p>
    `;

    timeTab.innerHTML = `<h3>Estimated Time</h3><p>${ArryRecipes[i].time}</p>`;
    servingTab.innerHTML = `<h3>Servings</h3>     <p>${ArryRecipes[i].serving}</p>`;
    nutritionTab.innerHTML = `<h3>Nutritional Value</h3><p><i>Based on a 2000 calorie diet</i></p>    <p>${ArryRecipes[i].nat_value}</p>`;
  
  // Afficher la modale
  $("#productModal").modal("show");
}
function ingredient(i) {
  // showProductDetails()
  let ingredientsTab = document.getElementById("ingredients");
  let directionsTab = document.getElementById("directions");
  let timeTab = document.getElementById("time-ing");
  let servingTab = document.getElementById("serving");
  let nutritionTab = document.getElementById("nutrition");
  // Afficher les détails du produit dans la modale
  showProductDetails(
    ingredientsTab,
    directionsTab,
    timeTab,
    servingTab,
    nutritionTab,
    i
  );
}

function salmon(evt, recipe) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(recipe).style.display = "block";
  evt.currentTarget.className += " active";
}
