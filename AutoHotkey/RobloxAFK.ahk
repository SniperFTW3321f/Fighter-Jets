F6::
    Toggle := !Toggle
    if (Toggle)
    {
        SetTimer, PressTheKey, 900000 ; <-- Timer la 15 minute (900.000 milisecunde)
        Tooltip, Script AFK Pornit, 0, 0
    }
    else
    {
        SetTimer, PressTheKey, Off
        Tooltip, Script AFK Oprit
    }
    SetTimer, RemoveToolTip, -2000
return

PressTheKey:
    ; Aceasta este soluția care funcționează cu Roblox (aduce fereastra în prim-plan, trimite tasta, apoi minimizează)
    IfWinExist, ahk_class WINDOWSCLIENT ahk_exe RobloxPlayerBeta.exe
    {
        WinActivate, ahk_class WINDOWSCLIENT ahk_exe RobloxPlayerBeta.exe ; Aduce fereastra în prim-plan
        Sleep, 100 ; Așteaptă 100 milisecunde pentru ca fereastra să devină complet activă
        SendInput, {Space} ; Trimite tasta Space
        Sleep, 50 ; O pauză scurtă înainte de a minimiza
        WinMinimize, ahk_class WINDOWSCLIENT ahk_exe RobloxPlayerBeta.exe ; Pune fereastra înapoi în bară
    }
return

RemoveToolTip:
    Tooltip
return