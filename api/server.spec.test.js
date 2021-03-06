const supertest = require("supertest");

const server = require("./server");

describe("server.js", () => {
  describe("GET /", () => {
    it("should return 200 OK", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("should have body property should return 'up'", () => {
        return supertest(server)
        .get("/")
        .then((res) => {
            expect(res.body.api).toBe("up");
        })
    })
    it("should return JSON", () => {
        return supertest(server)
        .get("/")
        .then((res) => {
            expect(res.type).toMatch(/json/i);
        })

    })
  });
});
