(function (window) {
  function addCss(fileName) {
    const head = document.head;
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = fileName;

    head.appendChild(link);
  }
  function getQueryStringValue(key) {
    return decodeURIComponent(
      window.location.search.replace(
        new RegExp(
          '^(?:.*[&\\?]' +
            encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') +
            '(?:\\=([^&]*))?)?.*$',
          'i'
        ),
        '$1'
      )
    );
  }
  const xtag = getQueryStringValue('xtag') || 'x-component';
  const xdef = getQueryStringValue('xdef') || 'x-defination';
  const xurl = getQueryStringValue('xurl') || 'http://localhost:4200';
  window.xinfo = {
    xtag: xtag,
    xdef: xdef,
    xurl: xurl
  };
  window[xdef] = zoid.create({
    tag: xtag,
    url: xurl,
    dimensions: {
      width: '100%',
      height: '100%'
    },
    props: {
      data: {
        type: 'object',
        required: false
      },
      onData: {
        type: 'function',
        required: false
      },
      dispatch: {
        type: 'function',
        required: false
      }
    }
  });
  console.info(window.xinfo);
  if (window.xprops && window.xprops.data) {
    console.info(window.xprops);
  }
  if (window.xprops) {
    window.xprops.onProps(function (e) {
      console.info('got props from tag' + xtag);
      console.info(e);
    });
  }
})(window);
