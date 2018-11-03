const formatNumber = num => {
  if (num.length < 4) {
    let result =
      Array(4 - num.length)
        .fill(0)
        .join('') + num;
    return result;
  }
  return num;
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const formatDate = data => {
  let date = new Date(data);
  return `${monthNames[date.getMonth()]} - ${date.getFullYear()}`;
};
export default formatNumber;
export { formatDate };
