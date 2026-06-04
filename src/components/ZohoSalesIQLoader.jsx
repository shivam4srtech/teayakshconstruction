'use client';

import { useEffect } from 'react';

const SALESIQ_SCRIPT_ID = 'zsiqscript';
const SALESIQ_WIDGET_URL =
  'https://salesiq.zohopublic.in/widget?wc=siq54a70265c25601adc203637686bd79ec345bf4c106b7e8cf5ea06b62b3b3d16c50cdd2786506bc6ad40a1202c17fe688';

function loadSalesIQ() {
  if (document.getElementById(SALESIQ_SCRIPT_ID)) {
    return;
  }

  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

  const script = document.createElement('script');
  script.id = SALESIQ_SCRIPT_ID;
  script.src = SALESIQ_WIDGET_URL;
  script.async = true;
  document.body.appendChild(script);
}

export default function ZohoSalesIQLoader() {
  useEffect(() => {
    let hasLoaded = false;

    const scheduleLoad = () => {
      if (hasLoaded) {
        return;
      }

      hasLoaded = true;
      cleanup();

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadSalesIQ);
        return;
      }

      window.setTimeout(loadSalesIQ, 1);
    };

    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
    const options = { once: true, passive: true };
    const cleanup = () => {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, scheduleLoad, options);
      });
    };

    events.forEach((eventName) => {
      window.addEventListener(eventName, scheduleLoad, options);
    });

    return cleanup;
  }, []);

  return null;
}
