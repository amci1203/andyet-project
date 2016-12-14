import React from 'react';

export default class About extends React.Component {
  constructor () {
    super();
  }

  render (props) {
    return (
      <section id='about'>
        <div className='page-section wrapper'>
          <a name='about' />
          <h1 className='section-title'>About Me</h1>
          <p>
          It's on the email and the email's subject, and it's up on the top left in big writing (which, by the way, points to my website). However, at this point in human history, I think it would be rather rude to not start an 'About Me' without my name.
          </p>
          <p>
          My full name is Allen Alexander McIntosh II. I was born and raised in The Bahamas on the capital island of New Providence (known to everyone as Nassau). I enjoy playing video games, a nice game or ten of basketball, and I love dearly and dislike objectively. I started taking programming seriously only a year ago now. Before then, I learnt HTML & CSS and tried a dash of Javascript, but I didn't really try to do anything. I also learnt Java in school too, but wasn't interested in doing anything that wasn't my homework. It was only after I decided to leave school (and by extension my girlfriend's physical company) and went back home that I decided to really buckle down and put my game face on--my, how time flies. I have a hard time believing it's only been that long when I think about all the stuff I've learnt in that time.
          </p>
          <p>
          I've learnt frameworks such as Express, a bit of Hapi, Angular, and adding React to this list bit by bit as I create this very special application form.  I've learnt of and have integrated into my workflow various productivity tools such as Gulp, Webpack, Babel, and BrowserSync. I guess it's very clear that Javascript has been my focus for most of this year; with the many different frameworks and tools it has to offer, it's been pretty hard to move my attention to anything else--I have looked at and used PHP, MySQL, some Python, and even some Ruby on Rails--I just haven't delved nearly as deep into them.
          </p>
          <p>Anyways, enough extra information, let's get to that checklist you asked for!</p>
        </div>
      </section>
    );
  }
}
