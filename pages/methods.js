import Link from 'next/link';

export default function Methods({ brightness, setBrightness }) {
  return (
    <main className="wrap" role="main">
      <header className="hdr">
        <h1 className="logo" aria-label="Site logo">exmade</h1>
        <div className="hdr-actions" aria-label="Header controls">
          <label htmlFor="brightness" className="sr-only">Brightness control</label>
          <input
            id="brightness"
            type="range"
            min="0.5"
            max="1.5"
            step="0.05"
            value={brightness}
            onChange={e => setBrightness(parseFloat(e.target.value))}
            aria-valuemin={0.5}
            aria-valuemax={1.5}
            aria-valuenow={brightness}
            className="brightness-slider"
          />
        </div>
      </header>

      <section className="content" role="list">
        <a
          className="link-card"
          href="https://app.splunk.gg/u/exmadeGG"
          target="_blank"
          rel="noreferrer noopener"
          role="listitem"
        >
          <div className="ln">SPLUNK</div>
          <div className="sub">Open in new tab</div>
        </a>

        <a
          className="link-card"
          href="https://www.logged.tg/auth/exmade"
          target="_blank"
          rel="noreferrer noopener"
          role="listitem"
        >
          <div className="ln">INJURIES</div>
          <div className="sub">Open in new tab</div>
        </a>

        <a
          className="link-card"
          href="https://dsprs.vercel.app/hyperlink"
          target="_blank"
          rel="noreferrer noopener"
          role="listitem"
        >
          <div className="ln">HyperLink Gen</div>
          <div className="sub">Open in new tab</div>
        </a>

        <a
          className="link-card"
          href="https://app.splunk.gg/u/exmadeGG"
          target="_blank"
          rel="noreferrer noopener"
          role="listitem"
        >
          <div className="ln">Cookie Bypasser</div>
          <div className="sub">Open in new tab</div>
        </a>

        <nav className="btn-row" aria-label="Navigation buttons">
          <Link href="/" passHref>
            <a className="btn small">Go Back</a>
          </Link>
        </nav>
      </section>
    </main>
  );
}
