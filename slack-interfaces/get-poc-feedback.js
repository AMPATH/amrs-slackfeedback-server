const slackconfig = require('../config/slackconfig.json')
const rp = require('request-promise');

function getPOCFeedback(count, oldest) {
    var options = {
        url: 'https://slack.com/api/groups.history',
        qs: {
            token: slackconfig.slack.bottoken,
            channel: slackconfig.slack.groupid,
            count: count,
            oldest: oldest
        },

        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    return new Promise(function(resolve, reject) {
        rp(options)
            .then(function(data) {
                resolve(data);
            }).catch(function(err) {
                reject(err);
            });
    });
}


var getpocfeedback = {
    getPOCFeedback:getPOCFeedback,
}

module.exports.getpocfeedback = getpocfeedback;