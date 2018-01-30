db.getCollection("movies").drop()

movies = [
  {
    title: "The Conjuring",
    rating: 9,
    genre: "Horror"
  },
  {
    title: "Stand By Me",
    rating: 8,
    genre: "Adventure"
  },
  {
    title: "The Greatest Show",
    rating: 10,
    genre: "Drama"
  }
]

db.getCollection("movies").insert(movies)
