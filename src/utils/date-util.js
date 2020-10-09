const formatDate = (date) => {
  if (date) {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()];
    const str = month + " " + date.getDate() + ", " + date.getFullYear();
    return str;
  }
  return "";
};
module.exports = { formatDate };
