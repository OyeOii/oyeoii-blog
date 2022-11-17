import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Become a Remote Worker',
    text: 'There are a different type of people who comfortable working in their life. I prefer working and living my life as balance. "Remote Working" is answering me. What about you?',
  },
  {
    title: 'Malta Life (ภาษาไทย)',
    text: 'Since I moved to Malta, There were a lot of Thai people asking me about What or Where is Malta? Lol. This Blog I will definately write in Thai. >> เกี่ยวกับมอลต้า << ',
  },
  {
    title: 'How to Travel with Pets',
    text: 'I love traveling and I am a cat lover. I brought my first cat together everywhere I was out. Behamas is the calmest cat that I have ever seen and he loves to be with me. I think I found true love.',
  },
  {
    title: 'Tasting Local Food',
    text: 'Discover new local food with me. A part of multiculture has learning from Eating. There are creative, diferent and connected recipes worldwide at a time. list one of my discovering tastfulness for your traveling ideas!!' ,
  },
];

const Features = () => (
  <div className="oyeoii__features section__padding" id="features">

    <div className="oyeoii__features-heading">
      <h1 className="gradient__text">Popular Topics</h1>
      <p>Quick Guides >>> </p>
    </div>

    <div className="oyeoii__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    
  </div>
);

export default Features;