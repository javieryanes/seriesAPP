import { describe, test, beforeEach, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";
import { User } from "../src/models/userModel.js";

beforeEach(async () => {
  await User.deleteMany();
});

describe("POST /users", () => {
  test("Should successfully create a new user", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        nombre: "Eduardo Segredo",
        nombreUsuario: "esegredo",
        generos: ["accion", "drama"]})
      .expect(201);

    expect(response.body).to.include({
        nombre: "Eduardo Segredo",
        nombreUsuario: "esegredo",
        generos: ["accion","drama"]
    });
  });
});