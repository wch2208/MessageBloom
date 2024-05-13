export default function (time) {
  const getTime = new Date(time);
  const year = getTime.getFullYear();
  const month = getTime.getMonth() + 1;
  const date = getTime.getDate();

  return `${year}-${month}-${date}`;
}
