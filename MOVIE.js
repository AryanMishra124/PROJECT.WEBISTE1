
let movies = [
    { id: 1,  title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8, poster: "",
      synopsis: "A skilled thief who steals secrets from inside dreams is offered a chance to erase his past by planting an idea in a target's mind." },
    { id: 2,  title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.7, poster: "",
      synopsis: "A team of explorers travels through a wormhole in search of a new home for humanity as Earth slowly fails." },
    { id: 3,  title: "The Matrix", genre: "Sci-Fi", year: 1999, rating: 8.7, poster: "",
      synopsis: "A hacker discovers that his world is a simulation and joins a rebellion against the machines that control it." },
    { id: 4,  title: "Dune: Part Two", genre: "Sci-Fi", year: 2024, rating: 8.5, poster: "",
      synopsis: "Paul Atreides joins the Fremen on a path of revenge while facing a terrible choice that will shape the future of the universe." },

    { id: 5,  title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0, poster: "",
      synopsis: "Batman faces the Joker, a criminal mastermind who pushes Gotham City to the edge of chaos." },
    { id: 6,  title: "Mad Max: Fury Road", genre: "Action", year: 2015, rating: 8.1, poster: "",
      synopsis: "In a desert wasteland, a drifter and a rebel warrior race across the sands to free captives from a brutal tyrant." },
    { id: 7,  title: "RRR", genre: "Action", year: 2022, rating: 7.8, poster: "",
      synopsis: "Two fearless revolutionaries in 1920s India form an unlikely friendship while fighting against colonial rule." },
    { id: 8,  title: "John Wick", genre: "Action", year: 2014, rating: 7.4, poster: "",
      synopsis: "A retired assassin returns to the underworld he left behind after a personal loss." },

    { id: 9,  title: "Se7en", genre: "Thriller", year: 1995, rating: 8.6, poster: "",
      synopsis: "Two detectives hunt a serial killer whose crimes are inspired by the seven deadly sins." },
    { id: 10, title: "Parasite", genre: "Thriller", year: 2019, rating: 8.5, poster: "",
      synopsis: "A poor family slowly works its way into a wealthy household, with consequences nobody expects." },
    { id: 11, title: "Gone Girl", genre: "Thriller", year: 2014, rating: 8.1, poster: "",
      synopsis: "A man becomes the prime suspect when his wife disappears on the morning of their anniversary." },

    { id: 12, title: "Spirited Away", genre: "Anime", year: 2001, rating: 8.6, poster: "",
      synopsis: "A young girl wanders into a world of spirits and must work in a bathhouse to save her parents." },
    { id: 13, title: "Your Name", genre: "Anime", year: 2016, rating: 8.4, poster: "",
      synopsis: "Two teenagers mysteriously swap bodies and discover a connection that crosses distance and time." },
    { id: 14, title: "Demon Slayer: Mugen Train", genre: "Anime", year: 2020, rating: 8.2, poster: "",
      synopsis: "Tanjiro and the Demon Slayer Corps board a train where a powerful demon is waiting." },

    { id: 15, title: "La La Land", genre: "Romance", year: 2016, rating: 8.0, poster: "",
      synopsis: "A jazz musician and an aspiring actress chase their dreams in Los Angeles and fall in love along the way." },
    { id: 16, title: "Titanic", genre: "Romance", year: 1997, rating: 7.9, poster: "",
      synopsis: "Two people from different worlds fall in love aboard the ill-fated ocean liner." },
    { id: 17, title: "Before Sunrise", genre: "Romance", year: 1995, rating: 8.1, poster: "",
      synopsis: "Two strangers meet on a train and spend one unforgettable night walking through Vienna." },

    { id: 18, title: "The Fellowship of the Ring", genre: "Fantasy", year: 2001, rating: 8.9, poster: "",
      synopsis: "A young hobbit and a company of allies set out to destroy a ring that could doom Middle-earth." },
    { id: 19, title: "Pan's Labyrinth", genre: "Fantasy", year: 2006, rating: 8.2, poster: "",
      synopsis: "In 1944 Spain, a girl discovers a mysterious labyrinth and is given three tasks by a faun." },

    { id: 20, title: "The Shawshank Redemption", genre: "Drama", year: 1994, rating: 9.3, poster: "",
      synopsis: "A banker sentenced to prison builds an unlikely friendship and never gives up hope." },
    { id: 21, title: "Whiplash", genre: "Drama", year: 2014, rating: 8.5, poster: "",
      synopsis: "A young drummer enters an elite music school where a ruthless teacher pushes him to his limits." },
    { id: 22, title: "Oppenheimer", genre: "Drama", year: 2023, rating: 8.3, poster: "",
      synopsis: "The story of the scientist who led the creation of the atomic bomb and the burden that followed." },

    { id: 23, title: "3 Idiots", genre: "Comedy", year: 2009, rating: 8.4, poster: "",
      synopsis: "Three engineering students question the pressure of marks and chase what they truly love." },
    { id: 24, title: "The Grand Budapest Hotel", genre: "Comedy", year: 2014, rating: 8.1, poster: "",
      synopsis: "A legendary hotel concierge and his young lobby boy are pulled into the theft of a priceless painting." },

    { id: 25, title: "Get Out", genre: "Horror", year: 2017, rating: 7.7, poster: "",
      synopsis: "A young man visiting his girlfriend's family slowly uncovers a disturbing secret." },
    { id: 26, title: "The Conjuring", genre: "Horror", year: 2013, rating: 7.5, poster: "",
      synopsis: "Paranormal investigators help a family terrorised by a dark presence in their farmhouse." }
];


