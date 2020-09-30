import dayjs from "dayjs";

const DATEFORMAT = "DD/MM/YYYY";
const DATEFOLDERFORMAT = "YYYY/MM/DD";

const pagedPermalink = (pagination, baseUrl) => {
  const pageNumber = pagination.pageNumber;
  if (pageNumber > 0) {
    return `${baseUrl}/page-${pageNumber}/`;
  } else {
    return `${baseUrl}/`;
  }
};

const formatDate = (date) => dayjs(date).format(DATEFORMAT);
const formatDateAsFolder = (date) => dayjs(date).format(DATEFOLDERFORMAT);

export { pagedPermalink, formatDate, formatDateAsFolder };
