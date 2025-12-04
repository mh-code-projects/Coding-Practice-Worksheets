
const FetchGroup = async () => {
	console.log(`Promise Loading at ${Date.now()}`)
	return Promise.all([
	fetch('https://nekos.best/api/v2/neko'),
	fetch('https://nekos.best/api/v2/neko'),
	fetch('https://nekos.best/api/v2/neko')
	]);
}

async function NestedSequence() {
	console.log(await FetchGroup());
	await console.log(`Promise returned at ${Date.now()}`);
}

NestedSequence();

try {
	const dataObjectAll = []
	const apiFetch = await fetch('https://nekos.best/api/v2/neko');
	const apiData1 = await apiFetch.json();
	dataObjectAll.push(...apiData1.results);
	const apiFetch2 = await fetch('https://nekos.best/api/v2/neko')
	const apiData2 = await apiFetch2.json();
	dataObjectAll.push(...apiData2.results);

// ----------- AUTO TABLE ---------- //
let autoTable = []
for (let i=0;i<dataObjectAll.length;i++){
	autoTable.push(dataObjectAll[i]);
};
console.table(autoTable);

} catch (error) {
	console.log(error)
}

