import React from 'react'
import { CodeMirrorContainer, EditorContainer } from '../common/components'
import EditorBar from '../EditorBar'
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import Editor from '../Editor';
import { css } from '@codemirror/lang-css';

export default function CSSEditor() {
  return (
    <EditorContainer>
      <EditorBar icon={SiCss3} editorName="CSS"/>
      <CodeMirrorContainer>
        <Editor language={css()}/>
      </CodeMirrorContainer>
    </EditorContainer>
  )
}
