import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBgClassByLanguage } from '../../Utils/helpers';
import Error from '../Error/Error';
import Code from '../Code/Code';
import ShareVlog from '../ShareVlog/ShareVlog';
import BackButton from '../BackButton/BackButton';
import BackToTopButton from '../BackToTopButton/BackToTopButton';


function VlogPage() {
    const { fileId } = useParams();

    const [vlogContent, setVlogContent] = useState(null);
    const [error, setError] = useState(null);
    const [languageClass, setLanguageClass] = useState('Java');

    useEffect(() => {
        const fetchVlogContent = async () => {
          try {
            const response = await fetch(`../DataVlog/Vlog_${fileId}.json`);
            if (!response.ok) {
              throw new Error('Failed to fetch vlog content');
            }
            const data = await response.json();
            setVlogContent(data);
            setLanguageClass(getBgClassByLanguage(data.language));
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchVlogContent();
    }, [fileId]);
     

    if (error) {
        return <Error message={error} />;
    }

    return (
        <>
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
                                <h4>{item.subTitle}</h4>
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

                        <ShareVlog vlogId={fileId} />
                    </div>              
                    )}
                </div>

                <BackButton />
                </div>
                <div className='col-md-2'>
                    <BackToTopButton />
                </div>
            </div>      
            </div> 
        </>
    );
}

export default VlogPage;

