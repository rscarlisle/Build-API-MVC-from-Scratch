const snacks = requires(',,/../db/snacks');

getAll = (limit) => {
    const listOfSnacks = (!limit) ? snacks : (limit > snacks.length) ? false : snacks.slice(0, limit);
    return listOfSnacks;
}