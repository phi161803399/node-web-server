const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
  // if (res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}`)
  // }
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (square) => {
    expect(square).toBe(9).toBeA('number');
    done();
  });
});

var mark = {
  age: 40,
  location: 'Cuijk'
};

it('should add first and last name', () => {
  var res = utils.setName(mark, 'Mark Huntjens');

  expect(res).toInclude({
    firstName: 'Mark',
    lastName: 'Huntjens'
  });
});
// utils.setName(mark, 'Mark Huntjens');
// console.log(mark);


// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Mark',
//     age: 40,
//     location: 'Cuijk'
//   }).toExclude({
//     age: 25
//   })
// });
