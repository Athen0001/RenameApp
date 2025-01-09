const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

//loads the operational system window and the quit logical
let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "renderer", "index.html"));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

//Manipulators of the data (folder select and renamer logic)
ipcMain.handle("dialog:select-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });
  return result.filePaths[0];
});

ipcMain.handle("files:rename", async (event, folderPath, newName) => {
  try {
    const fs = require("fs");
    const path = require("path");

    const files = fs.readdirSync(folderPath);
    files.forEach((file, index) => {
      const ext = path.extname(file);
      const oldPath = path.join(folderPath, file);
      const newPath = path.join(folderPath, `${newName}${index + 1}${ext}`);
      fs.renameSync(oldPath, newPath);
    });
    return `Files successfully renamed in folder: ${folderPath}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
});
