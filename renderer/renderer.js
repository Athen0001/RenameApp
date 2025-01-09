//Lead with the frontend events on interface.
document.getElementById("selectFolder").addEventListener("click", async () => {
  const folderPath = await window.electronAPI.selectFolder();
  if (folderPath) {
    document.getElementById(
      "output"
    ).innerText = `Selected folder: ${folderPath}`;
    document.getElementById("selectFolder").dataset.folderPath = folderPath;
  }
});

document.getElementById("renameFiles").addEventListener("click", async () => {
  const folderPath = document.getElementById("selectFolder").dataset.folderPath;
  const newName = document.getElementById("newName").value;

  if (!folderPath || !newName) {
    document.getElementById("output").innerText =
      "Please, select a folder and insert a new name.";
    return;
  }

  const result = await window.electronAPI.renameFiles(folderPath, newName);
  document.getElementById("output").innerText = result;
});