// ---------- 2. VARIABLES (let, from my notes) ----------
let genres = ["All", "Action", "Sci-Fi", "Thriller", "Anime", "Romance", "Fantasy", "Drama", "Comedy", "Horror"];
let recGenres = ["Top Rated", "Action", "Sci-Fi", "Thriller", "Anime", "Romance", "Fantasy", "Drama", "Comedy", "Horror"];

let selectedGenre = "All";     // genre chosen on the Explore page
let recGenre = "Top Rated";    // genre chosen on the Recommendations page
let recPool = [];              // movies that match the recommendation genre
let vault = [];                // ids of the movies saved by the user
let openId = 0;                // id of the movie shown in the pop-up


// ---------- 3. HELPER FUNCTIONS ----------

// Find one movie using its id
function getMovie(id) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id === id) {
            return movies[i];
        }
    }
}

// Poster picture, or a coloured title card if no poster link is given
function posterHtml(m) {
    if (m.poster !== "") {
        return '<img src="' + m.poster + '" alt="' + m.title + ' poster">';
    }
    return '<div class="poster-fallback genre-' + m.genre + '">' +
           '<p class="pf-title">' + m.title + '</p>' +
           '<p class="pf-year">' + m.year + '</p>' +
           '</div>';
}

// Build the HTML for one movie card
function cardHtml(m, inVaultPage) {
    let saved = vault.includes(m.id);

    let btnText = "+ Add to Vault";
    let btnClass = "fav-btn";
    if (saved) {
        btnClass = "fav-btn added";
        btnText = "✓ In Vault";
        if (inVaultPage) {
            btnText = "Remove from Vault";
        }
    }

    return '<div class="movie-card">' +
             '<div class="click-area" onclick="openModal(' + m.id + ')">' +
               '<div class="poster-box">' +
                  posterHtml(m) +
                  '<p class="rating-badge">★ ' + m.rating + '</p>' +
                  '<p class="hover-text">View Details</p>' +
               '</div>' +
               '<div class="card-body">' +
                  '<h3 class="card-title">' + m.title + '</h3>' +
                  '<p class="card-meta"><span class="card-genre">' + m.genre + '</span> &bull; ' + m.year + '</p>' +
               '</div>' +
             '</div>' +
             '<div class="card-body">' +
               '<button class="' + btnClass + '" onclick="toggleFav(' + m.id + ')">' + btnText + '</button>' +
             '</div>' +
           '</div>';
}

// Build a row of genre buttons. "handler" is the function name each button calls.
function buttonsHtml(list, selected, handler) {
    let html = "";
    for (let i = 0; i < list.length; i++) {
        let cls = "genre-btn";
        if (list[i] === selected) {
            cls = "genre-btn active";
        }
        html = html + '<button class="' + cls + '" onclick="' + handler + '(\'' + list[i] + '\')">' + list[i] + '</button>';
    }
    return html;
}


// ---------- 4. NAVIGATION: show / hide sections ----------
function showSection(name) {
    let names = ["home", "explore", "vault", "recs"];

    // hide every section and make every nav button grey
    for (let i = 0; i < names.length; i++) {
        document.getElementById(names[i]).style.display = "none";
        document.getElementById("nav-" + names[i]).style.color = "#b8b8c8";
        document.getElementById("nav-" + names[i]).style.borderBottomColor = "transparent";
    }

    // show the chosen section and highlight its nav button
    document.getElementById(name).style.display = "block";
    document.getElementById("nav-" + name).style.color = "white";
    document.getElementById("nav-" + name).style.borderBottomColor = "#e5383b";
}


// ---------- 5. EXPLORE: search + genre filter ----------
function applyFilters() {
    let text = document.getElementById("searchBox").value.toLowerCase();
    let html = "";
    let count = 0;

    for (let i = 0; i < movies.length; i++) {
        let m = movies[i];
        let genreOk = (selectedGenre === "All" || m.genre === selectedGenre);
        let textOk = m.title.toLowerCase().includes(text);

        if (genreOk && textOk) {
            html = html + cardHtml(m, false);
            count = count + 1;
        }
    }

    document.getElementById("movieGrid").innerHTML = html;
    document.getElementById("resultCount").textContent = "Showing " + count + " movie(s)";

    // friendly message when nothing matches
    if (count === 0) {
        document.getElementById("noResults").style.display = "block";
    } else {
        document.getElementById("noResults").style.display = "none";
    }
}

