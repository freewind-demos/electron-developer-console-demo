const remote = require('electron').remote;

document.addEventListener('keydown', function (e) {
  const F12 = 123;
  if (e.which === F12) {
    remote.getCurrentWindow().toggleDevTools();
  }
});
