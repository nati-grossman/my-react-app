import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia , prism, pojoaque } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Code( {language = "csharp" , codeSnippet = "Console.WriteLine('Hello, World!');" }) {
  
  return (
    <>
        <div className='card' dir="ltr">
            <div className='card-body'>
                <SyntaxHighlighter language={language} style={okaidia} showLineNumbers>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>

        <div className='card' dir="ltr">
            <div className='card-body'>
                <SyntaxHighlighter language={language} style={pojoaque} showLineNumbers >
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>

        <div className='card' dir="ltr">
            <div className='card-body'>
                <SyntaxHighlighter language={language} style={prism} showLineNumbers >
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>
    </>
  );
}

export default Code;
