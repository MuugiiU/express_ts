import { Schema, model } from "mongoose";

interface IMovie {
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  rated: string;
  awards: {
    wins: number;
    nominations: string;
    text: string;
  };
  lastupdates: Date;
  year: Date;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [string];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
}

const movieSchema = new Schema<IMovie>({});

const movie = model("Movie", movieSchema);

export default movie;
