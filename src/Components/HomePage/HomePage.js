import React from 'react';

import HomeTitle from '../../images/HomeTitle1.jpg';
import WebExplanation from '../WebExplanation/WebExplanation';
import ContentCounter from '../ContentCounter/ContentCounter';
import './HomePage.css';

function HomePage() {
  
  const titleQandA = 'שאלות ותשובות';
  const textQandA = "ברוכים הבאים למדור השאלות והתשובות שלנו, שנועד לעזור לכם להצליח בראיונות העבודה בעולם התכנות. בין אם אתם מתכוננים לראיון הטכנולוגי הבא או סתם מרחיבים את הידע, כאן תוכלו למצוא ידע בנושאים בסיסיים ומתקדמים.";

  const titleVlogs = 'וולוגים';
  const textVlogs = "ברוכים הבאים למדור הוולוגים של התכנות שלנו, שבו ניתן למצוא וולוגים מלאי תובנות המכסים מגוון רחב של נושאי תכנות. בין אם אתם מתחילים שלהוטים ללמוד או מפתחים ותיקים שמחפשים נקודות מבט חדשות, הוולוגים שלנו מספקים תובנות שיעזרו לכם להישאר מעודכנים.";

  const titleLeetCode = 'LeetCode';
  const textLeetCode = "ברוכים הבאים למדור ה LeetCode שלנו, שבו ניתן למצוא שאלות תכנות שפורסמו באתר-LeetCode. כל שאלה מגיעה עם פתרון והסבר מפורט, מה שהופך את המדור למקור חשוב בין אם אתם מתכוננים לראיונות טכניים או מחפשים לשפר את כישורי התכנות שלכם.";
  
  
  return (
    <>
        <div className="container">
          
          <div>     
            <div className="image-container-opacity">
              <img src={HomeTitle} alt="HomeTitle" className='w-100' />
            </div>
            <div className="text-container">
              <div className="centered text-white">
                <h1 className='titleWeb'>פינתי-קוד</h1>
                <h3 className='subTitleWeb'>פינת הקוד של נתי</h3>
                <p>{textVlogs}</p>
              </div>
            </div>
          </div>

            
            <div className='container'>
              <WebExplanation 
                titleExplanation={titleVlogs}
                textExplanation={textVlogs}
                img={'HomeTitle'}
                imgInLeft={true}
             />

              <WebExplanation 
                titleExplanation={titleQandA}
                textExplanation={textQandA}
                img={'HomeTitle1'}
                imgInLeft={false}
              />

              <WebExplanation 
                titleExplanation={titleLeetCode}
                textExplanation={textLeetCode}
                img={'HomeTitle1'}
                imgInLeft={true}
              />
            </div>
            

            <div className='justify-content-around row m-5'>
              <ContentCounter url={'./DataHome/DataHomeQAndA.json'} name={'שאלות ותשובות'} />
              <ContentCounter url={'./DataHome/DataHomeVlog.json'} name={'וולוגים'} />
              <ContentCounter url={'./DataHome/DataHomeLeetcode.json'} name={'Leetcode'} />
            </div>

        </div>

       
     
    </>
  );
}

export default HomePage;
