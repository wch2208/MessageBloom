export default function contentSlice(value) {
  if (value.length <= 65) {
    return value;
  } else {
    const newValue = `${value.slice(0, 65)}...`;
    return newValue;
  }
}
