const Redis = require("ioredis")
const redis = new Redis()

const add_hunting_spot = async (huntSpot) => {
    await redis.geoadd('hunt_spots',
        huntSpot.position.lng,
        huntSpot.position.lat,
        huntSpot.id
    );
};


const search_radius = async (lng, lat, radius) => {
    const data = redis.georadius('hunt_spots', lng, lat, radius, 'km');
    console.log(data)
    return data
};

const remove_spot = async (id) => {
    await redis.zrem('hunt_spots', id);
};

module.exports = {add_hunting_spot, search_radius, remove_spot};
