import React from 'react';
import './EventSection.css';
import SlideMotion from '../animations/SlideMotion';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { GoClockFill } from 'react-icons/go';

// Array of event details
const events = [
  {
    title: 'Community Food Drive in Samburu',
    date: '26 May 2025',
    time: '9:30 AM — 11:30 AM',
    location: 'Kenya, Africa',
    image: 'https://i.pinimg.com/564x/77/25/69/77256978e02f2603b790b4d8fc400bea.jpg',
    link: '/event/1'
  },
  {
    title: 'Health Awareness Campaign',
    date: '15 June 2025',
    time: '10:00 AM — 1:00 PM',
    location: 'Nigeria, Africa',
    image: 'https://i.pinimg.com/564x/ed/0e/33/ed0e3315956ada7ee084488e7889e52b.jpg',
    link: '/event/2'
  },
  {
    title: 'Children’s Health Checkup & Awareness',
    date: '04 Feb 2026',
    time: '11:00 AM — 5:00 PM',
    location: 'Libya, Africa',
    image: 'https://i.pinimg.com/564x/d6/54/49/d654491917a8ef5733318227b28971dd.jpg',
    link: '/event/2'
  }
];

function EventSection() {
  return (
    <section className='event-section'>
      <div className='container'>
        <SlideMotion delay={0.3} direction='right'>
          <div className="section-title">
            <span className='subtitle'>Spread a Smile</span>
            <h2 className='title-h2'>Our Upcoming Events</h2>
          </div>
        </SlideMotion>
        <div className='row'>
          {events.map((event, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="event-box">
                <div className="event-image">
                  <img 
                  loading="lazy" 
                  decoding="async"
                  src={event.image} 
                  alt={event.title} 
                  className="img-fluid" />
                </div>
                <Link to={event.link}>
                  <div className="p-3 d-flex">
                    <div className="event-date p-3 text-center rounded mr-4">
                      <span className="text-white h3 m-0 d-block">{event.date.split(' ')[0]}</span>
                      <span className="text-white small">{event.date.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className='px-3'>
                      <div className="event-details">
                        <div className="event-item">
                          <MdLocationOn className="icon" />
                          <span>{event.location}</span>
                        </div>
                        <div className="event-item">
                          <GoClockFill className="icon" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <h3>{event.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventSection;
