import React from 'react'
import { EditorContainer, CodeMirrorContainer } from '../common/components'
import EditorBar from '../EditorBar'
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import Editor from '../Editor';
import { html } from '@codemirror/lang-html';

export default function HTMLEditor() {
  return (
    <EditorContainer>
      <EditorBar icon={SiHtml5} editorName="HTML"/>
      <CodeMirrorContainer>
        <Editor language={html()}/>
      </CodeMirrorContainer>
    </EditorContainer>
  )
}
