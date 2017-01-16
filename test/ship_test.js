var expect = require('chai').expect;

describe('checkForShip', function () {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    var player;
    before(function () {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                }
            ]
        };
    });
    it('should correctly report no ship at a given players coordinate', function () {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });
    it('should correctly report a ship located at the given coordinates', function () {
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });
    it('should handle ships located at more than one coordinate', function () {
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    });
    it('should handle checking multiple ships', function () {
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});
describe('damageShip', function () {
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a giver ship at a given location', function () {
        var ship = {
            locations: [[0, 0]],
            damage: []
        };
        damageShip(ship, [0, 0]);
        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

describe('fireShip', function () {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    var fireShip = require('../game_logic/ship_methods').fireShip;
    var player;
    beforeEach(function(){
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]],
                    damage: []
                },
                {
                    locations: [[1, 0], [1, 1]],
                    damage: []
                }
            ]
        };
    });

    it('should NOT record damage if there is no ship at my coordinate', function () {
        expect(fireShip(player, [2, 1])).to.be.false;
        expect(player.ships[0].damage).to.be.empty;
    });
    it('should record damage on the given players ship at a given coordinate', function () {
        fireShip(player, [0, 1]);
        expect(player.ships[0].damage[0]).to.deep.equal([0, 1]);
    });

});