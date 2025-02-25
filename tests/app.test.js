const supertest = require("supertest");
const app = require("../app.js");
const { homePage } = require("../data.js");

it('Testing to see if supertest works', ()=> {
    expect(1).toBe(1)
})

describe("Test the root path", () => {
    test("It should response the GET method", () =>
    supertest(app)
    .get("/")
    .then(response =>
          expect(response.text).toBe(homePage)
        )
    )
  })

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return supertest(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });
});
