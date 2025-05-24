'use client'
import Link from 'next/link'
import CraftSection from '../../components/CraftSection'
import ContactForm from '../../components/ContactForm'

export default function Main() {
  return (
    <>
      <br />

      <p className='welcome-message'>
        Welcome! I&apos;m glad that you&apos;re here.
        Please check out some crafts that I have made.
        If you&apos;re interested, please fill out the form
        at the bottom of the page. You can send me
        a request for a craft, or even just send me
        a message. Thanks for being here!
      </p>

      <br />

      <CraftSection showOnlyFeatured={true} />

      <br />

      <div className="button-container">
        <Link className='gallery-button' href="/gallery">Click to See More Crafts</Link>
      </div>

      <br />

      <ContactForm />
    </>
  );
}