const request = require("supertest");
const app = require("../app");

describe("Testataan pääsivua.", () => {
   test("Testataam GET /", () => {
      return request(app)
         .get("/")
         .set("Accept", "text/html")
         .expect("Content-Type", /html/)
         .expect(200);
   });
});

describe("Testataan apikuvaussivu.", () => {
    test("Testataam GET /apidescr", () => {
       return request(app)
          .get("/apidescr")
          .set("Accept", "text/html")
          .expect("Content-Type", /html/)
          .expect(200);
    });
 });

 describe("Testataan rekisteröitymissivu.", () => {
    test("Testataam GET /user/register", () => {
       return request(app)
          .get("/user/register")
          .set("Accept", "text/html")
          .expect("Content-Type", /html/)
          .expect(200);
    });
 });