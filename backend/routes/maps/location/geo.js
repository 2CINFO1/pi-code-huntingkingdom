const Redis = require("ioredis")
const redis = new Redis({})

const add_camping_spot = async (campingSpot) => {
    await redis.geoadd('camping_spots',
        campingSpot.position.lng,
        campingSpot.position.lat,
        campingSpot.id
    );
    const value = await redis.georadius('camping_spots', 18, 38, 100000, 'km');
    console.log(value)
};

module.exports = add_camping_spot;