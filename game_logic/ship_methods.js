function checkForShip(player, coordinate) {
    var shipPresent, ship;
    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];
        shipPresent = ship.locations.filter(function (actualCoordinate) {
            return (actualCoordinate[0] === coordinate[0]) && (actualCoordinate[1] === coordinate[1]);
        })[0];
        if (shipPresent)
            return ship;
    }
    return false;
}


function checkSink(ship) {
    if(ship.locations.length !== ship.damage.length)
        return false;

}

function fireShip(player, coordinates) {
    var ship = checkForShip(player, coordinates);
    if (ship)
        damageShip(ship, coordinates);
    else
        return false;
}

function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}
module.exports = {
    checkForShip: checkForShip,
    damageShip: damageShip,
    fireShip: fireShip,
    checkSink: checkSink
};
