import { faker } from '@faker-js/faker';

export default function randomData(num) {
  let returnArray = [];

  for (let i = 0; i < num; i++) {
    let sku = faker.number.int({ min: 10000, max: 99999 });
    let name = faker.animal.type();
    let unit = faker.science.unit().name;
    returnArray.push({ sku: sku, name: name, unit: unit });
  }

  return returnArray;
}
