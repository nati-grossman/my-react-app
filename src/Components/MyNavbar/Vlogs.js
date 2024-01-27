import React, { useState, useEffect } from 'react';
import Code from '../Code/Code';
import BackButton from '../BackButton/BackButton';
import ShareVlog from '../ShareVlog/ShareVlog';
import { getBgClassByLanguage } from '../../Utils/helpers';

function Vlogs({ vlogId = 1 }) {
  
  const [vlogContent, setVlogContent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [languageClass, setLanguageClass] = useState('Java');

  
  useEffect(() => {
    const fetchVlogContent = async () => {
      try {
        const response = await fetch(`../DataVlog/Vlog_${vlogId}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch vlog content');
        }
        const data = await response.json();
        setVlogContent(data);
        setLanguageClass(getBgClassByLanguage(data.language));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVlogContent();
  }, [vlogId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className='bg-danger-subtle mx-auto'>Error: {error}</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className='col-md-2'></div>
        <div className="col-md-8">
          <div className="card">
            {vlogContent && (
              <div className="card-body">
                 
                <div className='card-header bg-white border-5'>
                    <h1 className="card-title">{vlogContent.title}</h1>
                    <p className="card-text text-muted">{vlogContent.date}</p>
                    <p className={`card-text d-inline badge rounded-5 ${languageClass}`}>{vlogContent.language}</p>
                </div>

                <div className='mx-2'>
                  {vlogContent.vlog.map((item, index) => {
                    if (item.subTitle) {
                      return (
                        <div key={index} className="my-4">
                          <h2>{item.subTitle}</h2>
                        </div>
                      );
                    } else if (item.text) {
                      return (
                        <div key={index} className="my-4">
                          <p>{item.text}</p>
                        </div>
                      );
                    } else if (item.codeSnippet) {
                      return (
                        <div key={index} className="my-4">
                          <Code language="csharp" codeSnippet={item.codeSnippet} />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                <ShareVlog vlogId={vlogId} />
              </div>              
            )}
          </div>

          <BackButton />
        </div>
        <div className='col-md-2'></div>
      </div>      
    </div>
  );
}

export default Vlogs;
