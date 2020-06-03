export default (req, res) => {
    res.statusCode = 200
    res.json(userData)
}

const userData = {
    "id": 1,
    "firstName": "Johnny",
    "lastName": "Edgett",
    "storage": [{
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
    }],
    "property": [],
    "profileType": "USER_PROFILE",
    "createdAt": "2020-06-03T00:32:52.562",
    "updatedAt": "2020-06-03T00:32:52.562"
}