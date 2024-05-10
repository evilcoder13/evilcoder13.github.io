
PORT = 8000
DIRECTORY = "."

def createWebServer(PORT):
    # Handler = http.server.SimpleHTTPRequestHandler
    # with socketserver.TCPServer(("", PORT), Handler) as httpd:
    #     print("serving at port", PORT)
    #     httpd.serve_forever()
    httpd = http.server.HTTPServer(("", PORT), http.server.SimpleHTTPRequestHandler)
    print("serving at port", PORT)
    httpd.serve_forever()

thread = Thread(target=createWebServer, args=(PORT, ))
thread.start()