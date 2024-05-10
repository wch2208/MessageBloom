export default function (time) {
  return new Date(time).toLocaleDateString().slice(0, 10);
}
