const { UserList, MovieList } = require("../FakeData")
const _ = require("lodash");

const resolvers = {
    // place the highest level field..in type-defs.js, we have query which has users and movieList...so we have query here
    Query: {
     users:() => {
        return UserList;
     },
     movies: () => {
        return MovieList; 
     },
     user: (parent, args) => {
        const id = args.id;
        const user = _.find(UserList, {id: Number(id)});
        return user;
     },
     movie: (parent, args) => {
        const name = args.name;
        const movie = _.find(MovieList, {name: name});
        return movie;
     },
     movieById: (parent, args) => {
      const id = args.id;
      const movie = _.find(MovieList, {id: Number(id)});
      return movie;
     },
    },

    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010)
        }
    }
}

module.exports.resolvers = resolvers;