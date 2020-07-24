import React from 'react';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import './JoditTest.css';

export const JoditTest = () => {
  return (
    <div className="JoditTest">
      <h1 className="h1">JODIT EDITOR TESTING</h1>
      <JoditEditor
        config={{
          toolbar: {toolbarInline: false},
          autofocus: true,
          uploader: {insertImageAsBase64URI: true},
          spellcheck: false,
          defaultMode: "1",
          showCharsCounter: false,
          showWordsCounter: false,
          showXPathInStatusbar: false,
          buttons: "paragraph,align,|,bold,,italic,underline,hr,|,image,source,table,ul,ol,link",
        }}
      />
    </div>
  );
}
