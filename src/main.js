const electron = require('electron');

const {app, BrowserWindow, Menu, MenuItem} = electron;

function appendDebugMenu(mainWindow) {
  const menu = Menu.getApplicationMenu();
  menu.append(new MenuItem({
      label: 'Debug',
      submenu: [
        {label: 'Developer console', click: () => mainWindow.webContents.openDevTools()},
      ]
    }
  ))
  Menu.setApplicationMenu(menu);
}

app.on('ready', function () {
  const mainWindow = new BrowserWindow();
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  appendDebugMenu(mainWindow);
});
