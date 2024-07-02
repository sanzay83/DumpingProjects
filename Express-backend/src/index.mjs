import express, { response } from "express";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "San", displayName: "Du" },
  { id: 2, username: "Jay", displayName: "Lu" },
  { id: 3, username: "Rey", displayName: "Su" },
  { id: 4, username: "May", displayName: "Ru" },
  { id: 5, username: "Zed", displayName: "Tu" },
];

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});

app.get("/api/users", (request, response) => {
  const {
    query: { filter, value },
  } = request;

  if (filter && value)
    return response.send(
      mockUsers.filter((user) => user[filter].includes(value))
    );

  return response.send(mockUsers);
});

app.post("/api/users", (request, response) => {
  console.log(request.body);
  const { body } = request;
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
  mockUsers.push(newUser);

  return response.status(201).send(newUser);
});

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId);
  if (isNaN(parsedId))
    return response.status(400).send({ msg: "Bad Request. Invalid ID" });

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});

app.get("/api/product", (request, response) => {
  response.sendStatus([{ id: 12, product: "Chicken", price: "6.75" }]);
});

app.put("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) return response.sendStatus(404);

  mockUsers[findUserIndex] = { id: parsedId, ...body };
  return response.sendStatus(200);
});

app.patch("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) return response.sendStatus(404);
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
