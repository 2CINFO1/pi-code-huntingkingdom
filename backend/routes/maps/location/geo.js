const CampingSpot = require("../../../models/maps/camping_spot");
const {createClient} = require('redis');
const client = createClient();

module.exports = async function add_camping_spot(campingSpot) {
    await client.connect();
    await client.on('error', (err) => console.log('Redis Client Error', err));
    await client.geoAdd('camping_spots',
        {
            longitude: campingSpot.position.lng,
            latitude: campingSpot.position.lat,
            member: campingSpot.id
        });
    const value = await client.geoRadius('key', 10, 10, 10, 'km');
    console.log(value)
}
