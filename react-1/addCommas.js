function addCommas(number) {
    
        // Convert the number to a string and add commas
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = addCommas;