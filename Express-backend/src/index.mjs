import express, { response } from "express";
import { query, validationResult, body, matchedData } from "express-validator";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const loggingMiddleware = (request, response, next) => {
  console.log(`${request.method}`);
  next();
};

const resolveIndexByUserId = (request, response, next) => {
  const {
    params: { id },
  } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) return response.sendStatus(404);
  request.findUserIndex = findUserIndex;
  next();
};

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

app.get(
  "/api/users",
  query("filter")
    .isString()
    .notEmpty()
    .withMessage("Must not be empty")
    .isLength({ min: 3, max: 10 })
    .withMessage("Must be at least 3-10 characters"),
  (request, response) => {
    const result = validationResult(request);
    console.log(result);
    const {
      query: { filter, value },
    } = request;

    if (filter && value)
      return response.send(
        mockUsers.filter((user) => user[filter].includes(value))
      );

    return response.send(mockUsers);
  }
);

app.post(
  "/api/users",
  body("username")
    .notEmpty()
    .withMessage("Username cannot be empty")
    .isLength({ min: 3, max: 32 })
    .withMessage("Username must be at least 5-32 characters")
    .isString()
    .withMessage("Username must be a string"),
  (request, response) => {
    const result = validationResult(request);

    if (!result.isEmpty())
      return response.status(400).send({ error: result.array() });

    const data = matchedData(request);
    console.log(data);

    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
    mockUsers.push(newUser);

    return response.status(201).send(newUser);
  }
);

app.get("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});

app.get("/api/product", (request, response) => {
  response.sendStatus([{ id: 12, product: "Chicken", price: "6.75" }]);
});

app.put("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return response.sendStatus(200);
});

app.patch("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(200);
});

app.delete("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { findUserIndex } = request;
  mockUsers.splice(findUserIndex, 1);
  return response.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
