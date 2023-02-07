/* eslint-disable no-redeclare */
type WithVariants<T> = T & {
    variants?: { [key: string]: unknown };
    [key: string]: unknown;
};

const isObject = <T>(candidate: T): candidate is WithVariants<T> =>
    !!candidate && typeof candidate === 'object';

const isArray = <T>(candidate: T | T[]): candidate is T[] => Array.isArray(candidate);

// iterate through data and apply any variant overrides
// remove 'variants' properties from data after applying overrides
// recursively traverse through nested objects
export function applyDataVariantOverrides<T>(data: WithVariants<T>, variantKey?: string): T;
export function applyDataVariantOverrides<T>(data: T[], variantKey?: string): T[];
export function applyDataVariantOverrides<T>(data: T, variantKey?: string): T | T[] {
    if (!isObject(data)) {
        return data;
    }

    if (isArray<WithVariants<T>>(data)) {
        return data.map((item) => applyDataVariantOverrides(item, variantKey));
    }

    let updatedData = {...data};

    if (isObject(data.variants) && variantKey) {
        const variantOverrides = data.variants[variantKey];
        if (isObject(variantOverrides)) {
            // loop through each property in the variant object and make sure the property
            // exists in the parent object. This will make sure default values are set,
            // and also help catch unwanted typos.
            // apply variant overrides to current object.
            Object.getOwnPropertyNames(variantOverrides).forEach((variantPropName) => {
                if (Object.keys(updatedData).find((key) => key === variantPropName)) {
                    updatedData = {
                        ...updatedData,
                        [variantPropName]: variantOverrides[variantPropName],
                    };
                } else {
                    console.warn(
                        `data variant override property ${variantPropName} has no default value, check for misspelling or add a default property to parent object.`,
                    );
                }
            });
        }

        delete updatedData.variants;
    }

    // recursively check each nested object to apply variant overrides if necessary
    Object.getOwnPropertyNames(updatedData).forEach((propName) => {
        const dataToUpdate = updatedData[propName];
        if (propName !== 'variants' && isObject(dataToUpdate)) {
            const variantToApply = applyDataVariantOverrides(dataToUpdate, variantKey);
            updatedData = {...updatedData, [propName]: variantToApply};
        }
    });
    return updatedData;
}
