import React from "react";
import { TextField , TextFieldHover, ImageField } from '../Fields'

export default class Block extends React.Component  {

    state = {
        block: this.props.block
    }


    shouldComponentUpdate(nextProps,nextState){
        return this.state.block !== nextState.block;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const prevStateBlock = prevState.block
        const nextPropsBlock = nextProps.block
        const block = JSON.parse(nextPropsBlock)
        if (prevStateBlock !== nextPropsBlock){
            return {
                block: nextPropsBlock,
            }
        }
        return null
    }

    render() {
        const block = JSON.parse(this.state.block);
        console.log('render Block', block.id)
        const fields = block.fields
        return (
            <div className={'editor-block'}>
                <div>{block.lock ? 'LOCK': ''}</div>
                {
                fields.map((field,f) => {
                    if (field.type === 'TextField') {
                        return <TextField
                            key={`block-${block.id}-field-${f}-key`}
                            content={field.content}
                            fieldIndex={f}
                            blockId={block.id}
                            {...this.props}
                        />
                    }
                    if (field.type === 'TextFieldHover') {
                        return <TextFieldHover
                            key={`block-${block.id}-field-${f}-key`}
                            content={field.content}
                            fieldIndex={f}
                            blockId={block.id}
                            {...this.props}
                        />
                    }
                    if (field.type === 'ImageField') {
                        return <ImageField
                            key={`block-${block.id}-field-${f}-key`}
                            content={field.content}
                            fieldIndex={f}
                            blockId={block.id}
                            {...this.props}
                        />
                    }
                    return null
                })
            }</div>
        )
    }

}


