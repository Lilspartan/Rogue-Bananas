const fs = require('fs')

export default async function handler(req, res) {
    res.send([
        {
            "name": "RACE OF ROWBOATS",
            "mode": "4v4",
            "time": "6:00PM EST",
            "date": "4.19.2022"
        },
        {
            "name": "NOTORIOUS ARENA LEAGUE",
            "mode": "4v4",
            "time": "8:00PM EST",
            "date": "4.21.2022"
        },
        {
            "name": "SEA OF CHAMPIONS",
            "mode": "2v2",
            "time": "12:00PM EST",
            "date": "4.29.2022"
        },
        {
            "name": "RACE OF LEGENDS",
            "mode": "3v3",
            "time": "10:00AM EST",
            "date": "5.10.2022"
        }
    ]);
}