import React, { Component } from "react";
import { Editor, createEditorState } from "medium-draft";
import "medium-draft/lib/index.css";

class ManagedTextEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: createEditorState(), // for empty content
        };
        this.onChange = (editorState) => {
            this.setState({ editorState });
        };

        this.refsEditor = React.createRef();
    }
    componentDidMount() {
        this.refsEditor.current.focus();
    }

    render() {
        const { editorState } = this.state;
        return (
            <React.Fragment>
                <Editor ref={this.refsEditor} editorState={editorState} onChange={this.onChange} placeholder="Let be creative" />
            </React.Fragment>
        );
    }
}

export default ManagedTextEditor;
