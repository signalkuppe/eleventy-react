const dayjs = require("dayjs");
import { formatDateAsFolder } from "../system/utils";

export const postSlug = (post) => {
  const { date, fileSlug } = post;
  const datePath = formatDateAsFolder(date);
  return `/blog/${datePath}/${fileSlug}/`;
};
