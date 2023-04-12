import dedent from "ts-dedent";

// will include language presets and any librares that should be used
interface BuildInfo {}

interface Code {
  js: string;
  css: string;
  html: string;
}
// down the line, this can be executed in another thread
export const buildPreviewUrl = (
  js: string,
  css: string,
  html: string,
  buildInfo?: BuildInfo
) => {
  //   const previewHTMLDocument = dedent`
  //   <!DOCTYPE html>
  //   <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <title>Web Studio Preview</title>
  //       <style>${cssCode}</meta>
  //     </head>
  //     <body>
  //       ${htmlCode}
  //       <script>
  //         ${jsCode}
  //       </script>
  //     </body>
  //   </html>
  // `;
  //   const previewHTMLDocument = dedent`
  //   <link rel="preconnect" href="https://fonts.googleapis.com">
  // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  // <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet">
  //     <style>${cssCode}</style>
  //     ${htmlCode}
  //     <script>${jsCode}</script>
  //    `
  const previewHTMLDocument = dedent`
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
   `;
  const previewBlob = new Blob([previewHTMLDocument], {
    type: "text/html",
  });

  return URL.createObjectURL(previewBlob);
};
