import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeToolbar from './CodeToolbar';

function Code( {language = "csharp" , codeSnippet = "Console.WriteLine('Hello, World!');" }) {

  return (
    <>
        <div className='card' dir="ltr">
            <div className='card-body'>
                <CodeToolbar languageIcon={"C#"} codeSnippet={codeSnippet} />
                <SyntaxHighlighter language={language} style={okaidia} showLineNumbers wrapLongLines className='rounded-top-0 rounded-bottom-1 mt-0'>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>

        <div className='card d-none' dir="ltr">
            <div className='card-body'>
                <CodeToolbar languageIcon={"C#"} codeSnippet={codeSnippet} />
                <SyntaxHighlighter language={language} style={prism} showLineNumbers wrapLongLines className='rounded-top-0 rounded-bottom-1 mt-0'>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>
    </>
  );
}

export default Code;
