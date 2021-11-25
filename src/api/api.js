const getResponse = (data, setData) => {
    setData(data);
};

export const getData = function (setData) {
    fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            query: `
        {
           countries {
              name
              code
              emoji
              continent {
                 name
              }
           }
        }`,
        }),
    })
        .then((response) => response.json())
        .then((response) => {
            getResponse(response.data, setData);
        })
        .catch((e) => {
            alert(e.name);
        });
};
