# simple-crud-api project on node.js and webpack

Manual:

Clone repository

-   git clone https://github.com/ML6503/simple-crud-api.git

Choose development branch named 'devel'

-   git checkout devel

Install dependencies

-   npm i

```
Run following scripts for develpment or production mode

- npm run start:dev for development envirement server start
- npm run start:prod for production application bundle build and server start

Run below script for testing
- npm run test

```

Check server work with Postman (https://web.postman.co/)

Following methods are applied:

-   API path /person
-   GET /person or /person/${personId} return all persons or person with corresponding personId
-   POST /person is used to create record about new person and store it in database
-   PUT /person/${personId} is used to update record about existing person
-   DELETE /person/${personId} is used to delete record about existing person from database

Persons are stored as objects that have following properties:

-   id — unique identifier (string, uuid) generated on server side
-   name — person's name (string, required)
-   age — person's age (number, required)
-   hobbies — person's hobbies (array of strings or empty array, required)

Server return errors if person id is not uuid or not found,
or if above required properties are not shown (for PUT method)
