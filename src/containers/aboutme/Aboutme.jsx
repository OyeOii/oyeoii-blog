import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutme.css';

const Aboutme = () => (
  <div className="oyeoii__aboutme section__margin" id="aboutme">
    <div className="oyeoii__aboutme-feature">
      <Feature title="Hi ! I'm Oye" text="__I'm a Freelancer, Self employed or whoever motivated myself for flexible working!. My desires are improving professional skills, creative thinking and design with investigative approach to solve problems. I have been working in so many feild and adaptable to the world's changes technologies. I work great independent or as a part of teams by consistently management and going beyond client's expectation.__" />
    </div>

    <div className="oyeoii__aboutme-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p> >>> Explore more work with me</p>
    </div>

    <div className="oyeoii__aboutme-container">
      <Feature title="Coding Self Taught" text="'Keep a low profile' it's how come I decided to quit my fulltime job and learning myself to code and being more independent job movement." />
      <Feature title="Knowledgebase" text="I have no any CS degrees but since I felt freedom management of being 'Remote worker' and 'Digital nomad'. I beginned with Figma, Ae, Ai, Blender and finally Coding was attracted me." />
      <Feature title="Designing inspiration" text="Starting from creating website via simple platform and finally I was eager to learn more for the extra mile that motivate me to practice coding and I love designing website." />
    </div>

  </div>
);

export default Aboutme;