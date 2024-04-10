const { app, BrowserWindow } = require('electron')
const MMURL = "http://192.168.178.42:9070"

function createWindow() {
    const win = new BrowserWindow({
        fullscreen: true,
    });
    console.log(win)
    win.webContents.on("did-fail-load", function(e) {
        console.log("Fuck did not load");
        setTimeout(() => {
            win.loadUrl("https://juicyjul.es")
            createWindow();
        }, 5000)
    });
    win.loadURL(MMURL);

}
app.whenReady().then(createWindow);