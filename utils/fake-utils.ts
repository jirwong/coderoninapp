import faker from "faker";

const name = faker.name.findName;
const email = faker.internet.email;
const department = faker.commerce.department;
const past = faker.date.past;
const future = faker.date.future;
const soon = faker.date.future;

const sentences = faker.lorem.sentences;
const paragraphs = faker.lorem.paragraphs;

// const avatarUrl = faker.image.people;
const avatarUrl = () => "https://i.pravatar.cc/300";
const amount = faker.finance.amount;

export {
  name,
  email,
  department,
  past,
  avatarUrl,
  amount,
  future,
  soon,
  paragraphs,
  sentences
};
