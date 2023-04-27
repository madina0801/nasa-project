const launches = new Map();

let latestFlightNumber = 100;

const launch = {
	// flightNumber: 100,
	mission: 'Mission name 1',
	rocket: 'Explorer IS1',
	launchDate: new Date('December 27, 2030'),
	target: 'Kepler-442 b',
	// customers: ['ZTM', 'NASA'],
	// upcoming: true,
	// success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
	return Array.from(launches.values());
}

function addNewLaunch(launch) {
	latestFlightNumber++;
	launches.set(
		latestFlightNumber,
		Object.assign(launch, {
			flightNumber: latestFlightNumber,
			customers: ['ZTM', 'NASA'],
			upcoming: true,
			success: true,
		}));
}

module.exports = {
	getAllLaunches,
	addNewLaunch,
}