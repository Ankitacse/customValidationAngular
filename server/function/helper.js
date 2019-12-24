
function formatNumber(number) {
    const sumLen = number.toString().length;
    const maxstr = '000000'+number;
    return maxstr.substr(sumLen,maxstr.length);
}

module.exports = {
    formatNumber
}