import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

const CodeToolbar = ({ languageIcon, codeSnippet }) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    };

  return (
    <div className='bg-dark-subtle rounded-top-1'>
        <div className='d-flex'>
            <div className='mx-1'>
                {languageIcon}
            </div>
            <div className='flex-fill'></div>
            <CopyToClipboard text={codeSnippet} onCopy={handleCopy}>
                <button className='bg-transparent border-0'>
                <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                <span className='mx-1'>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
            </CopyToClipboard>
        </div>
    </div>    
  );
};

export default CodeToolbar;
