echo Waiting 20 seconds for starting Windows
"C:\Windows\system32\ping" -n 21 -w 1000 127.0.0.1 >NUL
echo Open site in Chrome Browser
"C:\Documents and Settings\All Users\Application Data\Application\chrome.exe" --incognito --disable-infobars --kiosk -fullscreen --overscroll--history-navigation=0 https://sitename.ru/shedule/index.html"
exit