export function RemoveDuplicates(items: any) {
	var result = [] as any[];
	for (let item of items) {
		if (result.indexOf(item) == -1) {
			result.push(item);
		}
	}
	return result;
}