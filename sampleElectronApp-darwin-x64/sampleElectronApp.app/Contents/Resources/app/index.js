const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow

console.log(electron);
console.log(app);
console.log(BrowserWindow);

app.on('window-all-closed', function() {
  if(process.platform != 'darwin')
  app.quit();
});

app.on('ready', function() {
  // 画面表示
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
