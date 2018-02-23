export default {
    GAME_WIDTH: window.screen.availWidth,
    GAME_HEIGHT: 300,
    PIXEL_SIZE: 6,
    TILE_SIZE: 6,

    TILES: {
        UNDERGROUND: 0,
        GROUND: 1,
        GRASS: 2,
        PLOT: 3,
        PLANT: 4,
        FENCE: 5,
        COOP: 6,
        COOP_EMPTY: 7
    },

    SPRITESHEETS: {
        'player_spritesheet': {
            key: 'player',
            frameWidth: 8,
            frameHeight: 12
        },
        'TILE_PLANT_spritesheet': {
            key: 'TILE_PLANT',
            frameWidth: 6,
            frameHeight: 11
        },
        'TILE_COOP_spritesheet': {
            key: 'TILE_COOP',
            frameWidth: 8,
            frameHeight: 17
        }
    },

    PIXEL_SPRITES: {
        'test': [ '0123456789................', 'abcefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ],
        'smile': [
            '..F...F..',
            '.........',
            '....F....',
            'F.......F',
            '.FFFFFFF.',
        ],
        'player_spritesheet': [
            '..DDD...' + '..DDD...',
            '..DDDD..' + '..DDDD..',
            '..424...' + '..424...',
            '..4444..' + '..4444..',
            '..466...' + '..466...',
            '..44....' + '..44....',
            '.EDEDE..' + '.EDEDE..',
            '.EEDEDE.' + '.EDEEDE.',
            '.EEDDDE.' + 'EEDDDDE.',
            '.44DDD4.' + '44DDDD4.',
            '..999...' + '..9999..',
            '..000...' + '.00..00.',
        ],
        'interact_indicator': [
            '2....2',
            '222222',
        ],
        'TILE_GROUND': [
            '666666',
            '666566',
            '555555',
            '555555',
            '555555',
            '555555',
        ],
        'TILE_GRASS': [
            '....B.',
            'AABABA',
            'AAAAAA',
            '5A5555',
            '555555',
            '555555',
            '555555',
        ],
        'TILE_FENCE': [
            '.7....',
            '.76.7.',
            '.7.67.',
            '.7..7.',
            '.76.7.',
            '.7.67.',
            'A7AA7A',
            'AAAA7A',
            '5A5555',
            '555555',
            '555555',
            '555555',
        ],
        'TILE_UNDERGROUND': [
            '555555',
            '5C5555',
            '555CC5',
            'C5C5CC',
            '5CCCCC',
            'CCCCCC',
        ],
        'TILE_PLOT': [
            '......',
            '.6556.',
            '666666',
            '566666',
            '556555',
            '555555',
            '555555',
            '555555',
        ],
        'TILE_PLANT_spritesheet': [
            '......' + '......' + '......' + '..AA..' + '..AA..',
            '......' + '......' + '..AA..' + '.A55..' + 'A555A.',
            '......' + '......' + '..5AA.' + '..555A' + 'A.555A',
            '......' + '..AA..' + '..55..' + '..55..' + '..55..',
            '.6AA6.' + '.6556.' + '.6556.' + '.6556.' + '.6556.',
            '665566' + '665566' + '665566' + '665566' + '665566',
            '566666' + '566666' + '566666' + '566666' + '566666',
            '556555' + '556555' + '556555' + '556555' + '556555',
            '555555' + '555555' + '555555' + '555555' + '555555',
            '555555' + '555555' + '555555' + '555555' + '555555',
            '555555' + '555555' + '555555' + '555555' + '555555',
        ],
        'TILE_COOP_EMPTY': [
            '..6666..',
            '.655556.',
            '65555556',
            '65555556',
            '65555556',
            '65555556',
            '65555556',
            '65555556',
            '65555556',
            '66777766',
            '6.6666.6',
            '.A7777A.',
            '.AAAAAA.',
            '.5A5555.',
            '.555555.',
            '.555555.',
            '.555555.',
        ],
        'TILE_COOP_spritesheet': [
            '..6666..' + '..6666..',
            '.655556.' + '.655556.',
            '65555556' + '65553556',
            '65553556' + '65532456',
            '65532456' + '65552286',
            '65552286' + '62222256',
            '62222256' + '65212256',
            '65211156' + '65551156',
            '65558856' + '65558856',
            '66777766' + '66777766',
            '6.6666.6' + '6.6666.6',
            '.A7777A.' + '.A7777A.',
            '.AAAAAA.' + '.AAAAAA.',
            '.5A5555.' + '.5A5555.',
            '.555555.' + '.555555.',
            '.555555.' + '.555555.',
            '.555555.' + '.555555.',
        ],
        'chicken': [
            '...3.',
            '..324.',
            '...228',
            '.2222.',
            '..211.',
            '...88.',
        ]
    }
};