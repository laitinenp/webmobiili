const request = require("supertest");
const app = require("../app");

describe("Testataan uuden viestin luontia, ei kirjautunut.", () => {
   test("Testataan POST /messages", () => {
      return request(app)
         .post("/messages")
         .set("Content-Type", "application/json")
         .send({
             "message": "Morjesta jest/supertestistä",
             "sender": "jest",
             "topic": "testaus"
         })
         .expect(401);
   });
});