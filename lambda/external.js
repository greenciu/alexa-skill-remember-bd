//TODO: relevant data that we need to query

const fetch = require('axios');

module.exports = {
    getDataFromX(input) {
//        const response = await fetch('https://httpbin.org/ip', { method: 'get', headers: {'content-type': 'application/json'} });
//        const data = await response.json();

        var url = 'https://httpbin.org/ip';

        var config = {
            timeout: 5000, // timeout api call before we reach Alexa's 8 sec timeout, or set globally via axios.defaults.timeout
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        };

        async function getJsonResponse(url, config){
            const res = await fetch.get(url, config);
            return res.data;
        }

        return getJsonResponse(url, config).then((result) => {
                return result.origin;
            }).catch((error) => {
                return null;
            });
    }
}
