// Code your solution here
function findMatching(collection, result) {
    return collection.filter(
        (matches) => matches.toLowerCase() === result.toLowerCase()
    );
}

function fuzzyMatch(collection, name) {
    return collection.filter(
        (matches) => matches.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
}

function matchName(collection, lookUpName) {
    return collection.filter((record) => record.name === lookUpName)
}