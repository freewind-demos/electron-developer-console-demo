const electron = require('electron');

const {app, BrowserWindow, Menu, MenuItem} = electron;

function appendCustomMenu() {
  const menu = Menu.getApplicationMenu();
  menu.append(new MenuItem({
      label: 'CustomMenu',
      submenu: [
        {label: 'Sub1 (click me)', click: () => console.log('Hello Sub1')},
        {label: 'Sub2 (click me)', click: () => console.log('Hello Sub2')},
        {label: 'Sub3 (click me)', click: () => console.log('Hello Sub3')},
      ]
    }
  ))
  Menu.setApplicationMenu(menu);
}

app.on('ready', function () {
  const mainWindow = new BrowserWindow();
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  appendCustomMenu();
});
