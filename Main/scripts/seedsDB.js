const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/StealthChicken",
  {
    useMongoClient: true
  }
);

const physicianSeed = [
  {
    category: "Cardiovascular",
    physician: "Malcolm Strong",
    comment:
      'I have a patient who has high blood presseure and I was looking for different methods to control their numbers, any suggestions?',
    date: new Date(Date.now())
  },
];





  db.physician
  .remove({})
  .then(() => db.physician.collection.insertMany(physicianSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
