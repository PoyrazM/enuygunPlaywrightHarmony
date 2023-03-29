const { faker } = require("@faker-js/faker");

export class DataGenerator {
  email = faker.internet.email();
  password = faker.internet.password();
  isAccept = faker.datatype.boolean();
  invalidEmail = faker.internet.userName();
  invalidPass = "123";
}
