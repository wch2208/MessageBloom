export default function contentSlice(value) {
  if (value.length <= 100) {
    return value;
  } else {
    const newValue = `${value.slice(0, 90)}...`;
    return newValue;
  }
}
