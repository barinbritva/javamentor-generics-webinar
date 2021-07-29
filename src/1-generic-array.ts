// Показать массивы
// Написать интерфейс массива

const numbers: number[] = [1.5678, 2.323456, 3.067] // Array<number>
const strings: string[] = ['Monday', 'Tuesday', 'Wednesday'] // Array<string>

const n1 = numbers[0]
console.log(n1.toFixed(2))

const s1 = strings[0]
console.log(s1.toLowerCase())

interface IArray<T> {
    readonly length: number

    push(...items: T[]): number
    pop(): T | undefined

    unshift(...items: T[]): number
    shift(): T | undefined

    slice(start?: number, end?: number): T[]
    sort(compareFn?: (a: T, b: T) => -1 | 0 | 1): this
}