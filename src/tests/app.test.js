const request = require("supertest");
const app = require("../app");

describe("GET Endpoints", () => {
  it('should return "Hello World', async () => {
    const res = await request(app).get("/v1");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World");
  });

  it("should return random challenge when no parameters passed", async () => {
    const res = await request(app).get("/v1/challenge");
    const data = JSON.parse(res.text);
    expect(res.statusCode).toEqual(200);
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("level");
    expect(data).toHaveProperty("question");
    expect(data).toHaveProperty("source");
  });

  it("should return challenge of passed difficulty", async () => {
    const res = await request(app).get("/v1/challenge?level=1");
    const data = JSON.parse(res.text);
    expect(res.statusCode).toEqual(200);
    expect(data.level).toEqual(1);
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("level");
    expect(data).toHaveProperty("question");
    expect(data).toHaveProperty("source");
  });
});

describe("DOCs Endpoints", () => {
  it("should redirect to swagger documentation page", async () => {
    const res = await request(app).get("/v1/docs");
    expect(res.statusCode).toEqual(301);
  });
});
