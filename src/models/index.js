const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

Genre.belongsToMany(Artist, { through: "GenresArtists" });
Artist.belongsToMany(Genre, { through: "GenresArtists" });

Artist.hasMany(Album); // artistId se genera una tabla en el modelo album
Album.belongsTo(Artist);

Album.hasMany(Song); // albumId --> song
Song.belongsTo(Album);

Artist.belongsToMany(Song, { through: "ArtistsSongs" });
Song.belongsToMany(Artist, { through: "ArtistsSongs" });

Song.belongsToMany(Genre, { through: "SongsGenre" });
Genre.belongsToMany(Song, { through: "SongsGenre" });
