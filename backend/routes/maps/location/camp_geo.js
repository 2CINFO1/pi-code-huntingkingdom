const Redis = require("ioredis")
const redis = new Redis({
    host: '192.168.1.25',
    port: 6379
},)

const add_camping_spot = async (campingSpot) => {
    await redis.geoadd('camping_spots',
        campingSpot.position.lng,
        campingSpot.position.lat,
        campingSpot.id
    );
};


const search_radius = async (lng, lat, radius) => {
    const data = redis.georadius('camping_spots', lng, lat, radius, 'km');
    console.log(data)
    return data
};

const remove_spot = async (id) => {
    await redis.zrem('camping_spots', id);
};

module.exports = {add_camping_spot, search_radius, remove_spot};