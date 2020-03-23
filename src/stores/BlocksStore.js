import { observable, action } from 'mobx'
import json from './Blocks'

class BlocksStore {

    @observable blocks = observable.array()

    constructor() {
        this.blocks = json.blocks
    }

    @action updateField(blockId, fieldIndex, content){
        const block = this.findBlockById(blockId);
        if (block) {
            block.content = content
            block.lock = true
        }
    }

    @action lockBlockById(blockId){
        const block = this.findBlockById(blockId);
        if (block) {
            block.lock = true
        }
    }

    findBlockById (blockId) {
        const block = this.blocks.find(block => block.id === blockId)
        if (block) {
            return block
        } else {
            console.error('Block not found')
        }
    }

}

export default new BlocksStore()
