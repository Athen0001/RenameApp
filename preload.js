const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  selectFolder: () => ipcRenderer.invoke("dialog:select-folder"),
  renameFiles: (folderPath, newName) =>
    ipcRenderer.invoke("files:rename", folderPath, newName),
});
//This file lead with the comunication between frontend and backend.