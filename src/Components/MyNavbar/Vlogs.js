import React, { useState, useEffect } from 'react';

function Vlogs() {
  //const { vlogId } = 2;
  const vlogId = 2;
  const [vlogContent, setVlogContent] = useState([]);

  useEffect(() => {
    const fetchVlogContent = async () => {
      try {
        const response = await fetch(`../DataVlog/Vlog_${vlogId}.json`); 
        if (!response.ok) {
          throw new Error('Failed to fetch vlog content');
        }
        const text = await response.json();
        setVlogContent(text);

      } catch (error) {
        console.error('Error fetching vlog content:', error);
      }
    };
    fetchVlogContent();
  }, [vlogId]);

  return (
    <>
      <div>
      <h2>Vlog {vlogId}</h2>
      <div>
        {Object.entries(vlogContent).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Vlogs;

/*
        const Url = `/src/Components/Data/Vlog_${vlogId}.txt`; 

        var u = `C:/Users/natn0/OneDrive/שולחן העבודה/דברים שלי/project - react/small-prject-for-website/my-react-app/src/Components/Data/Vlog_1.txt`


{vlogContent.map((section, index) => {
        // Render text and code sections based on their types
        return section.type === 'text' ? (
          <p key={index}>{section.content}</p>
        ) : (
          <pre key={index}>{section.content}</pre>
        );
      })}
*/