export const unwrapObjects = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let unwrapped = obj.post;
        newArray.push(unwrapped);
    }
    return newArray;
};
//# sourceMappingURL=unwrapObjects.js.map