function selectGenre(g) {
    selectedGenre = g;
    document.getElementById("genreBar").innerHTML = buttonsHtml(genres, selectedGenre, "selectGenre");
    applyFilters();
}


// ---------- 6. MY VAULT ----------
function renderVault() {
    let html = "";
    let count = 0;

    for (let i = 0; i < vault.length; i++) {
        html = html + cardHtml(getMovie(vault[i]), true);
        count = count + 1;
    }

    document.getElementById("vaultGrid").innerHTML = html;

    if (count === 0) {
        document.getElementById("vaultEmpty").style.display = "block";
    } else {
        document.getElementById("vaultEmpty").style.display = "none";
    }

    // update the numbers shown in the navigation and on the homepage
    document.getElementById("nav-vault").textContent = "My Vault (" + count + ")";
    document.getElementById("statVault").textContent = count;
}

// Add a movie if it is not saved yet, remove it if it is
function toggleFav(id) {
    if (vault.includes(id)) {
        let newList = [];
        for (let i = 0; i < vault.length; i++) {
            if (vault[i] !== id) {
                newList.push(vault[i]);
            }
        }
        vault = newList;
    } else {
        vault.push(id);
    }

    // update every part of the website
    applyFilters();
    renderVault();
    renderRecs();
    updateModalButton();
}


// ---------- 7. RECOMMENDATIONS ----------
function setRecGenre(g) {
    recGenre = g;
    recPool = [];

    for (let i = 0; i < movies.length; i++) {
        if (g === "Top Rated") {
            if (movies[i].rating >= 8.5) {
                recPool.push(movies[i]);
            }
        } else {
            if (movies[i].genre === g) {
                recPool.push(movies[i]);
            }
        }
    }

    document.getElementById("recGenreBar").innerHTML = buttonsHtml(recGenres, recGenre, "setRecGenre");
    renderRecs();
}

// Show the first 4 movies of the pool (slice from my notes)
function renderRecs() {
    let picks = recPool.slice(0, 4);
    let html = "";

    for (let i = 0; i < picks.length; i++) {
        html = html + cardHtml(picks[i], false);
    }

    document.getElementById("recGrid").innerHTML = html;
    document.getElementById("recInfo").textContent = "Picks for you: " + recGenre + " (" + recPool.length + " movies match)";
}

// "Discover Something New": move movies from the front to the back (shift + push)
function discoverNew() {
    let step = 4;
    if (recPool.length <= 4) {
        step = 1;
    }

    for (let i = 0; i < step; i++) {
        let first = recPool.shift();
        recPool.push(first);
    }
    renderRecs();
}


// ---------- 8. MOVIE DETAILS POP-UP ----------
function openModal(id) {
    let m = getMovie(id);
    openId = id;

    document.getElementById("modalPoster").innerHTML = posterHtml(m);
    document.getElementById("modalGenre").textContent = m.genre.toUpperCase();
    document.getElementById("modalTitle").textContent = m.title;
    document.getElementById("modalMeta").textContent = "★ " + m.rating + "   |   " + m.year;
    document.getElementById("modalSynopsis").textContent = m.synopsis;

    updateModalButton();
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    openId = 0;
}

// Keep the pop-up's button in sync with the vault
function updateModalButton() {
    let btn = document.getElementById("modalFav");

    if (vault.includes(openId)) {
        btn.textContent = "✓ In Vault (click to remove)";
        btn.className = "fav-btn added";
    } else {
        btn.textContent = "+ Add to Vault";
        btn.className = "fav-btn";
    }
}


// ---------- 9. HOMEPAGE: three featured posters ----------
function drawHeroPosters() {
    let featured = [movies[0], movies[4], movies[11]];   // Inception, The Dark Knight, Spirited Away
    let html = "";

    for (let i = 0; i < featured.length; i++) {
        html = html + '<div class="hero-poster">' +
                        '<div class="poster-box">' + posterHtml(featured[i]) + '</div>' +
                        '<p class="hero-poster-title">' + featured[i].title + '</p>' +
                      '</div>';
    }

    document.getElementById("heroPosters").innerHTML = html;
}


// ---------- 10. START THE WEBSITE ----------
document.getElementById("statMovies").textContent = movies.length;
drawHeroPosters();
selectGenre("All");        // draws the genre buttons and all movie cards
renderVault();
setRecGenre("Top Rated");  // draws the recommendation buttons and picks
showSection("home");