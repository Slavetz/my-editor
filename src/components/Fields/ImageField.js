import React from 'react'

import {inject} from "mobx-react";
@inject('BlocksStore')
export default class TextField extends React.Component {

    render() {
        console.log('render ImageField')
        return <div className={'editor-imagefield'}>
            <img src={this.props.content} alt=""/>
        </div>
    }

    updateField = (html) => {
        const {
            blockId,
            fieldIndex,
            BlocksStore
        } = this.props;

        if (this.props.content !== html) {
            BlocksStore.updateField( blockId, fieldIndex, html )
        }
    }

}
