export default function contentSlice(value) {
  if (value.length <= 70) {
    return value;
  } else {
    const newValue = `${value.slice(0, 70)}...`;
    return newValue;
  }
}
