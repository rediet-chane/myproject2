const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

// Track the current X offset for each list
let currentTranslateX = new Array(movieLists.length).fill(0);

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) >= 0 ) { 
        currentTranslateX[i] -= 300; // move left 270px
        movieLists[i].style.transform = `translateX(${currentTranslateX[i]}px)`;
    }else{
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
    }
    });
    console.log(movieLists[i].querySelectorAll("img").length)
});
