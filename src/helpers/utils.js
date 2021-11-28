const checkPersonRequiredProps = (person) => {
    if (
        (typeof person !== 'object' && person === null) ||
        typeof person.name !== 'string' ||
        person.name.length === 0 ||
        person.age <= 0 ||
        typeof person.age !== 'number' ||
        !Array.isArray(person.hobbies) ||
        (person.hobbies.length > 0 &&
            person.hobbies.every((h) => typeof h !== 'string'))
    ) {
        return false;
    } else {
        return true;
    }
};

module.exports = { checkPersonRequiredProps };
