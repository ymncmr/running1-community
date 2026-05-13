# Malmong Running Club – Local Static Server
# Run with: .\serve.ps1
# Then open: http://localhost:3000

$port   = 3000
$root   = Join-Path $PSScriptRoot "site"
$prefix = "http://localhost:$port/"

$mime = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".json" = "application/json"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host ""
Write-Host "  Malmong Running Club – Local Server"
Write-Host "  ------------------------------------"
Write-Host "  Serving: $root"
Write-Host "  URL:     http://localhost:$port"
Write-Host ""
Write-Host "  Press Ctrl+C to stop."
Write-Host ""

try {
    while ($listener.IsListening) {
        $ctx  = $listener.GetContext()
        $req  = $ctx.Request
        $resp = $ctx.Response

        $urlPath = $req.Url.AbsolutePath
        if ($urlPath -eq "/") { $urlPath = "/index.html" }

        # Strip leading slash and normalise separators
        $relPath  = $urlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $fullPath = Join-Path $root $relPath

        if (Test-Path $fullPath -PathType Leaf) {
            $ext  = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $type = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $resp.ContentType   = $type
            $resp.ContentLength64 = $bytes.Length
            $resp.StatusCode    = 200
            $resp.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "  200  $urlPath"
        } else {
            $msg   = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>$urlPath</p>")
            $resp.ContentType     = "text/html"
            $resp.ContentLength64 = $msg.Length
            $resp.StatusCode      = 404
            $resp.OutputStream.Write($msg, 0, $msg.Length)
            Write-Host "  404  $urlPath"
        }

        $resp.OutputStream.Close()
    }
} finally {
    $listener.Stop()
}
