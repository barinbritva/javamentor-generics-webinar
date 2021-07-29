import { Person } from './person'
import { PersonExtra } from './person-extra'

const partialPerson: Partial<Person> = {
    name: 'John',
    age: 30
}
console.log('partial person', partialPerson)


const personWithName: Pick<Person, 'name' | 'surname'> = {
    name: 'John',
    surname: 'Doe'
}
console.log('person with name', personWithName)


const personWithoutGender: Omit<Person, 'gender'> = {
    name: 'John',
    surname: 'Doe',
    age: 30
}
console.log('person without gender', personWithoutGender)


const fullPerson: Person & Required<PersonExtra> = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    gender: 'male',
    post: 'Developer',
    startDate: new Date(),
    finishedProjects: 10,
}
console.log('full person', fullPerson)


const readonlyPerson: Readonly<Person> = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    gender: 'male'
}
// readonlyPerson.age = 18
console.log('readonly person', readonlyPerson)


const map = {
    'john-doe': {
        name: 'John',
        surname: 'Doe',
        age: 30,
        gender: 'male'
    }
}
const item = map['john-doe']
console.log('item from plane object', item)

const personMap: Record<string, Person> = {
    'john-doe': {
        name: 'John',
        surname: 'Doe',
        age: 30,
        gender: 'male'
    }
}
const personFromMap = personMap['john-doe']
console.log('person map', personMap, 'item from map', personFromMap)