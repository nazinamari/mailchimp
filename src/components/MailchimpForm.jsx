import React, { useState } from 'react';
import css from './MailchimpForm.module.css';

export default function MailchimpForm() {
  const [email, setEmail] = useState('');

  return (
    <div className={css.mc_container}>
      <h2>Subscribe to Athlone Community Radio&apos;s Sports Hub Newsletter</h2>
      <p>
        <span className={css.required}>*</span> indicates required
      </p>

      <form
        action="https://athlonecommunityradio.us14.list-manage.com/subscribe/post?u=dbeac206ccb85ebcfb4520559&id=389ed72083&f_id=00e8a2e5f0"
        method="post"
        target="_blank"
        noValidate
      >
        <label htmlFor="mce-EMAIL">Email Address *</label>
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css.mc_input}
        />

        <input type="hidden" name="tags" value="40305517" />

        <div className={css.mc_hidden_field} aria-hidden="true">
          <input
            type="text"
            name="b_dbeac206ccb85ebcfb4520559_389ed72083"
            tabIndex="-1"
          />
        </div>

        <button type="submit" className={css.mc_button}>
          Subscribe
        </button>

        <p className={css.mc_badge}>
          <a
            href="http://eepurl.com/iWM88Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
              alt="Intuit Mailchimp"
            />
          </a>
        </p>
      </form>
    </div>
  );
}
