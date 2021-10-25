module.exports = app => {
    const person = require("./person.controller.js");
  
    var router = require("express").Router();
  
    // Create a new person
    router.post("/", person.create);
  
    // Retrieve all Persons
    router.get("/", person.findAll);
  
    // Retrieve a single Person with id
    router.get("/:id", person.findOne);
  
    app.use('/api/person', router);
};