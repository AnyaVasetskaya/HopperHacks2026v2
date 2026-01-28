import React from 'react';
import './Pages.css';
import { useState } from 'react';
import { FaBolt } from 'react-icons/fa';

const faqData = {
  general: [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a day-long event where attendees can compete for prize categories, attend workshops, and participate in fun activities and games. Competing is completely optional! You can also choose which workshops/activities you want or don't want to attend based on your interests."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Short answer: Nope! Long answer: HopperHacks is a beginner-friendly hackathon, so please do not feel as if you need to have any coding experience to participate. If you do not know how to code but want to learn and have fun, we have workshops and activities throughout the event for you to attend. We know that hackathons can be intimidating for many first-time hackers, and so we want this to be a learning and fun experience for you to become more comfortable with working with others, developing new skills, and letting your creativity shine under a time constraint. Mentors will also be available to assist participants in-person on Saturday and virtually on Discord throughout the hacking period (12:00 PM Saturday to 12:00 PM Sunday)."
    },
    {
      question: "What about perks for the hackers?",
      answer: "Come to our Bootcamp Week and day-of workshops to learn with fellow students! Receive swag such as T-shirts, stickers, and more! Visit the photobooth and take pictures with your team and other participants! Food and drink will be provided, so come have a magical weekend with us to have fun and be the best hacker you can be. Mini games will be held throughout the hacking period."
    },
    {
      question: "What is HopperHacks Bootcamp Week?",
      answer: "To help students prepare for HopperHacks, we invite WiCS alumni, on-campus organizations, and other industry professionals to host a variety of workshops the week leading up to HopperHacks."
    },
    {
      question: "What's the cost?",
      answer: "F-R-E-E! There are no upfront costs for HopperHacks, with the exception of travel or housing costs, which we do not reimburse."
    },
    {
      question: "When is HopperHacks?",
      answer: "HopperHacks 2026 will begin Saturday, February 21st at 11:00 AM and end on Sunday, February 22nd at 8:00 PM!"
    },
    {
      question: "Where is HopperHacks?",
      answer: "HopperHacks is happening in person in SAC Ballroom A this year, on Saturday from 11:00 AM to 10:00 PM, and on Sunday from 12:00 to 8:00 PM! We do not have an overnight venue, and participants will continue hacking remotely overnight."
    },
    {
      question: "I have more questions!",
      answer: "If you have anything you want us to know prior to the event, please feel free to email us at wics@cs.stonybrook.edu. If you have any questions or concerns during the event, you can always chat with us in person or in the Discord channel, and we will do our best to help you!"
    },
  ],
  registration: [
    {
      question: "Who can attend?",
      answer: "We welcome all undergraduate and graduate students, regardless of gender, major and school! Open to programmers and designers of all skill levels. Coding experience is not required."
    },
    {
      question: "When is the deadline to register?",
      answer: "The registration deadline is Friday, February 20th, at 11:59 PM EST."
    },
    {
      question: "Do I need to create a Devpost Account?",
      answer: "Yes. You will be expected to submit a project on the Devpost platform which means you are required to create an account."
    },
    {
      question: "Do I have to submit a project to attend?",
      answer: "Nope! You are free to attend any of our workshops and events without submitting a project."
    },
    {
      question: "How can I be a mentor?",
      answer: "You can apply to be a mentor here! Please understand that we will not be able to accept everyone to be a mentor!"
    },
  ],
  tracks: [
    {
      question: "What are the tracks?",
      answer: "We will have several tracks for you to hack in, which are up on our Devpost! Each track has its own judging criteria and style. The winners of each track will receive a prize!"
    },
    {
      question: "How will prizes work?",
      answer: "You can submit a project to up to 3 tracks—one main track and two mini tracks! Each project can win up to one track total."
    },
    {
      question: "Do I have to enter a track?",
      answer: "Yes, if you wish to compete in a track. A project can be entered for up to 3 tracks!"
    },
    {
      question: "How can I enter the Best Beginner Hack?",
      answer: "A team must be at least 50% beginner hackers (first-time hackathon participants)."
    },
  ],
  logistics: [
    {
      question: "How will teams work?",
      answer: "We typically recommend a team of 3 to 4 people. You are free to choose your teammates either prior to or during the day of the event. You are also free to work on your own. If you are looking for a team, we will have a Discord channel for you to reach out to other participants and form teams."
    },
    {
      question: "How do I come up with an idea for a project?",
      answer: "Think about what changes you want to bring to the world. Think of any issues that you or anyone else have faced that you want to resolve. Then, you can start brainstorming ways to build a solution using the resources available."
    },
    {
      question: "Can I submit a project from another hackathon?",
      answer: "No cross-submitting is permitted. If a project is cross-submitted, then the project will not be considered for judging."
    },
    {
      question: "How will judging work?",
      answer: "Judging is in person this year, in SAC Ballroom A, from 1:00 PM to 5:00 PM on Sunday, February 22nd. Participants will be assigned to tables and present to judges as they come around."
    },
    {
      question: "Are there any travel reimbursements or overnight accommodations?",
      answer: "While HopperHacks is an overnight event, we do not provide an overnight space nor do we reimburse travel/housing. Be sure to make arrangements beforehand if you would like to stay on campus for the entire hackathon."
    },
    {
      question: "Where is HopperHacks?",
      answer: "HopperHacks will take place in SAC! The main hacking space on Saturday and the judging and awards on Sunday will all take place in person in Ballroom A. There will also be various bootcamp events on the third floor of the building!"
    },
  ],
};


const FAQ = () => {

  const [expandedIndex, setExpandedIndex] = useState({ category: null, index: null });

  const toggleAnswer = (category, index) => {
    setExpandedIndex(
      expandedIndex.category === category && expandedIndex.index === index
        ? { category: null, index: null }
        : { category, index }
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p className='section-title'>~FAQ~</p>
      {Object.keys(faqData).map((category) => (
        <div key={category}>
          <h3 className='section-sub-title'>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          <ul style={{ padding: '0 20px' }}>
            {faqData[category].map((faq, index) => (
              <li style={{ listStyleType: 'none', marginBottom: '15px' }} key={index}>
                <div
                  className="faq-box"
                  onClick={() => toggleAnswer(category, index)}
                  style={{
                    cursor: 'pointer',
                    border: '2px solid #fba275',
                    borderRadius: '15px',
                    padding: '15px 20px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '15px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#fba275',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FaBolt style={{ fontSize: '20px', color: '#51170b' }} />
                    </div>
                    <strong className='section-text' style={{ textAlign: 'left' }}>
                      {faq.question}
                    </strong>
                  </div>
                  <div style={{
                    fontSize: '20px',
                    transform: expandedIndex.category === category && expandedIndex.index === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }}>
                    ▼
                  </div>
                </div>
                {expandedIndex.category === category && expandedIndex.index === index && (
                  <p
                    style={{
                      padding: '20px',
                      backgroundColor: '#fba275',
                      borderRadius: '15px',
                      marginTop: '10px',
                    }}
                    className='section-tiny-text'
                  >
                    {faq.answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FAQ;