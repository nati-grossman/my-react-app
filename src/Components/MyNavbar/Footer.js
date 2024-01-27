import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const refLinkedin = "https://www.linkedin.com/in/nati-grossman-8a06071a2/";
  const rdfGoogle = "mailto:natngr96@gmail.com";
  
  return (
    <footer className="bg-dark text-light text-center py-3" dir="rtl">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>צור קשר:</p>
            <a href={refLinkedin} target="_blank" rel="noopener noreferrer" className="text-light bg-hover-footer ms-3">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-footer p-1"/>

            </a>
            <a href={rdfGoogle} target="_blank" rel="noopener noreferrer" className="text-light bg-hover-footer">
              <FontAwesomeIcon icon={faGooglePlusSquare} size="2x" className="icon-footer p-1"/>
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p>&copy; {new Date().getFullYear()}</p>
            <p>אשמח לקבל את המשוב שלך! אם יש לך הצעות או מצאת בעיה, אנא הודע לי.</p>
            <p>נוצר ומנוהל על ידי נתי גרוסמן</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
