'use client';

import { useState } from 'react';

const channels = [
  { name: 'LUXE ONE', category: 'Entertainment', mark: 'L1', color: 'violet', show: 'The Art of Living', time: 'NOW · 8:30 PM' },
  { name: 'NORTHSTAR', category: 'Documentary', mark: 'N', color: 'blue', show: 'Wild Frontiers', time: 'NOW · 8:00 PM' },
  { name: 'GOLDEN HOUR', category: 'Movies', mark: 'GH', color: 'amber', show: 'Cinema After Dark', time: 'NOW · 9:00 PM' },
  { name: 'WORLDLINE', category: 'News', mark: 'W', color: 'green', show: 'The World Tonight', time: 'NOW · 8:45 PM' },
];

const films = [
  { title: 'A Quiet Horizon', genre: 'DRAMA · 2025', style: 'horizon', label: 'A story beyond the shore' },
  { title: 'Velvet Hours', genre: 'THRILLER · 2024', style: 'velvet', label: 'Every secret has a price' },
  { title: 'The Last Orchard', genre: 'ADVENTURE · 2025', style: 'orchard', label: 'Find your way home' },
  { title: 'Blue Meridian', genre: 'SCI-FI · 2024', style: 'meridian', label: 'The edge of everything' },
];

const plans = [
  { name: 'Monthly', duration: '1 month', detail: 'A little luxury, month to month.', note: 'Billed monthly' },
  { name: 'Quarterly', duration: '3 months', detail: 'More time for every good story.', note: 'Billed every 3 months', featured: true },
  { name: 'Semi-Annual', duration: '6 months', detail: 'Settle in for the long watch.', note: 'Billed every 6 months' },
  { name: 'Annual', duration: '12 months', detail: 'A full year of entertainment.', note: 'Billed annually' },
];

