import React, { Component } from 'react';
import { EditorState , convertFromHTML,ContentState ,convertToRaw,convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import  PropTypes from 'prop-types';



export class EditForMarkdown extends Component {


    constructor(props) {
        super(props);


        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    componentDidMount(){
        /*
        Promise.resolve().then( ()=>{
            if (this.props.initRowText){
                const editorContent = convertFromRaw(JSON.parse(this.props.initRowText));
                this.setState({editorState: EditorState.createWithContent(editorContent)});

            }else{
                const contentBlocks = convertFromHTML('#입력해주세요#');
                const editorContent = ContentState.createFromBlockArray(contentBlocks);
                this.setState({editorState: EditorState.createWithContent(editorContent)});
            }
        });
*/

        if (this.props.initRowText){
            // const editorContent =  convertFromRaw(this.props.initRowText);
            this.setState({editorState: EditorState.createWithContent(ContentState.createFromText(this.props.initRowText))});

        }else{
            // const editorContent = convertFromRaw('#입력해주세요#');
            this.setState({editorState: EditorState.createWithContent(ContentState.createFromText('#입력해주세요#'))});
        }


    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });

        const contentState = this.state.editorState.getCurrentContent();
        const contentRaw = draftToMarkdown(convertToRaw(contentState));
        this.props.onEditorStateChange(contentRaw);
    };

    onFocusEditer = () => {
        const plainText =this.state.editorState.getCurrentContent().getPlainText();
        if (plainText === '#입력해주세요#') {
            this.setState({
                editorState : EditorState.createEmpty()
            });
        }

    }

    render() {


        const { editorState } = this.state;

        return (
            <Editor
                editorState={editorState}
                editorStyle={{border: '1px solid Gainsboro'}}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                onFocus={this.onFocusEditer}
                localization={{locale: 'ko',}}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize'],
                    inline: {
                        options: ['bold', 'italic', 'underline', 'strikethrough'],
                        bold: { className: 'bordered-option-classname' },
                        italic: { className: 'bordered-option-classname' },
                        underline: { className: 'bordered-option-classname' },
                        strikethrough: { className: 'bordered-option-classname' },
                        code: { className: 'bordered-option-classname' },
                    },
                    blockType: {
                        className: 'bordered-option-classname',
                    },
                    fontSize: {
                        className: 'bordered-option-classname',
                    },
                }}
            >


            </Editor>
        )
    }
}



EditForMarkdown.propTypes = {
    onEditorStateChange : PropTypes.func.isRequired,
};

EditForMarkdown.defaultProps ={
    initRowText : null,
}
