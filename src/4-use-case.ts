import { CustomMap, PersonMap } from './2-custom-map'
import { getSummary, pluck } from './3-generic-function'

const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)

const dateMap = new CustomMap<Date, number>()
dateMap.set(today.getTime(), today)
dateMap.set(tomorrow.getTime(), tomorrow)

console.log(dateMap, getSummary(dateMap))

const personMap = new PersonMap()
personMap.set(
    'john-doe',
    {
        name: 'John',
        surname: 'Doe',
        age: 30,
        gender: 'male'
    }
)
personMap.set(
    'jane-doe',
    {
        name: 'Jane',
        surname: 'Doe',
        age: 31,
        gender: 'female'
    }
)

console.log(personMap, getSummary(personMap))

const gender = pluck(personMap, 'jane-doe', 'gender')
const age = pluck(personMap, 'john-doe', 'age')
console.log(gender, age)
// const someProperty = pluck(personMap, 'john-doe', 'job')