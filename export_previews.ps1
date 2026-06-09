$pp = New-Object -ComObject PowerPoint.Application
$pp.Visible = -1
$folder = 'c:\Users\賴駿富\Desktop\AI數位內容與智慧流程設計實務班\期末專題\網頁優化後\02_新版\簡報預覽'
if (-not (Test-Path $folder)) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}
$pres = $pp.Presentations.Open("c:\Users\賴駿富\Desktop\AI數位內容與智慧流程設計實務班\期末專題\網頁優化後\02_新版\彩碗_30_Demo簡報_v2_5_品牌重塑版.pptx", $true, $true, $false)
$pres.Export($folder, "PNG", 1280, 720)
$pres.Close()
$pp.Quit()
Write-Output "Previews exported successfully!"
