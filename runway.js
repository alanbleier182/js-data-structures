const Queue = require('./Queue');

const load = flights => {
  const runway = new Queue(3);
  flights.forEach(flight => {
    if(runway.hasRoom()) {
      runway.enqueue(flight);
      console.log(`${flight} taxi to runway.`)
    } else {
      console.log('Runway full!');
    }
  });
  return runway;
};

const clear = runway => {
  while(!runway.isEmpty()) {
    const cleared = runway.dequeue();
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

module.exports = { load, clear };
