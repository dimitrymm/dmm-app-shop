export const formatDate = (dateString) => {
  const regex = /(\d{2})\/(\d{2})\/(\d{4})/;
  const match = dateString.match(regex);
  if (match) {
    const [_, day, month, year] = match;

    return `${year}-${month}-${day}`;
  }
  return null;
};
