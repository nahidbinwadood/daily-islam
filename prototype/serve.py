# Local preview server for the prototype. Same as `python -m http.server`, but tells the browser
# to revalidate every file, so an edited page never runs with a stale script beside it.
# Run from this folder: python serve.py  (then open http://127.0.0.1:5174/)
import http.server, sys

class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

port = int(sys.argv[1]) if len(sys.argv) > 1 else 5174
http.server.ThreadingHTTPServer(('127.0.0.1', port), NoCache).serve_forever()
