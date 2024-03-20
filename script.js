let like_click=document.getElementById("like-click")
let like_count=document.getElementById("like-count")
score=0
like_click.addEventListener("click", function(){
    score++
    like_count.innerHTML=score
})
