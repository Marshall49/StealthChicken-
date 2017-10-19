const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Cases collection and inserts the dummy cases below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_m4vrdwxk:alghmeaeeeudopt16qkh0kik2p@ds163294.mlab.com:63294/heroku_m4vrdwxk",
  {
    useMongoClient: true
  }
);

const caseSeed = [
  {
    title: "Dawn Phenomenon",
    age: 24,
    sex: "Male",
    detail: "Patient is exhibiting excessively high blood sugars from 6am-8am. Patient states that he only drinks black coffee and does not eat until after 9am. It is a steady increase from very good blood sugars (around 100) from 12am - 5:30am to blood sugars ranging from 200-300 in the previously stated time period. Over the past several weeks, we have steadily increased basal insulin starting at 5am to a lot for the rising BG's to no avail.",
    dateCreated: new Date(Date.now()),
    pertinent: "Diagnosed 5 years ago (in 2012). Extremely compliant and dedicated to controlling his condition. Patient is in excellent physical condition. He works out 5 days a week for approx 1hr each day, usually in the afternoons. Exercise includes CrossFit and Yoga. ",
    recent: "There have been no recent changes to patients mental or physical health.",
    medications: "Patient is currently using Humalog insulin via pump. Patient is also wearing a Dexcom sensor. Takes a multivitamin in the am, but no other prescribed medications. Patient claims to have no drug allergies at this time.",
    dexcom: {},
  },
  {
    title: "Outta Control Mama",
    age: 30,
    sex: "Female",
    detail: "Mother of 2 with a third on the way is displaying consistently high BG's throughout the day on her Dexcom. She is in her 2nd trimester at 22weeks and I am concerned for the baby's health and possible high birth weight. Patient does not seem as concerned and has decreased her compliance since learning of her pregnancy.",
    dateCreated: new Date(Date.now()),
    pertinent: "Diagnosed 19 years ago (in 1998). She did incredibly well in her first 2 pregnancies (3 and 5 years ago) where her blood sugars were maintained under 120. She was very compliant and worked with PA's, CDE's, as well as myself, on a monthly basis to maintain her health in these pregnancies. Recently, she has only managed to come in twice during this pregnancy and does not make the necessary changes when asked. Patient has talked about being too busy with her 2 children under 6 and her husband that 'acts like he is 6 years old'.",
    recent: "Patient claims to be very stressed and exhausted in current pregnancy. She has also started to exhibit high BP and tingling in extremities, more specifically toes. Recently, patient took herself off of her insulin pump due to 'real estate issues', but still uses her Dexcom CGM.",
    medications: "Patient is currently using Novolog and Levemir insulin pens. She averages about 20 units of Novolog/day and one daily dose of 19 units Levemir/day. Patient has been prescribed Lexapro by her primary care and says that she changes the dosing herself. Takes a prenatal vitamin in the am. Patient claims to have an allergy to Amoxicillin.",
    dexcom: {},
  },
  {
    title: "Girls Just Wanna Have Fun",
    age: 9,
    sex: "Female",
    detail: "Patient is very involved in soccer and tennis. She seems to have playable blood sugars while participating in soccer practice and games. However, when on the tennis court she is either running far too high or too low. She checks her blood sugar every 30 minutes while on the tennis court and boluses through her insulin pump as needed. If she is running to high prior to competition her mother will increase her basal rate and bolus her. This brings her to normal range approximately 50% of the time. The other 50% she stays high. Patient claims to have headaches and nausea while exhibiting high BG's. When she is running low in competition, her mother packs her small Gatorade bottles. She will drink 1/2 bottle during each changover until her BG has recovered. She says that this sometimes upsets her stomach when she has to drink a lot. Mother is concerned with her being able to play at the competition level that she wants and needs a solution for daughters extreme BG's.",
    dateCreated: new Date(Date.now()),
    pertinent: "Diagnosed 3 years ago (in 2014). Has done well given her highly competitive lifestyle at the ripe bold age of 9. On insulin pump and Dexcom CGM. She enjoys these very much since she doesn't have to give herself daily shots.",
    recent: "Patient has been growing rapidly as children do. Her mother and father are very good about maintaining a proper diet for her and managing her BG's and symptoms. She comes in regularly for visits and is as compliant as a pediatric patient can be.",
    medications: "Currently using Apidra insulin. She averages about 15 units of Apidra/day via pump. Patient also take a Flinstone vitamin daily.",
    dexcom: {},
  }
];

db.dCase
  .remove({})
  .then(() => db.dCase.collection.insertMany(caseSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const userSeed = {
    username: "doczhivago",
    password: "coding",
    email: "abc@gmail.com",
    specialty: "Endocrinologist"
}

db.User
    .remove({})
    .then(() => db.Users.collection.insertOne(userSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });