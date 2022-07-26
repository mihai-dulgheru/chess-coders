/**
 * EXERCISE 1
 */

const persons = [
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Scott',
    age: 45
  },
  {
    id: 2,
    firstName: 'Fred',
    lastName: 'Flinstone',
    age: 40
  },
  {
    id: 3,
    lastName: 'Batman',
    age: 29
  },
  {
    id: 4,
    firstName: 'Donald',
    lasName: 'Duck',
    age: 16
  },
  {
    id: 5,
    firstName: 'Scooby',
    lastName: 'Doo',
    age: 9
  },
  {
    id: 6,
    firstName: 'Spongebob',
    lastName: 'Squarepants',
    age: 500
  },
  {
    id: 7,
    firstName: 'Wonder',
    lastName: 'Woman',
    age: 24
  }
]

/**
 * 0. Add a new entry to the array:
 *  {
 *    firstName: 'Jerry',
 *    lastName: 'Mouse',
 *    age: 6
 *  }
 * 1. Sort the array based on person's age (ascending)
 * 2. Create a function called getById which accepts id as argument and returns the object with the corresponding id. If a person with the specified id does not exist in the array, return an empty object
 * 3. Based on persons array, create a new array which will also include the fullName for each person, which will have the following format: 'firstName lastName'
 * 4. Based on persons array, create a new array which will include only those persons whose age is an even number
 */

// 0. Add a new entry to the array
persons.push({
  id:
    Math.max.apply(
      null,
      persons.map((item) => item.id)
    ) + 1,
  firstName: 'Jerry',
  lastName: 'Mouse',
  age: 6
})
console.log(persons)

// 1. Sort the array based on person's age (ascending)
persons.sort((a, b) => (a.age > b.age ? 1 : a.age < b.age ? -1 : 0))
console.log(persons)

// 2. Create a function called getById which accepts id as argument and returns the object with the corresponding id.
// If a person with the specified id does not exist in the array, return an empty object
const getById = (id) => {
  const found = persons.find((item) => item.id === id)
  return found || {}
}
console.log(getById(8))
console.log(getById(9))

// 3. Based on persons array, create a new array which will also include the fullName for each person, which will have the
// following format: 'firstName lastName'
const newArray = persons.map((item) => {
  return { ...item, fullName: `${item.firstName} ${item.lastName}` }
})
console.log(newArray)

// 4. Based on persons array, create a new array which will include only those persons whose age is an even number
const personsAgeEvenNumber = persons.filter((item) => item.age % 2 === 0)
console.log(personsAgeEvenNumber)

/**
 * EXERCISE 2
 */

const ledger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'abc', false, '', 0, 1, 'def', 99, 9, 66, 'xfz', 'abc', '65', '66']

/**
 * 1. Create new array which will only include the numbers from ledger array
 * 2. Remove duplicates from ledger array. Use strict equality.
 * 3. Shuffle the array (sort the elements in random order)
 */

// 1. Create new array which will only include the numbers from ledger array
const numbers = ledger.filter((item) => typeof item === 'number')
console.log(numbers)

// 2. Remove duplicates from ledger array. Use strict equality.
const unique = [...new Set(ledger)]
console.log(unique)

const unique2 = Array.from(ledger)
  .sort()
  .filter((item, index, array) => {
    return !index || item !== array[index - 1]
  })
console.log(unique2)
console.log(!0)

// 3. Shuffle the array (sort the elements in random order)
// Fisher–Yates shuffle - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
for (let i = ledger.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  const temp = ledger[i]
  ledger[i] = ledger[j]
  ledger[j] = temp
}
console.log(ledger)

/**
 * EXERCISE 3
 */

const company = {
  name: 'Chess Coders',
  caen_code: '6201',
  caen_desc: 'Activitati de realizare a software-ului la comanda',
  founders: ['Bogdan', 'Tiberiu', 'Victor'],
  slogan: 'Always a move ahead'
}

const personal_info = {
  Bogdan: {
    name: 'Bogdan Posedaru',
    age: 32
  },
  Tiberiu: {
    name: 'Tiberiu Georgescu',
    age: 31
  },
  Victor: {
    name: 'Victor Ocnarescu',
    age: 32
  },
  Voldemort: {
    name: 'Lord Voldemort',
    age: 999
  }
}

/**
 * 1. Add a new key to company object, called "since_year", with value 2018
 * 2. Create an array which will include all keys from the company object ("name", "caen_code", ...)
 * 3. Create a method called getFounder which takes the founder's first name as an argument and returns an object with the founder's full name and age (taken from personal_info). If no founder with that name, return an empty object
 */

// 1. Add a new key to company object, called "since_year", with value 2018
company.since_year = 2018
console.log(company)

// 2. Create an array which will include all keys from the company object ("name", "caen_code", ...)
const keys = Object.keys(company)
console.log(keys)

// 3. Create a method called getFounder which takes the founder's first name as an argument and returns an object with the
// founder's full name and age (taken from personal_info). If no founder with that name, return an empty object;
const getFounder = (firstName) => {
  if (personal_info.hasOwnProperty(firstName)) {
    return { fullName: personal_info[firstName].name, age: personal_info[firstName].age }
  }
  return {}
}
console.log(getFounder('Bogdan'))
