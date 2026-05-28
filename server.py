import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Override to format logs cleanly
        print(f"[SERVER] {self.address_string()} - {format%args}")

if __name__ == "__main__":
    # Change workspace directory
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("==================================================")
        print(" WAZIR - Strategy & Consulting Club IIM Rohtak")
        print(" Local Dev Server Running at:")
        print(f" http://localhost:{PORT}")
        print(" Press Ctrl+C to stop the server.")
        print("==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[SERVER] Shutting down server...")
