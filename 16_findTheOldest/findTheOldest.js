const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    for (let person of arr) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = currentYear;
        }
    }
    const newArr = arr.toSorted((a, b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })
    return newArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
