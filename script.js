const createButton = document.getElementById("createButton");
const showButton = document.getElementById("showMore");
const products = document.getElementById("products")
const mainIMG = document.getElementById("rightImage")
const right = document.getElementById("right")
const slideshowButton = document.getElementById("slideshowButton")
const card = document.getElementById("cardsLink");



const newDiv = document.createElement("div");
newDiv.id = "products";

let array = [
    "resources/Frame 8.png",
    "resources/Frame 9.png",
    "resources/Frame 10.png"
]

let IMGurl = [
    "resources/Frame 11.png",
    "resources/Frame 12.png",
    "resources/Frame 13.png",
    "resources/Frame 14.png",
    "resources/Frame 3 (1).png"
]

const preloadedImages = IMGurl.map(url => {
    const img = new Image();
    img.src = url;
    return img;
});

let currentIndex = 0;
let intervalId = null;

function startSlideshow() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % IMGurl.length; // Cycle through the images
        mainIMG.src = IMGurl[currentIndex]; // Update the image source
    }, 3000); // 3-second interval
}

// Call the function to start the slideshow when the page loads
startSlideshow();

function renderCards (){
    if(showButton.textContent == "Show More"){

        for(let i=0; i<3; i++){
            const newDiv = document.createElement("img");
            newDiv.id= "cardProducts";
            newDiv.src= array[i];
            products.appendChild(newDiv);
        }
    
        showButton.textContent = "Show Less";
    }

    else{
        const element = document.getElementById("cardProducts")
        element.remove();
        const element2 = document.getElementById("cardProducts")
        element2.remove();
        const element3 = document.getElementById("cardProducts")
        element3.remove();

        showButton.textContent = "Show More";
    }
}

showButton.addEventListener('click', ()=> renderCards())
card.addEventListener('click', ()=> renderCards())
card.addEventListener("click", () => {
    window.scrollBy({
        top: 500, // Scroll down by 500 pixels
        behavior: "smooth" // Smooth scrolling
    });
});

//შოურ მორზე რო დააჭერს ამ მეთოდით ძემოთ რაც არის უნდა ლუპი დატრიალდეს წინასწარ გამზადებულ ერეიში
//და შექმნას ობიექტები ანუ ის სამი ბარათი რომელიც სატითაოდ შეიყრება ლუპის სასუალებით შექმნის ერთს შეაგდებს დაიწყებს მეორეს და ასე

//ასევე ოთხი ბარათი რო არის ეგ უნდა ვაქციო დისფლეიდ რომელიც დატრიალდება და ხელით დაჭერაზე გადაგვიყვანს შემდეგ ფოტოზე და ასე შემდე