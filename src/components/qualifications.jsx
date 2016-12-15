import React from 'react';
import { Accordion, Panel } from './reusables/accordion.jsx';

export default function Qualifications (props) {
  return (
    <Accordion>
      <Panel title="You're a leader--first of yourself" score='10' >
        <p>
          I dislike repeatedly being told what to do; the easiest way to avoid that is to simply do it and keep your superiors happy. Having a task being halted by somebody else's action (or inactions) or some other force is annoying, and have no problem using my resourcefulness to dig myself out of whatever hole I may find myself in. I have always been and wish to remain low maintenance.
        </p>
      </Panel>
      <Panel title="You're willing to ask questions, look dumb, be wrong, take risks, and fail." score="7" >
        <p>
          I try to avoid the 'looking dumb' and failing parts by doing whatever I can to avoid being wrong, which includes asking questions, doing my research, and shutting up when I'm not sure. But it does happen, and I take my lesson like a man when it does. I still don't like it, but I've been becoming  more okay with being wrong and taking risks as I age.
        </p>
      </Panel>
      <Panel title="You take way more of your share of blame and give way more than your share of credit." score="10">
        <p>
           I give credit where's credit due; I take no L's for anybody, and I don't expect anybody to take any L's for me. It's that simple.
        </p>
      </Panel>
      <Panel title="You're not an Awesome Rock Star Ninja Superstar." score="10">
        <p>
          I think this one goes without saying XD.
        </p>
      </Panel>
      <Panel title="You write well and know how to communicate your thoughts in written form." score="8">
        <p>
          I can write and speak well. Concerning getting my thoughts across in a clear, concise matter, I guess I'm better at writing because there's no backspace key when I speak.
        </p>
      </Panel>
      <Panel title="You’re very comfortable working in an environment where most of the engagement takes place in chat" score="9">
        <p>I have no problem with this at all. I'm used to it by now.</p>
      </Panel>
      <Panel title="You're a good communicator and play well with others..." score="7">
        <p>
          I believe in being clear and addressing issues as they pop up; regardless of which end of the stick I may find myself on. I see no benefit in having enemies and holding grudges, no matter how small. As I've told my girlfriend, "<em>Worry less</em> about problems; <em>think more</em> about solutions".
        </p>
      </Panel>
      <Panel title="You're opinionated and you know how to state your position..." score="6">
        <p>
          The more I like a person, the harder it becomes for me to maintain an objective standpoint with them. I also have a hard time humoring people when they are factually flat out wrong. With those two caveats out of the way, I am good at keeping that objective standpoint and defending my point in a calm, clear way, with quiet tenacity but without dogmatic supremacy.
        </p>
      </Panel>
      <Panel title="You accept criticism of your work and take it well." score="10">
        <p>
          Feelings are not for the workplace unless you're dealing with people. If I'm being paid to help make a product, the product goes above what I may feel about the effort I put into it. Sure, it may suck to hear anything not so pleasant be said about my code, but hey, at this age, I've had alot of not so pleasant stuff said to me and I'm still ticking loud and proud (refer to section two items up). If it helps me and the product, screw the part of it I don't like and focus on the positives.
        </p>
      </Panel>
      <Panel title="You're a great student and teacher. You don't ever want to 'arrive'--you just want to keep growing." score="7">
        <p>
          I always told myself I'll never be a teacher. But surprise, I was a math tutor in university, so I know there's some ability in that department. I'm 21--I've been a student for most my life--I got that one down. Arriving is literally the least important part of any journey. Cliche', but I mean it with every ounce of my being. When you enjoy what you're doing, the destination becomes not so spectacular--it's true for software development and life and general, but especially software development. Even if you do ever arrive (which you never will in this field), you're usually ready to take off somewhere else when you grow accustomed to travel over destinations.
        </p>
      </Panel>
      <Panel title="You love finding ways to make things better—your work, others' work, and your collaboration together." score="10">
        <p>
          I think I'm allergic to seeing people work hard when they don't have to. Like when I first saw my aunt keeping all the paper receipts from her restaurant when she had a cloud based POS already (Even worse, she made me and her employees sort through at least 4 months worth of them). I believe everything and everyone can be improved and that we should at least try to improve what we can on our own, and seek help for the things that we can't do alone. There's only "good enough <em>for now</em>" with me.
        </p>
      </Panel>
      <Panel title="You prefer simplicity over complexity, writing clear and accessible code over being clever." score="10">
        <p>
          This is perhaps one of the weirdest anti patterns I've heard of in this field. Isn't code difficult enough to understand sometimes even when it's relatively simple? Don't worry, I LOVE my sanity very much.
        </p>
      </Panel>
      <Panel title="You believe in refactoring as a constant process" score="7">
        <p>
          With javascript these days, when you think you've done something the best way possible, some framework/library/update claiming to make x easier pops up, so constant refactoring is a given especially in this language. Also, it always helps to look at old code with fresh eyes and see how things can be made better--heck, it could even spark ideas for more current projects, you never know. Despite all that though, I've only touched my own code in any significant fashion. I'm slightly terrified and currently lack the balls to dare 'insult' somebody else by touching their 'precious' code, implying I know better than them, with my honestly quite short track record.
        </p>
      </Panel>
      <Panel title="Reading this list makes your heart pound at least a little bit." score="10">
        <p>
          I think this very SPA is a powerful testament as to how underqualified I feel. I don't feel like a <a href='http://english.stackexchange.com/questions/141222/shoo-in-vs-shoe-in-and-etymology'>shoo-in</a> Even when I should, so you can imagine now. But as aforementioned, the idea struck me when I read the posting, and decided to not route the idea to my higher level thinking and just went with my gut--wide eyed and without a clue as to how I'll actually do it. I don't mind though, being lost is the best way to learn because it forces you to. I will admit, I tried because I liked the tone of the posting, and it gave me the feel that you guys were worth at least trying, because you seem like cool people to be associated with. I've seen a few of your tweets since following &yet, and they only reinforce my beliefs about you all. With all that said, reading this list didn't make my heart pound a little; but alot, for several reasons.
        </p>
      </Panel>
    </Accordion>
  )
}
