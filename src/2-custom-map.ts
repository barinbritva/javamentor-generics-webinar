// 1 Реализовать функциональность
// 2 Добавить джененрики
// 3 Добавить ограничения
// 4 Добавить значения по умолчанию
// 4 Наследование

import { Person } from './person'

export type MapKey = number | string | symbol

export class CustomMap<V, K extends MapKey = string> {
  items: Partial<Record<K, V>> = {}

  get length(): number {
    return Object.keys(this.items).length
  }

  set(key: K, value: V): void {
    this.items[key] = value
  }

  get(key: K): V | undefined {
    return this.items[key]
  }

  has(key: K): boolean {
    return this.items[key] != null
  }

  delete(key: K): boolean {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }
}

export class PersonMap extends CustomMap<Person> {}
