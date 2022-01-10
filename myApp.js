require('dotenv').config();
const URI = process.env['MONGO_URI']
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`${URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);


const createAndSavePerson = async (done) => {

     const newPerson = await new Person({
        name: "Jules",
        age: 22,
        favoriteFoods: ["Fries", "Burgers", "Noodles"]
      })
      
    newPerson.save(function(err,data) {
      if(err) return console.error(err);
      console.log(data)
      done(null, data)
    })
    
};

const arrayOfPeople = [{
  name: "Jules",
  age: 22,
  favoriteFoods: ["Fries", "Burgers", "Noodles"]
},{
  name: "Juan",
  age: 25,
  favoriteFoods: ["eggs", "bread", "ice-cream"]
},
{
  name: "Luk",
  age: 35,
  favoriteFoods: ["meat", "chickenwings", "fruits"]
}];


const createManyPeople = (arrayOfPeople, done) => {

     Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
  
};

const findPeopleByName = async (personName, done) => {

  const people = await Person.find({name: personName})

  done(null, people)
};

const findOneByFood = async(food, done) => {
  const people = await Person.findOne({favoriteFoods: food})

  done(null, people)
};

const findPersonById = async (personId, done) => {
  const person = await Person.findById(personId);
  done(null,person);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
