const findTheOldest = function(arr) {
    let maxAge = -Infinity;
    let oldestPerson = null;

    for (const person of arr) {
        let age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        console.log(age);
        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
