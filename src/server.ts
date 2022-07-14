import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello!" });
})

// Maneira não tão legal de debugar o código
// app.post("/courses", (request, response) => {
//   console.log(request.body);
//   const { name } = request.body;
//   return response.json({ name });
// });

// Maneira adequada de debugar
app.post("/courses2", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(3333, () => console.log("Server is running!"));