const request = require("request");

const get_camping_spots = async () => {
    let points = []
    request('http://localhost:3000/camp/fetch', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var myObject = JSON.parse(body)
            for (var i in myObject) {
                points[i] = myObject[i];
            }
        }
        console.log(points)
        return points
    })
};


module.exports = {get_camping_spots}