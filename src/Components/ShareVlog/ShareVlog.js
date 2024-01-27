import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faStaylinked, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './ShareVlogStyle.css';

const ShareVlog = ({ vlogId }) => {
  const vlogUrl = `https://yourwebsite.com/vlog/${vlogId}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(vlogUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(vlogUrl)}&text=Check%20out%20this%20vlog`;
  const gmailShareUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&su=Check%20out%20this%20vlog&body=Here's%20a%20cool%20vlog%20I%20found%20that%20I%20thought%20you%20might%20like:%20${encodeURIComponent(vlogUrl)}&tf=1`;

  const [copySuccess, setCopySuccess] = useState();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(vlogUrl)
      .then(() => {
        setCopySuccess('Copied');
        setTimeout(() => setCopySuccess(null), 1500);
      })
      .catch(() => {
        setCopySuccess('Failed');
        setTimeout(() => setCopySuccess(null), 1500);
      });
  };


  return (
    <>
        <div className='align-items-center border-2 border-top mt-5 mx-auto text-center w-50'>
            <h5>אשמח שתשתפו את הוולוגים שלי</h5>
            <div className="mx-auto share-links w-50">
            
                <div className="link-item">
                    <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon-square bg-linkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <span className="tooltip">LinkedIn</span>
                    </a>
                </div>
                <div className="link-item">
                    <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon-square bg-twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <span className="tooltip">Twitter</span>
                    </a>
                </div>
                <div className="link-item">
                    <div onClick={copyToClipboard}>
                        <div className="icon-square bg-link">
                            <FontAwesomeIcon icon={faStaylinked} />
                        </div>
                        <span className="tooltip">Link</span>
                        {copySuccess && <span className='copySuccess'>{copySuccess}</span>}                        
                    </div>
                </div>
                <div className="link-item">
                    <a href={gmailShareUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon-square bg-gmail">
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <span className="tooltip">Gmail</span>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
};

export default ShareVlog;
