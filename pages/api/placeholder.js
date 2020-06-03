// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* Stubbed API for development */
export default (req, res) => {
    res.statusCode = 200
    res.json(devData)
  }

const devData = [
    {
        "id": 1,
        "ownerId": 1,
        "latitude": 100.0,
        "longitude": 100.0,
        "loadFactor": 100.0,
        "scale": 3.33,
        "property": [],
        "active": true,
        "storageOptions": [
            "HEATING",
            "AIR_CONDITIONING"
        ]
    },
    {
        "id": 2,
        "ownerId": 2,
        "latitude": 100.0,
        "longitude": 100.0,
        "loadFactor": 100.0,
        "scale": 1.0,
        "property": [],
        "storageOptions": [
            "AIR_CONDITIONING"
        ]
    }
]