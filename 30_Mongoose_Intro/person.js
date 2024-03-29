const mongoose = require("mongoose");

// Connect to database
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("CONNECTION OPEN!");
  })
  .catch((err) => {
    console.log("CONNECTION ERROR!");
  });

const personSchemna = new mongoose.Schema({
  first: String,
  last: String,
});

personSchemna
  .virtual("fullName")
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (v) {
    this.first = v.substr(0, v.indexOf(" "));
    this.last = v.substr(v.indexOf(" ") + 1);
  });

// middleware
personSchemna.pre("save", async function () {
  this.first = this.first.toUpperCase();
  this.last = this.last.toUpperCase();

  console.log("About to Save!!!");
});

personSchemna.post("save", async function () {
  console.log("Just Saved!!!");
});

const Person = mongoose.model("Person", personSchemna);
