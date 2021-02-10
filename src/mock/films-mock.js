const films = [
  {
    "id": 1,
    "name": `The Grand Budapest Hotel`,
    "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
    "preview_image": `img/the-grand-budapest-hotel.jpg`,
    "background_image": `img/bg-the-grand-budapest-hotel.jpg`,
    "background_color": `#ffffff`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.`,
    "rating": 6.0,
    "scores_count": 2140,
    "director": `Wes Andreson`,
    "starring": [`Ralph Fiennes`, `F. Murray Abraham`, `Mathieu Amalric`, `Adrien Brody`, `Willem Dafoe`, `Jeff Goldblum`],
    "run_time": 99,
    "genre": `Comedy`,
    "released": 2014,
    "is_favorite": false
  },
  {
    "id": 2,
    "name": `The Lord of the Rings: The Fellowship of the Ring`,
    "poster_image": `img/mock/lotr-poster.jpg`,
    "preview_image": `img/mock/lotr.jpg`,
    "background_image": `img/mock/bg-lotr.jpg`,
    "background_color": `#ffffff`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
    "rating": 8.8,
    "scores_count": 52160,
    "director": `Peter Jackson`,
    "starring": [`Elijah Wood`, `Ian McKellen`, `Viggo Mortensen`, `Orlando Bloom`, `Sean Bean`],
    "run_time": 228,
    "genre": `Fantasy`,
    "released": 2001,
    "is_favorite": true
  },
  {
    "id": 3,
    "name": `Fight club`,
    "poster_image": `img/mock/fight-club-poster.jpg`,
    "preview_image": `img/mock/fight-club.jpg`,
    "background_image": `img/mock/bg-fight-club.jpg`,
    "background_color": `#ffffff`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.`,
    "rating": 8.8,
    "scores_count": 18752,
    "director": `David Fincher`,
    "starring": [`Brad Pitt`, `Edward Norton`, `Helena Bonham Carter`],
    "run_time": 151,
    "genre": `Action`,
    "released": 1999,
    "is_favorite": true
  },
  {
    "id": 4,
    "name": `Raiders of the Lost Ark`,
    "poster_image": `img/mock/lost-ark-poster.jpg`,
    "preview_image": `img/mock/lost-ark.jpg`,
    "background_image": `img/mock/bg-lost-ark.jpg`,
    "background_color": `#ffffff`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.`,
    "rating": 8.4,
    "scores_count": 19374,
    "director": `Steven Spielberg`,
    "starring": [`Harrison Ford`, `Karen Allen`, `Paul Freeman`],
    "run_time": 115,
    "genre": `Adventure`,
    "released": 1981,
    "is_favorite": false
  },
  {
    "id": 5,
    "name": `Kill Bill: Vol. 1`,
    "poster_image": `img/mock/kill-bill-poster.jpg`,
    "preview_image": `img/mock/kill-bill.jpg`,
    "background_image": `img/mock/bg-kill-bill.jpg`,
    "background_color": `#ffffff`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.`,
    "rating": 7.5,
    "scores_count": 11408,
    "director": `Quentin Tarantino`,
    "starring": [`Uma Thurman`, `David Carradine`],
    "run_time": 112,
    "genre": `Crime`,
    "released": 2003,
    "is_favorite": false
  },
  {
    "id": 6,
    "name": `Shutter Island`,
    "poster_image": `img/mock/shutter-island-poster.jpg`,
    "preview_image": `img/mock/shutter-island.jpg`,
    "background_image": `img/mock/bg-shutter-island.jpg`,
    "background_color": `#977461`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    "rating": 6.7,
    "scores_count": 13190,
    "director": `Martin Scorsese`,
    "starring": [`Leonardo DiCaprio`, `Mark Ruffalo`, `Ben Kingsley`],
    "run_time": 135,
    "genre": `Thriller`,
    "released": 2010,
    "is_favorite": false
  },
  {
    "id": 7,
    "name": `Snatch`,
    "poster_image": `img/mock/snatch-poster.jpg`,
    "preview_image": `img/mock/snatch.jpg`,
    "background_image": `img/mock/bg-snatch.jpg`,
    "background_color": `#000000`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    "rating": 7.3,
    "scores_count": 9472,
    "director": `Guy Ritchie`,
    "starring": [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`, `Vinnie Jones`, `Alan Ford`, `Jason Flemyng`],
    "run_time": 104,
    "genre": `Comedy`,
    "released": 2000,
    "is_favorite": true
  },
  {
    "id": 8,
    "name": `The Big Lebowski`,
    "poster_image": `img/mock/lebovski-poster.jpg`,
    "preview_image": `img/mock/lebovski.jpg`,
    "background_image": `img/mock/bg-lebovski.jpg`,
    "background_color": `#000000`,
    "video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.`,
    "rating": 5.9,
    "scores_count": 4387,
    "director": `Coen brothers`,
    "starring": [`Jeff Bridges`, `John Goodman`, `Steve Buscemi`],
    "run_time": 119,
    "genre": `Comedy`,
    "released": 1998,
    "is_favorite": true
  },
];

export {films};
