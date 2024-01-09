import React from 'react';
import './QandaBlackStyle.css';

const QandaBlack = () => {

    /*
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
    
      const chunkedData = chunkArray(data, 3);
      */

  return (
    <>
    <div classNameName="ag-format-container">
        <div className="ag-courses_box">

            <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">
                    UI/Web&amp;Graph design for teenagers 11-17&#160;years old
                    </div>

                    <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                        04.11.2022
                    </span>
                    </div>
                </a>
            </div>

            <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">
                    UX/UI Web-Design&#160;+ Mobile Design
                    </div>

                    <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                        04.11.2022
                    </span>
                    </div>
                </a>
            </div>

            <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                Annual package "Product+UX/UI+Graph designer&#160;2022"
                </div>

                <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">
                    04.11.2022
                </span>
                </div>
            </a>
            </div>

            <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                Graphic Design
                </div>

                <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">
                    04.11.2022
                </span>
                </div>
            </a>
            </div>

            <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                Motion Design
                </div>

                <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">
                    30.11.2022
                </span>
                </div>
            </a>
            </div>

            <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                Front-end development&#160;+ jQuery&#160;+ CMS
                </div>
            </a>
            </div>

            <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg">
                </div>
                <div className="ag-courses-item_title">
                Digital Marketing
                </div>
            </a>
            </div>

            <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                Interior Design
                </div>

                <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">
                    31.10.2022
                </span>
                </div>
            </a>
            </div>

        </div>
    </div>
    </>
  );
};

export default QandaBlack;
