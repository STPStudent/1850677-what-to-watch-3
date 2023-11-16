import { Film } from '../types/film';
import { Genre } from '../const';

export const films: Film[] = [
  {
    id: 0,
    title: 'The Grand Budapest Hotel',
    genre: Genre.Drama,
    releaseYear: 2014,
    imagePath: 'img/bg-the-grand-budapest-hotel.jpg',
    posterImagePath: 'img/the-grand-budapest-hotel-poster.jpg',
    rating: 8.9,
    ratingLevel: 'Very Good',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'
    ],
    ratingCount: 302,
    duration: '1h 39m',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: Genre.SciFi,
    releaseYear: 2018,
    imagePath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    posterImagePath: '',
    rating: 8.8,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: Genre.Documentary,
    releaseYear: 2018,
    imagePath: 'img/bohemian-rhapsody.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 3,
    title: 'Macbeth',
    genre: Genre.Drama,
    releaseYear: 2015,
    imagePath: 'img/macbeth.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 4,
    title: 'Aviator',
    genre: Genre.Drama,
    releaseYear: 2004,
    imagePath: 'img/aviator.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    genre: Genre.Thriller,
    releaseYear: 2011,
    imagePath: 'img/we-need-to-talk-about-kevin.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    genre: Genre.Comedy,
    releaseYear: 2014,
    imagePath: 'img/what-we-do-in-the-shadows.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 7,
    title: 'Revenant',
    genre: Genre.KidsFamily,
    releaseYear: 2015,
    imagePath: 'img/revenant.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 8,
    title: 'Johnny English',
    genre: Genre.Comedy,
    releaseYear: 2003,
    imagePath: 'img/johnny-english.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 9,
    title: 'Shutter Island',
    genre: Genre.Thriller,
    releaseYear: 2010,
    imagePath: 'img/shutter-island.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 10,
    title: 'Pulp Fiction',
    genre: Genre.Thriller,
    releaseYear: 1994,
    imagePath: 'img/pulp-fiction.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 11,
    title: 'No Country for Old Men',
    genre: Genre.Thriller,
    releaseYear: 2007,
    imagePath: 'img/no-country-for-old-men.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 12,
    title: 'Snatch',
    genre: Genre.Comedy,
    releaseYear: 2000,
    imagePath: 'img/snatch.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 13,
    title: 'Moonrise Kingdom',
    genre: Genre.Comedy,
    releaseYear: 2012,
    imagePath: 'img/moonrise-kingdom.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 14,
    title: 'Seven Years in Tibet',
    genre: Genre.KidsFamily,
    releaseYear: 1997,
    imagePath: 'img/seven-years-in-tibet.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 15,
    title: 'Midnight Special',
    genre: Genre.KidsFamily,
    releaseYear: 2016,
    imagePath: 'img/midnight-special.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 16,
    title: 'War of the Worlds',
    genre: Genre.KidsFamily,
    releaseYear: 2005,
    imagePath: 'img/war-of-the-worlds.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '2h',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 17,
    title: 'Dardjeeling Limited',
    genre: Genre.KidsFamily,
    releaseYear: 2007,
    imagePath: 'img/dardjeeling-limited.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '2h',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 18,
    title: 'Orlando',
    genre: Genre.Drama,
    releaseYear: 1992,
    imagePath: 'img/orlando.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '2h',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 19,
    title: 'Mindhunter',
    genre: Genre.Thriller,
    releaseYear: 2017,
    imagePath: 'img/mindhunter.jpg',
    posterImagePath: '',
    rating: 9,
    ratingLevel: 'Very Good',
    ratingCount: 0,
    description: '',
    director: '',
    starring: [],
    duration: '2h',
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
];

export const PromoFilm: Film = films[0];
