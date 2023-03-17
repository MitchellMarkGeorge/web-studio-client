import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useWebStudioState } from "../../state";
import logo from "../../assets/logo.svg";

const PreviewFrame = styled.iframe<{ isPaneDragging: boolean}>`
  flex: 1;
  height: 100%;
  width: 100%;
  border: none;
  background-color: white;
  // need to do this so the split pane dragging can still work/allows the onmouseup event work
  pointer-events: ${props => props.isPaneDragging ? "none" : "auto"};
  /* pointer-events: none; */
`;

const PreviewPlaceholderContainter = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.primaryText};
`;


const PreviewPlaceholderLogo = styled.img`
  height: 15%;
  width: 15%;
`;


export default function Preview() {
  const htmlCode = useWebStudioState((state) => state.htmlCode);
  const cssCode = useWebStudioState((state) => state.cssCode);
  const jsCode = useWebStudioState((state) => state.javascriptCode);
  const isPaneDragging = useWebStudioState(state => state.isPaneDragging);

  const [srcDoc, setSrcDoc] = useState("");

  // const isProjectEmpty = useMemo(
  //   () => htmlCode.length === 0 && cssCode.length === 0 && jsCode.length === 0,
  //   [htmlCode, cssCode, jsCode]
  // );

  // think about this
  const allowPermisions = useMemo(
    () =>
      [
        "accelerometer",
        "camera",
        "display-capture",
        "geolocation",
        "encrypted-media", // currently experimental
        "microphone",
        "midi",
        "usb",
        "web-share",
        "clipboard-read",
        "clipboard-write",
      ].join(" "),
    []
  );
  // accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking
  // midi; geolocation; microphone; camera; display-capture; encrypted-media; clipboard-read; clipboard-write; notifications; payment-handler; persistent-storage; background-sync; ambient-light-sensor; accessibility-events;
  const sandboxPermisions = useMemo(
    () =>
      [
        "allow-forms",
        "allow-modals",
        "allow-pointer-lock",
        "allow-popups",
        "allow-presentation",
        // "allow-same-origin",
        "allow-scripts",
        "allow-downloads",
      ].join(" "),
    []
  );
  // allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock
  // allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation allow-downloads

  // external js and css
  // console.log(htmlCode);
  const buildSrcDoc = () => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web Studio Preview</title>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>
          ${jsCode}
        </script>
      </body>
    </html>
  `;

  useEffect(() => {
    setSrcDoc(buildSrcDoc());
  }, [jsCode, htmlCode, cssCode]);
  
  // if (isProjectEmpty) return (
  //   <PreviewPlaceholderContainter>
  //     <PreviewPlaceholderLogo src={logo}/>
  //     <h1>Welcome to Web Studio.</h1>
  //   </PreviewPlaceholderContainter>
  // )

  return (
    <PreviewFrame
      isPaneDragging={isPaneDragging}
      allow={allowPermisions}
      sandbox={sandboxPermisions}
      srcDoc={srcDoc}
    />
  );
}
