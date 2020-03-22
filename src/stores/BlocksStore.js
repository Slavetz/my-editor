import { observable, action } from 'mobx'
import json from './Blocks'

class BlocksStore {

    @observable blocks = observable.array()

    constructor() {
        this.blocks = json.blocks
    }

    @action fieldUpdate(blockId,fieldIndex,content){
        const blockIndex = this.findBlockById(blockId);
        if (blockIndex > -1) {
            const block = {...this.blocks[blockIndex]}
            block.fields[fieldIndex].content = content
            this.blocks[blockIndex] = block
            //this.blocks.splice(blockIndex,1, block)
        } else {
            console.error('Block not found')
        }
    }

    findBlockById (blockId) {
        return this.blocks.findIndex(block => block.id === blockId)
    }

}

export default new BlocksStore()
