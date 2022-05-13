import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Breakdown",
    src: "./assets/images/breakdown.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Podcast",
    src: "./assets/images/podcast.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Comics",
    src: "./assets/images/comics.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Explained",
    src: "./assets/images/explained.jpg"
  },
];
