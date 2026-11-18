
let accents = ["#ec4899", "#38bdf8", "#22c55e", "#f59e0b", "#a855f7"];
let backgrounds = ["#14000c", "#00101a", "#001408", "#1a1000", "#0b0014"];


// ---------- Button 1: Color Change ----------
function changeColor() {

    // Take the first colour off the front and put it at the back (shift + push).
    // So every click gives a new colour, and it keeps going round.
    let newAccent = accents.shift();
    accents.push(newAccent);

    let newBackground = backgrounds.shift();
    backgrounds.push(newBackground);

    // Page background
    let page = document.getElementById("page");
    page.style.backgroundColor = newBackground;

    // Homepage
    document.getElementById("heroBox").style.borderColor = newAccent;
    document.getElementById("heroName").style.color = newAccent;
    document.getElementById("btnColor").style.backgroundColor = newAccent;
    document.getElementById("btnPortfolio").style.backgroundColor = newAccent;

    // Portfolio: navigation bar
    document.getElementById("navBar").style.borderColor = newAccent;
    document.getElementById("navColorBtn").style.backgroundColor = newAccent;
    document.getElementById("navHomeBtn").style.backgroundColor = newAccent;
    document.getElementById("footerHomeBtn").style.backgroundColor = newAccent;

    // Portfolio: introduction
    document.getElementById("introName").style.color = newAccent;

    // Portfolio: cards
    document.getElementById("about").style.borderColor = newAccent;
    document.getElementById("education").style.borderColor = newAccent;
    document.getElementById("skills").style.borderColor = newAccent;
    document.getElementById("softskills").style.borderColor = newAccent;
    document.getElementById("interests").style.borderColor = newAccent;
    document.getElementById("activities").style.borderColor = newAccent;
    document.getElementById("contact").style.borderColor = newAccent;
}


// ---------- Button 2: Portfolio ----------
function showPortfolio() {

    // Hide the homepage
    document.getElementById("home").style.display = "none";

    // Show the portfolio. The CSS transition makes it fade in smoothly.
    let portfolio = document.getElementById("portfolio");
    portfolio.style.height = "auto";
    portfolio.style.overflow = "visible";
    portfolio.style.opacity = "1";

    // Animation: "Hi, I am Aryan Mishra" fades in while the letters close up
    let introName = document.getElementById("introName");
    introName.style.opacity = "1";
    introName.style.letterSpacing = "2px";
}


// ---------- Back to Home ----------
function showHome() {

    // Hide the portfolio again
    let portfolio = document.getElementById("portfolio");
    portfolio.style.height = "0";
    portfolio.style.overflow = "hidden";
    portfolio.style.opacity = "0";

    // Reset the intro animation so it plays again next time
    let introName = document.getElementById("introName");
    introName.style.opacity = "0";
    introName.style.letterSpacing = "25px";

    // Show the homepage
    document.getElementById("home").style.display = "flex";
}
