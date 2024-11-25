/**
 * 01. VARIABLES AND TYPES
 */

// 01-01. Let and Const

// Let
let x = 'John Doe'
x = 'Jane Doe' // You can reassign a value to a variable declared with let
console.log(x)

// Const
const y = 30
console.log(y)
// y = 31 // You cannot reassign a value to a variable declared with const

// 01-02. Primitive Types
// TODO:
// - [ ] Declare a variable `myName` with a type of `string` and assign a value

const myName: string = 'John Doe'
let myNameTemp: string = 'John Doe'
myNameTemp = 'John Doe Temp'
console.log('My Name: ', myName)
console.log('My Name: ', myNameTemp)

// - [ ] Declare a variable `age` with a type of `number` and assign a value

const age: number = 30
let ageTemp: number = 30
ageTemp = 32

console.log(age)
console.log(ageTemp)

// - [ ] Declare a variable `isStudent` with a type of `boolean` and assign a value

const isStudent: boolean = true
let isStudentTemp: boolean = true
isStudentTemp = false

console.log(isStudent)
console.log(isStudentTemp)

// - [ ] Declare a variable `hobbies` with a type of `string[]` and assign a value

const hobbies: string[] = ['reading', 'walking', 'music']
let hobbiesTemp: string[] = ['reading', 'walking', 'music']
hobbiesTemp = ['reading', 'walking', 'coding']

console.log(hobbies)
console.log(hobbiesTemp)

// - [ ] Declare a variable `person` with a type of `{ name: string; age: number }` and assign a value

const person: { name: string; age: number } = { name: 'John Doe', age: 30 }
let personTemp: { name: string; age: number } = { name: 'John Doe', age: 30 }
personTemp = { name: 'John Doe', age: 32 }

console.log(person)
console.log(personTemp)

// 01-03. Type & Inference
// TODO:
// - [ ] Declare a type `Person` with the properties `name` of type `string` and `age` of type `number`

type Person = { name: string; age: number }

// - [ ] Declare a variable `john` with a type of `Person` and assign an object with the properties `name` and `age`

const john: Person = { name: 'John Doe', age: 30 }
let johnTemp: Person = { name: 'John Doe', age: 30 }
johnTemp = { name: 'John Doe', age: 32 }

console.log(john)
console.log(johnTemp)

// - [ ] Declare an interface `User` with the properties `name` of type `string` and `age` of type `number`

interface User {
  name: string
  age: number
}

// - [ ] Declare a variable `jane` with a type of `User` and assign an object with the properties `name` and `age`

const jane: User = { name: 'Jane Doe', age: 30 }
let janeTemp: User = { name: 'Jane Doe', age: 30 }
janeTemp = { name: 'Jane Doe', age: 32 }

console.log(jane)
console.log(janeTemp)

/**
 *
 * =====================================================================================================================
 *
 */

/**
 * 02. FUNCTIONS
 */

// 02-01. Function Declaration
// TODO:
// - [ ] Declare a function `add` that takes two parameters `a` and `b` of type `number` and returns a `number`
// - [ ] Call the function `add` with the arguments `2` and `3` and log the result to the console

export function add(a: number, b: number): number {
  return a + b
}

console.log(add(2, 3))

// 02-02. Function Expression
// TODO:
// - [ ] Declare a function `subtract` that takes two parameters `a` and `b` of type `number` and returns a `number`
// - [ ] Call the function `subtract` with the arguments `5` and `3` and log the result to the console

export const subtract = function (a: number, b: number): number {
  return a - b
}

console.log(subtract(5, 3))

// 02-03. Arrow Function
// TODO:
// - [ ] Declare a function `multiply` that takes two parameters `a` and `b` of type `number` and returns a `number`
// - [ ] Call the function `multiply` with the arguments `2` and `3` and log the result to the console

export const multiply = (a: number, b: number): number => {
  return a * b
}

console.log(multiply(2, 3))

/**
 *
 * =====================================================================================================================
 *
 */

// 02-04. Optional and Default Parameters

function exampleFnDefaultParameter(x: string, y = 5) {
  return `${x} ${y}`
}
exampleFnDefaultParameter('Hello') // 'Hello 5'
exampleFnDefaultParameter('Hello', 10) // 'Hello 10'

export function exampleFnOptionalParameter(x: string, y?: number) {
  return `${x} ${y}`
}
exampleFnOptionalParameter('Hello') // 'Hello undefined'
exampleFnOptionalParameter('Hello', 10) // 'Hello 10'

// TODO:
// - [ ] Declare a function `greet` that takes two parameters `name` of type `string` and `greeting` of type `string` with a default value of `'Hello'` and returns a `string`

export function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting} ${name}!`
}

// - [ ] Call the function `greet` with the argument `'John'` and log the result to the console
console.log(greet('John'))

// 02-05. Object Parameter
// TODO:
// - [ ] Declare an Interface `Person` with the properties `name` of type `string` and `age` of type `number`

interface PersonNew {
  name: string
  age: number
}

// - [ ] Declare a function `sayHello` that takes a parameter `person` of type `Person` and returns a `string`

function sayHello(personNew: PersonNew): string {
  return `Hello, my name is ${personNew.name} and I am ${personNew.age} years old.`
}

// - [ ] Call the function `sayHello` with the argument `{ name: 'John', age: 30 }` and log the result to the console
console.log(sayHello({ name: 'John', age: 30 }))

/**
 *
 * =====================================================================================================================
 *
 */

/**
 * 02. CLASSES
 */

// 03-01. Class Declaration
// TODO:
// - [ ] Declare a class `PersonClass` with constructor that takes two parameters `name` of type `string` and `age` of type `number`
// - [ ] Declare a function `greet` that returns a `string` with the format `'Hello, my name is ${name} and I am ${age} years old'`
// - [ ] Create an instance of `Person` with the arguments `'John'` and `30` and log the result of calling the `greet` function to the console

export class PersonClass {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`
  }
}

const personInstance = new PersonClass('John', 30)
console.log(personInstance.greet())