const getKeyByValue = function (dict, value) {
    return Object.keys(dict).find(key => dict[key] === value);
} 

module.exports = {
    getKeyByValue
}