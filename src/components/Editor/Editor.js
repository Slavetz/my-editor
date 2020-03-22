import React from 'react'
import { Block } from '../Block'
import {inject,observer} from "mobx-react";

@inject('BlocksStore')
@observer
export default class Editor extends React.Component {

    render() {
        console.log('render Editor')
        const { blocks } = this.props.BlocksStore
        return blocks.map( block => (
            <Block key={`block-${block.id}-key`} block={block}/>
        ))
    }s

}
