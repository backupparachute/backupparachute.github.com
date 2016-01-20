var billboardRandomizer = (function() {

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var billboardPrefix = 'billboard-is-';
  var billboards = ['bps', 'vh', 'impress', 'cask'];
  var selected = billboards[getRandomIntInclusive(0, billboards.length - 1)];

  document.body.classList.add(billboardPrefix + selected);

  if(selected !== billboards[0]) {
    document.body.classList.remove(billboardPrefix + billboards[0]);
  }

})();
