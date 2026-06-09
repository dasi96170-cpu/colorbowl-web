import os
import shutil
import subprocess

# 來源與目的地路徑 (包含中文字元)
source_pptx = r"c:\Users\賴駿富\Desktop\AI數位內容與智慧流程設計實務班\期末專題\網頁優化後\02_新版\彩碗_30_Demo簡報_v2_5_品牌重塑版.pptx"
target_preview_dir = r"c:\Users\賴駿富\Desktop\AI數位內容與智慧流程設計實務班\期末專題\網頁優化後\02_新版\簡報預覽"

# 暫存路徑 (純英文，防 COM 中文亂碼錯誤)
temp_pptx = r"C:\Users\Public\temp_rebuild.pptx"
temp_preview_dir = r"C:\Users\Public\temp_previews"

print("Starting preview export process...")

# 1. 確保目的地資料夾存在
if not os.path.exists(target_preview_dir):
    os.makedirs(target_preview_dir)
if os.path.exists(temp_preview_dir):
    shutil.rmtree(temp_preview_dir)
os.makedirs(temp_preview_dir)

# 2. 複製 PPTX 到純英文暫存路徑
shutil.copy2(source_pptx, temp_pptx)
print(f"Copied presentation to temporary path: {temp_pptx}")

# 3. 建立不含中文的 PowerShell 導出指令檔
ps_content = f"""$pp = New-Object -ComObject PowerPoint.Application
Unblock-File -Path "{temp_pptx}"
$pres = $pp.Presentations.Open("{temp_pptx}", $true, $true, $true)
$idx = 1
foreach ($slide in $pres.Slides) {{
    $slide.Export("{temp_preview_dir}\\Slide" + $idx + ".png", "PNG", 1280, 720)
    $idx++
}}
$pres.Close()
$pp.Quit()
Write-Output "Previews exported to temp directory successfully!"
"""

ps1_path = "export_previews_temp.ps1"
with open(ps1_path, "w", encoding="ascii") as f:
    f.write(ps_content)

print(f"Created temporary script: {ps1_path}")

# 4. 執行 PowerShell 檔案
print("Launching PowerPoint COM in background to export previews...")
result = subprocess.run(["powershell", "-ExecutionPolicy", "Bypass", "-File", ps1_path], capture_output=True, text=True)
print("STDOUT:")
print(result.stdout)
print("STDERR:")
print(result.stderr)

# 5. 移動匯出的 PNG 圖檔到最終目的地
if os.path.exists(temp_preview_dir):
    files = os.listdir(temp_preview_dir)
    print(f"Exported files count: {len(files)}")
    for file in files:
        if file.lower().endswith(".png"):
            src_file = os.path.join(temp_preview_dir, file)
            dest_file = os.path.join(target_preview_dir, file)
            shutil.copy2(src_file, dest_file)
    print(f"All preview images successfully moved to: {target_preview_dir}")

# 6. 清理臨時檔案
try:
    if os.path.exists(temp_pptx):
        os.remove(temp_pptx)
    if os.path.exists(temp_preview_dir):
        shutil.rmtree(temp_preview_dir)
    if os.path.exists(ps1_path):
        os.remove(ps1_path)
    print("Cleanup temporary files complete.")
except Exception as e:
    print(f"Warning during cleanup: {e}")

print("Process finished successfully!")
