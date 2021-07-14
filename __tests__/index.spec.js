import request from './helpers/request';


describe("Sneaker City Server", () => {
  describe("GET /", () => {
    it("Should return Welcome to Sneaker city API", (done) => {
      request.get("/api").expect(200).end(done);
    });
  });
  describe("GET /unexistent route", () => {
    it("Should return API endpoint not found", (done) => {
      request.get("/whatever").expect(404).end(done);
    });
  });
});