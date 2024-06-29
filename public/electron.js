// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
const { app, BrowserWindow, Menu, } = require("electron");

const path = require("path");
const isDev = app.isPackaged ? false : require('electron-is-dev');
let mainWindow;


// function createWindow() {
// mainWindow = new BrowserWindow({ width: 900, height: 680 });
// mainWindow.loadURL(
// isDev
// ? "http://localhost:3000"
// : `file://${path.join(__dirname, "../build/index.html")}`
// );
// mainWindow.on("closed", () => (mainWindow = null));
// }
const mainMenuTemplate = [

  {
    label: "Menu 1",
    role: "admin",
    submenu: [
      {
        label: "Menu 1 - 1",
      },
      {
        label: "Menu 1 - 2",
      },
    ],
  },
 
];
// Build menu from template
const menu = Menu.buildFromTemplate(mainMenuTemplate);
Menu.setApplicationMenu(menu);
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    // webPreferences: {
    //   offscreen: false
    // },
    // icon: __dirname + "/assets/image6.png",

  });
  //=============DEVTOOLS=============
  mainWindow.webContents.openDevTools()

  // and load the index.html of the app.
  // onlineStatusWindow.loadURL("https://polri-efaskon.vercel.app");
  // win.loadURL('https://github.com')
  // win.webContents.on('paint', (event, dirty, image) => {
  //   fs.writeFileSync('ex.png', image.toPNG())
  // })
  // win.webContents.setFrameRate(60)
  // console.log(`The screenshot has been successfully saved to ${path.join(process.cwd(), 'ex.png')}`)
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
};

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
 