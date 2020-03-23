import React from 'react'
import Block from '../Block'
import {inject,observer} from "mobx-react";

@inject('BlocksStore')
@observer
export default class BlockEditor extends React.Component {

    render() {
        console.log('render BlockEditor')
        const { blocks } = this.props.BlocksStore
        return blocks.map( block => (
            <Block key={`block-${block.id}-key`} block={JSON.stringify(block)} updateField={this.updateField}/>
        ))
    }

    updateField = (blockId, fieldIndex, content) => {
        this.props.BlocksStore.updateField(blockId, fieldIndex, content)
    }

}
