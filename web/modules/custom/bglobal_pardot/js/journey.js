/* global writeDebug, getQueryValue */

const initializeJourney = () => {
  const jc = this;
  jc.launch = () => {
    jc.addEntry();
    return jc;
  };

  const queryBuild = (prefix) => jc.buildJourney(getQueryValue(`${prefix}_source`),
    getQueryValue(`${prefix}_medium`),
    getQueryValue(`${prefix}_campaign`),
    getQueryValue(`${prefix}_adgroup`),
    getQueryValue(`${prefix}_keyword`),
    getQueryValue(`${prefix}_matchtype`),
    getQueryValue(`${prefix}_gclid`),
    getQueryValue(`${prefix}_device`),
    getQueryValue(`${prefix}_position`),
    getQueryValue(`${prefix}_adid`),
    getQueryValue(`${prefix}_placement`),
    getQueryValue(`${prefix}_random`));

  const parseQuery = () => {
    if (getQueryValue('b_source')) return queryBuild('b');
    if (getQueryValue('utm_source')) return queryBuild('utm');
    return false;
  };

  const parseOrganic = () => {
    const search = (document.referrer === 'https://www.google.com/' || document.referrer === 'https://www.bing.com/')
      ? document.referrer.match(/\w*(?=(\.com))/g)[0] : false;
    return search ? jc.buildJourney(search, 'organic') : jc.buildJourney(document.referrer, 'referral');
  };

  const parseReferral = () => {
    const internalNavigation = document.referrer.indexOf('//extension.berkeley.edu') + document.referrer.indexOf('berkeleytestpv') > 0;
    if (!internalNavigation) return document.referrer === '' ? jc.buildJourney('direct') : parseOrganic();
    return false;
  };

  jc.checkSource = () => {
    jc.thisJourney = parseQuery() || parseReferral();
    return jc.thisJourney;
  };

  jc.buildJourney = (s, m, c, a, k, ma, g, d, p, ad, pl, r) => {
    const journeyObj = {};
    if (s) journeyObj.s = s;
    if (m) journeyObj.m = m;
    if (c) journeyObj.c = c;
    if (a) journeyObj.a = a;
    if (k) journeyObj.k = k;
    if (ma) journeyObj.ma = ma;
    if (g) journeyObj.g = g;
    if (d) journeyObj.d = d;
    if (p) journeyObj.p = p;
    if (ad) journeyObj.ad = ad;
    if (pl) journeyObj.pl = pl;
    if (r) journeyObj.r = r;
    journeyObj.t = new Date();
    return journeyObj;
  };
  const validateDiffJourney = () => !(jc.lastEntry.s === jc.thisJourney.s
    && jc.lastEntry.m === jc.thisJourney.m
    && jc.lastEntry.c === jc.thisJourney.c);

  const updateFirstLastEntry = () => {
    jc.firstEntry = jc.completeJourney[0] || {};
    jc.lastEntry = jc.completeJourney[jc.completeJourney.length - 1] || {};
  };

  jc.addEntry = () => {
    jc.completeJourney = jc.getStorage();
    if (validateDiffJourney()) {
      jc.completeJourney.push(jc.thisJourney);
      jc.setStorage(jc.completeJourney);
      updateFirstLastEntry();
    }
    return jc.completeJourney;
  };
  jc.getStorage = () => JSON.parse(localStorage.getItem('ucbex_journey')) || [];
  jc.setStorage = (journeyEntry) => localStorage.setItem('ucbex_journey', JSON.stringify(journeyEntry));
  jc.completeJourney = jc.getStorage();
  updateFirstLastEntry();

  return jc.checkSource() ? jc.launch() : jc;
};

const journey = initializeJourney();

function replaceFormWithThankYou(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
replaceFormWithThankYou(() => {
  const form = document.getElementById('leadgen-box--form');
  const thankyou = document.getElementById('thankyou');

  if (form && getQueryValue('thankyou') === 'welcome') form.parentElement.removeChild(form);
  if (thankyou) thankyou.style.display = getQueryValue('thankyou') === 'welcome' ? '' : 'none';
});
