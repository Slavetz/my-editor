import React from 'react'
import { RichEditor } from '../DraftEditor'

export default class TextField extends React.Component {

    render() {
        console.log('render TextField')
        return <div className={'editor-textfield'}>
            <RichEditor
                content={this.props.content}
                onBlur={this.updateField}
                onChange={this.updateField}
            />
        </div>
    }

    updateField = (newContent) => {
        const {
            blockId,
            fieldIndex,
            content,
            updateField
        } = this.props;

        if (content !== newContent) {
            updateField( blockId, fieldIndex, newContent )
        }
    }

}
