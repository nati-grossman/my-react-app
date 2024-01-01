import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DisplayVlog() {


    const code1 = `function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}`;

    const code2 = `const message = "Hello, World!";
console.log(message);`;

    const hebrewText = `זהו דוגמה לטקסט בעברית. הטקסט מוצג מימין לשמאל במקרה זה.`;

  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className='col-md-2'></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className='card-header bg-white border-5'>
                                <h1 className="card-title">כותרת דוגמה לווידאו בעברית</h1>
                                <p className="card-text text-muted">09/08/2023</p>
                                <p className="card-text">JavaScript</p>
                            </div>
                        
                            <div className='card-group mx-2'>
                                <div className="my-4">
                                    <h2>מבוא</h2>
                                    <p>{hebrewText}</p>
                                </div>


                                <div className="my-4">
                                    <h2>קטע 1: התחלה</h2>
                                    <p>
                                        כאשר היה אדם נולד, הוא רק משחק עם אחרים. אם הוא גדל, הוא לומד. אם הוא לא לומד, הוא גועל. אם הוא גועל, הוא מת. כאשר הוא מת, הוא מתקרב.
                                        כאשר הוא מתקרב, הוא מגיע לאהבה. כך שהיהוו זרים. זהו המשחק שלהם. זהו הסיבולת שלהם. כך שהם חיים לנצחיות. 
                                        כך שהם יכולים ללמוד מעצמם. כאשר הם לומדים מעצמם, הם מבינים את החיים.
                                    </p>
                                    <div className='card' dir="ltr">
                                        <div className='card-body'>
                                            <SyntaxHighlighter language="csharp" style={okaidia} showLineNumbers>
                                                {code1}
                                            </SyntaxHighlighter>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-4">
                                    <h2>קטע 2: טכניקות מתקדמות</h2>
                                    <p>
                                        ברוכים הבאים לאתר "עץ החיים". אנו שמחים לארח אתכם באתר המציע מגוון רחב של מאמרים, ספרים, ומקורות נוספים בנושאי יהדות, תורה,
                                        חסידות, קבלה, תפילה, ועוד. אנו מאמינים כי הידע והמובנים המועברים על ידי התוכן שאנו מציעים יכולים להעשות משמעותיים ולשנות את חייכם. 
                                        באמצעות המאמרים שלנו נשתדל להעביר ידע, הבנה, ותובנות חדשות בנושאים שונים הקשורים לחיים היומיומיים, לאמונה, ולקשר האישי עם האלוקים. 
                                        אנו מזמינים אתכם לחקור את התוכן שלנו, לשתף חוויות, ולהיות חלק מקהילה שמחפשת אמת ומשמעות בחיים. 
                                        נשמח לקבל משוב ממך, ולעזור בכל דרך שניתן. בכניסתכם לאתר, ניתן למצוא מגוון רחב של תכנים שיעניקו לכם השראה, חיזוק, והבנה חדשה.
                                    </p>
                                    <div className='card' dir="ltr">
                                        <div className='card-body'>
                                            <SyntaxHighlighter language="csharp" style={okaidia} showLineNumbers>
                                                {code2}
                                            </SyntaxHighlighter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    </>
  );
}

export default DisplayVlog;
