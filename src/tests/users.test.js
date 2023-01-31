const supertest = require("supertest");
const app = require("../app");
const server = require("../server");
const db = require("../utils/database");

const token = "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VEYW5pZWxAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTY2OTg2NTk3OSwiZXhwIjoxNjY5ODczMTc5fQ.nJS2A-mvtUP5J-E_Ctv4JHynxO9E7Rb5_fOfmKafLUpH2LUTkii7YgrINz7Te-GJSh9jVWfKfl3RnI_VJpOJzA" 

const api = supertest(app);

// probar que el endpoint devuelve un json

describe("Pruebas para el endpoint de users", () => {

  test("Probar que un get a users devuelve un json" , async() => {
    await api
    .get("/api/v1/users/1")
    .set({Application: token})
    .expect(200)
    .expect("Content-Type", /application\/json/);
  });

  test("Probar que un get a users devuelve un arreglo", async () => {
    const { body } = await api
    .get("/api/v1/users/1")
    .set({Application: token});
    expect(body).toBeInstanceOf(Object);
  });
});

afterAll(() => {
  server.close();
  db.close();
})