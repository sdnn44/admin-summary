export const parseDateString = (dateString: string) => {
    const monthMap: { [key: string]: number } = {
        "sty": 0, "lut": 1, "mar": 2, "kwi": 3, "maj": 4, "cze": 5,
        "lip": 6, "sie": 7, "wrz": 8, "paź": 9, "lis": 10, "gru": 11
    };

    const [day, month, year, time] = dateString.split(/[\s-:]+/);

    return new Date(
        parseInt(year, 10),
        monthMap[month],
        parseInt(day, 10),
        parseInt(time, 10),
        // parseInt(hour, 10),
        // parseInt(minute, 10),
        // parseInt(second, 10)
    );
};

// Custom sorting function
export const dateSortingFn = (rowA: any, rowB: any, columnId: string) => {
    const dateA = parseDateString(rowA.getValue(columnId));
    const dateB = parseDateString(rowB.getValue(columnId));
    return dateB.getTime() - dateA.getTime();
};