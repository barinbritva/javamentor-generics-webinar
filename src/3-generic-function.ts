import { CustomMap, MapKey, PersonMap } from './2-custom-map'

export function getSummary(data: CustomMap<unknown, MapKey>): string {
    const units = data instanceof PersonMap ? 'persons' : 'items'
    return `Map contains ${data.length} ${units}.`
}

export function pluck<
Value,
Key extends MapKey,
Property extends keyof Value,
>(obj: CustomMap<Value, Key>, key: Key, property: Property): Value[Property] {
    const value = obj.get(key)
    if (value == null) {
        throw new Error('Wrong key ' + key)
    }

    return value[property]
}
