import React from 'react'
import {Editor, EditorState} from 'draft-js';
import {convertFromHTML, convertToHTML} from 'draft-convert'

export default class MyEditor extends React.Component {

    state = {
        editorState: EditorState.createWithContent(convertFromHTML(this.props.content)),
    }

    render() {
        console.log('render MyEditor')
        return <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            onBlur={this.onBlur}
        />
    }

    onChange = (editorState) => {
        clearTimeout(this.state.update);
        this.setState({
            editorState,
            update: setTimeout(()=>{ this.update() },1111)
        })
    }

    onBlur = () => {
        this.update()
    }

    update () {
        const html = convertToHTML(this.state.editorState.getCurrentContent());
        if (this.props.content !== html) {
            this.props.onChange && this.props.onChange(html)
        }
    }

}