const categories = ['All', 'Entertainment', 'Documentary', 'Movies', 'News'];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const filteredChannels = activeCategory === 'All' ? channels : channels.filter((channel) => channel.category === activeCategory);

  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> A new way to experience entertainment <a href="#experience">Discover the StreamLux experience <Arrow /></a></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="StreamLux home"><span className="brand-mark">S<span>✦</span></span><span className="brand-word">STREAM<span>LUX</span></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#experience">Explore</a><a href="#live">Live TV</a><a href="#library">Movies & Series</a><a href="#pricing">Membership</a><a href="#devices">Devices</a>
        </nav>
        <div className="nav-actions"><a className="login-link" href="#support">Sign in</a><a className="button button-small" href="#pricing">Join StreamLux <Arrow diagonal /></a></div>
      </header>

      <section className="hero" id="home">
        <div className="hero-backdrop" aria-hidden="true"><div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-arch" /><div className="hero-sheen" /></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> THE ART OF ENTERTAINMENT</div>
          <h1>Premium entertainment.<br /><span>One StreamLux</span> experience.</h1>
          <p>Discover live television, compelling movies, and unforgettable series in one considered destination.</p>
          <div className="hero-actions"><a className="button" href="#pricing">Explore membership <Arrow /></a><a className="text-link" href="#experience"><span className="play-icon">▷</span> Discover StreamLux</a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>A</span><span>+</span></div><div><strong>Entertainment, elevated.</strong><small>One destination. A world of stories.</small></div></div>
        </div>
        <div className="hero-caption"><span>01 / THE STREAMLUX EXPERIENCE</span><span>CURATED FOR YOUR EVENINGS</span></div>
        <a href="#experience" className="scroll-cue" aria-label="Scroll to explore">↓</a>
      </section>

      <section className="intro section-pad" id="experience">
        <div className="section-kicker">A MORE CONSIDERED WAY TO WATCH</div>
        <div className="intro-row"><h2>All the stories<br />you came for. <i>And more.</i></h2><p>From the live moments that bring us together to the films that stay with us, StreamLux makes finding your next favorite feel effortless.</p></div>
        <div className="value-grid">
          <article className="value-card"><span className="value-number">01</span><div className="line-icon">◉</div><h3>Live, in the moment</h3><p>Find your place in the conversation with a considered selection of live programming.</p><a href="#live" className="card-link">Explore live TV <Arrow /></a></article>
          <article className="value-card"><span className="value-number">02</span><div className="line-icon">✧</div><h3>Stories worth staying in for</h3><p>A handpicked library of films and series, ready when you are.</p><a href="#library" className="card-link">Browse the library <Arrow /></a></article>
          <article className="value-card"><span className="value-number">03</span><div className="line-icon">⌘</div><h3>Your screen, your way</h3><p>Enjoy a seamless viewing experience across supported screens and devices.</p><a href="#devices" className="card-link">Find your device <Arrow /></a></article>
        </div>
      </section>

      <section className="live-section section-pad" id="live">
        <div className="section-heading"><div><div className="section-kicker">A WORLD, LIVE</div><h2>Right now on <i>StreamLux.</i></h2></div><a className="text-link gold-link" href="#support">Explore live programming <Arrow /></a></div>
        <div className="live-layout">
          <div className="live-feature"><div className="live-art"><div className="live-art-glow" /><div className="live-art-copy"><span className="live-pill"><span /> LIVE PREVIEW</span><span className="live-art-kicker">STREAMLUX ORIGINAL</span><h3>Beyond<br />the ordinary.</h3><span className="live-art-sub">A world of stories, unfolding now.</span></div><span className="live-art-index">S / L</span></div><div className="live-feature-caption"><div><strong>Discover live programming</strong><span>Explore a preview of the StreamLux experience</span></div><a href="#support" className="circle-arrow" aria-label="Explore live programming"><Arrow diagonal /></a></div></div>
          <div className="channel-panel"><div className="channel-panel-head"><div><span className="section-kicker">ON THE GUIDE</span><h3>Selected channels</h3></div><span className="guide-time">TONIGHT</span></div><div className="category-tabs" role="group" aria-label="Filter channels">{categories.map((category) => <button key={category} className={activeCategory === category ? 'category-tab active' : 'category-tab'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div className="channel-list">{filteredChannels.map((channel) => <article className="channel-row" key={channel.name}><div className={`channel-logo ${channel.color}`}>{channel.mark}</div><div className="channel-info"><div className="channel-name">{channel.name}<span className="on-air">PREVIEW</span></div><div className="channel-show">{channel.show}</div><div className="program-track"><span /></div></div><div className="channel-time">{channel.time}<small>UP NEXT · 9:30 PM</small></div><button className="channel-play" aria-label={`Preview ${channel.name}`} title="Channel previews are not connected yet">▷</button></article>)}</div><p className="demo-note">Illustrative preview. Channel availability depends on licensed programming and your region.</p></div>
        </div>
      </section>

      <section className="library-section section-pad" id="library">
        <div className="section-heading"><div><div className="section-kicker">THE EVENING, YOURS</div><h2>Stories with <i>staying power.</i></h2></div><a className="text-link" href="#support">Explore the collection <Arrow /></a></div>
        <div className="library-intro"><span>01 — A FIRST LOOK</span><p>A preview of the kind of worlds waiting to be discovered.</p><span>CURATED, NOT CROWDED</span></div>
        <div className="film-grid">{films.map((film, index) => <article className="film-card" key={film.title}><div className={`poster poster-${film.style}`}><div className="poster-grain" /><span className="poster-stamp">S<span>✦</span>L</span><span className="poster-index">0{index + 1}</span><div className="poster-copy"><span>{film.genre}</span><h3>{film.title}</h3><p>{film.label}</p></div><span className="poster-play">▷</span></div><div className="film-meta"><span>STREAMLUX COLLECTION</span><span>DETAILS ↗</span></div></article>)}</div>
        <p className="demo-note library-note">Artwork and titles are illustrative placeholders, not available titles or a claim of distribution rights.</p>
      </section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>Good stories make<br />the world feel <i>closer.</i></blockquote><div className="quote-rule" /><p>Entertainment without limits.<br /><span>One StreamLux experience.</span></p><div className="quote-decoration" aria-hidden="true">S</div></section>

      <section className="devices-section section-pad" id="devices"><div className="devices-copy"><div className="section-kicker">MADE FOR YOUR MOMENTS</div><h2>Settle in.<br /><i>Wherever you are.</i></h2><p>Enjoy StreamLux on supported web browsers, phones, tablets, and TV devices. Availability varies by platform and region.</p><a className="text-link gold-link" href="#support">Explore device support <Arrow /></a></div><div className="device-art" aria-label="Illustration of supported device screens"><div className="device-glow" /><div className="device-tv"><div className="device-screen"><span className="device-screen-logo">S<span>✦</span>L</span><span className="device-screen-title">Your next<br /><i>great story.</i></span><span className="device-screen-button">EXPLORE</span></div><span className="tv-stand" /></div><div className="device-tablet"><div className="tablet-screen"><span>STREAMLUX</span><b>THE ART OF<br />ENTERTAINMENT</b></div></div><div className="device-phone"><div className="phone-screen"><span>S✦L</span><i>◉</i><b>Watch your way.</b></div></div><div className="device-label label-tv">SMART TV <span>01</span></div><div className="device-label label-mobile">MOBILE & TABLET <span>02</span></div></div></section>

      <section className="pricing-section section-pad" id="pricing"><div className="pricing-top"><div><div className="section-kicker">A MEMBERSHIP THAT FITS</div><h2>Choose your <i>StreamLux.</i></h2><p>Four simple durations. One elevated experience.</p></div><span className="currency-note">PRICING SHOWN IN USD<br />FINAL PRICE SET AT CHECKOUT</span></div><div className="pricing-grid">{plans.map((plan, index) => <article className={`plan-card ${plan.featured ? 'plan-featured' : ''}`} key={plan.name}>{plan.featured && <div className="plan-badge">A LITTLE MORE TIME</div>}<div className="plan-topline"><span>0{index + 1} / MEMBERSHIP</span><span>✦</span></div><h3>{plan.name}</h3><div className="plan-duration">{plan.duration}</div><p>{plan.detail}</p><div className="plan-price">Price configured at checkout<span>USD · {plan.note.toLowerCase()}</span></div><div className="plan-rule" /><ul><li><span>✓</span> Live programming access</li><li><span>✓</span> Movies & series library</li><li><span>✓</span> Supported device access</li></ul><a href="#support" className={plan.featured ? 'button plan-button' : 'button button-outline plan-button'}>Continue with {plan.name} <Arrow /></a><small className="plan-terms">One-time billing unless renewal terms are shown at checkout. Taxes may apply.</small></article>)}</div><p className="pricing-disclaimer">Prices are administrator-configurable and have not yet been set. No payment is collected on this preview site. Applicable content and quality depend on availability and licensing.</p></section>

      <section className="faq-section section-pad" id="support"><div className="faq-heading"><div className="section-kicker">A FEW THINGS TO KNOW</div><h2>Good to <i>know.</i></h2><p>Have another question? Our support team is here to help.</p><a href="mailto:hello@streamlux.example" className="text-link gold-link">Contact support <Arrow /></a></div><div className="faq-list">{[
        ['What is StreamLux?', 'StreamLux is a premium entertainment destination designed for live programming, movies, and series. Programming availability depends on verified distribution rights, territory, and your membership.'],
        ['What does membership cost?', 'Plan durations are listed above. Prices are not yet configured and will be shown clearly before any purchase. Any applicable taxes, billing frequency, and renewal terms must be displayed at checkout.'],
        ['Which devices are supported?', 'StreamLux is designed for supported web browsers, mobile devices, and selected TV platforms. Compatibility and installation steps will be documented for each supported model; universal compatibility is not guaranteed.'],
        ['Can I cancel or manage a renewal?', 'Subscription management and cancellation options will be available in your account once billing is configured. Renewal terms will be clearly disclosed before purchase.'],
      ].map(([question, answer], index) => <article className={`faq-item ${faqOpen === index ? 'faq-expanded' : ''}`} key={question}><button className="faq-question" aria-expanded={faqOpen === index} onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span><i>0{index + 1}</i>{question}</span><b>{faqOpen === index ? '−' : '+'}</b></button>{faqOpen === index && <p className="faq-answer">{answer}</p>}</article>)}</div></section>

      <footer className="footer"><div className="footer-main"><div className="footer-brand-col"><a className="brand" href="#home"><span className="brand-mark">S<span>✦</span></span><span className="brand-word">STREAM<span>LUX</span></span></a><p>Entertainment without limits.<br />A more considered way to watch.</p><a className="footer-contact" href="mailto:hello@streamlux.example">hello@streamlux.example <Arrow diagonal /></a></div><div className="footer-col"><span>EXPLORE</span><a href="#live">Live TV</a><a href="#library">Movies & Series</a><a href="#pricing">Membership</a><a href="#devices">Devices</a></div><div className="footer-col"><span>INFORMATION</span><a href="#support">Help & Support</a><a href="#support">Terms of Service</a><a href="#support">Privacy Policy</a><a href="#support">Content & Licensing</a></div><div className="footer-news"><span>THE STREAMLUX NOTE</span><p>A little inspiration for your next night in.</p><form action="#support" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="newsletter-email">Your email address</label><input id="newsletter-email" type="email" placeholder="Your email address" /><button aria-label="Subscribe to newsletter">→</button></form><small>Newsletter signup will be available soon.</small></div></div><div className="footer-bottom"><span>© 2025 STREAMLUX. ALL RIGHTS RESERVED.</span><span>CONTENT SHOWN FOR ILLUSTRATIVE PURPOSES.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
