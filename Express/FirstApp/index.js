const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!");
//   res.send("Hello, We got your request! This is a response");
//   res.send("<h1>This is My WebPage!");
// });

// /cats => "meow"
// /dogs => 'woof'
// '/' home
app.get("/", (req, res) => {
  res.send("This is the home page!");
});

app.post("/cats", (req, res) => {
  res.send("POST Request to '/cats'. This is Different Request");
});

app.get("/cats", (req, res) => {
  console.log("CAT REQUEST!");
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  console.log("DOG REQUEST");
  res.send("WOOF!!");
});

app.get("*", (req, res) => {
  res.send("존재하지 않는 페이지입니다.");
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080!");
});
