export const groupBy = (arr, key) => {
    if(!arr || !key) throw 'Error!'

    return arr.reduce((result, film) => {
        if (!film.hasOwnProperty(key)) {
            return {}
        }

        (result[film[key]] = result[film[key]] || []).push(film);

        return result;
    }, {});
};

const art = [
    { id: 5, universe: "marvel", name: "Spider Man" },
    { id: 5, universe: "marvel", name: "Iron Man" },
    { id: 3, universe: "dc", name: "Aqua Man" },
    { id: 4, universe: "dc", name: "Bat Man" },
    { id: 5, universe: "marvel", name: "Hulk" },
    { id: 5, universe: "marvel", name: "Hulk" }
];

console.log(groupBy( 'universe'))