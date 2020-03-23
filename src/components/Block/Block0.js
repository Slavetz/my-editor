import { TextField , TextFieldHover, ImageField } from '../Fields'
//import ImageField from '../Fields/ImageField'
import React from "react";

export default class Block extends React.Component  {

    state = {
        block: JSON.stringify(this.props.block)
    }

    shouldComponentUpdate(nextProps,nextState){

        const thisStateBlock = this.state.block
        const thisPropsBlock = JSON.stringify(this.props.block)

        // const nextStateBlock = nextState.block
        // const nextPropsBlock = JSON.stringify(nextProps.block)
        // console.log ('+++++++++++++++++++++++++++++')
        // console.log ('thisStateBlock',thisStateBlock)
        // console.log ('thisPropsBlock',thisPropsBlock)
        // console.log ('nextStateBlock',nextStateBlock)
        // console.log ('nextPropsBlock',nextPropsBlock)
        // console.log ('-----------------------------')

        if (thisStateBlock !== thisPropsBlock) {
            return true
        }
        return false

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const prevStateBlock = prevState.block
        const nextPropsBlock = JSON.stringify(nextProps.block)
        if (prevStateBlock !== nextPropsBlock){
            return {
                block: nextPropsBlock
            }
        }
        return null
    }

    render() {
        const {block} = this.props;
        console.log('render Block', block.id)
        const fields = block.fields
        return (
            <div className={'editor-block'}>{
                fields.map((field,f) => {
                    if (field.type === 'TextField') {
                        return <TextField
                            key={`block-${block.id}-field-${f}-key`}
                            content={field.content}
                            fieldIndex={f}
                            blockId={block.id}
                        />
                    }
                    if (field.type === 'TextFieldHover') {
                        return <TextFieldHover
                            key={`block-${block.id}-field-${f}-key`}
                            content={field.content}
                            fieldIndex={f}
                            blockId={block.id}
                        />
                    }
                    if (field.type === 'ImageField') {
                        return <ImageField
                            key={`block-${block.id}-field-${f}-key`}
                            content={field.content}
                            fieldIndex={f}
                            blockId={block.id}
                        />
                    }
                    return null
                })
            }</div>
        )
    }

}


