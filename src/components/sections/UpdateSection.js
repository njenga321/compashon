import React from 'react'
import './UpdateSection.css'
import { PiQuotes } from 'react-icons/pi';
import { TiAttachment } from 'react-icons/ti';

function UpdateSection() {
       // Array 1: Diagonal info sections
  const diagonalInfo = [
    { img: "https://i.pinimg.com/564x/d4/e9/fe/d4e9fee988dc55ce6cc701390daf5a09.jpg",  date: "15", month: "Sep", year: "2024", gridSubtitle: "Food", gridTitle: "Feeding Children", gridDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est." },
    { img: "https://images.pexels.com/photos/11298935/pexels-photo-11298935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", date: "15", month: "Sep", year: "2024", gridSubtitle: "Food", gridTitle: "Feeding Children", gridDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est." },
    { img: "https://images.pexels.com/photos/28593054/pexels-photo-28593054/free-photo-of-young-african-students-in-classroom-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", date: "20", month: "Sep", year: "2024", gridSubtitle: "Education", gridTitle: "School Supplies", gridDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est." }
  ];

  // Array 2: Top-right and bottom-left cells
  const sideCells = [
    { img: "https://images.pexels.com/photos/28593053/pexels-photo-28593053/free-photo-of-young-boy-drinking-water-from-rusty-tap-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", gridSubtitle: "Water", gridTitle: "Clean Water Initiative" },
    { img: "https://images.pexels.com/photos/27852612/pexels-photo-27852612/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", gridSubtitle: "Shelter", gridTitle: "Housing for Homeless" }
  ];

  // Array 3: Center top and bottom cells
  const centerCells = [
    { backgroundImg: "https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFmcmljYW4lMjBzbWlsZXxlbnwwfHwwfHx8MA%3D%3D", gridTitle: "Helping one person might not change the whole world, but it could change the world for one person." },
    { backgroundImg: "https://plus.unsplash.com/premium_photo-1669550788590-859353c91996?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VucmlzZXxlbnwwfHwwfHx8MA%3D%3D", gridTitle: "www.brandveneer.com" }
  ];

  return (
    <section className="updates">
      <div className="container">
        <div className='row'>
          <div className="updates-grid">
          {/* 1st Column: DiagonalInfo, SideCell */}
          <div className="grid-column">
            <div className="grid-item diagonal-item">
              <div className='grid-image'>
                <img src={diagonalInfo[0].img} alt={diagonalInfo[0].gridTitle} className="diagonal-image" />
              </div>
                <div className='position-relative '>
                  <div className="diagonal-date-info">
                    <span className='diagonal-day'><strong>{diagonalInfo[0].date}</strong></span>
                    <span className='diagonal-month'>{diagonalInfo[0].month}</span>
                  </div>
                </div>
              <div className="diagonal-info">
                <p className="gridSubtitle program-title">{diagonalInfo[0].gridSubtitle}</p>
                <h3 className="gridTitle">{diagonalInfo[0].gridTitle}</h3>
                <p className="gridDescription">{diagonalInfo[0].gridDescription}</p>
              </div>
            </div>
            <div className="grid-item side-item" style={{ backgroundImage: `url(${sideCells[0].img})` }} aria-label={sideCells[0].gridTitle}>
              <div className="side-info">
                <p className="gridSubtitle program-title">{sideCells[0].gridSubtitle}</p>
                <h3 className="gridTitle"><strong>{sideCells[0].gridTitle}</strong></h3>
              </div>
            </div>
          </div>

          {/* 2nd Column: CenterCell, DiagonalInfo, CenterCell */}
          <div className="grid-column">
            <div className="grid-item center-item center-item-top" style={{ backgroundImage: `url(${centerCells[0].backgroundImg})` }}>
              <h3 className="gridTitle">{centerCells[0].gridTitle}</h3>
              <div className='center-quote-origin'>
                <p>NJENGA PETER</p>
                <span><PiQuotes /></span>
              </div>
            </div>
            <div className="grid-item diagonal-item">
              <div className='grid-image'>
                <img src={diagonalInfo[1].img} alt={diagonalInfo[1].gridTitle} className="diagonal-image" />
              </div>
                <div className='position-relative '>
                  <div className="diagonal-date-info">
                    <span className='diagonal-day'><strong>{diagonalInfo[1].date}</strong></span>
                    <span className='diagonal-month'>{diagonalInfo[1].month}</span>
                  </div>
                </div>
              <div className="diagonal-info">
                <p className="gridSubtitle program-title">{diagonalInfo[1].gridSubtitle}</p>
                <h3 className="gridTitle">{diagonalInfo[1].gridTitle}</h3>
                <p className="gridDescription">{diagonalInfo[1].gridDescription}</p>
              </div>
            </div>
            <div className="grid-item center-item center-item-bottom" style={{ backgroundImage: `url(${centerCells[1].backgroundImg})` }}>
              <h3 className="center-gridTitle">{centerCells[1].gridTitle}</h3>
                <span><TiAttachment size={30}/></span>
            </div>
          </div>

          {/* 3rd Column: SideCell, DiagonalInfo */}
          <div className="grid-column">
            <div className="grid-item side-item" style={{ backgroundImage: `url(${sideCells[1].img})` }} aria-label={sideCells[0].gridTitle}>
              <div className="side-info">
                <p className="gridSubtitle program-title">{sideCells[1].gridSubtitle}</p>
                <h3 className="gridTitle"><strong>{sideCells[1].gridTitle}</strong></h3>
              </div>
            </div>
            <div className="grid-item diagonal-item">
              <div className='grid-image'>
                <img src={diagonalInfo[2].img} alt={diagonalInfo[2].gridTitle} className="diagonal-image" />
              </div>
                <div className='position-relative '>
                  <div className="diagonal-date-info">
                    <span className='diagonal-day'><strong>{diagonalInfo[2].date}</strong></span>
                    <span className='diagonal-month'>{diagonalInfo[2].month}</span>
                  </div>
                </div>
              <div className="diagonal-info">
                <p className="gridSubtitle program-title">{diagonalInfo[2].gridSubtitle}</p>
                <h3 className="gridTitle">{diagonalInfo[2].gridTitle}</h3>
                <p className="gridDescription">{diagonalInfo[2].gridDescription}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateSection
