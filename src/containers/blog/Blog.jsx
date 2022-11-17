import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="oyeoii__blog section__padding" id="blog">

    <div className="oyeoii__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> I am blogging about it.</h1>
    </div>

    <div className="oyeoii__blog-container">

      {/* Big Story */}
      <div className="oyeoii__blog-container_groupA">

        <Article imgUrl={blog01} date="Sep 26, 2021" text="From Thaimand, I moved to live in Malta 5 years. 
        It's been a lot time with a tiny island. Exploring every single street and absorb amazing and incredible Maltese culture. 
        A lot of people from my country is extremly interested in this city. 
        I mostly wrote about it in each interesting topics for Thai people. 
        If there are any of you would like to know more about malta, I will write them soon!
        _____________________⎢🇲🇹 บทความนี่ได้บอกเล่าเรื่องราวต่างๆเกี่ยวกับมอลต้า สำหรับบุคคลที่สนใจในประเทศเล็กๆ แต่เต็มไปด้วยอารยธรรมเก่าแก่ตั้งแต่ยุคสมัยสงครามโลก 
        ที่ยังมีให้เห็นถึงเรื่องราวจวบจนปัจจุบัน ใครสนใจข้อมูลของมอลต้า สามารถติดตามได้ที่บล็อกนี้ ☻" />
        
      </div>

      {/* small blogs */}
      <div className="oyeoii__blog-container_groupB">

        <Article imgUrl={blog02} date="Jun 24, 2021" text="Since I lived in Malta, It's let me have a chance to traveling in Europe. 
        The most favorite of my destination is Spain! I love beaches, Sunny and Fresh atmosphere! 
        You will never disappointed after visiting the southern of Spain!! " />

        <Article imgUrl={blog03} date="May 17, 2021" text="2 weeks by road trip around Turkey. I was traveling there with my best friend before I arrived Malta. 
        During the trip we had a lot of amazing and beautiful stories. I can't wait to have that moment again." />

        <Article imgUrl={blog04} date="Sep 17, 2021" text="As someone understand thst this place is extremly hot like a desert, you might be wrong!
        It's super fantastic place and incredible beaches with the little mountain where full of white sand. 
        Long beaches from Cadiz will make you never forget to spent your next time in summer." />

        <Article imgUrl={blog05} date="Sep 07, 2019" text="Alone trip in Italy. Someone might not know that was complicated for a little girl like me will be in this romatic place alone.
        LOL I did that though! It's been a bit dangerous for an asian girl. I had a lot moment that you might not believe it!!" />

      </div>

    </div>

  </div>
);

export default Blog;