import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Breakdown",
    description:
      "Trailer Breakdown",
  },
  {
    _id: uuid(),
    categoryName: "Podcast",
    description:
      "Podcast",
  },
  {
    _id: uuid(),
    categoryName: "Comics",
    description:
      "Comics",
  },
  {
    _id: uuid(),
    categoryName: "Explained",
    description:
      "Explained",
  },
];
