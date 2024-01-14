import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ShareVlog = ({ vlogId }) => {
  const vlogUrl = `https://yourwebsite.com/vlog/${vlogId}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(vlogUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(vlogUrl)}&text=Check%20out%20this%20vlog`;

  return (
    <div>
      <h3>Share this vlog:</h3>
      <div>
        <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> Share on LinkedIn
        </a>
      </div>
      <div>
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> Share on Twitter
        </a>
      </div>
      <div>
        <a href={vlogUrl} target="_blank" rel="noopener noreferrer">Direct Link</a>
      </div>
    </div>
  );
};

export default ShareVlog;
