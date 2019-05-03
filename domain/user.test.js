const user = require("./user");
const model = require("../models/user");
const mockingoose = require('mockingoose').default;

const userAdmin = {
  _id: "bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb",
  username: "admin",
  password: "123456"
};

const userTest = {
  _id: undefined,
  username: "test",
  password: "test123"
};

beforeEach(() => {
  mockingoose.resetAll()
});

test("Autenticar usuário adm", async () => {

  const output = await user.authenticate("admin", "123456");
  expect(userAdmin).toMatchObject(output);
});

test("Autenticar usuário com password válido", async () => {

  mockingoose(model).toReturn(userTest, 'findOne')
  const output = await user.authenticate("test", "test123")
  expect(userTest).toMatchObject(output)
})

test("Autenticar usuário com password inválido", () => {

  mockingoose(model).toReturn(userTest, 'findOne')
  return user.authenticate("test", "test12300")
    .catch(err => {
      expect(err).toEqual("Username or password is invalid")
    })
})

test("Obter por nome do usuário", async () => {
  mockingoose(model).toReturn(userTest, 'findOne')

  const output = await user.readByUsername("admin");
  expect(userTest).toMatchObject(output._doc);
});

// test("Criar usuário", async () => {
//   const userTest = {
//     name: "User Test",
//     email: "test@veiaco.com",
//     username: "usertest",
//     password: "test123"
//   };

//   mockingoose(userModel).toReturn(userTest, 'save')

//   const output = await user.create(userTest)
//   expect(userTest).toMatchObject(output)
// })
