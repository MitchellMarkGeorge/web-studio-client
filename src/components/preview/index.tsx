import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useWebStudioState } from "../../state";

const PreviewFrame = styled.iframe<{ isPaneDragging: boolean }>`
  flex: 1;
  height: 100%;
  width: 100%;
  border: none;
  background-color: white;
  // need to do this so the split pane dragging can still work/allows the onmouseup event work
  pointer-events: ${(props) => (props.isPaneDragging ? "none" : "auto")};
  /* pointer-events: none; */
`;


export default function Preview() {
  const previewUrl = useWebStudioState(state => state.previewUrl);
  const isPaneDragging = useWebStudioState((state) => state.isPaneDragging);
  console.log("re preview updated");

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

  // const previewUrl = useMemo(() => {
  //   //   const previewHTMLDocument = dedent`
  //   //   <!DOCTYPE html>
  //   //   <html lang="en">
  //   //     <head>
  //   //       <meta charset="UTF-8">
  //   //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //   //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   //       <title>Web Studio Preview</title>
  //   //       <style>${cssCode}</meta>
  //   //     </head>
  //   //     <body>
  //   //       ${htmlCode}
  //   //       <script>
  //   //         ${jsCode}
  //   //       </script>
  //   //     </body>
  //   //   </html>
  //   // `;
  //   //   const previewHTMLDocument = dedent`
  //   //   <link rel="preconnect" href="https://fonts.googleapis.com">
  //   // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  //   // <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet">
  //   //     <style>${cssCode}</style>
  //   //     ${htmlCode}
  //   //     <script>${jsCode}</script>
  //   //    `
  //   const previewHTMLDocument = dedent`
  //     <style>${cssCode}</style>
  //     <body>${htmlCode}</body>
  //     <script>${jsCode}</script>
  //  `;

  //   const previewBlob = new Blob([previewHTMLDocument], {
  //     type: "text/html",
  //   });
  //   console.log(URL.createObjectURL(previewBlob));

  //   return URL.createObjectURL(previewBlob);
  // }, [cssCode, jsCode, htmlCode]);

  useEffect(() => {
    return () => {
      // cleanup
      URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);


  return (
    <PreviewFrame
      isPaneDragging={isPaneDragging}
      // sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      allow={allowPermisions}
      sandbox={sandboxPermisions}
      src={previewUrl}
    />
  );
}
