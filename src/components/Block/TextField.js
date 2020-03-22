import React from 'react'
import MyEditor from './MyEditor'

import {inject} from "mobx-react";
@inject('BlocksStore')
export default class TextField extends React.Component {

    render() {
        console.log('render TextField')
        return <div className={'editor-textfield'}>
            <MyEditor
                content={this.props.content}
                onBlur={this.updateStore}
                onChange={this.updateStore}
            />
        </div>
    }

    updateStore = (html) => {
        const {
            blockId,
            fieldIndex,
            BlocksStore
        } = this.props;

        if (this.props.content !== html) {
            BlocksStore.fieldUpdate( blockId, fieldIndex, html )
        }
    }

}
