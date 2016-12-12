import React from 'react';
import { Accordion, Panel } from './reusables/accordion.jsx';

export default function Skills (props) {
  return (
    <Accordion>
      <Panel title="...you love to build is simple and clear design that works well and is visually minimalistic." score="10">
        <p>
          I prefer practical over pretty. Function and comfort are very sexy if you ask me--which is why I could never understand women's fashion (I'm looking at you pocketless jeans). I prefer to appeal to people who can agree with me because they will always be easier to please if you ask me. Bells and whistles make no sense if you have no idea how to do anything or nothing works. <a href='https://en.wikipedia.org/wiki/Steel_Battalion'>Take this for example</a>.
        </p>
      </Panel>
      <Panel title=" completely comfortable and confident with CSS, including the use of preprocessors such as Sass, Less, Stylus, or PostCSS." score="10">
        <p>
          I use either LESS or PostCSS for my projects (this is the latter, I personally didn't have the patience to bother with trying to get PostCSS to play nice with React's CSS injection). SASS is fundamentally different from LESS despite not seeming so, but they still are pretty similar and it's not hard at all to pick up one once you know the other. I've looked at stylus (just while writing this), and at first glance it seems Stylus is to CSS as Pug is to HTML--I could se myself trying it out.
        </p>
      </Panel>
      <Panel title="You're very at home with frontend Javascript..." score="10">
        <p>
          I'd think anybody would be hard pressed to find a javascript developer that <em>isn't</em> comfortable with the frontend. It would be like the opposite of being surprised to see your teacher anywhere but school--javascript was born and raised on the frontend; I believe that anybody who calls themself a javascript developer should at least know the basics of vanilla javascript.
          <br />
          I made this in React, so there's that. Simple, I know, but it's a nice start. And once I' done with this, I'll get to that React+Flux Udemy course like I've wanted to and really learn my stuff. I've never used a clientside MVC, but I work across the stack, so I'm sure I can understand how to make stuff happen without too much effort.
        </p>
      </Panel>
      <Panel title="You’re comfortable with backend JS and you've built something with Node.js." score='8'>
        <p>
          I'm not as good as I want to be just yet, but I can work in the backend almost equally as good as the front. I haven't mastered using fs methods, but I can use express or hapi to build an API with relative ease by now.
        </p>
      </Panel>
      <Panel title="You know Git and the command line well." score="8">
        <p>
          I know and appreciate the utility and importance of git. I'm getting better at actually using branches and the like effectively too. I use mainly GUI tools like the Brackets-Git extension, but since I basically was forced to switch to Atom for React based apps, I've decided to just use the command line--I know the git and bash commands and am growing more and more comfortable with CLI tools, but I'm admittedly still a more GUI guy when the option is available.
        </p>
      </Panel>
      <Panel title="You are always eager to learn how to write more secure code." score="10">
        <p>
          Again, if there's anybody who isn't 100% down for this, I'm confused. And again again, I LOVE my sanity very much-- <code>let eager = () => if (moreSecure === lessFixes) return true</code>
        </p>
      </Panel>
      <Panel title="You've worked in a web framework or two—like Rails, Node.js, Django." score="7">
        <p>
          I use Node.js; I've tried Ruby on Rails once, and Django is a flat out no, though it definitely does look worth giving a shot.
        </p>
      </Panel>
      <Panel title="Extra bonus: You don’t mind configuring servers and you’re familiar with Docker." score="6">
        <p>
          I have no problem configuring servers--whether you mean the software or hardware is irrelevant; I'm an IT Technician as well. As for Docker, the only familiarity I have with it is what it does and its logo--though that can change very quickly if needed.
        </p>
      </Panel>
    </Accordion>
  )
}
