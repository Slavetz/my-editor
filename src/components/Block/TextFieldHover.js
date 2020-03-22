import React from 'react'
import MyEditor from './MyEditor'

import {inject} from "mobx-react";
@inject('BlocksStore')
export default class TextField extends React.Component {

    state = {
        showEditor: false,
        html: this.props.content
    }

    render() {
        console.log('render TextField')
        const { showEditor } = this.state
        const { content } = this.props;

        return <div
            className={'editor-textfield'}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
        >
            {showEditor? <MyEditor
                content={this.props.content}
                onBlur={this.updateStore}
                onChange={this.updateStore}
            />:<div
                dangerouslySetInnerHTML={{ __html: content }}
            /> }
        </div>
    }

    onMouseEnter = () => {
        if (this.state.showEditor) return
        this.setState({
            showEditor: true
        })
    }

    onMouseLeave = () => {
        if (!this.state.showEditor) return
        this.setState({
            showEditor: false
        })
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
