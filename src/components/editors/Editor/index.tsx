import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import {
  defaultHighlightStyle,
  foldGutter,
  indentOnInput,
  StreamLanguage,
  syntaxHighlighting,
  Language,
  LanguageSupport,
  foldKeymap,
  bracketMatching,
} from "@codemirror/language";
import { Compartment, Extension } from "@codemirror/state";
import {
  drawSelection,
  dropCursor,
  EditorView,
  highlightSpecialChars,
  keymap,
  lineNumbers,
} from "@codemirror/view";
// import { basicSetup, EditorView } from "codemirror";
import { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { useWebStudioState } from "../../../state";
import { darktheme } from "./theme";
import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { useMountedEffect } from "../../../hooks/useMountedEffect";

interface Props {
  // code: string // might bcome usefull when saving to localStorage
  // language: Language | LanguageSupport; // need to figure out what this looks like
  language: Extension; // should I use strings and the editor loads the language based on it or should I just pass it in???
  //   options: EditorLanuage; // need to figure out what this looks like
  onCodeChange: (code: string) => void;
}

const CodeMirrorWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* flex: 1; */
  /* display: flex; */
`;

export default function Editor(props: Props) {
  const editorSettings = useWebStudioState((state) => state.editorSettings);
  const { lineNumbersEnabled } = editorSettings;

  const container = useRef<HTMLDivElement | null>(null);
  const editorView = useRef<EditorView | null>(null);

  const languageCompartment = useRef(new Compartment());
  const lineNumberCompartment = useRef(new Compartment());
  // should the editor be at 100%??
  // this technically is not nesseccary as the editor background and the layout background will be same color

  const codeChangeListener = useMemo(
    () =>
      EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          const { doc } = update.state;
          // console.log(doc.toString());
          props.onCodeChange(doc.toString());
          // props.onCodeChange(doc.toString())
        }
      }),
    [props.onCodeChange]
  );

  useEffect(() => {
    if (container.current && !editorView.current) {
      editorView.current = new EditorView({
        // extensions: [basicSetup, darktheme],
        // need to migrrate to @codemirror/view and configure things myself
        extensions: [
          // need default extensions / config
          lineNumberCompartment.current.of(
            lineNumbersEnabled ? lineNumbers() : []
          ),
          // lineNumbers(),
          syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
          darktheme,
          highlightSpecialChars(),
          history(),
          languageCompartment.current.of(props.language),
          highlightSpecialChars(),
          history(),
          foldGutter(),
          drawSelection(),
          dropCursor(),
          indentOnInput(),
          closeBrackets(),
          codeChangeListener,
          // bracketMatching(),

          keymap.of([
            indentWithTab,
            ...closeBracketsKeymap,
            ...defaultKeymap,
            ...historyKeymap,
            ...foldKeymap,
          ]),
        ],
        parent: container.current,
      });
    }

    // still need to destroy the editor on component unmount
    // return () => editorView.current?.destroy();
  }, []);

  // should only be called on compeonent unmount
  // useEffect(() => {
  //   return () => editorView.current?.destroy();
  // }, [])

  // only call this after the inital mount
  // useMountedEffect(() => {
  //   // should not happen on first render
  //   if (editorView.current) {
  //     switchLanguage(props.language);
  //   }
  // }, [props.language]);

  const switchLanguage = (language: Extension) => {
    console.log("here switching language");
    if (editorView.current) {
      editorView.current.dispatch({
        effects: languageCompartment.current.reconfigure(language),
      });
    }
  };
  return <CodeMirrorWrapper ref={container} />;
}
