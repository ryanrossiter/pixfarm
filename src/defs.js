export default {
    GAME_WIDTH: window.screen.availWidth,
    GAME_HEIGHT: 300,
    PIXEL_SIZE: 6,
    TILE_SIZE: 6,

    TILES: {
        UNDERGROUND: 0,
        GROUND: 1,
        GRASS: 2,
    },

    PIXEL_SPRITES: {
        'smile': [
            '..F...F..',
            '.........',
            '....F....',
            'F.......F',
            '.FFFFFFF.',
        ],
        'TILE_GROUND': [
            '666666',
            '666566',
            '555555',
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
        ]
    }
};