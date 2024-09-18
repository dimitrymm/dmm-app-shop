export const formatDate = (dateString) => {
    const regex = /(\d{2})\/(\d{2})\/(\d{4})/;
    const match = dateString.match(regex);
    if (match) {
        const [_, day, month, year] = match;

        const dateObj = new Date(`${year}-${month}-${day}`);

        if (!isNaN(dateObj.getTime())) {
            return `${year}-${month}-${day}`;
        } else {
            console.error(`Invalid date: ${dateString}`);
            return null;
        }
    }
    console.error(`Invalid date format: ${dateString}`);
    return null;
};
