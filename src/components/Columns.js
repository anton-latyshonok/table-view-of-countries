const SortData = (name) =>
    function (a, b) {
        if (a[name] > b[name]) return 1;
        if (a[name] < b[name]) return -1;
        return 0;
    };

const SortContinent = (continent) => {
    return {
        text: continent,
        value: continent,
    };
};

export const columns = [
    {
        title: "Name",
        dataIndex: "name",
        sorter: SortData("name"),
    },
    {
        title: "Code",
        dataIndex: "code",
        width: 70,
        minWidth: 50,
    },
    {
        title: "Flag",
        dataIndex: "emoji",
        width: 60,
        minWidth: 40,
    },
    {
        title: "Continent",
        dataIndex: "continent",
        sorter: SortData("continent"),
        filters: [
            SortContinent("Antarctica"),
            SortContinent("Africa"),
            SortContinent("Asia"),
            SortContinent("Europe"),
            SortContinent("North America"),
            SortContinent("South America"),
            SortContinent("Oceania"),
        ],
        onFilter: (name, value) => {
            return value.continent === name;
        },
    },
];
