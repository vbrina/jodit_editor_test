import React from "react";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";

import "./JoditTest.css";

export const JoditTest = () => {
  const editor = React.useRef(null);
  const editorRead = React.useRef(null);
  const [content, setContent] = React.useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    toolbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    placeholder: 'Digite a descrição do anúncio...'
  };

  const configRead = {
    readonly: true, // all options from https://xdsoft.net/jodit/doc/
    toolbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
  };

  // const content =
  //   "<p>asdasdasdasdadasd</p><p><br></p><p>poisadjrepoisjdopisjropsijrposirjposdijrpsoidjrds</p><p><br></p><p>KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</p>";

  return (
    <div className="JoditTest">
      <h1 className="h1">JODIT EDITOR TESTING</h1>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={() => {}}
      />
      <br />
      <br />
      <JoditEditor
        ref={editorRead}
        value={content}
        config={configRead}
        tabIndex={1}
      />
    </div>
  );
};
