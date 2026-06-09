import os
import sys
import socket
import threading
import time
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

# 確保輸出編碼為 utf-8
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        import codecs
        sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

PORT = 8000

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # 不需要真的建立連線
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

def start_server():
    # 允許地址重用，避免啟動失敗
    class MyTCPServer(TCPServer):
        allow_reuse_address = True
        
    handler = SimpleHTTPRequestHandler
    with MyTCPServer(("", PORT), handler) as httpd:
        print(f"[伺服器] 已於連接埠 {PORT} 成功啟動。")
        httpd.serve_forever()

def main():
    # 1. 在背景線程啟動 HTTP 伺服器
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(1) # 等待伺服器初始化
    
    # 2. 獲取本機 IP 並生成 URL
    ip = get_local_ip()
    index_url = f"http://{ip}:{PORT}/index.html"
    order_url = f"http://{ip}:{PORT}/order.html"
    
    # 3. 嘗試載入 qrcode 庫
    try:
        import qrcode
    except ImportError:
        print("\n[警告] 未能載入 qrcode 套件，請先執行 'pip install qrcode'。")
        print(f"請在手機瀏覽器手動輸入網址：")
        print(f"  首頁: {index_url}")
        print(f"  選菜頁: {order_url}")
        return

    print("=" * 60)
    print("               彩碗 Poke 本地手機預覽工具")
    print("=" * 60)
    print("請確保您的手機與電腦已連接至 【同一個 Wi-Fi 區域網路】。\n")
    
    # 印出首頁 QR Code
    print("📲 【首頁】請用手機相機掃描下方 QR Code 進行連線：")
    print(f"網址：{index_url}")
    qr_index = qrcode.QRCode()
    qr_index.add_data(index_url)
    qr_index.make()
    qr_index.print_ascii(invert=True)
    
    print("\n" + "-" * 50 + "\n")
    
    # 印出選菜頁 QR Code
    print("📲 【選菜訂購頁】請用手機相機掃描下方 QR Code 進行連線：")
    print(f"網址：{order_url}")
    qr_order = qrcode.QRCode()
    qr_order.add_data(order_url)
    qr_order.make()
    qr_order.print_ascii(invert=True)
    
    print("=" * 60)
    print("伺服器運行中... 按下 Ctrl + C 即可關閉伺服器並結束程式。")
    print("=" * 60)
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n[伺服器] 已關閉。感謝使用！")

if __name__ == "__main__":
    # 將工作目錄切換到此腳本所在的資料夾，以提供正確的 HTML 檔案服務
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    main()
