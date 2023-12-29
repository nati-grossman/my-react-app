import React from 'react';
import Card from '../Card/Card';

function QAndA() {

  const data = [
    { title: 'Title 1', date: '2023-01-01', language: 'JavaScript' },
    { title: 'Title 2', date: '2023-01-02', language: 'C#' },
    { title: 'Title 3', date: '2023-01-03', language: 'Python' },
    { title: 'Title 4', date: '2023-01-04', language: 'Java' },
    { title: 'Title 5', date: '2023-01-05', language: 'JavaScript' },
    { title: 'Title 6', date: '2023-01-06', language: 'C#' },
    { title: 'Title 7', date: '2023-01-07', language: 'Python' },
    { title: 'Title 8', date: '2023-01-08', language: 'Java' },
    { title: 'Title 9', date: '2023-01-09', language: 'JavaScript' },
    { title: 'Title 10', date: '2023-01-10', language: 'C#' },
    { title: 'Title 11', date: '2023-01-11', language: 'Python' },
    { title: 'Title 12', date: '2023-01-12', language: 'Java' },
    { title: 'Title 13', date: '2023-01-13', language: 'JavaScript' },
    { title: 'Title 14', date: '2023-01-14', language: 'C#' },
    { title: 'Title 15', date: '2023-01-15', language: 'Python' },
    { title: 'Title 16', date: '2023-01-16', language: 'Java' },
    { title: 'Title 17', date: '2023-01-17', language: 'JavaScript' },
    { title: 'Title 18', date: '2023-01-18', language: 'C#' },
  ];

  function chunkArray(array, size) {
    return array.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  }

  return (
    <>
    <div className='container-md'>
      <h1>My Cards</h1>
      {chunkArray(data, 3).map((row, rowIndex) => (
        <div key={rowIndex} className="row my-4">
          {row.map((item, colIndex) => (
            <div key={colIndex} className="col-md-4">
               <Card title={item.title} date={item.date} language={item.language} />
            </div>
          ))}
        </div>
      ))}
    </div>
    </>
  );
}

export default QAndA;
