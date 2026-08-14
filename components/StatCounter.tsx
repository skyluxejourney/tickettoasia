// app/components/StatCounter.tsx
'use client'

import Script from 'next/script';

export default function StatCounter() {
  return (
    <>
      <Script
        id="statcounter-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var sc_project=13342604;
            var sc_invisible=1;
            var sc_security="190a6a8b";
          `,
        }}
      />
      <Script
        src="https://www.statcounter.com/counter/counter.js"
        strategy="afterInteractive"
        async
      />
      <noscript>
        <div className="statcounter">
          <img
            className="statcounter"
            src="https://c.statcounter.com/13342604/0/190a6a8b/1/"
            alt="Web Analytics"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </noscript>
    </>
  );
}