// Regular expression to check if id is a valid UUID
const regexExpUUID =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

// const uuidTest = (id) => regexExpUUID.test(id);

// module.exports = { regexExpUUID, uuidTest };
module.exports = (id) => regexExpUUID.test(id);

// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
