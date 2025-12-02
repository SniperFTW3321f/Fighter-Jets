1::
toggle := !toggle
if (toggle) {
    SetTimer, ShowMessage, 1000
} else {
    SetTimer, ShowMessage, Off
}
return
showMessage:
msgbox, This is a message box that appears every second.
return