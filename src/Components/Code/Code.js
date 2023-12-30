import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia , prism, pojoaque } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Code() {
  const codeString = `using System;

  namespace HelloWorld
  {
      class Program
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Hello, World!");
          }
      }
  }`;

  const codeStringAndStyle =  `using System;

  namespace HelloWorld
  {
      class Program
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Hello, World!");
          }
      }
  }`;

  
  return (
    <>
        <div className='card' dir="ltr">
            <div className='card-body'>
                <SyntaxHighlighter language="csharp" style={okaidia} showLineNumbers>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>

        <div className='card' dir="ltr">
            <div className='card-body'>
                <SyntaxHighlighter language="csharp" style={pojoaque} showLineNumbers >
                    {codeStringAndStyle}
                </SyntaxHighlighter>
            </div>
        </div>

        <div className='card'>
            <div className='card-body'>
                <SyntaxHighlighter language="csharp" style={prism} showLineNumbers >
                    {codeStringAndStyle}
                </SyntaxHighlighter>
            </div>
        </div>
    </>
  );
}

export default Code;
