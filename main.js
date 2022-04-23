const { app, BrowserWindow } = require('electron')
const MMURL = "http://192.168.178.42:9070"
function createWindow() {
    const win  = new BrowserWindow({
        fullscreen: true,
    });
    win.loadURL(MMURL);
}
app.whenReady().then(createWindow);