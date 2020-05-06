const InputType = require('../inputType')
const BlockType = require('../blockType')

module.exports = {
    // Looks
    name: 'Looks',
    id: 'looks',
    blocks: [
        {
            name: 'say',
            opcode: 'looks_say',
            type: BlockType.Block,
            args: [{
                name: 'MESSAGE',
                type: InputType.String
            }]
        }, {
            name: 'sayFor',
            opcode: 'looks_sayforsecs',
            type: BlockType.Block,
            args: [{
                name: 'MESSAGE',
                type: InputType.String
            }, {
                name: 'SECS',
                type: InputType.Number
            }]
        }
    ]
}
