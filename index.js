// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  const newArray = [...array, item]
  console.log(newArray)
  return newArray
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  const newArray = [item, ...array]
  console.log(newArray)
  return newArray
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
  const newArray = [...array.slice(0, index), item, ...array.slice(index)]
  console.log(newArray)
  return newArray
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
  const newArray = [...array.slice(0, index), item, ...array.slice(index + 1)]
  console.log(newArray)
  return newArray
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
    const newArray = [...array.slice(0, index),...array.slice(index + 1)];
    // array = [1, 2, 3, 4, 5, 6]
    // slice(0, 2) === [1, 2]
    // slice(3) === [4, 5, 6]
    return newArray;
}

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
    const newArray = {...object, name: newName};
    return newArray
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {

  return {...object, needsACupOfTea: !object.needsACupOfTea}
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {}
