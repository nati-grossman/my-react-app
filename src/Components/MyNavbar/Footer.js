import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3" dir="rtl">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>צור קשר:</p>
            <a href="https://www.linkedin.com/in/nati-grossman-8a06071a2/" target="_blank" rel="noopener noreferrer" className="text-light bg-hover-footer ms-3">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:natngr96@gmail.com" className="text-light bg-hover-footer">
              <FaEnvelope size={24} />
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
