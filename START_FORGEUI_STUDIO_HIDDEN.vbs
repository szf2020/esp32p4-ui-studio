Set WshShell = CreateObject("WScript.Shell")

WshShell.CurrentDirectory = "C:\ForgeUI\Projects\esp32p4-ui-studio\studio"

WshShell.Run "cmd /c npm run dev", 0, False
WshShell.Run "cmd /c node export-server.js", 0, False

WshShell.Run "http://localhost:3000", 1, False