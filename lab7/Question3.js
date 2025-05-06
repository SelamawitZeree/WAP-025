class Exercise3 {
    #movies = new Map();
    add_genre(genre) {
        if (this.#movies.has(genre)) {
            console.log(`Genre, ${genre} already exists`);
            return false;
        }
        this.#movies.set(genre, []);
        return true;
    }
    add_movie_in_genre(genre, new_movie) {
        if (this.#movies.has(genre)) {
            const movies = this.#movies.get(genre);
            const movieIndex = movies.findIndex((movie) => movie.id === new_movie.id);
            if (movieIndex === -1) {
                movies.push(new_movie);
                return true;
            }
            console.log("Movie already exists in genre");
            return false;
        }
        this.#movies.set(genre, [new_movie]);
        return true;
    }
    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        if (this.#movies.has(genre)) {
            const movies = this.#movies.get(genre);
            const movie = movies.find((m) => m.id === movie_id);
            if (movie) {
                movie.title = new_title;
                return true;
            }
            console.log(
                `Movie with id ${movie_id} does not exist for genre ${genre}`
            );
            return false;
        }
        console.log(`Genre ${genre} does not exist. Please add the genre first`);
        return false;
    }
    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        if (this.#movies.has(genre)) {
            const movies = this.#movies.get(genre);
            const movieIndex = movies.findIndex((movie) => movie.id === movie_id);
            if (movieIndex >= 0) {
                movies.splice(movieIndex, 1);
                return true;
            }
            console.log(
                `Movie with id ${movie_id} does not exist for genre ${genre}`
            );
            return false;
        }
        console.log(`Genre ${genre} does not exist`);
        return false;
    }

    get_movie_title_by_id(genre, movie_id) {
        if (this.#movies.has(genre)) {
            const movies = this.#movies.get(genre);
            const movie = movies.find((movie) => movie.id === movie_id);

            return movie ? movie.title : null;
        }
        return null;
    }
}

const exercise3 = new Exercise3();

// Add genres
console.log(exercise3.add_genre("thriller"));
console.log(exercise3.add_genre("comedy"));
console.log(exercise3.add_genre("comedy"));

// Add movie in genre
exercise3.add_movie_in_genre("thriller", { id: "1", title: "The American" });
exercise3.add_movie_in_genre("thriller", { id: "1", title: "The American" });
exercise3.add_movie_in_genre("thriller", { id: "2", title: "Arcadian" });
exercise3.add_movie_in_genre("comedy", { id: "3", title: "Friday" });
exercise3.add_movie_in_genre("comedy", { id: "4", title: "Next Friday" });

// Update movie title
exercise3.update_movie_title_by_genre_and_movie_id(
    "thriller",
    "1",
    "Captain America"
);

// Delete a movie
exercise3.delete_movie_by_genre_and_movie_id("thriller", "1");
exercise3.delete_movie_by_genre_and_movie_id("thriller", "1");
exercise3.delete_movie_by_genre_and_movie_id("horror", "1");

// Get a movie title
console.log(exercise3.get_movie_title_by_id("thriller", "1"));
console.log(exercise3.get_movie_title_by_id("thriller", "2"));
