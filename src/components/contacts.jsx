import React from 'react';

export default function Contacts (props) {
  return (
    <section className='page-section page-section--pink'>
      <div className='wrapper'>
        <a name='contacts' />
        <h1 className='section-title'>Contacts</h1>
        <p>
          In my communication arsenal, I have a Twitter, a GitHub account, a cell phone and an email address. I'll just leave those here in both icons and a regular list. Aaaaannnnd... that's pretty much it for here.
        </p>
          <div className='my-contacts section group'>
            <ul className='col span_2_of_3'>
              <li>Twitter: <a href='https://twitter.com/doubleAM2'>@doubleAM</a></li>
              <li>Github:  <a href='https://github.com/amci1203'>amci203</a></li>
              <li>Email:   <a href='mailto:me@allen-mcintoshii.com'>me@allen-mcintoshii.com</a></li>
              <li>Phone:   <a href='tel:12424413229'>1 (242) 441-3229</a></li>
            </ul>
            <div className='col span_1_of_3'>
              <div className='social-icons text-center-force'>
                <a href='https://twitter.com/doubleAM2' target='_blank' className='social-icons__icon'>
                  <img src='img/twitter.svg' className='twitter icon' />
                </a>
                <a href='https://github.com/amci1203' target='_blank' className='social-icons__icon'>
                  <img src='img/github.svg' className='github icon' />
                </a>
                <a href='mailto:me@allen-mcintoshii.com' target='_blank' className='social-icons__icon'>
                  <img src='img/mail.svg' className='icon mail' />
                </a>
                <a href='tel:12424413229' target='_blank' className='social-icons__icon'>
                  <img src='img/phone.svg' className='phone icon' />
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
