export function RemoveDuplicates(items) {
    var result = [];
    for (let item of items) {
        if (result.indexOf(item) == -1) {
            result.push(item);
        }
    }
    return result;
}
