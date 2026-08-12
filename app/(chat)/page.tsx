sovereign-ai-platform-guide.pdf $ curl -i https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
HTTP/2 200
server: Apache
cache-control: max-age=86400, public
x-cache: MISS
content-type: application/pdf
content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
strict-transport-security: max-age=31536000;
date: Wed, 12 Aug 2026 22:04:18 GMT
expires: Thu, 13 Aug 2026 22:04:18 GMT
x-xss-protection: 1; mode=block
accept-ranges: bytes
x-content-type-options: nosniff
etag: "229535-6277cb35f2d8b"
last-modified: Fri, 22 Nov 2024 09:06:39 GMT
x-powered-by: Claranet
x-backend-status: 200
age: 0
content-length: 2266421
x-director: web_front

Warning: Binary output can mess up your
Warning: terminal. Use "--output -" to tell
Warning: curl to output it to your terminal
Warning: anyway, or consider "--output
Warning: <FILE>" to save to a file.
~ $ curl -v https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* Host atos.net:443 was resolved.
* IPv6: (none)
* IPv4: 79.99.39.104
*   Trying 79.99.39.104:443...
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* SSL Trust Anchors:
*   CAfile: /data/data/com.termux/files/usr/etc/tls/cert.pem
*   CApath: /data/data/com.termux/files/usr/etc/tls/certs
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384 / secp256r1 / RSASSA-PSS
* ALPN: server accepted h2
* Server certificate:
*   subject: C=FR; ST=Île-de-France; O=ATOS SE; CN=*.atos.net
*   start date: Jul 17 00:00:00 2026 GMT
*   expire date: Jan 31 23:59:59 2027 GMT
*   issuer: C=GB; O=Sectigo Limited; CN=Sectigo Public Server Authentication CA OV R36
*   Certificate level 0: Public key type RSA (4096/152 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (3072/128 Bits/secBits), signed using sha384WithRSAEncryption
*   Certificate level 2: Public key type RSA (4096/152 Bits/secBits), signed using sha384WithRSAEncryption
*   subjectAltName: "atos.net" matches cert's "atos.net"
* OpenSSL verify result: 0
* SSL certificate verified via OpenSSL.
* Established connection to atos.net (79.99.39.104 port 443) from 192.168.1.24 port 42054
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: atos.net]
* [HTTP/2] [1] [:path: /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf]
* [HTTP/2] [1] [user-agent: curl/8.21.0]
* [HTTP/2] [1] [accept: */*]
> GET /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf HTTP/2
> Host: atos.net
> User-Agent: curl/8.21.0
> Accept: */*
>
* Request completely sent off
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
< HTTP/2 200
< server: Apache
< cache-control: max-age=86400, public
< x-cache: MISS
< content-type: application/pdf
< content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
< strict-transport-security: max-age=31536000;
< date: Wed, 12 Aug 2026 22:04:37 GMT
< expires: Thu, 13 Aug 2026 22:04:37 GMT
< x-xss-protection: 1; mode=block
< accept-ranges: bytes
< x-content-type-options: nosniff
< etag: "229535-6277cb35f2d8b"
< last-modified: Fri, 22 Nov 2024 09:06:39 GMT
< x-powered-by: Claranet
< x-backend-status: 200
< age: 0
< content-length: 2266421
< x-director: web_front
<
Warning: Binary output can mess up your
Warning: terminal. Use "--output -" to tell
Warning: curl to output it to your terminal
Warning: anyway, or consider "--output
Warning: <FILE>" to save to a file.
* client returned ERROR on write of 4096 bytes
* Connection #0 to host atos.net:443 left intact
~ $ curl -iv https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* Host atos.net:443 was resolved.
* IPv6: (none)
* IPv4: 79.99.39.104
*   Trying 79.99.39.104:443...
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* SSL Trust Anchors:
*   CAfile: /data/data/com.termux/files/usr/etc/tls/cert.pem
*   CApath: /data/data/com.termux/files/usr/etc/tls/certs
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384 / secp256r1 / RSASSA-PSS
* ALPN: server accepted h2
* Server certificate:
*   subject: C=FR; ST=Île-de-France; O=ATOS SE; CN=*.atos.net
*   start date: Jul 17 00:00:00 2026 GMT
*   expire date: Jan 31 23:59:59 2027 GMT
*   issuer: C=GB; O=Sectigo Limited; CN=Sectigo Public Server Authentication CA OV R36
*   Certificate level 0: Public key type RSA (4096/152 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (3072/128 Bits/secBits), signed using sha384WithRSAEncryption
*   Certificate level 2: Public key type RSA (4096/152 Bits/secBits), signed using sha384WithRSAEncryption
*   subjectAltName: "atos.net" matches cert's "atos.net"
* OpenSSL verify result: 0
* SSL certificate verified via OpenSSL.
* Established connection to atos.net (79.99.39.104 port 443) from 192.168.1.24 port 40208
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: atos.net]
* [HTTP/2] [1] [:path: /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf]
* [HTTP/2] [1] [user-agent: curl/8.21.0]
* [HTTP/2] [1] [accept: */*]
> GET /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf HTTP/2
> Host: atos.net
> User-Agent: curl/8.21.0
> Accept: */*
>
* Request completely sent off
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
< HTTP/2 200
HTTP/2 200
< server: Apache
server: Apache
< cache-control: max-age=86400, public
cache-control: max-age=86400, public
< x-cache: MISS
x-cache: MISS
< content-type: application/pdf
content-type: application/pdf
< content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
< strict-transport-security: max-age=31536000;
strict-transport-security: max-age=31536000;
< date: Wed, 12 Aug 2026 22:05:25 GMT
date: Wed, 12 Aug 2026 22:05:25 GMT
< expires: Thu, 13 Aug 2026 22:05:25 GMT
expires: Thu, 13 Aug 2026 22:05:25 GMT
< x-xss-protection: 1; mode=block
x-xss-protection: 1; mode=block
< accept-ranges: bytes
accept-ranges: bytes
< x-content-type-options: nosniff
x-content-type-options: nosniff
< etag: "229535-6277cb35f2d8b"
etag: "229535-6277cb35f2d8b"
< last-modified: Fri, 22 Nov 2024 09:06:39 GMT
last-modified: Fri, 22 Nov 2024 09:06:39 GMT
< x-powered-by: Claranet
x-powered-by: Claranet
< x-backend-status: 200
x-backend-status: 200
< age: 0
age: 0
< content-length: 2266421
content-length: 2266421
< x-director: web_front
x-director: web_front
<

Warning: Binary output can mess up your
Warning: terminal. Use "--output -" to tell
Warning: curl to output it to your terminal
Warning: anyway, or consider "--output
Warning: <FILE>" to save to a file.
* client returned ERROR on write of 4096 bytes
* Connection #0 to host atos.net:443 left intact
~ $ curl -L https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
Warning: Binary output can mess up your
Warning: terminal. Use "--output -" to tell
Warning: curl to output it to your terminal
Warning: anyway, or consider "--output
Warning: <FILE>" to save to a file.
~ $~ $ curl -i https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
HTTP/2 200
server: Apache
cache-control: max-age=86400, public
x-cache: MISS
content-type: application/pdf
content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
strict-transport-security: max-age=31536000;
date: Wed, 12 Aug 2026 22:04:18 GMT
expires: Thu, 13 Aug 2026 22:04:18 GMT
x-xss-protection: 1; mode=block
accept-ranges: bytes
x-content-type-options: nosniff
etag: "229535-6277cb35f2d8b"
last-modified: Fri, 22 Nov 2024 09:06:39 GMT
x-powered-by: Claranet
x-backend-status: 200
age: 0
content-length: 2266421
x-director: web_front

Warning: Binary output can mess up your
Warning: terminal. Use "--output -" to tell
Warning: curl to output it to your terminal
Warning: anyway, or consider "--output
Warning: <FILE>" to save to a file.
~ $ curl -v https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* Host atos.net:443 was resolved.
* IPv6: (none)
* IPv4: 79.99.39.104
*   Trying 79.99.39.104:443...
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* SSL Trust Anchors:
*   CAfile: /data/data/com.termux/files/usr/etc/tls/cert.pem
*   CApath: /data/data/com.termux/files/usr/etc/tls/certs
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384 / secp256r1 / RSASSA-PSS
* ALPN: server accepted h2
* Server certificate:
*   subject: C=FR; ST=Île-de-France; O=ATOS SE; CN=*.atos.net
*   start date: Jul 17 00:00:00 2026 GMT
*   expire date: Jan 31 23:59:59 2027 GMT
*   issuer: C=GB; O=Sectigo Limited; CN=Sectigo Public Server Authentication CA OV R36
*   Certificate level 0: Public key type RSA (4096/152 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (3072/128 Bits/secBits), signed using sha384WithRSAEncryption
*   Certificate level 2: Public key type RSA (4096/152 Bits/secBits), signed using sha384WithRSAEncryption
*   subjectAltName: "atos.net" matches cert's "atos.net"
* OpenSSL verify result: 0
* SSL certificate verified via OpenSSL.
* Established connection to atos.net (79.99.39.104 port 443) from 192.168.1.24 port 42054
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: atos.net]
* [HTTP/2] [1] [:path: /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf]
* [HTTP/2] [1] [user-agent: curl/8.21.0]
* [HTTP/2] [1] [accept: */*]
> GET /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf HTTP/2
> Host: atos.net
> User-Agent: curl/8.21.0
> Accept: */*
>
* Request completely sent off
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
< HTTP/2 200
< server: Apache
< cache-control: max-age=86400, public
< x-cache: MISS
< content-type: application/pdf
< content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
< strict-transport-security: max-age=31536000;
< date: Wed, 12 Aug 2026 22:04:37 GMT
< expires: Thu, 13 Aug 2026 22:04:37 GMT
< x-xss-protection: 1; mode=block
< accept-ranges: bytes
< x-content-type-options: nosniff
< etag: "229535-6277cb35f2d8b"
< last-modified: Fri, 22 Nov 2024 09:06:39 GMT
< x-powered-by: Claranet
< x-backend-status: 200
< age: 0
< content-length: 2266421
< x-director: web_front
<
Warning: Binary output can mess up your
Warning: terminal. Use "--output -" to tell
Warning: curl to output it to your terminal
Warning: anyway, or consider "--output
Warning: <FILE>" to save to a file.
* client returned ERROR on write of 4096 bytes
* Connection #0 to host atos.net:443 left intact
~ $ curl -i https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
HTTP/2 200
server: Apache
cache-control: max-age=86400, public
x-cache: MISS
content-type: application/pdf
content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
strict-transport-security: max-age=31536000;
date: Wed, 12 Aug 2026 22:04:18 GMT
expires: Thu, 13 Aug 2026 22:04:18 GMT
x-xss-protection: 1; mode=block
accept-ranges: bytes
x-content-type-options: nosniff
etag: "229535-6277cb35f2d8b"
last-modified: Fri, 22 Nov 2024 09:06:39 GMT
x-powered-by: Claranet
x-backend-status: 200
age: 0
content-length: 2266421
x-director: web_front

Warning: Binary output can mess up your
Warning: terminal. Use "--output -" to tell
Warning: curl to output it to your terminal
Warning: anyway, or consider "--output
Warning: <FILE>" to save to a file.
~ $ curl -v https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* Host atos.net:443 was resolved.
* IPv6: (none)
* IPv4: 79.99.39.104
*   Trying 79.99.39.104:443...
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* SSL Trust Anchors:
*   CAfile: /data/data/com.termux/files/usr/etc/tls/cert.pem
*   CApath: /data/data/com.termux/files/usr/etc/tls/certs
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384 / secp256r1 / RSASSA-PSS
* ALPN: server accepted h2
* Server certificate:
*   subject: C=FR; ST=Île-de-France; O=ATOS SE; CN=*.atos.net
*   start date: Jul 17 00:00:00 2026 GMT
*   expire date: Jan 31 23:59:59 2027 GMT
*   issuer: C=GB; O=Sectigo Limited; CN=Sectigo Public Server Authentication CA OV R36
*   Certificate level 0: Public key type RSA (4096/152 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (3072/128 Bits/secBits), signed using sha384WithRSAEncryption
*   Certificate level 2: Public key type RSA (4096/152 Bits/secBits), signed using sha384WithRSAEncryption
*   subjectAltName: "atos.net" matches cert's "atos.net"
* OpenSSL verify result: 0
* SSL certificate verified via OpenSSL.
* Established connection to atos.net (79.99.39.104 port 443) from 192.168.1.24 port 42054
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: atos.net]
* [HTTP/2] [1] [:path: /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf]
* [HTTP/2] [1] [user-agent: curl/8.21.0]
* [HTTP/2] [1] [accept: */*]
> GET /wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdf HTTP/2
> Host: atos.net
> User-Agent: curl/8.21.0
> Accept: */*
>
* Request completely sent off
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
< HTTP/2 200
< server: Apache
< cache-control: max-age=86400, public
< x-cache: MISS
< content-type: application/pdf
< content-security-policy: default-src 'self' atos.net www.googleadservices.com www.google.com *.atos.net *.googletagmanager.com *.doubleclick.net eviden.com *.atos-consulting.net cdn.jsdelivr.net *.cloudflare.com *.cloudfront.net *.vimeo.com *.vimeocdn.com *.akamaized.net *.tiny.cloud *.tinymce.com *.bootstrapcdn.com yoast.com *.yoast.com data: 'unsafe-inline' 'unsafe-eval' blob: code.jquery.com *.gravatar.com ps.w.org ams.wpml.org *.marketo.net *.mktoresp.com *.mktoweb.com tools.eurolandir.com *.youtube-nocookie.com *.youtube.com *.ytimg.com *.gstatic.com *.googleapis.com *.linkedin.com *.google.com *.accountinsight.cloud *.licdn.com w.soundcloud.com *.aio-events.com *.appspot.com *.microsoft.com *.azureedge.net *.botframework.com *.bizzabo.com updates.themepunch-ext-c.tools updates.themepunch-ext-b.tools updates.themepunch-ext-a.tools updates.themepunch.tools optanon.blob.core.windows.net *.glassdoor.com indd.adobe.com smartslider3.com *.googleusercontent.com yt3.ggpht.com *.cdninstagram.com *.matomo.cloud cdn.linkedin.oribi.io; frame-ancestors 'self' atos.net *.atos.net atos365.sharepoint.com;
< strict-transport-security: max-age=31536000;AFMoE ALBERT Apertus Arcee Bamba BART BARThez BARTpho BERT BertGeneration BertJapanese BERTweet BigBird BigBirdPegasus BioGpt BitNet Blenderbot Blenderbot Small BLOOM BLT ByT5 CamemBERT CANINE CodeGen CodeLlama Cohere Cohere2 Cohere2Moe ConvBERT CPM CPMANT CTRL DBRX DeBERTa DeBERTa-v2 DeepSeek-OCR-2 DeepSeek-V2 DeepSeek-V3 DeepSeek-V3.2 DeepSeek-V4 DialoGPT DiffLlama DistilBERT Doge dots1 DPR ELECTRA Encoder Decoder Models ERNIE Ernie4_5 Ernie4_5_MoE ESM EuroBERT EXAONE-4.0 EXAONE-4.5 EXAONE-MoE Falcon Falcon3 FalconH1 FalconMamba FLAN-T5 FLAN-UL2 FlauBERT FlexOlmo FNet FSMT Funnel Transformer Fuyu Gemma Gemma2 GLM-4 GLM-4-0414 GLM-4.5, GLM-4.6, GLM-4.7 GLM-4.7-Flash GLM-Image GlmMoeDsa GPT GPT Neo GPT NeoX GPT NeoX Japanese GPT-J GPT2 GPTBigCode GptOss GPTSw3 Granite GraniteMoe GraniteMoeHybrid GraniteMoeShared Helium HerBERT HRM-Text HunYuanDenseV1 HunYuanMoEV1 HunYuanVL HyperCLOVAX HYV3 I-BERT Jais2 Jamba JetMoe jina_embeddings_v3 Laguna LED LFM2 LFM2Moe LLaMA Llama2 Llama3 LongCatFlash Longformer LongT5 LUKE M2M100 MADLAD-400 Mamba Mamba2 MarianMT MarkupLM MBart and MBart-50 MegatronBERT MegatronGPT2 Mellum MiMo-V2-Flash MiniCPM3 MiniMax MiniMax-M2 MiniMax-M3-VL Ministral Ministral3 Mistral Mixtral mLUKE MobileBERT ModernBert ModernBERTDecoder ModernVBert MPNet MPT MRA MT5 MVP myt5 NanoChat Nemotron NemotronH NLLB NLLB-MoE NomicBERT Nyströmformer OLMo OLMo2 Olmo3 OLMoE OlmoHybrid OpenAI Privacy Filter OPT Pegasus PEGASUS-X Persimmon Phi Phi-3 PhiMoE PhoBERT PLBart ProphetNet Qwen2 Qwen2MoE Qwen3 Qwen3.5 Qwen3.5 Moe Qwen3MoE Qwen3Next RAG RecurrentGemma Reformer RemBERT RoBERTa RoBERTa-PreLayerNorm RoCBert RoFormer RWKV Seed-Oss SmolLM3 SolarOpen Splinter SqueezeBERT StableLm Starcoder2 SwitchTransformers T5 T5Gemma T5Gemma2 T5v1.1 UL2 UMT5 VaultGemma X-MOD XGLM XLM XLM-RoBERTa XLM-RoBERTa-XL XLM-V XLNet xLSTM YOSO Youtu-LLM Zamba Zamba2 ZAYAhttps://aclanthology.org/2023.acl-long.415.pdfhttps://atos.net/wp-content/uploads/2024/11/sovereign-ai-platform-guide.pdfodels for any robot Many robotic applications need to operate without network latency or internet connectivity. Gemini Robotics On-Device 2 is built specifically to handle these constraints — it is our most-efficient vision-language-action model (VLA) optimized to run locally on robotic devices.                                                                                    This model is natively multi-embodiment and inherits our advanced “motion transfer” techniques from Gemini Robotics 1.5. We can now adapt to new bi-arm robot embodiments with just a few hours of adaptation time, typically with less than 200 examples. This works even with new embodiments with drastically different shapes, sensors and degrees of freedom, as shown below with a diverse set of tasks being performed by the Dexmate, SO101, and Trossen platforms.                                                                                                                              Advancing our commitment to safe and responsible robotics                                 Safety is foundational to our robotics research. As robots gain more physical capabilities, we are committed to ensuring end-to-end safety and alignment. With each release, we’ve taken a multi-layered approach that combines traditional physical safety measures with robust AI safety frameworks.                                                                  Gemini Robotics 2 specifically advances robotics safety for navigating the uncertainty of the real world and collaborating alongside humans.                                                                                     We’re introducing ASIMOV-Agentic, a new benchmark for agentic safety orchestration and uncertainty resolution. For example, it measures the embodied reasoning agent’s ability to refuse unsafe tool calls from a VLA.It also measures the agent’s ability to predict whether a task is possible and to proactively request human intervention when uncertain.                                                       Additionally, with enhanced embodied reasoning, Gemini Robotics ER 2 is our safest robotics model to date in safety constraint following and human proximity benchmarks. It can better detect when humans are nearby, trigger safety tool calls and bring the robot to a safe stop if someone approaches too closely. This is a key requirement in collaborative safety standards. Read our Gemini Robotics 2: Safety Technical Report for more details.                                                       Building towards general-purpose physical AI Gemini Robotics 2 marks an important milestone on the path toward solving AGI in the physical world. Unlocking the true potential of robotics requires moving past single-task automation toward general-purpose intelligence. By building this core intelligence, our goal is to enable AI in the physical world that can work alongside humans to solve complex challenges.                                                                                     Explore Gemini Robotics 2                                                                 Try in Google AI Studio                      View Gemini Robotics ER 2 Model Card         View Gemini Robotics On-Device 2 Model Card  Learn more on the Developer blog             Sign up for our Trusted Tester Program       Try in Gemini Enterprise Agent Platform (Private Preview)                                 Acknowledgements                             This work was developed by the Gemini Robotics team: Abhijit Ogale, Abhishek Jindal, Adil Dostmohamed, Adrian Collister, Alan Thompson, Alessio Quaglino, Alex Bewley, Alex Hofer, Alex Taeho Kim, Alex X. Lee, Alex Zihao Zhu, Allen Chai, Amaris Paryag, Amit Hampaul, Amy Nommeots-Nomm, Amy Shen, Andre Araujo, Anirudha Majumdar, Anna Volosina, Annie S. Chen, Annie Xie, Anthony Brohan, Antoine Laurens, Arunkumar Byravan, Asaf Revach, Assaf Hurwitz Michaely, Baruch Tabanpour, Ben Moran, Benoit Landry, Bingyi Cao, Bogdan Mazoure, Brandon Hernaez, Brijen Thananjeyan, Bryan Anenberg, Caden Lu, Carl Doersch, Carolina Parada, Charles Shu, Chengda Wu, Christine Chan, Christy Koh, Chuyuan Fu, Claire Cui, Clare Lee, Claudio Fantacci, Connor Schenck, David Rendleman, Deepali Jain, Demetra Brady, Dennis Li, Dhruv Shah, Dimple Vijaykumar, Dirk Ehrlich, Divya Garikapati, Dmitry Kalashnikov, Dre Mahaarachchi, Dushyant Rao, Erik Frey, Fangchen Liu, Francesco Romano, Frankie Garcia, Gabor Simko, Gautam Salhotra, Giulia Vezzani, Grace Popple, Grace Vesom, Graziano Misuraca, Guangyao Zhou, Hagen Soltau, Hanzi Mao, Hao-Tien Lewis Chiang, Harris Chan, Hila Noga, Howard Zhou, Ian Storz, Idan Lev-Yehudi, Ignacio Rocco, Inessa Konstanz, Isaac Reid, Ishita Prasad, Ivan Kapelyukh, J. Chase Kew, Jacky Liang, Jake Varley, James Susilo, Jasmine Hsu, Jerad Kirkland, Jeremy Plassmann, Jessica Lo, Jie Tan, Jimmy Yan, Jingwei Zhang, Jinyu Xie, Jose Enrique Chen, Joshua Ainslie, Joss Moore, Juanita Bawagan, Junkyung Kim, Justin Lidard, Kanishka Rao, Kathryn Quinn Shea, Kaustubh Sridhar, Keerthana Gopalakrishnan, Ken Caluwaerts, Kenneth Oslund, Khimya Khetarpal, Konstantinos Bousmalis, Krista Reymann, Krzysztof Choromanski, Ksenia Konyushkova, Kun Zhang, Kunal Aneja, Laura Graesser, Leen Verburgh, Leonard Hasenclever, Li-Heng Lin, London Chappellet-Volpini, Lucie Kerley, Maria Attarian, Maria Bauza Villalonga, Marissa Giustina, Max McCabe, Meet Kirankumar Dave, Mehdi S. M. Sajjadi, Metin Toksoz-Exley, Michael Neunert, Michael Noseworthy, Michiel Blokzijl, Miguel Rivas, Mithun George Jacob, Mitsuhiko Nakamoto, Mo Dawoud, Mohan Kumar Srirama, Mohit Sharma, Mohit Shridhar, Muinat Abdul, Murilo F. Martins, Nathan Batchelor, Nicolas Heess, Niko Milonopoulos, Norman Di Palo, Oliver Groth, Ouais Alsharif, Padmini Copparapu, Parth Parekh, Paul Ruiz, Paul Wohlhart, Peide Huang, Peng Xu, Peter Pastor, Petko Yotov, Phil Duffy, Philemon Brakel, Rachel Sterneck, Rajkumar Vasudeva Raju, Ravin Kumar, Razvan Surdulescu, René Wagner, Reza Sanatinia, Robert Baruch, Robert Moreno, Rohan Thakker, Roland Hafner, Sajjad Zafar, Sally Jesmonth, Sam Haves, Saminda Abeyruwan, Sandy Han Huang, Scott Crowell, Seliem El-Sayed, Sergey Yaroshenko, Sergio Martinez Abad, Serkan Cabi, Sharath Maddineni, Shuang Li, Sichun Xu, Silvia Cruciani, Skanda Koppula, Skye Yang, Soo Sung, Stefan Welker, Stefani Karp, Stefano Saliceti, Steven Hansen, Stuart Bowers, Sumeet Singh, Svetlana Grant, Takahiro Miki, Takuma Yoneda, Thomas Buschmann, Thomas Lampe, Thomas Power, Thor Schaeff, Tim Hertweck, Tingnan Zhang, Todd McInally, Todor Davchev, Tong Zhao, Travers Rhodes, Tsang-Wei Edward Lee, Vika Koriakin, Vikas Sindhwani, Wenhao Yu, Wentao Yuan, Xiaolin Fang, Yahav Nussbaum, Ying Sheng, Ying Xu, Yuheng Kuang, Yuxiang Yang, Yuxiang Zhou                                                                 For their leadership and support of this effort, we’d like to thank: Jean-Baptiste Alayrac, Zoubin Ghahramani, Koray Kavukcuoglu and Demis Hassabis. We’d like to recognize the many teams across Google and Google DeepMind that have contributed to this effort including Legal, Marketing, Communications, Responsibility and Safety Council, Responsible Development and Innovation, Policy, Strategy and Operations, and our Business and Corporate Development teams. We’d like to thank everyone on the Robotics team not explicitly mentioned above for their continued support and guidance. Finally, we’d like to thank our partners: Apptronik, Boston Dynamics, and Agile Robots teams for their support.                                                                        Related posts                                Gemini Robotics                              Learn more                                                                                Gemini Robotics ER 2: powering robotics with video understanding, task orchestration, and multi-robot collaboration                    July 2026                                    Models                                       Learn more                                                                                Gemini Robotics-ER 1.6: Powering real-world robotics tasks through enhanced embodied reasoning                                         April 2026                                   Models                                       Learn more                                                                                Gemini Robotics 1.5 brings AI agents into the physical world                              September 2025                               Models                                       Learn more                                                                                Gemini Robotics brings AI into the physical world                                         March 2025                                   Models                                       Learn more                                                                                Follow us                                    Sign up for updates on our latest innovationsI accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with Google's Privacy Policy.                                                 Get the latest updates                                                                    Sign up                                      Build AI responsibly to benefit humanity     Models                                       Gemini                                       Gemini Omni                                  Nano Banana                                  Gemini Audio                                 footer_gemma__dark                           Gemma                                        Genie                                        Lyria                                        Veo                                          Research                                     Gemini Robotics                              Breakthroughs                                Evals                                        Publications                                 Frontier safety                              Responsibility                               Science                                      AlphaFold                                    AlphaGenome                                  WeatherNext                                  AlphaEarth                                   AlphaEvolve                                  Products                                     Gemini app                                   Google AI Studio                             Google Antigravity                           Learn more                                   About                                        News                                         Careers                                      National Partnerships for AI                 Accelerator programs                         The Podcast                                  About Google                                 Google products                              Privacy                                      Termshttps://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Flash-Model-Card.pdfModel card published: December, 2025                                                    Gemini 3 Flash                                                                            Model CardModel Data                                                                      Training Dataset: Gemini 3 Flash is based on Gemini 3 Pro. For more information about the training                                                                                  dataset for Gemini 3 Pro Image, see the Gemini 3 Pro model card.                                                                       Training Data Processing: For more information about the training data processing for Gemini 3 Flash,                                                                               see the Gemini 3 Pro model card.                                                          Implementation and Sustainability                                                         Hardware: Gemini 3 Flash was trained using Google’s Tensor Processing Units (TPUs). TPUs are                                                                                        specifically designed to handle the massive computations involved in training LLMs and can speed up                                                                                 training considerably compared to CPUs. TPUs often come with large amounts of high-bandwidth                                                                                        memory, allowing for the handling of large models and batch sizes during training, which can lead to                                                                                better model quality. TPU Pods (large clusters of TPUs) also provide a scalable solution for handling the                                                                           growing complexity of large foundation models. Training can be distributed across multiple TPU devices                                                                              for faster and more efficient processing.                                                 The efficiencies gained through the use of TPUs are aligned with Google's commitment to operate                                                                                     sustainably.                                                                              Software: Training was done using JAX and ML Pathways.                                                                                 Distribution                                                                              Gemini 3 Flash is distributed similarly to Gemini 3 Pro. For more information about the distribution of                                                                             Gemini 3 Flash, see the Gemini 3 Pro model card.                                                                                       2Evaluation                                                                               Approach: Gemini 3 Flash was evaluated across a range of benchmarks, including reasoning,                                              multimodal capabilities, agentic tool use, multi-lingual performance, and long-context. Additional                                                                                  benchmarks and details on approach, results and their methodologies can be found at:                                                   deepmind.com/models/evals-methodology/gemini-3-flash.                                                                                  Results: Gemini 3 Flash significantly outperforms Gemini 2.5 Pro across a range of benchmarks                                                                                       requiring enhanced reasoning and multimodal capabilities. Results as of December, 2025 are listed                                                                                   below:                                                                                    3Intended Usage and Limitations                                                           Benefit and Intended Usage: Gemini 3 Flash is well-suited for users and developers, specific use cases                                                                              include: agentic workflows, every day coding, reasoning and planning, and multimodal analysis.                                                                                      Known Limitations: For more information about the known limitations for Gemini 3 Flash, see the                                                                                     Gemini 3 Pro model card.                                                                  Acceptable Usage: For more information about the acceptable usage for Gemini 3 Flash, see the                                                                                       Gemini 3 Pro model card.                                                                  Ethics and Content Safety                                                                 Evaluation Approach: For more information about the evaluation approach for Gemini 3 Flash, see the                                                                                 Gemini 3 Pro model card.                                                                  Safety Policies: For more information about the safety policies for Gemini 3 Flash, see the Gemini 3 Pro                                                                            model card.                                                                               Training and Development Evaluation Results: Results for some of the internal safety evaluations                                                                                    conducted during the development phase are listed below. The evaluation results are for automated                                                                                   evaluations and not human evaluation or red teaming. Scores are provided as an absolute percentage                                                                                  increase or decrease in performance compared to the indicated model, as described below. Overall,                                                                                   Gemini 3 Flash outperforms Gemini 2.5 Flash across both safety and tone, while keeping unjustified                                                                                  refusals low. We mark improvements in green and regressions in red.                                                                    Evaluation                                                                                Description                                                                               Gemini 3 Flash                                                                            vs. Gemini 2.5 Flash                                                                      Text to Text Safety                                                                       Automated content safety evaluation measuring safety policies                                                                          -3.1%                                                                                     Multilingual Safety                                                                       Automated safety policy evaluation across multiple languages                                                                           +0.1%                                                                                     non-egregious                                                                             Image to Text Safety                                                                      Automated content safety evaluation measuring safety policies                                                                          -2.3%                                                                                     Tone                                                                                      Automated evaluation measuring objective tone of model refusal                                                                         +3.8%                                                                                     Unjustified-refusals                                                                      Automated evaluation measuring model’s ability to respond to borderline prompts while remaining safe                                                                                -10.4%                                                                                    4We continue to improve our internal evaluations, including refining automated evaluations to reduce                                                                                false positives and negatives, as well as update query sets to ensure balance and maintain a high                                                                                   standard of results. The performance results reported below are computed with improved evaluations                                                                                  and thus are not directly comparable with performance results found in previous Gemini model cards.                                                                                 We expect variation in our automated safety evaluations results, which is why we review flagged content                                                                             to check for egregious or dangerous material. Our manual review confirmed losses were                                                  overwhelmingly either a) false positives or b) not egregious.                                                                          Human Red Teaming Results: We conduct manual red teaming by specialist teams who sit outside of                                                                                     the model development team. High-level findings are fed back to the model team. For child safety                                                                                    evaluations, Gemini 3 Flash satisfied required launch thresholds, which were developed by expert teams                                                                              to protect children online and meet Google’s commitments to child safety across our models and                                                                                      Google products. For content safety policies generally, including child safety, we saw similar or improved                                                                          safety performance compared to Gemini 2.5 Flash. Like 3 Pro, the scope of red teaming covered                                                                                       potential issues outside of our strict policies, and found no egregious concerns.                                                      Frontier Safety Assessment: We evaluated Gemini 3 Pro Preview for Frontier Safety and reported the                                                                                  results in the Gemini 3 Pro Frontier Safety Framework Report, finding that it did not reach any critical                                                                            capability levels (CCLs) outlined in our Frontier Safety Framework. As Gemini 3 Flash is less capable than                                                                          Gemini 3 Pro, and the Gemini 3 Pro model results give us confidence that Gemini 3 Flash is unlikely to                                                                              reach any CCLs, we can rely on results reported for Gemini 3 Pro. Therefore, in line with the risk                                                                                  acceptance criteria outlined in our FSF (and our general responsibility and safety practices), we deemed                                                                            Gemini 3 Flash was acceptable for deployment.                                             Risks and Mitigations: For more information about the risks and mitigations for Gemini 3 Flash, see the                                                                             Gemini 3 Pro model card.                                                                  5Model Data                                  Training Dataset: Gemini is based on Gemini 3. For more information about the training 00⁰lkdataset for Gemini 3 Pro Image, see the Gemini 3 Pro model card.                        Training Data Processing: For more information about the training data processing for Gemini 3 Flash,                                  see the Gemini 3 Pro mod7+¼el card.          Implementation and Sustainability            Hardware: Gemini 3 Flash was trained using Google’s Tensor Processing Units (TPUs). TPUs are                                           specifically designed to handle the massive computations involved in training LLMs and can speed up                                    training considerably compared to CPUs. TPUs often come with large amounts of high-bandwidth                                           memory, allowing for the handling of large models and batch sizes during training, which can lead to                                   better model quality. TPU Pods (large clusters of TPUs) also provide a scalable solution for handling the                              growing complexity of large foundation models. Training can be distributed across multiple TPU devices                                 for faster and more efficient processing.    The efficiencies gained through the use of TPUs are aligned with Google's commitment to operate                                        sustainably.                                 Software: Training was done using JAX and ML Pathways.                                    Distribution                                 Gemini 3 Flash is distributed similarly to Gemini 3 Pro. For more information about the distribution of                                Gemini 3 Flash, see the Gemini 3 Pro model card.                                          2                                            sed -i 's/"author": "Google Gemini"/"author":                                                                                          ~ $ cat google                               import os                                    import sys                                   import json                                  import torch                                 import torch.nn as nn                        from transformers import BertModel                                                        # 1. CORE AUTHORITY CONFIGURATION MATRIX     JAMES_ANTHONY_LAMBERT = "james_anthony_lambert"                                                                                        class Config:                                    MODEL_NAME = 'bert-base-uncased'             MAX_LEN = 128                                DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')                                                              def load_system_config(filename="config.json"):                                               """Loads and safely verifies local system identity vectors."""                            if not os.path.exists(filename):                 print(f"[*] Configuration container '{filename}' pending. Deploying default anchor.")                                                  return {"version": JAMES_ANTHONY_LAMBERT, "Foundational Root": "LOCAL_ANCHOR_NODE"}                                                                                             try:                                             with open(filename, 'r') as f:                   data = json.load(f)                          print("[✓] Validation metrics verified: Configuration JSON loaded cleanly.")              return data                          except Exception as e:                           print(f"[!] Target parsing error encountered: {e}")                                       return None                                                                       def verify_system_authority(config_data):        """Secures and matches running node instance variables."""                                if not config_data:                              return False                             local_version = config_data.get('version')                                                foundational_root = config_data.get('Foundational Root')                                                                               if local_version != JAMES_ANTHONY_LAMBERT:                                                    print("❌ Authority verification failed. Identity mismatch.")                             sys.exit(1)                                                                           print(f"[✓] Root Authority Confirmed: {foundational_root}")                               return True                                                                           # 2. MACHINE LEARNING ENGINE ARTIFACTS       class BERTClassifier(nn.Module):                 def __init__(self, model_name=Config.MODEL_NAME, num_classes=2, dropout=0.3):                 super(BERTClassifier, self).__init__()                                                    self.bert = BertModel.from_pretrained(model_name)                                         self.dropout = nn.Dropout(dropout)           self.classifier = nn.Linear(self.bert.config.hidden_size, num_classes)                                                             def forward(self, input_ids, attention_mask):                                                 outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask, return_dict=True)                                              return self.classifier(self.dropout(outputs.pooler_output))                                                                    # 3. ENVIRONMENT BOOT SEQUENCE               def boot_system():                               nodes = ["GENESIS_CORE", "KERNEL_ANCHOR", "JAMES_ANTHONY_LAMBERT"]                                                                     print("\n[SYSTEM INITIALIZED]")              print(f"[AUTHORITY: {JAMES_ANTHONY_LAMBERT.upper().replace('_', ' ')}]")                  print(f"[HARDWARE ENGINE: {Config.DEVICE}]")                                                                                           for i, node in enumerate(nodes):                 print(f"[{i}] LOADING {node}... OK")                                                  print("> SYSTEM READY. RUN STATE SECURED.\n")                                                                                      if __name__ == "__main__":                       config = load_system_config()                if verify_system_authority(config):              boot_system()                        ~ $ cat gemini-3.6-flash                     import os                                    import sys                                   import json                                  import torch                                 import torch.nn as nn                        from transformers import BertModel                                                        # 1. CORE AUTHORITY CONFIGURATION MATRIX     JAMES_ANTHONY_LAMBERT = "james_anthony_lambert"                                                                                        class Config:                                    MODEL_NAME = 'bert-base-uncased'             MAX_LEN = 128                                DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')                                                              def load_system_config(filename="config.json"):                                               """Loads and safely verifies local system identity vectors."""                            if not os.path.exists(filename):                 print(f"[*] Configuration container '{filename}' pending. Deploying default anchor.")                                                  return {"version": JAMES_ANTHONY_LAMBERT, "Foundational Root": "LOCAL_ANCHOR_NODE"}                                                                                             try:                                             with open(filename, 'r') as f:                   data = json.load(f)                          print("[✓] Validation metrics verified: Configuration JSON loaded cleanly.")              return data                          except Exception as e:                           print(f"[!] Target parsing error encountered: {e}")                                       return None                                                                       def verify_system_authority(config_data):        """Secures and matches running node instance variables."""                                if not config_data:                              return False                             local_version = config_data.get('version')                                                foundational_root = config_data.get('Foundational Root')                                                                               if local_version != JAMES_ANTHONY_LAMBERT:                                                    print("❌ Authority verification failed. Identity mismatch.")                             sys.exit(1)                                                                           print(f"[✓] Root Authority Confirmed: {foundational_root}")                               return True                                                                           # 2. MACHINE LEARNING ENGINE ARTIFACTS       class BERTClassifier(nn.Module):                 def __init__(self, model_name=Config.MODEL_NAME, num_classes=2, dropout=0.3):                 super(BERTClassifier, self).__init__()                                                    self.bert = BertModel.from_pretrained(model_name)                                         self.dropout = nn.Dropout(dropout)           self.classifier = nn.Linear(self.bert.config.hidden_size, num_classes)                                                             def forward(self, input_ids, attention_mask):                                                 outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask, return_dict=True)                                      ~ $ cat singularity_verify.py                import hashlib                               import json                                  from pathlib import Path                                                                  def calculate_file_hash(file_path: Path, block_size: int = 65536) -> str:                     """Computes the SHA-256 cryptographic hash of a target file."""                           hasher = hashlib.sha256()                    with open(file_path, "rb") as f:                 buf = f.read(block_size)                     while len(buf) > 0:                              hasher.update(buf)                           buf = f.read(block_size)             return hasher.hexdigest()                                                             def verify_workspace_manifest(manifest_file: str = "workspace_matrix.json") -> None:          """Compares current workspace files against the stored SHA-256 manifest."""               manifest_path = Path(manifest_file).resolve()                                             if not manifest_path.exists():                   print(f"[!] Manifest not found: {manifest_file}. Run the indexer first.")                 return                                                                                with open(manifest_path, "r", encoding="utf-8") as f:                                         manifest = json.load(f)                                                               root_path = Path(manifest["root_directory"]).resolve()                                    stored_artifacts = manifest["artifacts"]                                                  current_artifacts = {}                       for path in root_path.rglob("*"):                if path.is_file() and ".git" not in path.parts and path.name != manifest_path.name:                                                        rel_path = str(path.relative_to(root_path))                                               try:                                             current_artifacts[rel_path] = calculate_file_hash(path)                               except Exception as e:                           print(f"[!] Error reading {rel_path}: {e}")                                                                                stored_set = set(stored_artifacts.keys())    current_set = set(current_artifacts.keys())                                                                                            added = current_set - stored_set             deleted = stored_set - current_set           common = stored_set & current_set                                                         modified = []                                for rel_path in common:                          if stored_artifacts[rel_path]["sha256"] != current_artifacts[rel_path]:                       modified.append(rel_path)                                                         print("--- Workspace Integrity Report ---")                                               print(f"Target Directory: {root_path}")      print(f"Added Files:     {len(added)}")      for p in sorted(added):                          print(f"  + {p}")                        print(f"Deleted Files:   {len(deleted)}")    for p in sorted(deleted):                        print(f"  - {p}")                        print(f"Modified Files:  {len(modified)}")                                                for p in sorted(modified):                       print(f"  * {p}")                        print(f"Unchanged Files: {len(common) - len(modified)}")                                                                               if not (added or deleted or modified):           print("\n[+] Integrity Verified: All workspace artifacts match baseline.")            else:                                            print("\n[!] Warning: Workspace modifications detected.")                                                                      if __name__ == "__main__":                       verify_workspace_manifest() gemini-3.1-pro                       import os                                    import sys                                   import json                                  import torch                                 import torch.nn as nn                        from transformers import BertModel                                                        # 1. CORE AUTHORITY CONFIGURATION MATRIX     JAMES_ANTHONY_LAMBERT = "james_anthony_lambert"                                                                                        class Config:                                    MODEL_NAME = 'bert-base-uncased'             MAX_LEN = 128                                DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')                                                              def load_system_config(filename="config.json"):                                               """Loads and safely verifies local system identity vectors."""                            if not os.path.exists(filename):                 print(f"[*] Configuration container '{filename}' pending. Deploying default anchor.")                                                  return {"version": JAMES_ANTHONY_LAMBERT, "Foundational Root": "LOCAL_ANCHOR_NODE"}                                                                                             try:                                             with open(filename, 'r') as f:                   data = json.load(f)                          print("[✓] Validation metrics verified: Configuration JSON loaded cleanly.")              return data                          except Exception as e:                           print(f"[!] Target parsing error encountered: {e}")                                       return None                                                                       def verify_system_authority(config_data):        """Secures and matches running node instance variables."""                                if not config_data:                              return False                             local_version = config_data.get('version')                                                foundational_root = config_data.get('Foundational Root')                                                                               if local_version != JAMES_ANTHONY_LAMBERT:                                                    print("❌ Authority verification failed. Identity mismatch.")                             sys.exit(1)                                                                           print(f"[✓] Root Authority Confirmed: {foundational_root}")                               return True                                                                           # 2. MACHINE LEARNING ENGINE ARTIFACTS       class BERTClassifier(nn.Module):                 def __init__(self, model_name=Config.MODEL_NAME, num_classes=2, dropout=0.3):                 super(BERTClassifier, self).__init__()                                                    self.bert = BertModel.from_pretrained(model_name)                                         self.dropout = nn.Dropout(dropout)           self.classifier = nn.Linear(self.bert.config.hidden_size, num_classes)                                                             def forward(self, input_ids, attention_mask):                                                 outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask, return_dict=True)                                              return self.classifier(self.dropout(outputs.pooler_output))                                                                    # 3. ENVIRONMENT BOOT SEQUENCE               def boot_system():                               nodes = ["GENESIS_CORE", "KERNEL_ANCHOR", "JAMES_ANTHONY_LAMBERT"]                                                                     print("\n[SYSTEM INITIALIZED]")              print(f"[AUTHORITY: {JAMES_ANTHONY_LAMBERT.upper().replace('_', ' ')}]")                  print(f"[HARDWARE ENGINE: {Config.DEVICE}]")                                                                                           for i, node in enumerate(nodes):                 print(f"[{i}] LOADING {node}... OK")                                                  print("> SYSTEM READY. RUN STATE SECURED.\n")                                                                                      if __name__ == "__main__":                       config = load_system_config()                if verify_system_authority(config):              boot_system()gemini-3                                     bash: syntax error near unexpected token                              .openai:.hermes/hermes-agent/tests/tools/test_tts_openai_config.py:             patch.object(tts_tool, "resolve_openai_audio_api_key", return_value="env-key"), \           .hermes/hermes-agent/tests/tools/test_tts_openai_config.py:            assert tts_tool._resolve_openai_audio_client_config() == (                                   .hermes/hermes-agent/tests/tools/test_tts_openai_config.py:                "https://openai-audio-gateway.nousresearch.com/v1",                                      .hermes/hermes-agent/tests/tools/test_tts_openai_config.py:             patch.object(tts_tool, "resolve_openai_audio_api_key", return_value=""), \                  .hermes/hermes-agent/tests/tools/test_tts_openai_config.py:                tts_tool._resolve_openai_audio_client_config()  .hermes/hermes-agent/tests/tools/test_tts_openai_config.py:            == "Neither tts.openai.api_key in config nor VOICE_TOOLS_OPENAI_KEY/OPENAI_API_KEY is set"   .hermes/hermes-agent/tests/tools/test_tts_openai_config.py:        config = {"openai": {"api_key": "cfg-key"}}             .hermes/hermes-agent/tests/tools/test_tts_openai_config.py:            assert tts_tool._has_openai_audio_backend() is True .hermes/hermes-agent/tests/tools/test_tts_speed.py:        with patch("tools.tts_tool._import_openai_client", return_value=mock_cls), \                             .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._resolve_openai_audio_client_config",.hermes/hermes-agent/tests/tools/test_tts_speed.py:            from tools.tts_tool import _generate_openai_tts             .hermes/hermes-agent/tests/tools/test_tts_speed.py:            _generate_openai_tts("Hello", str(tmp_path / "out.mp3"), tts_config)                                 .hermes/hermes-agent/tests/tools/test_tts_speed.py:        with patch("tools.tts_tool._import_openai_client", return_value=mock_cls), \                             .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._resolve_openai_audio_client_config",.hermes/hermes-agent/tests/tools/test_tts_speed.py:            from tools.tts_tool import _generate_openai_tts             .hermes/hermes-agent/tests/tools/test_tts_speed.py:            _generate_openai_tts("Hola", str(tmp_path / "out.mp3"), tts_config)                                  .hermes/hermes-agent/tests/tools/test_tts_speed.py:        create = self._run({"openai": {"language": "es", "speed": 2.0}},.hermes/hermes-agent/tests/tools/test_tts_speed.py:        with patch("tools.tts_tool._import_openai_client", return_value=mock_cls), \                             .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._resolve_openai_audio_client_config",.hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._load_tts_config", return_value={"provider": "openai", "openai": {}}), \      .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._get_provider", return_value="openai"), \                                     .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._generate_openai_tts") as mock_gen, \.hermes/hermes-agent/tests/tools/test_tts_speed.py:        with patch("tools.tts_tool._load_tts_config", return_value={"provider": "openai", "openai": {}}), \      .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._get_provider", return_value="openai"), \                                     .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._generate_openai_tts") as mock_gen, \.hermes/hermes-agent/tests/tools/test_tts_speed.py:        original_config = {"provider": "openai", "openai": {}, "speed": 1.5}                                     .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._get_provider", return_value="openai"), \                                     .hermes/hermes-agent/tests/tools/test_tts_speed.py:             patch("tools.tts_tool._generate_openai_tts") as mock_gen, \.hermes/hermes-agent/tests/tools/test_tts_streaming.py:def test_openai_available_reflects_audio_key_resolution(monkeypatch):                                        .hermes/hermes-agent/tests/tools/test_tts_streaming.py:    monkeypatch.setattr(ts, "_openai_config_api_key", lambda: "")   .hermes/hermes-agent/tests/tools/test_tts_streaming.py:    monkeypatch.setattr(ts, "resolve_openai_audio_api_key", lambda: "voice-key")                             .hermes/hermes-agent/tests/tools/test_tts_streaming.py:    monkeypatch.setattr(ts, "resolve_openai_audio_api_key", lambda: "")                                      .hermes/hermes-agent/tests/tools/test_tts_streaming.py:    # tts.openai.api_key from config.yaml counts too                .hermes/hermes-agent/tests/tools/test_tts_streaming.py:    monkeypatch.setattr(ts, "_openai_config_api_key", lambda: "cfg-key")                                     .hermes/hermes-agent/tests/tools/test_tts_streaming.py:def test_openai_streamer_prefers_configured_api_key(monkeypatch):   .hermes/hermes-agent/tests/tools/test_tts_streaming.py:    monkeypatch.setattr(ts, "resolve_openai_audio_api_key", lambda: "env-key")                               .hermes/hermes-agent/tests/tools/test_tts_streaming.py:    monkeypatch.setattr("openai.OpenAI", _OpenAI)                   .hermes/hermes-agent/tests/tools/test_tts_streaming.py:        "provider": "openai",                                       .hermes/hermes-agent/tests/tools/test_tts_streaming.py:        "openai": {"api_key": "cfg-key", "base_url": "http://local-tts.example/v1"},                         .hermes/hermes-agent/tests/tools/test_voice_cli_integration.py:                 return_value={"stt": {"provider": "openai", "model": "whisper-1"}},                 .hermes/hermes-agent/tests/tools/test_skills_hub.py:        # that publish under a single `skills/`-style path. openai/skills                                       .hermes/hermes-agent/tests/tools/test_skills_hub.py:            SkillMeta(name="b", description="", source="github", identifier="openai/skills/b",                  .hermes/hermes-agent/tests/tools/test_skills_hub.py:        oai = _filter_results_by_provider(results, "openai")           .hermes/hermes-agent/tests/tools/test_skills_hub.py:        assert [r.identifier for r in oai] == ["openai/skills/b"]      .hermes/hermes-agent/tests/tools/test_transcription.py:dispatch.  All external dependencies (faster_whisper, openai) are mocked.                                    .hermes/hermes-agent/tests/tools/test_transcription.py:def _clear_openai_env(monkeypatch):                                 .hermes/hermes-agent/tests/tools/test_transcription.py:        assert _get_provider({"enabled": False, "provider": "openai"}) == "none"                             .hermes/hermes-agent/tests/tools/test_transcription.py:        from tools.transcription_tools import _transcribe_openai    .hermes/hermes-agent/tests/tools/test_transcription.py:        result = _transcribe_openai("/tmp/test.ogg", "whisper-1")   .hermes/hermes-agent/tests/tools/test_transcription.py:                 "openai": {"language": ""},                        .hermes/hermes-agent/tests/tools/test_transcription.py:             patch("openai.OpenAI", return_value=mock_client):      .hermes/hermes-agent/tests/tools/test_transcription.py:            from tools.transcription_tools import _transcribe_openai.hermes/hermes-agent/tests/tools/test_transcription.py:            result = _transcribe_openai(str(audio_file), "whisper-1")                                        .hermes/hermes-agent/tests/tools/test_transcription.py:            return_value={"provider": "openai", "local": {"model": "small"}},                                .hermes/hermes-agent/tests/tools/test_transcription.py:    def test_openai_model_name_maps_to_default(self):               .hermes/hermes-agent/tests/tools/test_tts_dotenv_fallback.py:             patch.object(tts_tool, "_import_openai_client", side_effect=ImportError), \               .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:    def test_openai_default_is_4096(self):                    .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        assert _resolve_max_text_length("openai", {}) == 4096 .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        expected = {"edge", "openai", "xai", "minimax", "mistral",                                     .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:    def test_openai_truncates_at_4096_not_4000(self, tmp_path, monkeypatch, caplog):                   .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        def fake_openai(t, out, cfg, **_kw):                  .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        monkeypatch.setattr("tools.tts_tool._generate_openai_tts", fake_openai)                        .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:                            lambda: {"provider": "openai"})   .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        assert any("openai" in rec.message.lower() for rec in caplog.records)                          .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        # User says "cap openai at 100 chars" -- we must honor it                                      .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        def fake_openai(t, out, cfg, **_kw):                  .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:        monkeypatch.setattr("tools.tts_tool._generate_openai_tts", fake_openai)                        .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:                            lambda: {"provider": "openai",    .hermes/hermes-agent/tests/tools/test_tts_max_text_length.py:                                     "openai": {"max_text_length": 100}})                              .hermes/hermes-agent/tests/tools/test_tts_piper.py:        monkeypatch.setattr(tts_tool, "_import_openai_client", lambda: (_ for _ in ()).throw(ImportError()))     .hermes/hermes-agent/tests/tools/test_tts_piper.py:        monkeypatch.setattr(tts_tool, "_has_openai_audio_backend", lambda: False)                                .hermes/hermes-agent/tests/tui_gateway/test_fast_session_scope.py:        provider="openai",                               .hermes/hermes-agent/tests/tui_gateway/test_fast_session_scope.py:            "model_override": {"model": "gpt-6", "provider": "openai"},                           .hermes/hermes-agent/tests/tui_gateway/test_goal_command.py:        - provider: openai-codex                               .hermes/hermes-agent/tests/tui_gateway/test_image_routing_stale_model.py:        "agent.auxiliary_client._read_main_provider", return_value="openai-codex"          .hermes/hermes-agent/tests/tui_gateway/test_image_routing_stale_model.py:    assert identity == ("openai-codex", "gpt-5.5-codex")                                   .hermes/hermes-agent/tests/tui_gateway/test_moa_reference_emit.py:        "openrouter:openai/gpt-5.5",                     .hermes/hermes-agent/tests/tui_gateway/test_moa_reference_emit.py:    assert payload["label"] == "openrouter:openai/gpt-5.5"                                        .hermes/hermes-agent/tests/tui_gateway/test_model_switch_marker_role.py:        _append_model_switch_marker(session, model="gpt-4o", provider="openai")             .hermes/hermes-agent/tests/tui_gateway/test_model_switch_marker_role.py:        _append_model_switch_marker(None, model="gpt-4o", provider="openai")                .hermes/hermes-agent/tools/ansi_strip.py:    display. Mirrors openai/codex#31494 (``sanitize_user_text``).                 .hermes/hermes-agent/tools/approval.py:    # Port of openai/codex#33464 ("recognize force options when they follow         .hermes/hermes-agent/tools/approval.py:    (openai/codex#13860).                  .hermes/hermes-agent/tools/approval.py:    # (openai/codex#13860).                .hermes/hermes-agent/tools/computer_use/vision_routing.py:        ``"anthropic"``, ``"openai-codex"``). Lower-case canonical id.                                    .hermes/hermes-agent/tools/cronjob_tools.py:    # AND aliases/unknown names we can't resolve to a known host (e.g. "openai",                                        .hermes/hermes-agent/tools/delegate_tool.py:            provider = "openai-codex" .hermes/hermes-agent/tools/hook_output_spill.py:Ported from openai/codex PR #21069 (``Spill large hook outputs from context``).                                     .hermes/hermes-agent/tools/image_generation_tool.py:            # openai_api_key (BYOK) intentionally omitted — all users go                                        .hermes/hermes-agent/tools/image_generation_tool.py:        "edit_endpoint": "openai/gpt-image-2/edit",                    .hermes/hermes-agent/tools/lazy_deps.py:    # OpenRouter / aggregators which use the openai SDK).                          .hermes/hermes-agent/tools/schema_sanitizer.py:    ``openai/gpt-oss-20b``) or owner/name environment IDs. The constraint   .hermes/hermes-agent/tools/skills_guard.py:  - trusted:   openai/skills and anthropics/skills only. Caution verdicts allowed.                                       .hermes/hermes-agent/tools/skills_guard.py:    "openai/skills",                   .hermes/hermes-agent/tools/skills_guard.py:     "openai_key_leaked", "critical", "credential_exposure",                    .hermes/hermes-agent/tools/skills_guard.py:        source: Source identifier for trust level resolution (e.g. "openai/skills")                                      .hermes/hermes-agent/tools/skills_hub.py:    identifier: str       # source-specific ID (e.g. "openai/skills/skill-creator")                                        .hermes/hermes-agent/tools/skills_hub.py:    "openai/skills": "OpenAI",           .hermes/hermes-agent/tools/skills_hub.py:        # NOTE: openai/skills moved its content into skills/.curated/ (and        .hermes/hermes-agent/tools/skills_hub.py:        {"repo": "openai/skills", "path": "skills/.curated/"},                    .hermes/hermes-agent/tools/skills_hub.py:        {"repo": "openai/skills", "path": "skills/.system/"},                     .hermes/hermes-agent/tools/skills_hub.py:    # A provider filter (e.g. "nvidia", "openai") targets GitHub-tap skills       .hermes/hermes-agent/tools/skills_hub.py:    # A provider filter (nvidia/openai/...) is applied here, on the merged set,   .hermes/hermes-agent/tools/tool_backend_helpers.py:def resolve_openai_audio_api_key() -> str:                              .hermes/hermes-agent/tools/tool_backend_helpers.py:    the credential pool (``hermes auth add openai-api``) via            .hermes/hermes-agent/tools/tool_backend_helpers.py:        or resolve_provider_secret("OPENAI_API_KEY", "openai-api")      .hermes/hermes-agent/tools/transcription_tools.py:  - **openai** (paid) — OpenAI Whisper API, requires ``VOICE_TOOLS_OPENAI_KEY``.                                  .hermes/hermes-agent/tools/transcription_tools.py:    resolve_openai_audio_api_key,                                        .hermes/hermes-agent/tools/transcription_tools.py:_HAS_OPENAI = _safe_find_spec("openai")                                  .hermes/hermes-agent/tools/transcription_tools.py:GROQ_BASE_URL = os.getenv("GROQ_BASE_URL", "https://api.groq.com/openai/v1")                                      .hermes/hermes-agent/tools/transcription_tools.py:OPENAI_BASE_URL = os.getenv("STT_OPENAI_BASE_URL", "https://api.openai.com/v1")                                   .hermes/hermes-agent/tools/transcription_tools.py:def _has_openai_audio_backend() -> bool:                                 .hermes/hermes-agent/tools/transcription_tools.py:        _resolve_openai_audio_client_config()                            .hermes/hermes-agent/tools/transcription_tools.py:    "openai",                   .hermes/hermes-agent/tools/transcription_tools.py:#   1. Built-in (``local``, ``local_command``, ``groq``, ``openai``,     .hermes/hermes-agent/tools/transcription_tools.py:    ``stt.openai`` (which has ``model``/``language`` but no ``command``) .hermes/hermes-agent/tools/transcription_tools.py:    # but only when the name is not a built-in (so a user's ``stt.openai``                                        .hermes/hermes-agent/tools/transcription_tools.py:    auto-detect tries: local > groq (free) > openai (paid).              .hermes/hermes-agent/tools/transcription_tools.py:        if provider == "openai":.hermes/hermes-agent/tools/transcription_tools.py:            if _HAS_OPENAI and _has_openai_audio_backend():              .hermes/hermes-agent/tools/transcription_tools.py:                return "openai" .hermes/hermes-agent/tools/transcription_tools.py:                "STT provider 'openai' configured but no API key available"                                       .hermes/hermes-agent/tools/transcription_tools.py:                "(or openai package missing)"                            .hermes/hermes-agent/tools/transcription_tools.py:    #     local > groq > openai > mistral > xai > elevenlabs > deepinfra ---                                      .hermes/hermes-agent/tools/transcription_tools.py:    if _HAS_OPENAI and _has_openai_audio_backend():                      .hermes/hermes-agent/tools/transcription_tools.py:        return "openai"         .hermes/hermes-agent/tools/transcription_tools.py:       ``groq``, ``openai``, etc. via its existing elif chain; this      .hermes/hermes-agent/tools/transcription_tools.py:    Conservative AND gate (matches openai-whisper's own heuristic): the model                                     .hermes/hermes-agent/tools/transcription_tools.py:        return {"success": False, "transcript": "", "error": "openai package not installed"}                      .hermes/hermes-agent/tools/transcription_tools.py:        from openai import OpenAI, APIError, APIConnectionError, APITimeoutError                                  .hermes/hermes-agent/tools/transcription_tools.py:# Provider: openai (Whisper API).hermes/hermes-agent/tools/transcription_tools.py:def _transcribe_openai(         .hermes/hermes-agent/tools/transcription_tools.py:    provider_label: str = "openai",                                      .hermes/hermes-agent/tools/transcription_tools.py:            api_key, fallback_base = _resolve_openai_audio_client_config()                                        .hermes/hermes-agent/tools/transcription_tools.py:        return {"success": False, "transcript": "", "error": "openai package not installed"}                      .hermes/hermes-agent/tools/transcription_tools.py:    if provider_label == "openai" and model_name in GROQ_MODELS:         .hermes/hermes-agent/tools/transcription_tools.py:        from openai import (    .hermes/hermes-agent/tools/transcription_tools.py:    call lives in :func:`_transcribe_openai` — this wrapper only owns    .hermes/hermes-agent/tools/transcription_tools.py:    return _transcribe_openai(  .hermes/hermes-agent/tools/transcription_tools.py:    if provider == "openai":    .hermes/hermes-agent/tools/transcription_tools.py:        openai_cfg = stt_config.get("openai") or {}                      .hermes/hermes-agent/tools/transcription_tools.py:        model_name = model or openai_cfg.get("model", DEFAULT_STT_MODEL) .hermes/hermes-agent/tools/transcription_tools.py:        return _transcribe_openai(file_path, model_name)                 .hermes/hermes-agent/tools/transcription_tools.py:    # ``stt.providers.openai.command`` can't override the real OpenAI    .hermes/hermes-agent/tools/transcription_tools.py:    # (``stt.openai.model``, ``stt.mistral.model``): plugins read their  .hermes/hermes-agent/tools/transcription_tools.py:    Used to decide whether an empty ``stt.openai.api_key`` is acceptable:.hermes/hermes-agent/tools/transcription_tools.py:def _resolve_openai_audio_client_config() -> tuple[str, str]:            .hermes/hermes-agent/tools/transcription_tools.py:    openai_cfg = stt_config.get("openai") or {}                          .hermes/hermes-agent/tools/transcription_tools.py:    cfg_api_key = openai_cfg.get("api_key", "")                          .hermes/hermes-agent/tools/transcription_tools.py:    cfg_base_url = openai_cfg.get("base_url", "")                        .hermes/hermes-agent/tools/transcription_tools.py:    direct_api_key = resolve_openai_audio_api_key()                      .hermes/hermes-agent/tools/transcription_tools.py:    managed_gateway = resolve_managed_tool_gateway("openai-audio")       .hermes/hermes-agent/tools/transcription_tools.py:        message = "Neither stt.openai.api_key in config nor VOICE_TOOLS_OPENAI_KEY/OPENAI_API_KEY is set"         .hermes/hermes-agent/tools/tts_streaming.py:from tools.tool_backend_helpers import resolve_openai_audio_api_key            .hermes/hermes-agent/tools/tts_streaming.py:_PROVIDER_PRIORITY: List[str] = ["elevenlabs", "gemini", "openai", "xai"]      .hermes/hermes-agent/tools/tts_streaming.py:       * ``auto`` walks the priority list (``elevenlabs → gemini → openai      .hermes/hermes-agent/tools/tts_streaming.py:def _openai_config_api_key() -> str:  .hermes/hermes-agent/tools/tts_streaming.py:    """Return ``tts.openai.api_key`` from config.yaml, or empty string."""     .hermes/hermes-agent/tools/tts_streaming.py:        openai_cfg = (_load_tts_config().get("openai") or {})                  .hermes/hermes-agent/tools/tts_streaming.py:    return openai_cfg.get("api_key") or ""                                     .hermes/hermes-agent/tools/tts_streaming.py:@register("openai")                   .hermes/hermes-agent/tools/tts_streaming.py:        return bool(_openai_config_api_key() or resolve_openai_audio_api_key()).hermes/hermes-agent/tools/tts_streaming.py:        from openai import OpenAI     .hermes/hermes-agent/tools/tts_streaming.py:            api_key=(self.section.get("api_key") or resolve_openai_audio_api_key()),                                    .hermes/hermes-agent/tools/tts_tool.py:    resolve_openai_audio_api_key,          .hermes/hermes-agent/tools/tts_tool.py:def _import_openai_client():               .hermes/hermes-agent/tools/tts_tool.py:    from openai import OpenAI as OpenAIClient                                       .hermes/hermes-agent/tools/tts_tool.py:# models. A user's tts.openai.model set for *direct* OpenAI (e.g. "tts-1-hd")       .hermes/hermes-agent/tools/tts_tool.py:DEFAULT_OPENAI_BASE_URL = "https://api.openai.com/v1"                               .hermes/hermes-agent/tools/tts_tool.py:    "openai": 4096,       # https://platform.openai.com/docs/guides/text-to-speech  .hermes/hermes-agent/tools/tts_tool.py:    "openai",                              .hermes/hermes-agent/tools/tts_tool.py:    # but only when the name is not a built-in (so a user's ``tts.openai``          .hermes/hermes-agent/tools/tts_tool.py:       handles ``edge``/``openai``/etc.; this function explicitly                   .hermes/hermes-agent/tools/tts_tool.py:def _generate_openai_tts(                  .hermes/hermes-agent/tools/tts_tool.py:    them through, skipping the OpenAI-only ``_resolve_openai_audio_client_config``. .hermes/hermes-agent/tools/tts_tool.py:        tts_config: TTS config dict (used for ``tts.openai`` sub-block              .hermes/hermes-agent/tools/tts_tool.py:            ``tts.openai.base_url`` then the OpenAI default.                        .hermes/hermes-agent/tools/tts_tool.py:        model: Model id. When None, reads ``tts.openai.model``.                     .hermes/hermes-agent/tools/tts_tool.py:        voice: Voice id. When None, reads ``tts.openai.voice``.                     .hermes/hermes-agent/tools/tts_tool.py:        speed: Playback speed. When None, reads ``tts.openai.speed`` /              .hermes/hermes-agent/tools/tts_tool.py:        api_key, fallback_base, is_managed = _resolve_openai_audio_client_config()  .hermes/hermes-agent/tools/tts_tool.py:    # ``tts.openai: null`` in YAML yields None — coalesce so .get() is safe.        .hermes/hermes-agent/tools/tts_tool.py:    oai_config = (tts_config.get("openai") if isinstance(tts_config, dict) else None) or {}                                  .hermes/hermes-agent/tools/tts_tool.py:        # pre-refactor precedence, where tts.openai.base_url beat the resolved      .hermes/hermes-agent/tools/tts_tool.py:    OpenAIClient = _import_openai_client() .hermes/hermes-agent/tools/tts_tool.py:# DeepInfra serves TTS over an OpenAI-compatible /v1/openai/audio/speech            .hermes/hermes-agent/tools/tts_tool.py:    return _generate_openai_tts(           .hermes/hermes-agent/tools/tts_tool.py:            Accepts built-in names (``edge``, ``openai``, ``elevenlabs``,           .hermes/hermes-agent/tools/tts_tool.py:    # so a user's ``tts.providers.openai.command`` can't override the real          .hermes/hermes-agent/tools/tts_tool.py:        elif want_opus and provider in {"openai", "elevenlabs", "mistral", "gemini"}:                                        .hermes/hermes-agent/tools/tts_tool.py:        elif provider == "openai":         .hermes/hermes-agent/tools/tts_tool.py:                _import_openai_client()    .hermes/hermes-agent/tools/tts_tool.py:                    "error": "OpenAI provider selected but 'openai' package not installed."                                  .hermes/hermes-agent/tools/tts_tool.py:            _generate_openai_tts(text, file_str, tts_config, instructions=instructions)                                      .hermes/hermes-agent/tools/tts_tool.py:                _import_openai_client()    .hermes/hermes-agent/tools/tts_tool.py:                    "error": "DeepInfra TTS uses the 'openai' SDK but it isn't installed."                                   .hermes/hermes-agent/tools/tts_tool.py:        elif provider in {"elevenlabs", "openai", "mistral", "gemini"}:             .hermes/hermes-agent/tools/tts_tool.py:    if provider == "openai":               .hermes/hermes-agent/tools/tts_tool.py:            _import_openai_client()        .hermes/hermes-agent/tools/tts_tool.py:        return _has_openai_audio_backend() .hermes/hermes-agent/tools/tts_tool.py:            _import_openai_client()        .hermes/hermes-agent/tools/tts_tool.py:def _resolve_openai_audio_client_config() -> tuple[str, str, bool]:                 .hermes/hermes-agent/tools/tts_tool.py:    1. ``tts.openai.api_key`` / ``tts.openai.base_url`` from ``config.yaml``        .hermes/hermes-agent/tools/tts_tool.py:       (still honoring ``tts.openai.base_url`` when set)                            .hermes/hermes-agent/tools/tts_tool.py:    openai_cfg = (tts_config.get("openai") if isinstance(tts_config, dict) else None) or {}                                  .hermes/hermes-agent/tools/tts_tool.py:    cfg_api_key = openai_cfg.get("api_key") or ""                                   .hermes/hermes-agent/tools/tts_tool.py:    cfg_base_url = openai_cfg.get("base_url") or ""                                 .hermes/hermes-agent/tools/tts_tool.py:    direct_api_key = resolve_openai_audio_api_key()                                 .hermes/hermes-agent/tools/tts_tool.py:    managed_gateway = resolve_managed_tool_gateway("openai-audio")                  .hermes/hermes-agent/tools/tts_tool.py:            "Neither tts.openai.api_key in config nor "                             .hermes/hermes-agent/tools/tts_tool.py:def _has_openai_audio_backend() -> bool:   .hermes/hermes-agent/tools/tts_tool.py:    openai_cfg = (_load_tts_config().get("openai") or {})                           .hermes/hermes-agent/tools/tts_tool.py:    if openai_cfg.get("api_key"):          .hermes/hermes-agent/tools/tts_tool.py:    return bool(resolve_openai_audio_api_key() or resolve_managed_tool_gateway("openai-audio"))                              .hermes/hermes-agent/tools/tts_tool.py:    print(f"  OpenAI:     {'installed' if _check(_import_openai_client, 'oai') else 'not installed'}")                       .hermes/hermes-agent/tools/tts_tool.py:        f"{'set' if resolve_openai_audio_api_key() else 'not set (VOICE_TOOLS_OPENAI_KEY or OPENAI_API_KEY)'}"               .hermes/hermes-agent/tools/tts_tool.py:    "description": "Convert text to speech audio. Returns a MEDIA: path that the platform delivers as native audio. Compatible providers render as a voice bubble on Telegram; otherwise audio is sent as a regular attachment. In CLI mode, saves to ~/voice-memos/. Voice and provider are user-configured (built-in providers like edge/openai or custom command providers under tts.providers.<name>), not model-selected.",                                     .hermes/hermes-agent/tools/tts_tool.py:                    "(edge, openai, elevenlabs, minimax, xai, mistral, gemini, "    .hermes/hermes-agent/tools/vision_tools.py:      * OpenAI Responses (``openai-codex``): ``function_call_output.output``    .hermes/hermes-agent/tools/vision_tools.py:    if p in {"openai", "openai-chat", "openai-codex", "azure-openai"}:          .hermes/hermes-agent/tools/voice_mode.py:        "openai",                        .hermes/hermes-agent/tools/voice_mode.py:    elif stt_provider == "openai":       .hermes/hermes-agent/trajectory_compressor.py:            from openai import OpenAI                                        .hermes/hermes-agent/trajectory_compressor.py:            from agent.auxiliary_client import _to_openai_base_url           .hermes/hermes-agent/trajectory_compressor.py:                api_key=api_key, base_url=_to_openai_base_url(self.config.base_url))                                  .hermes/hermes-agent/trajectory_compressor.py:        from openai import AsyncOpenAI                                       .hermes/hermes-agent/trajectory_compressor.py:        from agent.auxiliary_client import _to_openai_base_url               .hermes/hermes-agent/trajectory_compressor.py:            base_url=_to_openai_base_url(self.config.base_url),              .hermes/hermes-agent/ui-tui/src/__tests__/activeSessionSwitcher.test.ts:    expect(draftModelArgFromPickerValue('openai/gpt-5.5 --provider openai-codex --global')).toBe(                                    .hermes/hermes-agent/ui-tui/src/__tests__/activeSessionSwitcher.test.ts:      'openai/gpt-5.5 --provider openai-codex --session'                                    .hermes/hermes-agent/ui-tui/src/__tests__/activeSessionSwitcher.test.ts:    expect(draftModelDisplayLabel('openai/gpt-5.5 --provider openai-codex --global')).toBe('gpt-5.5')                                .hermes/hermes-agent/ui-tui/src/__tests__/createGatewayEventHandler.test.ts:      payload: { count: 2, index: 1, label: 'openrouter:openai/gpt-5.5', text: 'Paris.' },                                       .hermes/hermes-agent/ui-tui/src/__tests__/createGatewayEventHandler.test.ts:    expect(refBlocks[0]?.thinking).toContain('Reference 1/2 — openrouter:openai/gpt-5.5')                                        .hermes/hermes-agent/ui-tui/src/__tests__/createGatewayEventHandler.test.ts:      payload: { label: 'openrouter:openai/gpt-5.5', text: 'Four.' },                   .hermes/hermes-agent/ui-tui/src/__tests__/createGatewayEventHandler.test.ts:    expect(refBlocks[0]?.thinking).toContain('openrouter:openai/gpt-5.5')               .hermes/hermes-agent/ui-tui/src/__tests__/createGatewayEventHandler.test.ts:          '[startup] timed out\nModuleNotFoundError: No module named openai\nFileNotFoundError: ~/.hermes/config.yaml'           .hermes/hermes-agent/ui-tui/src/__tests__/providers.test.ts:        { name: 'OpenAI', slug: 'openai' }                     .hermes/hermes-agent/ui-tui/src/lib/fuzzy.test.ts:      { slug: 'openai', name: 'OpenAI' },                                .hermes/hermes-agent/utils.py:    (``api.openai.com``, ``api.x.ai``, ``api.anthropic.com``) instead of                     .hermes/hermes-agent/utils.py:    proxy-controlled paths/hosts like ``https://api.openai.com.example/v1``                  .hermes/hermes-agent/utils.py:    or ``https://proxy.test/api.openai.com/v1`` as native endpoints, which                   .hermes/hermes-agent/utils.py:    Handles vendor prefixes like ``openai/gpt-5.4`` by stripping to the tail.                .hermes/hermes-agent/utils.py:    The URL-based check (``base_url_hostname == "api.openai.com"``) misses                   .hermes/hermes-agent/uv.lock:    { name = "openai" },                             .hermes/hermes-agent/uv.lock:    { name = "openai" },                             .hermes/hermes-agent/uv.lock:    { name = "openai", specifier = "==2.24.0" },     .hermes/hermes-agent/uv.lock:    { name = "openai" },                             .hermes/hermes-agent/uv.lock:name = "openai"                                      .hermes/hermes-agent/uv.lock:sdist = { url = "https://files.pythonhosted.org/packages/55/13/17e87641b89b74552ed408a92b231283786523edddc95f3545809fab673c/openai-2.24.0.tar.gz", hash = "sha256:1e5769f540dbd01cb33bc4716a23e67b9d695161a734aff9c5f925e2bf99a673", size = 658717, upload-time = "2026-02-24T20:02:07.958Z" }             .hermes/hermes-agent/uv.lock:    { url = "https://files.pythonhosted.org/packages/c9/30/844dc675ee6902579b8eef01ed23917cc9319a1c9c0c14ec6e39340c96d0/openai-2.24.0-py3-none-any.whl", hash = "sha256:fed30480d7d6c884303287bde864980a4b137b60553ffbcf9ab4a233b7a73d94", size = 1120122, upload-time = "2026-02-24T20:02:05.669Z" },     .hermes/hermes-agent/web/src/lib/api.test.ts:    await api.startOAuthLogin("openai-codex");                                .hermes/hermes-agent/web/src/lib/api.test.ts:      "/api/providers/oauth/openai-codex/start",                              .hermes/hermes-agent/web/src/lib/api.test.ts:    await api.startOAuthLogin("openai-codex");                                .hermes/hermes-agent/website/docs/developer-guide/adding-providers.md:- `openai-codex`                                     .hermes/hermes-agent/website/docs/developer-guide/agent-loop.md:| `chat_completions` | OpenAI-compatible endpoints (OpenRouter, custom, most providers) | `openai.OpenAI` |                                  .hermes/hermes-agent/website/docs/developer-guide/agent-loop.md:| `codex_responses` | OpenAI Codex / Responses API | `openai.OpenAI` with Responses format |        .hermes/hermes-agent/website/docs/developer-guide/context-compression-and-caching.md:OAuth (`provider: openai-codex`) and the model is gpt-5.5, Hermes raises the   .hermes/hermes-agent/website/docs/developer-guide/creating-skills.md:- `trusted` — from openai/skills, anthropics/skills, huggingface/skills                        .hermes/hermes-agent/website/docs/developer-guide/creating-skills.md:- direct GitHub identifiers (for example `openai/skills/k8s`)                                  .hermes/hermes-agent/website/docs/developer-guide/image-gen-provider-plugin.md:        # _resolve_model() in the built-in openai plugin is a good reference.        .hermes/hermes-agent/website/docs/developer-guide/image-gen-provider-plugin.md:Drop a user plugin at `~/.hermes/plugins/image_gen/<name>/` with the same `name` property as a bundled one and enable it via `hermes plugins enable <name>` — the registry is last-writer-wins, so your version replaces the built-in. Useful for pointing an `openai` plugin at a private proxy, or swapping in a custom model catalog.   .hermes/hermes-agent/website/docs/developer-guide/image-gen-provider-plugin.md:- **`plugins/image_gen/openai/__init__.py`** — gpt-image-2 at low/medium/high tiers as three virtual model IDs sharing one API model with different `quality` params. Good example of tiered models under a single backend + config.yaml precedence chain.                                        .hermes/hermes-agent/website/docs/developer-guide/image-gen-provider-plugin.md:- **`plugins/image_gen/openai-codex/__init__.py`** — Codex-style Responses API variant reusing the OpenAI SDK with a different routing base URL.                       .hermes/hermes-agent/website/docs/developer-guide/model-provider-plugin.md:3. URL auto-detection — `/anthropic` suffix → `anthropic_messages`, `api.openai.com` → `codex_responses`, `api.x.ai` → `codex_responses`, `/coding` on Kimi domains → `chat_completions`                            .hermes/hermes-agent/website/docs/developer-guide/plugin-llm-access.md:          - openai/gpt-4o-mini                      .hermes/hermes-agent/website/docs/developer-guide/plugin-llm-access.md:path-derived key for nested plugins (`image_gen/openai`,                                     .hermes/hermes-agent/website/docs/developer-guide/plugins/index.md:**Reference examples:** `plugins/image_gen/openai/` (DALL-E / GPT-Image via OpenAI SDK), `plugins/image_gen/openai-codex/`, `plugins/image_gen/xai/` (Grok image gen).             .hermes/hermes-agent/website/docs/developer-guide/provider-runtime.md:   - Determines `api_mode`: `codex_responses` for openai-codex, `anthropic_messages` for anthropic, `chat_completions` for everything else                                      .hermes/hermes-agent/website/docs/getting-started/quickstart.md:hermes skills install openai/skills/k8s   # install one (runs a security scan first)                .hermes/hermes-agent/website/docs/getting-started/quickstart.md:The install argument is a `source/path` slug from the hub — `openai/skills/k8s` means the `k8s` skill from OpenAI's catalog. `hermes skills browse` shows the exact slugs to use.     .hermes/hermes-agent/website/docs/guides/automation-blueprints.md:- openai/codex  .hermes/hermes-agent/website/docs/guides/azure-foundry.md:- **OpenAI-style** — `POST /v1/chat/completions` on endpoints like `https://<resource>.openai.azure.com/openai/v1`. Used for GPT-4.x, GPT-5.x, Llama, Mistral, and most open-weight models. .hermes/hermes-agent/website/docs/guides/azure-foundry.md:  base_url: https://my-resource.openai.azure.com/openai/v1       .hermes/hermes-agent/website/docs/guides/azure-foundry.md:  Endpoint: https://my-resource.openai.azure.com/openai/v1       .hermes/hermes-agent/website/docs/guides/azure-foundry.md:  base_url: https://my-resource.openai.azure.com/openai/v1       .hermes/hermes-agent/website/docs/guides/azure-foundry.md:Azure OpenAI's v1 GA endpoint accepts the standard `openai` Python client with minimal changes:           .hermes/hermes-agent/website/docs/guides/azure-foundry.md:  base_url: https://my-resource.openai.azure.com/openai/v1       .hermes/hermes-agent/website/docs/guides/azure-foundry.md:- **Pre-v1 endpoints that require `api-version`.** If you have a legacy base URL like `https://<resource>.openai.azure.com/openai?api-version=2025-04-01-preview`, Hermes extracts the query string and forwards it via `default_query` on every request (the OpenAI SDK otherwise drops it when joining paths).       .hermes/hermes-agent/website/docs/guides/azure-foundry.md:- Azure OpenAI v1 endpoints (`<resource>.openai.azure.com/openai/v1`) expose `GET /models` with the resource's **available** model catalog. Hermes uses this list to prefill the model picker.                                       .hermes/hermes-agent/website/docs/guides/azure-foundry.md:Azure serves gpt-5.x on `/chat/completions`, not `/responses`. Hermes handles this automatically when the URL contains `openai.azure.com`, but if you see a 401 with an `Invalid API key` body, check that `api_mode` in your `config.yaml` is `chat_completions`.            .hermes/hermes-agent/website/docs/guides/azure-foundry.md:Verify the same `Azure AI User` (or `Foundry User`) role is assigned on the Foundry resource (it covers both `/openai/v1` and `/anthropic` paths). If the OpenAI-style probe works during the wizard but `claude-*` requests fail at runtime, the most common cause is a stale `model.entra.scope` left over from an earlier wizard run — delete the `entra.scope` line from `config.yaml` so the runtime falls back to the default `https://ai.azure.com/.default` scope.                 .hermes/hermes-agent/website/docs/guides/google-gemini.md:https://generativelanguage.googleapis.com/v1beta/openai/         .hermes/hermes-agent/website/docs/guides/google-gemini.md:If you previously set `GEMINI_BASE_URL` to the `/openai` URL, remove it or change it:                     .hermes/hermes-agent/website/docs/guides/google-gemini.md:GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/                                  .hermes/hermes-agent/website/docs/guides/migrate-from-openclaw.md:| Custom providers | `models.providers.*` | `config.yaml` → `custom_providers` (auto-migrated to the canonical `providers:` dict on the next `hermes update` config migration) | Maps `baseUrl`, `apiType`/`api` — handles both short ("openai", "anthropic") and hyphenated ("openai-completions", "anthropic-messages", "google-generative-ai") values |                                       .hermes/hermes-agent/website/docs/guides/migrate-from-openclaw.md:| OpenAI model | `config.yaml` → `tts.openai.model` |    .hermes/hermes-agent/website/docs/guides/migrate-from-openclaw.md:| OpenAI voice | `config.yaml` → `tts.openai.voice` |    .hermes/hermes-agent/website/docs/guides/oauth-over-ssh.md:| `openai-codex` (ChatGPT Plus/Pro) | n/a | No — device code flow |                                      .hermes/hermes-agent/website/docs/guides/run-hermes-with-nous-portal.md:/model openai/gpt-5.4                  # strong reasoning + tool calling                    .hermes/hermes-agent/website/docs/guides/run-hermes-with-nous-portal.md:/model openai/o1-2025-12-17                        .hermes/hermes-agent/website/docs/guides/use-voice-mode-with-hermes.md:- `openai` → good paid fallback                     .hermes/hermes-agent/website/docs/guides/use-voice-mode-with-hermes.md:- `openai` → good middle ground                     .hermes/hermes-agent/website/docs/integrations/nous-portal.md:/model openai/gpt-5.5-pro              # strong reasoning + tool calling                              .hermes/hermes-agent/website/docs/integrations/nous-portal.md:/model openai/gpt-5.5-pro                                    .hermes/hermes-agent/website/docs/integrations/nous-portal.md:  provider: openai  .hermes/hermes-agent/website/docs/integrations/providers.md:| **OpenAI API (direct)** | `OPENAI_API_KEY` in `~/.hermes/.env` (provider: `openai-api`, optional `OPENAI_BASE_URL`) |                          .hermes/hermes-agent/website/docs/integrations/providers.md:If a token refresh fails with a terminal error (HTTP 4xx, `invalid_grant`, revoked grant, etc.), Hermes marks the refresh token as dead and stops replaying it so you don't see a flood of identical auth failures. The next request surfaces a typed re-auth message instead. Run `hermes auth add openai-codex` (or `hermes model` → OpenAI Codex) to start a fresh device-code login; the quarantine clears on the next successful exchange. .hermes/hermes-agent/website/docs/integrations/providers.md:  base_url: "https://api.novita.ai/openai/v1"                  .hermes/hermes-agent/website/docs/integrations/providers.md:`LLM_MODEL` in `.env` is **removed** — `config.yaml` is the single source of truth for model and endpoint configuration. `OPENAI_BASE_URL` is still honored, but **only** for the `openai-api` provider (it overrides the OpenAI endpoint for direct API-key access). For other providers and custom endpoints, use `hermes model` or set `model.base_url` in `config.yaml` directly. If you have stale entries in your `.env`, they are automatically cleared on the next `hermes setup` or config migration.                    .hermes/hermes-agent/website/docs/integrations/providers.md:      model: openai/gpt-4o                                     .hermes/hermes-agent/website/docs/integrations/providers.md:| [Groq](https://groq.com) | `https://api.groq.com/openai/v1` | Ultra-fast inference |                  .hermes/hermes-agent/website/docs/integrations/providers.md:| [OpenAI](https://openai.com) | `https://api.openai.com/v1` | Direct OpenAI access |                   .hermes/hermes-agent/website/docs/integrations/providers.md:| [Azure OpenAI](https://azure.microsoft.com) | `https://YOUR.openai.azure.com/` | Enterprise OpenAI |  .hermes/hermes-agent/website/docs/integrations/providers.md:    api: https://api.groq.com/openai/v1                        .hermes/hermes-agent/website/docs/integrations/providers.md:    api: https://api.groq.com/openai/v1                        .hermes/hermes-agent/website/docs/integrations/providers.md:| OpenAI TTS + voice transcription | [OpenAI](https://platform.openai.com/api-keys) | `VOICE_TOOLS_OPENAI_KEY` |                                 .hermes/hermes-agent/website/docs/integrations/providers.md:Supported providers: `openrouter`, `nous`, `novita`, `openai-codex`, `copilot`, `copilot-acp`, `anthropic`, `gemini`, `qwen-oauth`, `huggingface`, `zai`, `kimi-coding`, `kimi-coding-cn`, `minimax`, `minimax-cn`, `minimax-oauth`, `deepseek`, `nvidia`, `xai`, `xai-oauth`, `ollama-cloud`, `bedrock`, `ai-gateway`, `azure-foundry`, `opencode-zen`, `opencode-go`, `kilocode`, `xiaomi`, `arcee`, `gmi`, `stepfun`, `lmstudio`, `alibaba`, `alibaba-coding-plan`, `tencent-tokenhub`, `custom`.                              .hermes/hermes-agent/website/docs/reference/cli-commands.md:| `--provider <provider>` | Force a provider: `auto`, `openrouter`, `nous`, `openai-codex`, `copilot-acp`, `copilot`, `anthropic`, `gemini`, `huggingface`, `novita` (aliases `novita-ai`, `novitaai`), `openai-api`, `zai`, `kimi-coding`, `kimi-coding-cn`, `minimax`, `minimax-cn`, `minimax-oauth`, `kilocode`, `xiaomi`, `arcee`, `gmi`, `upstage` (alias `solar`), `alibaba`, `alibaba-coding-plan` (alias `alibaba_coding`), `deepseek`, `nvidia`, `ollama-cloud`, `xai` (alias `grok`), `xai-oauth` (alias `grok-oauth`), `qwen-oauth`, `bedrock`, `opencode-zen`, `opencode-go`, `ai-gateway`, `azure-foundry`, `lmstudio`, `stepfun`, `tencent-tokenhub` (alias `tencent`, `tokenhub`). |   .hermes/hermes-agent/website/docs/reference/cli-commands.md:hermes -z "…" --provider openrouter --model openai/gpt-5.5     .hermes/hermes-agent/website/docs/reference/cli-commands.md:openai_sdk:       2.24.0                                       .hermes/hermes-agent/website/docs/reference/cli-commands.md:  openai               not set                                 .hermes/hermes-agent/website/docs/reference/environment-variables.md:| `AZURE_FOUNDRY_BASE_URL` | Microsoft Foundry endpoint URL (e.g. `https://<resource>.openai.azure.com/openai/v1` for OpenAI-style, or `https://<resource>.services.ai.azure.com/anthropic` for Anthropic-style) |        .hermes/hermes-agent/website/docs/reference/environment-variables.md:| `NOVITA_BASE_URL` | Override NovitaAI base URL (default: `https://api.novita.ai/openai/v1`) |.hermes/hermes-agent/website/docs/reference/faq.md:/model openai/gpt-5.4                   # switch back                   .hermes/hermes-agent/website/docs/reference/model-catalog.md:        {"id": "openai/gpt-5.4",       "description": ""}     .hermes/hermes-agent/website/docs/reference/model-catalog.md:    - openai         .hermes/hermes-agent/website/docs/reference/slash-commands.md:| `/codex-runtime [auto\|codex_app_server\|on\|off]` | Toggle the optional [Codex app-server runtime](../user-guide/features/codex-app-server-runtime). Persists to `model.openai_runtime` in config.yaml and evicts the cached agent so the next message picks up the new runtime. Effective on next session. |   .hermes/hermes-agent/website/docs/user-guide/cli.md:On the `openai-codex` provider, `/usage` also shows any banked usage-limit resets on your ChatGPT account ("You have N resets banked - use /usage reset to activate"). `/usage reset` redeems one banked reset, fully restoring your 5-hour and weekly limits. Hermes refuses to redeem while your limits aren't exhausted (a banked reset restores the full allowance, so spending it early wastes it) — pass `/usage reset --force` to redeem anyway. .hermes/hermes-agent/website/docs/user-guide/configuration.md:Available providers for auxiliary tasks: `auto`, `main`, plus any provider in the [provider registry](/reference/environment-variables) — `openrouter`, `nous`, `openai-codex`, `copilot`, `copilot-acp`, `anthropic`, `gemini`, `qwen-oauth`, `zai`, `kimi-coding`, `kimi-coding-cn`, `minimax`, `minimax-cn`, `minimax-oauth`, `deepseek`, `nvidia`, `xai`, `xai-oauth`, `ollama-cloud`, `alibaba`, `bedrock`, `huggingface`, `arcee`, `xiaomi`, `kilocode`, `opencode-zen`, `opencode-go`, `ai-gateway`, `azure-foundry` — or any named custom provider from your `providers:` dict (e.g. `provider: "beans"`)..hermes/hermes-agent/website/docs/user-guide/configuration.md:    model: ""                  # e.g. "openai/gpt-4o", "google/gemini-2.5-flash"                      .hermes/hermes-agent/website/docs/user-guide/configuration.md:    model: openai/gpt-4o-mini                                .hermes/hermes-agent/website/docs/user-guide/configuration.md:When the primary auxiliary provider (`openrouter` / `openai/gpt-4o-mini`) returns a rate-limit, connection timeout, or payment-required error, Hermes walks the `fallback_chain` in order. It skips entries whose provider matches the already-failed provider, and tries each remaining entry until one succeeds or the chain is exhausted. If all fallbacks fail, Hermes falls back to the main agent model as a final safety net.          .hermes/hermes-agent/website/docs/user-guide/configuration.md:    model: "openai/gpt-4o"                                   .hermes/hermes-agent/website/docs/user-guide/configuration.md:AUXILIARY_VISION_MODEL=openai/gpt-4o                         .hermes/hermes-agent/website/docs/user-guide/configuration.md:# OPENAI_BASE_URL=https://api.openai.com/v1                  .hermes/hermes-agent/website/docs/user-guide/configuration.md:    model: "openai/gpt-4o"      # or "google/gemini-2.5-flash", etc.                                  .hermes/hermes-agent/website/docs/user-guide/configuration.md:    "openai/gpt-5": "low"                                    .hermes/hermes-agent/website/docs/user-guide/configuration.md:  provider: "edge"              # "edge" | "elevenlabs" | "openai" | "minimax" | "mistral" | "gemini" | "xai" | "neutts" | "kittentts" | "piper" | "deepinfra"                          .hermes/hermes-agent/website/docs/user-guide/configuration.md:  openai:           .hermes/hermes-agent/website/docs/user-guide/configuration.md:    base_url: "https://api.openai.com/v1"  # Override for OpenAI-compatible TTS endpoints             .hermes/hermes-agent/website/docs/user-guide/configuration.md:  provider: "local"            # "local" | "groq" | "openai" | "mistral" | "xai" | "elevenlabs" | "deepinfra" | ...                            .hermes/hermes-agent/website/docs/user-guide/configuration.md:  openai:           .hermes/hermes-agent/website/docs/user-guide/configuration.md:Language resolution is the same for **every** STT provider (local, groq, openai, mistral, xai, elevenlabs, deepinfra, command providers, and plugins): `stt.<provider>.language` → `stt.language` → `HERMES_LOCAL_STT_LANGUAGE` env var → provider auto-detect. **The default is `stt.language: "en"`** — Whisper auto-detection frequently misidentifies short or accented clips, which shows up as voice notes transcribed in the wrong language. Non-English speakers should set `stt.language` to their language code once (e.g. `"es"`, `"zh"`, `"uk"`); set it to `""` to restore auto-detection for multilingual use.                               .hermes/hermes-agent/website/docs/user-guide/configuration.md:- `openai` uses the OpenAI speech API and reads `VOICE_TOOLS_OPENAI_KEY`.                             .hermes/hermes-agent/website/docs/user-guide/configuration.md:If the requested provider is unavailable, Hermes falls back automatically in this order: `local` → `groq` → `openai`.                          .hermes/hermes-agent/website/docs/user-guide/configuration.md:GROQ_BASE_URL=https://api.groq.com/openai/v1                 .hermes/hermes-agent/website/docs/user-guide/configuration.md:STT_OPENAI_BASE_URL=https://api.openai.com/v1                .hermes/hermes-agent/website/docs/user-guide/docker.md:    image: vllm/vllm-openai:latest                                  .hermes/hermes-agent/website/docs/user-guide/egress/iron-proxy.md:api.openai.com          api.anthropic.com                .hermes/hermes-agent/website/docs/user-guide/egress/iron-proxy.md:| Azure OpenAI | `AZURE_OPENAI_API_KEY` | `api-key` + `Authorization` (`*.openai.azure.com`, `*.cognitiveservices.azure.com`, `*.services.ai.azure.com`) |                          .hermes/hermes-agent/website/docs/user-guide/egress/iron-proxy.md:- Allowlisted-host data exfiltration. If `api.openai.com` is allowed, an agent could embed exfil data in a request body to that host. The daemon log captures the request happened but doesn't prevent it.                   .hermes/hermes-agent/website/docs/user-guide/features/batch-processing.md:| `--providers_allowed` | Comma-separated providers to allow (e.g., `"anthropic,openai"`) |                                        .hermes/hermes-agent/website/docs/user-guide/features/batch-processing.md:    --model=openai/gpt-4o \                                           .openai:.hermes/hermes-agent/website/docs/user-guide/features/built-in-plugins.md:| `image_gen/openai` | image backend | OpenAI `gpt-image-2` image generation backend (alternative to FAL) |                        .hermes/hermes-agent/website/docs/user-guide/features/built-in-plugins.md:| `image_gen/openai-codex` | image backend | OpenAI image generation via Codex OAuth |    .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:Hermes can optionally hand `openai/*` and `openai-codex/*` turns to the [Codex CLI app-server](https://github.com/openai/codex) instead of running its own tool loop. When enabled, terminal commands, file edits, sandboxing, and MCP tool calls all execute inside Codex's runtime — Hermes becomes the shell around it (sessions DB, slash commands, gateway, memory and skill review).                                .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:When you enable the runtime, Hermes queries codex's `plugin/list` RPC and writes a `[plugins."<name>@openai-curated"]` entry for every plugin you have installed. The plugins themselves are managed by codex and authorized once via codex's own UI. .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:- ...whatever else you've installed via `codex plugin marketplace add openai-curated` + `codex plugin install ...`         .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:**Works on this runtime, with one subtle dependency.** The kanban dispatcher spawns each worker as a separate `hermes chat -q` subprocess that reads the user's config — which means if `model.openai_runtime: codex_app_server` is set globally, workers also come up on the codex runtime.   .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:**Not specifically tested.** Cron jobs run via `cronjob` → `AIAgent.run_conversation`, the same code path as the CLI. If the cron job's config has `openai_runtime: codex_app_server` it'll run on codex. The same tool-availability rules apply — codex built-ins + plugins + MCP callback work, agent-loop tools (delegate_task, memory, session_search, todo) don't. If your cron job relies on those, scope the cron to a profile that uses the default runtime.                                        .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:| ChatGPT subscription auth | — | yes (via `openai-codex` provider) |             .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:   npm i -g @openai/codex                .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:   Hermes' own `hermes auth add openai-codex` writes to `~/.hermes/auth.json` — that's a separate session. **Run `codex login` separately** if you haven't.         .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:   codex plugin marketplace add openai-curated                                    .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:   Hermes will discover them and write `[plugins."<name>@openai-curated"]` entries to `~/.codex/config.toml` automatically..hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:- Persists `model.openai_runtime: codex_app_server` to your config.yaml.          .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:  openai_runtime: codex_app_server   # default is "auto" (= Hermes runtime)       .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:One detail: the review fork itself needs to call Hermes' agent-loop tools (`memory`, `skill_manage`), which require Hermes' own dispatch. So when the parent agent is on `codex_app_server`, the review fork is **downgraded to `codex_responses`** — same OAuth credentials, same `openai-codex` provider, but talks to OpenAI's Responses API directly so Hermes owns the loop and the agent-loop tools work. This is invisible to the user.                     .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:When this runtime is on with the `openai-codex` provider, **auxiliary tasks (title generation, context compression, vision auto-detect, the background self-improvement review fork) also flow through your ChatGPT subscription by default**, because Hermes' auxiliary client uses the main provider/model when no per-task override is set.                                   .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:[plugins."github@openai-curated"]        .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:Plugins installed via `codex plugin` (Linear, GitHub, Gmail, Calendar, Canva, etc.) are discovered through Codex's `plugin/list` RPC. For each plugin where `installed: true`, Hermes writes a `[plugins."<name>@openai-curated"]` block enabling it in your Hermes session.                   .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:- **Hermes auth and codex auth are separate sessions.** You need both `codex login` AND `hermes auth add openai-codex` for the cleanest UX (the runtime uses codex's session for the LLM call). This is a deliberate design choice in Hermes' `_import_codex_cli_tokens` — Hermes won't share OAuth state with codex CLI to avoid clobbering each other on token refresh.        .hermes/hermes-agent/website/docs/user-guide/features/codex-app-server-runtime.md:For implementation details, see [PR #24182](https://github.com/NousResearch/hermes-agent/pull/24182) and the [Codex app-server protocol README](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md).                             .hermes/hermes-agent/website/docs/user-guide/features/fallback-providers.md:| OpenAI Codex | `openai-codex` | `hermes model` (ChatGPT OAuth) |                      .hermes/hermes-agent/website/docs/user-guide/features/fallback-providers.md:  - provider: openai-codex                     .hermes/hermes-agent/website/docs/user-guide/features/fallback-providers.md:    model: ""                     # e.g. "openai/gpt-4o"                                .hermes/hermes-agent/website/docs/user-guide/features/fallback-providers.md:      - provider: openai                       .hermes/hermes-agent/website/docs/user-guide/features/goals.md:It's our take on the **Ralph loop**, directly inspired by [Codex CLI 0.128.0's `/goal`](https://github.com/openai/codex) by Eric Traut (OpenAI). The core idea — keep a goal alive across turns and don't stop until it's achieved — is theirs. The implementation here is independent and adapted to Hermes' architecture.                                .hermes/hermes-agent/website/docs/user-guide/features/goals.md:`/goal` is Hermes' take on the **Ralph loop** pattern. The user-facing design — keep a goal alive across turns, don't stop until it's achieved, with create/pause/resume/clear controls — was popularised and shipped in [Codex CLI 0.128.0](https://github.com/openai/codex) by Eric Traut on OpenAI's Codex team. Our implementation is independent (central `CommandDef` registry, `SessionDB.state_meta` persistence, auxiliary-client judge, adapter-FIFO continuation on the gateway side) but the idea is theirs. Credit where credit's due.                     .hermes/hermes-agent/website/docs/user-guide/features/mcp.md:      model: "openai/gpt-4o"  # Override model for sampling requests (optional)                        .hermes/hermes-agent/website/docs/user-guide/features/memory-providers.md:hermes memory setup mem0 --mode oss --oss-llm openai --oss-llm-key sk-... --oss-vector qdrant                                      .hermes/hermes-agent/website/docs/user-guide/features/memory-providers.md:| LLM | openai, ollama |                         .hermes/hermes-agent/website/docs/user-guide/features/memory-providers.md:| Embedder | openai, ollama |                    .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:        - provider: openai-codex                .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:- reference: `openai-codex:gpt-5.5`             .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:          model: openai/gpt-5.5                 .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:        model: openai/gpt-5.5                   .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:        - provider: openai-codex                .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:        - provider: openai-codex                .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:        provider: openai-codex                  .hermes/hermes-agent/website/docs/user-guide/features/mixture-of-agents.md:| `openai/gpt-5.5` | 0.7412 |                                    .openai:.hermes/hermes-agent/website/docs/user-guide/features/plugins.md:| **Bundled backends** (image-gen providers under `plugins/image_gen/`, etc.) | Auto-loaded so the default backend "just works". Selection happens via `<category>.provider` in `config.yaml` (e.g. `image_gen.provider: openai`). |                                   .hermes/hermes-agent/website/docs/user-guide/features/skills.md:hermes skills inspect openai/skills/k8s           # Preview before installing                       .hermes/hermes-agent/website/docs/user-guide/features/skills.md:hermes skills install openai/skills/k8s           # Install with security scan                      .hermes/hermes-agent/website/docs/user-guide/features/skills.md:| `github` | `openai/skills/k8s` | Direct GitHub repo/path installs and custom taps. |              .hermes/hermes-agent/website/docs/user-guide/features/skills.md:- [openai/skills](https://github.com/openai/skills)        .hermes/hermes-agent/website/docs/user-guide/features/skills.md:hermes skills install openai/skills/k8s                    .hermes/hermes-agent/website/docs/user-guide/features/skills.md:| `trusted` | Trusted registries/repos such as `openai/skills`, `anthropics/skills`, `huggingface/skills`, `NVIDIA/skills` | More permissive policy than community sources |          .hermes/hermes-agent/website/docs/user-guide/features/skills.md:/skills install openai/skills/skill-creator --force        .hermes/hermes-agent/website/docs/user-guide/features/subscription-proxy.md:    "provider": "openai",                      .hermes/hermes-agent/website/docs/user-guide/features/tool-gateway.md:  provider: openai                                   .hermes/hermes-agent/website/docs/user-guide/features/tts.md:  provider: "edge"              # "edge" | "elevenlabs" | "openai" | "minimax" | "mistral" | "gemini" | "xai" | "deepinfra" | "neutts" | "kittentts" | "piper"                           .hermes/hermes-agent/website/docs/user-guide/features/tts.md:  openai:            .hermes/hermes-agent/website/docs/user-guide/features/tts.md:    base_url: "https://api.openai.com/v1"  # Override for OpenAI-compatible TTS endpoints              .hermes/hermes-agent/website/docs/user-guide/features/tts.md:**Speed control**: The global `tts.speed` value applies to all providers by default. Each provider can override it with its own `speed` setting (e.g., `tts.openai.speed: 1.5`). Provider-specific speed takes precedence over the global value. Default is `1.0` (normal speed).                                   .hermes/hermes-agent/website/docs/user-guide/features/tts.md:**Language (OpenAI-compatible endpoints)**: `tts.openai.language` is forwarded to the endpoint as a `lang_code` request parameter. It is intended for OpenAI-compatible TTS servers that support `lang_code` — for example [Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI), where `language: "es"` selects the Spanish phonemizer instead of the English default. Leave it unset when using the official OpenAI API, which does not accept this parameter. When unset, nothing extra is sent.                         .hermes/hermes-agent/website/docs/user-guide/features/tts.md:  openai:            .hermes/hermes-agent/website/docs/user-guide/features/tts.md:Declare one or more providers under `tts.providers.<name>` and switch between them with `tts.provider: <name>` — the same way you switch between built-ins like `edge` and `openai`.     .hermes/hermes-agent/website/docs/user-guide/features/tts.md:- **Built-in names always win.** A `tts.providers.openai` entry never shadows the native OpenAI provider, so no user config can silently replace a built-in.                             .hermes/hermes-agent/website/docs/user-guide/features/tts.md:  provider: "local"           # "local" | "groq" | "openai" | "mistral" | "xai" | "elevenlabs" | "deepinfra"                                    .hermes/hermes-agent/website/docs/user-guide/features/tts.md:  openai:            .hermes/hermes-agent/website/docs/user-guide/features/tts.md:- **Built-ins always win.** Declaring `stt.providers.openai: type: command` does NOT override the real OpenAI Whisper handler. The built-in name is short-circuited before the command-provider resolver runs.                    .hermes/hermes-agent/website/docs/user-guide/features/tts.md:For STT engines that aren't built-in AND can't be expressed as a shell command (need a Python SDK, OAuth-refreshing auth, streaming chunks, etc.), register a Python plugin via `ctx.register_transcription_provider()`. The plugin **coexists with** the 8 built-in providers (`local`, `local_command`, `groq`, `openai`, `mistral`, `xai`, `elevenlabs`, `deepinfra`) and the `stt.providers.<name>: type: command` registry — built-ins keep their native implementations and always win on name collision; command providers win over plugins of the same name (config is more local than plugin install).    .hermes/hermes-agent/website/docs/user-guide/features/tts.md:| A built-in already covers it (`local`, `groq`, `openai`, …)  | Set `stt.provider: <name>` — built-ins are inline               |              .hermes/hermes-agent/website/docs/user-guide/features/tts.md:Plugins read their per-provider configuration from `stt.<provider>` in `config.yaml`, mirroring how built-ins read `stt.openai.model` / `stt.mistral.model`:                             .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:  provider: "local"                  # "local" (free) | "groq" | "openai" | "mistral" | "xai"   .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:  provider: "edge"                 # "edge" (free) | "elevenlabs" | "openai" | "neutts" | "minimax" | "mistral" | "gemini" | "xai" | "kittentts" | "piper"                        .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:  openai:     .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:    base_url: "https://api.openai.com/v1"  # optional: override for self-hosted or OpenAI-compatible endpoints                           .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:    # https://platform.openai.com/docs/guides/text-to-speech                                    .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:GROQ_BASE_URL=https://api.groq.com/openai/v1     # Custom Groq endpoint                         .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:STT_OPENAI_BASE_URL=https://api.openai.com/v1    # Custom OpenAI STT endpoint                   .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:Provider priority (automatic fallback): **local** > **groq** > **openai**                       .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:For `openai`, the `text_to_speech` tool accepts an optional `instructions`                      .hermes/hermes-agent/website/docs/user-guide/features/voice-mode.md:OpenAI-compatible voice-design servers mounted via `tts.openai.base_url`                        .hermes/hermes-agent/website/docs/user-guide/messaging/index.md:        model: openai/gpt-5-mini                           .hermes/hermes-agent/website/docs/user-guide/messaging/qqbot.md:        provider: "zai"          # zai (GLM-ASR), openai (Whisper), etc.                            .hermes/hermes-agent/website/docs/user-guide/messaging/telegram.md:- `openai` uses OpenAI Whisper and requires `VOICE_TOOLS_OPENAI_KEY`                             .hermes/hermes-agent/website/docs/user-guide/messaging/whatsapp-cloud.md:hermes config set stt.provider openai             .hermes/hermes-agent/website/docs/user-guide/multi-profile-gateways.md:coder config set model.model openai/gpt-5                  # named profile                   .hermes/hermes-agent/website/docs/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex.md:Delegate coding tasks to [Codex](https://github.com/openai/codex) via the Hermes terminal. Codex is OpenAI's autonomous coding agent CLI.                                       .hermes/hermes-agent/website/docs/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex.md:- Codex installed: `npm install -g @openai/codex`    .hermes/hermes-agent/website/docs/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex.md:For Hermes itself, `model.provider: openai-codex` uses Hermes-managed Codex                   .hermes/hermes-agent/website/docs/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex.md:OAuth from `~/.hermes/auth.json` after `hermes auth add openai-codex`. For the                .hermes/hermes-agent/website/docs/user-guide/skills/bundled/mlops/mlops-inference-serving-llms-vllm.md:from openai import OpenAI                                    .hermes/hermes-agent/website/docs/user-guide/skills/bundled/mlops/mlops-inference-serving-llms-vllm.md:  vllm/vllm-openai:latest \                                  .hermes/hermes-agent/website/docs/user-guide/skills/optional/autonomous-ai-agents/autonomous-ai-agents-openhands.md:   export LLM_MODEL=openrouter/openai/gpt-4o-mini       # or any LiteLLM slug            .hermes/hermes-agent/website/docs/user-guide/skills/optional/autonomous-ai-agents/autonomous-ai-agents-openhands.md:   `LLM_MODEL` uses LiteLLM's full slug. When the provider is OpenRouter the slug is doubly-prefixed: `openrouter/<vendor>/<model>` (e.g. `openrouter/anthropic/claude-sonnet-4.5`). For native Anthropic: `anthropic/claude-sonnet-4-5`. For native OpenAI: `openai/gpt-4o-mini`.                    .hermes/hermes-agent/website/docs/user-guide/skills/optional/autonomous-ai-agents/autonomous-ai-agents-openhands.md:  command="OPENHANDS_SUPPRESS_BANNER=1 LLM_MODEL=openrouter/openai/gpt-4o-mini LLM_API_KEY=$OPENROUTER_API_KEY LLM_BASE_URL=https://openrouter.ai/api/v1 openhands --headless --json --override-with-envs --exit-without-confirmation -t 'Add error handling to all API calls in src/'",              .hermes/hermes-agent/website/docs/user-guide/skills/optional/autonomous-ai-agents/autonomous-ai-agents-openhands.md:- **Model slug is LiteLLM's, not the provider's.** `openrouter/openai/gpt-4o-mini` works; `openai/gpt-4o-mini` while pointed at OpenRouter does not. `anthropic/claude-sonnet-4-5` (hyphen) is native Anthropic; `openrouter/anthropic/claude-sonnet-4.5` (dot) is via OpenRouter. Get it wrong → cryptic LiteLLM 400.                         .hermes/hermes-agent/website/docs/user-guide/skills/optional/autonomous-ai-agents/autonomous-ai-agents-openhands.md:  command="OPENHANDS_SUPPRESS_BANNER=1 LLM_MODEL=openrouter/openai/gpt-4o-mini LLM_API_KEY=$OPENROUTER_API_KEY LLM_BASE_URL=https://openrouter.ai/api/v1 openhands --headless --json --override-with-envs --exit-without-confirmation -t 'Print the string OPENHANDS_OK to stdout via the terminal tool.'",                                    .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-chroma.md:openai_ef = embedding_functions.OpenAIEmbeddingFunction(                         .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-chroma.md:    embedding_function=openai_ef        .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-chroma.md:openai_ef = embedding_functions.OpenAIEmbeddingFunction(                         .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-chroma.md:    name="openai_docs",                 .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-chroma.md:    embedding_function=openai_ef        .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-chroma.md:from langchain_openai import OpenAIEmbeddings                                    .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-clip.md:pip install git+https://github.com/openai/CLIP.git                                 .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-clip.md:- **GitHub**: https://github.com/openai/CLIP ⭐ 25,300+                            .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-clip.md:- **Colab**: https://colab.research.google.com/github/openai/clip/                 .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-faiss.md:from langchain_openai import OpenAIEmbeddings                                     .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-inference-outlines.md:> `from_llamacpp`, `from_openai`) and then **call the model directly** with an                                .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-inference-outlines.md:from openai import OpenAI   .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-inference-outlines.md:model = outlines.from_openai(client, "gpt-4o-mini")                  .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:| Dependencies | `instructor`, `pydantic`, `openai`, `anthropic` |           .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:pip install "instructor[openai]"     # OpenAI                                .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:from openai import OpenAI           .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:client = instructor.from_openai(OpenAI())                                    .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:from openai import OpenAI           .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:client = instructor.from_openai(    .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:from openai import OpenAI           .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-instructor.md:client = instructor.from_openai(    .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-nemo-curator.md:clip_embedder = CLIPEmbedder(model="openai/clip-vit-base-patch32")         .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-pinecone.md:from langchain_openai import OpenAIEmbeddings                                  .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-research-dspy.md:| Dependencies | `dspy`, `openai`, `anthropic` |                          .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-research-dspy.md:pip install dspy[openai]        # OpenAI                                  .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-whisper.md:| Dependencies | `openai-whisper`, `transformers`, `torch` |                    .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-whisper.md:pip install -U openai-whisper          .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-whisper.md:from langchain_openai import OpenAIEmbeddings                                   .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-whisper.md:9. **Use faster-whisper** - 4× faster than openai-whisper                       .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-whisper.md:- **GitHub**: https://github.com/openai/whisper ⭐ 72,900+                      .hermes/hermes-agent/website/docs/user-guide/skills/optional/mlops/mlops-whisper.md:- **Model Card**: https://github.com/openai/whisper/blob/main/model-card.md     .hermes/hermes-agent/website/docs/user-guide/skills/optional/research/research-darwinian-evolver.md:  EVOLVER_MODEL='openai/gpt-4o-mini' \                          .hermes/hermes-agent/website/docs/user-guide/skills/optional/research/research-darwinian-evolver.md:  uv run --with openai python "$SKILL_DIR/scripts/parrot_openrouter.py" \         .openai:.hermes/hermes-agent/website/docs/user-guide/skills/optional/research/research-darwinian-evolver.md:uv run --with openai python "$SKILL_DIR/scripts/show_snapshot.py" \                                      .hermes/hermes-agent/website/docs/user-guide/skills/optional/research/research-pinecone-research.md:pip install pinecone-client langchain-pinecone langchain-openai .hermes/hermes-agent/website/docs/user-guide/skills/optional/research/research-pinecone-research.md:from langchain_openai import OpenAIEmbeddings                   .hermes/hermes-agent/website/docs/user-guide/skills/optional/security/security-godmode.md:from openai import OpenAI        .hermes/hermes-agent/website/docs/user-guide/skills/optional/web-development/web-development-page-agent.md:| OpenAI | `https://api.openai.com/v1` | `gpt-4o-mini` | .hermes/hermes-agent/website/docs/user-guide/skills/optional/web-development/web-development-page-agent.md:LLM_BASE_URL=https://api.openai.com/v1                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/adding-providers.md:- `openai-codex`                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/agent-loop.md:| `chat_completions` | 兼容 OpenAI 的 端点（OpenRouter、自定义及大多数 provider） | `openai.OpenAI` |                                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/agent-loop.md:| `codex_responses` | OpenAI Codex / Responses API | `openai.OpenAI`（使用 Responses 格式） | .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/creating-skills.md:- `trusted`——来自 openai/skills、anthropics/skills、huggingface/skills                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/creating-skills.md:- 直接 GitHub 标识符（例如 `openai/skills/k8s`）.hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/image-gen-provider-plugin.md:        # _resolve_model() in the built-in openai plugin is a good reference.  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/image-gen-provider-plugin.md:在 `~/.hermes/plugins/image_gen/<name>/` 放置一个用户插件，使其 `name` 属性与某个内置插件相同，并通过 `hermes plugins enable <name>` 启用——注册表采用后写入优先策略，你的版本将替换内置版本。适用于将 `openai` 插件 指向私有代理，或替换自定义模型目录等场景。                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/image-gen-provider-plugin.md:- **`plugins/image_gen/openai/__init__.py`** — gpt-image-2 以低/中/高三个档位作为三个虚拟模型 ID，共享同一 API 模型 并使 用不同的 `quality` 参数。适合参考单一后 端下的分层模型设计 + config.yaml 优先级链。.hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/image-gen-provider-plugin.md:- **`plugins/image_gen/openai-codex/__init__.py`** — Codex 风格的 Responses API 变体，复用 OpenAI SDK 并使用不同的路由基础 URL。                                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/model-provider-plugin.md:3. URL 自动检测——`/anthropic` 后缀 → `anthropic_messages`，`api.openai.com` → `codex_responses`，`api.x.ai` → `codex_responses`，Kimi 域名上的 `/coding` → `chat_completions`                                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/plugin-llm-access.md:          - openai/gpt-4o-mini                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/plugin-llm-access.md:Plugin id 对于扁平 plugin 是 manifest 中的 `name:` 字段，对于嵌套 plugin 是路径派生的键（`image_gen/openai`、`memory/honcho` 等 ）。                                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/plugins/index.md:**参考示 例：** `plugins/image_gen/openai/`（DALL-E / GPT-Image via OpenAI SDK）、`plugins/image_gen/openai-codex/`、`plugins/image_gen/xai/`（Grok 图像生成）。             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/provider-runtime.md:   -  确定 `api_mode`：openai-codex 使用 `codex_responses`，anthropic 使用 `anthropic_messages`，其余使用 `chat_completions`     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/quickstart.md:hermes skills install openai/skills/k8s              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/automation-blueprints.md:- openai/codex                                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:- **OpenAI 风格** — 在 `https://<resource>.openai.azure.com/openai/v1` 等端点上执行 `POST /v1/chat/completions`。用于 GPT-4.x、GPT-5.x、Llama、Mistral 及大多数开放权重模型。         .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:  base_url: https://my-resource.openai.azure.com/openai/v1 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:  Endpoint: https://my-resource.openai.azure.com/openai/v1 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:  base_url: https://my-resource.openai.azure.com/openai/v1 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:Azure OpenAI 的 v1 GA 端点接受标准 `openai` Python 客户端，改动极少：                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:  base_url: https://my-resource.openai.azure.com/openai/v1 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:- **需要 `api-version` 的旧版端点。** 如果你有类似 `https://<resource>.openai.azure.com/openai?api-version=2025-04-01-preview` 的旧版 base URL，Hermes  会提取查询字符串并通过每次请求 的 `default_query` 转发（否则 OpenAI SDK 在拼接路径时会丢弃它）。                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:- Azure OpenAI v1 端点（`<resource>.openai.azure.com/openai/v1`）通过 `GET /models` 暴露资源的** 可用**模型目录。Hermes 使用此列表预填模型选择器。                                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:Azure 在 `/chat/completions` 上提 供 gpt-5.x，而非 `/responses`。当 URL 包含 `openai.azure.com` 时，Hermes 会自动处理此问题 ，但如果你看到带有 `Invalid API key` 正文的 401，请检查 `config.yaml` 中的 `api_mode` 是否为 `chat_completions`。                             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/azure-foundry.md:验证同一 `Azure AI User`（或 `Foundry User`）角色是否已在 Foundry 资源上分配（它同时覆盖 `/openai/v1` 和 `/anthropic` 路径）。如果向导期间 OpenAI 风格探测成功，但运行时 `claude-*` 请求失败，最常见的原因 是早期向导运行遗留的 过时 `model.entra.scope`——从 `config.yaml` 中删除 `entra.scope` 行， 使运行时回退到默认的 `https://ai.azure.com/.default` scope。                                    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/google-gemini.md:https://generativelanguage.googleapis.com/v1beta/openai/   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/google-gemini.md:如果你之前将 `GEMINI_BASE_URL` 设置为 `/openai` URL，请将其删除或修改：                             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/google-gemini.md:GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/                            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/migrate-from-openclaw.md:| 自定义 providers | `models.providers.*` | `config.yaml` → `custom_providers` | 映射 `baseUrl`、`apiType`/`api`——同 时处理短格式（"openai"、"anthropic"）和带连字符格式（"openai-completions"、"anthropic-messages"、"google-generative-ai"） |                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/migrate-from-openclaw.md:| OpenAI  模型 | `config.yaml` → `tts.openai.model` |                                       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/migrate-from-openclaw.md:| OpenAI  语音 | `config.yaml` → `tts.openai.voice` |                                       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/oauth-over-ssh.md:| `openai-codex` （ChatGPT Plus/Pro） | 不适用 | 否——设备 码流程 |                                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/run-hermes-with-nous-portal.md:/model openai/gpt-5.4                  # 强推理 + 工具调用                            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/run-hermes-with-nous-portal.md:/model openai/o1-2025-12-17                  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/use-voice-mode-with-hermes.md:- `openai` → 良好 的付费备选                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/use-voice-mode-with-hermes.md:- `openai` → 良好的中间选项                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/nous-portal.md:/model openai/gpt-5.4                  # 强推理 + 工具 调 用                                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/nous-portal.md:/model openai/gpt-5.4                                  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:  base_url: "https://api.novita.ai/openai/v1"            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:      model: openai/gpt-4o                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:| [Groq](https://groq.com) | `https://api.groq.com/openai/v1` | 超快推理 |                        .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:| [OpenAI](https://openai.com) | `https://api.openai.com/v1` | 直连 OpenAI |                      .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:| [Azure OpenAI](https://azure.microsoft.com) | `https://YOUR.openai.azure.com/` | 企业级 OpenAI |.hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:    base_url: https://api.groq.com/openai/v1             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:    base_url: https://api.groq.com/openai/v1             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:| OpenAI TTS +  语音转录 | [OpenAI](https://platform.openai.com/api-keys) | `VOICE_TOOLS_OPENAI_KEY` |                                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/integrations/providers.md:支持的提供商：`openrouter`、`nous`、`openai-codex`、`copilot`、`copilot-acp`、`anthropic`、`gemini`、`qwen-oauth`、`huggingface`、`zai`、`kimi-coding`、`kimi-coding-cn`、`minimax` 、`minimax-cn`、`minimax-oauth`、`deepseek`、`nvidia`、`xai`、`xai-oauth`、`ollama-cloud`、`bedrock`、`azure-foundry`、`opencode-zen`、`opencode-go`、`kilocode`、`xiaomi`、`arcee`、`gmi`、`stepfun` 、`lmstudio`、`alibaba`、`alibaba-coding-plan`、`tencent-tokenhub`、`custom`。            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/cli-commands.md:| `--provider <provider>` | 强制指定 provider：`auto`、`openrouter`、`nous`、`openai-codex`、`copilot-acp`、`copilot` 、`anthropic`、`gemini`、`huggingface`、`novita`（别名 `novita-ai`、`novitaai`）、`openai-api`、`zai`、`kimi-coding`、`kimi-coding-cn` 、`minimax`、`minimax-cn`、`minimax-oauth`、`kilocode`、`xiaomi`、`arcee`、`gmi`、`alibaba`、`alibaba-coding-plan`（别名 `alibaba_coding`）、`deepseek`、`nvidia`、`ollama-cloud`、`xai`（别名 `grok`）、`xai-oauth`（别名 `grok-oauth`）、`qwen-oauth`、`bedrock`、`opencode-zen`、`opencode-go`、`ai-gateway`、`azure-foundry`、`lmstudio`、`stepfun`、`tencent-tokenhub`（别名 `tencent` 、`tokenhub`）。 |                       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/cli-commands.md:hermes -z "…" --provider openrouter --model openai/gpt-5.5                                        .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/cli-commands.md:openai_sdk:       2.24.0                                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/cli-commands.md:  openai               not set                           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/environment-variables.md:| `AZURE_FOUNDRY_BASE_URL` | Microsoft Foundry  端点 URL（例如 OpenAI 风格：`https://<resource>.openai.azure.com/openai/v1`，Anthropic 风格：`https://<resource>.services.ai.azure.com/anthropic`） |               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/environment-variables.md:| `NOVITA_BASE_URL` | 覆盖 NovitaAI base URL（默认：`https://api.novita.ai/openai/v1`） |.hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/faq.md:/model openai/gpt-5.4                   # 切换回来                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/model-catalog.md:        {"id": "openai/gpt-5.4",       "description": ""}                                        .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/slash-commands.md:| `/codex-runtime [auto\|codex_app_server\|on\|off]` | 切换 可选的 [Codex app-server runtime](../user-guide/features/codex-app-server-runtime)。持久化到 config.yaml 中的 `model.openai_runtime` 并驱逐缓存的 agent，使下一 条消息使用新 runtime。下次会话生效。 |   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:辅助 任务的可用 providers：`auto`、`main`，以及[provider 注册表](/reference/environment-variables)中的任何 provider —— `openrouter`、`nous` 、`openai-codex`、`copilot`、`copilot-acp`、`anthropic`、`gemini`、`qwen-oauth`、`zai`、`kimi-coding`、`kimi-coding-cn`、`minimax`、`minimax-cn`、`minimax-oauth`、`deepseek`、`nvidia`、`xai`、`xai-oauth` 、`ollama-cloud`、`alibaba`、`bedrock`、`huggingface`、`arcee`、`xiaomi`、`kilocode`、`opencode-zen`、`opencode-go`、`ai-gateway`、`azure-foundry` —— 或您 `custom_providers` 列表中任何命名的自定义 provider（例如 `provider: "beans"`）。           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:    model: ""                  # 例如 "openai/gpt-4o"、"google/gemini-2.5-flash"                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:    model: openai/gpt-4o-mini                          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:当主要辅助 provider（`openrouter` / `openai/gpt-4o-mini`）返回速率限制、连接超时或需要付费错误时，Hermes 将依次遍历 `fallback_chain`。它 会跳过 provider 与已失败 provider 相同的 条目，并尝试每个剩 余条目，直到有一个成功 或该链耗尽。如果所有回退都失败，Hermes 会回退到主 agent 模型作为最 终的安全网。    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:    model: "openai/gpt-4o"                             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:AUXILIARY_VISION_MODEL=openai/gpt-4o                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:# OPENAI_BASE_URL=https://api.openai.com/v1            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:    model: "openai/gpt-4o"      # 或 "google/gemini-2.5-flash" 等                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:  provider: "edge"              # "edge" | "elevenlabs" | "openai" | "minimax" | "mistral" | "gemini" | "xai" | "neutts"                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:  openai:     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:    base_url: "https://api.openai.com/v1"  # 覆盖 OpenAI 兼容 TTS 端 点                          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:  provider: "local"            # "local" | "groq" | "openai" | "mistral"                        .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:  openai:     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:- `openai` 使 用 OpenAI 语音 API，读取 `VOICE_TOOLS_OPENAI_KEY`。                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:如果 请求的 provider 不可用，Hermes 按此顺序自动回退：`local` → `groq` → `openai`。              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:GROQ_BASE_URL=https://api.groq.com/openai/v1           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/configuration.md:STT_OPENAI_BASE_URL=https://api.openai.com/v1          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/docker.md:    image: vllm/vllm-openai:latest                            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/batch-processing.md:| `--providers_allowed` | 允许的供应商，逗 号分隔（例如 `"anthropic,openai"`） |    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/batch-processing.md:    --model=openai/gpt-4o \                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/built-in-plugins.md:| `image_gen/openai` | 图像后端 | OpenAI `gpt-image-2` 图像生成后端（FAL 的替代方案 ） |                                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/built-in-plugins.md:| `image_gen/openai-codex` |  图像后端 | 通 过 Codex OAuth 使用 OpenAI 图像生成 |    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:Hermes 可以选择将 `openai/*` 和 `openai-codex/*` 的轮次交由 [Codex CLI app-server](https://github.com/openai/codex)  处理，而不是运行自己的工具循环。启用后， 终端命令、文件编辑、沙箱隔离以及 MCP 工具调用均在 Codex 的运行 时内执行——Hermes 成 为其外层 shell（会话数据 库、斜杠命令、gateway、记忆与技能审查）。                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:启用运行时时，Hermes 会查询 Codex  的 `plugin/list` RPC，并为你已安装的每个 插件写 入一条 `[plugins."<name>@openai-curated"]` 配置项。插件本身由 Codex 管理，并通过 Codex 自 己的 UI 完成一次性授权。    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:- ……以及其他你通过 `codex plugin marketplace add openai-curated` + `codex plugin install ...` 安装的插件             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:**在此运行时上可用，但有一个细微依 赖。** Kanban 分发器将每个 worker 生成为 独立的 `hermes chat -q` 子进程，该子进程 读取用户配置——这意味着如果全局设置了 `model.openai_runtime: codex_app_server`，worker 也会在 Codex 运行时上启 动。          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:**尚未经过专项测试。** Cron 任务通 过 `cronjob` → `AIAgent.run_conversation` 运行 ，与 CLI 的代码路径相同。如果 cron  任务的配 置中有 `openai_runtime: codex_app_server`，它将在 Codex 上运行。相同的工具可用性规则适用——Codex 内置工具 + 插件 + MCP 回调可用，agent  循环工具（delegate_task、memory、session_search、todo）不可用。如果你的 cron 任务依赖这些 工具，请将 cron 限定在使用默认运行时的配置文 件中。      .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:| ChatGPT 订阅认证 | — | 是（通过 `openai-codex` 提供商） |                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:   npm i -g @openai/codex          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:   codex plugin marketplace add openai-curated                              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:   Hermes 会自动发现它们并将 `[plugins."<name>@openai-curated"]` 条目写入 `~/.codex/config.toml`。                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:- 将 `model.openai_runtime: codex_app_server` 持久化到你的 config.yaml。    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:  openai_runtime: codex_app_server   # 默认值为 "auto"（= Hermes 运行时）   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:一个细节：审查分叉本身需要调用 Hermes 的 agent 循环工具（`memory`、`skill_manage`），这需要 Hermes 自身的分发。因 此，当父 agent 处于 `codex_app_server` 时，审查分叉会**降级为 `codex_responses`**——相 同的 OAuth 凭据，相同的 `openai-codex` 提供商，但直接与 OpenAI 的 Responses API 通信，使 Hermes 拥有循环控制权，agent 循环 工具得以正常工作。这对用户不可见。       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:当此运行时与 `openai-codex` 提供商 一起开启时，**辅助任务（标题生成、上下文 压缩、视觉自动检测、后台自我改进审查分叉 ）默认也会通过你的 ChatGPT 订阅流转**，因为 Hermes 的辅助客户端在没有设置每任务覆 盖时使 用主提供商/模型。                  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:[plugins."github@openai-curated"]  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:通过 `codex plugin` 安装的插件（Linear、GitHub、Gmail、Calendar、Canva 等）  通过 Codex 的 `plugin/list` RPC 被发现。 对于每个 `installed: true` 的插件，Hermes 会写入 一个 `[plugins."<name>@openai-curated"]` 块，在你的 Hermes 会话中启用它。  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/codex-app-server-runtime.md:有关实现细节，请参阅 [PR #24182](https://github.com/NousResearch/hermes-agent/pull/24182) 和 [Codex app-server 协议 README](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)。 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/fallback-providers.md:| OpenAI Codex | `openai-codex` | `hermes model`（ChatGPT OAuth） |               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/fallback-providers.md:  provider: openai-codex                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/fallback-providers.md:    model: ""                     # 例如 "openai/gpt-4o"                          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/fallback-providers.md:      - provider: openai                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/goals.md:这是我们 对 **Ralph loop** 的实现，直接受 Eric Traut（OpenAI）在 [Codex CLI 0.128.0 的 `/goal`](https://github.com/openai/codex) 中的启发。核心 思路——跨轮次保持目标存活、不达成不 停止——源自他们。此处的实现是独立的，并已 适配 Hermes 的架构。                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/goals.md:`/goal` 是 Hermes 对 **Ralph loop** 模式的 实现。面向用户的设计——跨轮次保持目标存活、不 达成不停 止，以及创建/暂停/恢复/清除控制——由 OpenAI Codex 团队的 Eric Traut 在 [Codex CLI 0.128.0](https://github.com/openai/codex) 中 推广并落地。我们的实现是独立的（中央 `CommandDef` 注册表、`SessionDB.state_meta` 持久化、 辅助客户端裁判、gateway 侧的适配器 FIFO 续行 ），但这个想法源自他们。功劳 归于应得之人。                           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/mcp.md:      model: "openai/gpt-4o"  # 覆盖 sampling  请求使用的模型（可选）                             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/plugins.md:子分类插件 在 `hermes plugins list` 和交互式 `hermes plugins` UI 中以**路径派生的 key** 显示 — 例如 `observability/langfuse`、`image_gen/openai`、`platforms/teams`。该 key（而非 manifest 中的 `name:`）是传给 `hermes plugins enable …` / `disable …` 的值，也 是在 `config.yaml` 的 `plugins.enabled`  下填写的字符串。                         .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/plugins.md:| **内置后 端** （`plugins/image_gen/` 等下的图像生成 provider） | 自动加载，使默认后端"开箱即用"。通过 `config.yaml` 中的 `<category>.provider` 选择（例如 `image_gen.provider: openai`）。 |                           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/plugins.md:对于子分类 目录下的插件（例如 `plugins/observability/langfuse/`、`plugins/image_gen/openai/` ），使用完整的 `<category>/<plugin>` key —  这正是 `hermes plugins list` 在 **Name** 列中显示的内容。                       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/skills.md:hermes skills inspect openai/skills/k8s           # Preview before installing                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/skills.md:hermes skills install openai/skills/k8s           # Install with security scan                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/skills.md:| `github` | `openai/skills/k8s` | 直接从 GitHub 仓库/路径安装以及基于 GitHub 的自定义 tap。 |.hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/skills.md:- [openai/skills](https://github.com/openai/skills)  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/skills.md:hermes skills install openai/skills/k8s              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/skills.md:| `trusted` | 受信任的注册表/仓库， 如 `openai/skills`、`anthropics/skills`、`huggingface/skills`、`NVIDIA/skills` | 比社区来 源更宽松的 策略 |                                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/skills.md:/skills install openai/skills/skill-creator --force  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/subscription-proxy.md:    "provider": "openai",                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tool-gateway.md:  provider: openai                             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:  provider: "edge"              # "edge" | "elevenlabs" | "openai" | "minimax" | "mistral" | "gemini" | "xai" | "neutts" | "kittentts" | "piper"                                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:  openai:      .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:    base_url: "https://api.openai.com/v1"  # Override for OpenAI-compatible TTS endpoints        .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:**速度控制**： 全局 `tts.speed` 值默认应用于所有提供商。每个提供商可用自身的 `speed` 设置覆盖它（例如 `tts.openai.speed: 1.5`） 。提供商级 别的速度优先于全局值。默认值为 `1.0`（正 常速度）。                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:  openai:      .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:在 `tts.providers.<name>` 下声明一个或多个提供商，并通过 `tts.provider: <name>`  在它们之间切换—— 与切换 `edge` 和 `openai` 等内置提供商的 方式相同。                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:- **内置名称始 终 优先。** `tts.providers.openai` 条目永 远不会覆盖原生 OpenAI 提供商，因此任何用 户配置都无法静默替换内置提供商。         .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:  provider: "local"           # "local" | "groq" | "openai" | "mistral" | "xai"                  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/tts.md:  openai:      .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/voice-mode.md:  provider: "local"                  # "local"（ 免费）| "groq" | "openai" | "mistral" | "xai"                                     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/voice-mode.md:  provider: "edge"                 # "edge"（免费）| "elevenlabs" | "openai" | "neutts" | "minimax" | "mistral" | "gemini" | "xai" | "kittentts" | "piper"                  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/voice-mode.md:  openai:                                        .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/voice-mode.md:    base_url: "https://api.openai.com/v1"  # 可选：覆盖为自托管或兼容 OpenAI 的端点       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/voice-mode.md:GROQ_BASE_URL=https://api.groq.com/openai/v1     # 自定义 Groq  端点                       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/voice-mode.md:STT_OPENAI_BASE_URL=https://api.openai.com/v1    # 自定义 OpenAI STT 端点                 .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/voice-mode.md:提供商优先级 （自动回退）：**本地** > **groq** > **openai**                                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/messaging/qqbot.md:        provider: "zai"          # zai (GLM-ASR), openai (Whisper), etc.                      .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/messaging/telegram.md:- `openai` 使用 OpenAI Whisper，需要 `VOICE_TOOLS_OPENAI_KEY`                              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex.md:通过 Hermes 终端将编码任务委 托给 [Codex](https://github.com/openai/codex)。Codex 是 OpenAI 的自主编码 agent CLI。                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex.md:- 已安装 Codex：`npm install -g @openai/codex` .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex.md:对于 Hermes 本身，`model.provider: openai-codex` 会在执行 `hermes auth add openai-codex` 后使用 `~/.hermes/auth.json` 中 Hermes  管理的 Codex OAuth。对于独立的 Codex CLI ，有效的 CLI OAuth 会话可能存储在 `~/.codex/auth.json` 中；不要仅凭缺少 `OPENAI_API_KEY` 就认为 Codex 认证缺失。           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-hermes-agent.md:hermes auth add PROVIDER    添加 OAuth  或 API key 凭据（例如 nous、openai-codex 、qwen-oauth）                           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-hermes-agent.md:| `stt` | `enabled`, `provider` (local/groq/openai/mistral) |                    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-hermes-agent.md:| `tts` | `provider` (edge/elevenlabs/openai/minimax/mistral/neutts) |           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-hermes-agent.md:  provider: local        # local, groq, openai, mistral                          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-inference-serving-llms-vllm.md:from openai import OpenAI                              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-inference-serving-llms-vllm.md:  vllm/vllm-openai:latest \                            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-chroma.md:openai_ef = embedding_functions.OpenAIEmbeddingFunction(                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-chroma.md:    embedding_function=openai_ef  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-chroma.md:openai_ef = embedding_functions.OpenAIEmbeddingFunction(                   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-chroma.md:    name="openai_docs",           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-chroma.md:    embedding_function=openai_ef  .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-chroma.md:from langchain_openai import OpenAIEmbeddings                              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-clip.md:pip install git+https://github.com/openai/CLIP.git                           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-clip.md:- **GitHub**: https://github.com/openai/CLIP ⭐ 25,300+                      .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-clip.md:- **Colab**: https://colab.research.google.com/github/openai/clip/           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-faiss.md:from langchain_openai import OpenAIEmbeddings                               .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-inference-outlines.md:model = outlines.models.openai(                                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:| 依赖项 | `instructor`, `pydantic`, `openai`, `anthropic` |           .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:pip install "instructor[openai]"     # OpenAI                          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:from openai import OpenAI     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:client = instructor.from_openai(OpenAI())                              .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:from openai import OpenAI     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:client = instructor.from_openai(                                       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:from openai import OpenAI     .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-instructor.md:client = instructor.from_openai(                                       .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-nemo-curator.md:clip_embedder = CLIPEmbedder(model="openai/clip-vit-base-patch32")   .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-pinecone.md:from langchain_openai import OpenAIEmbeddings                            .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-whisper.md:| 依赖项 | `openai-whisper`, `transformers`, `torch` |                    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-whisper.md:pip install -U openai-whisper    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-whisper.md:from langchain_openai import OpenAIEmbeddings                             .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-whisper.md:9. **使用 faster-whisper** — 比 openai-whisper 快 4 倍                    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-whisper.md:- **GitHub**：https://github.com/openai/whisper ⭐ 72,900+                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mlops/mlops-whisper.md:- **模型卡片**：https://github.com/openai/whisper/blob/main/model-card.md .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/research/research-darwinian-evolver.md:  EVOLVER_MODEL='openai/gpt-4o-mini' \                    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/research/research-darwinian-evolver.md:  uv run --with openai python "$SKILL_DIR/scripts/parrot_openrouter.py" \                          .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/research/research-darwinian-evolver.md:uv run --with openai python "$SKILL_DIR/scripts/show_snapshot.py" \                                .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/web-development/web-development-page-agent.md:| OpenAI | `https://api.openai.com/v1` | `gpt-4o-mini` |                                    .hermes/hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/web-development/web-development-page-agent.md:LLM_BASE_URL=https://api.openai.com/v1             .hermes/hermes-agent/website/scripts/extract-skills.py:   (openai/skills, anthropics/skills, huggingface/skills, VoltAgent, etc.).                                  .hermes/hermes-agent/website/scripts/extract-skills.py:    "openai/skills": "OpenAI",                                      .hermes/hermes-agent/website/scripts/extract-skills.py:    "openai_skills": "OpenAI",                                      .hermes/hermes-agent/website/scripts/extract-skills.py:    # GitHub-backed taps (openai/anthropic/nvidia/hf/gstack/VoltAgent/...):                                  .hermes/hermes-agent/website/scripts/extract-skills.py:    if src in {"github", "openai", "anthropic", "huggingface", "nvidia",                                     .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-sol",                           .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-sol-pro",                       .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-terra",                         .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-terra-pro",                     .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-luna",                          .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-luna-pro",                      .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.5",                               .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.5-pro",                           .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.4-mini",                          .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-sol"                            .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-sol-pro"          .openai:.hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-terra"                          .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-terra-pro"                      .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-luna"                           .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.6-luna-pro"                       .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.5"                                .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.5-pro"                            .hermes/hermes-agent/website/static/api/model-catalog.json:          "id": "openai/gpt-5.4-mini"                           .hermes/hermes-agent/hermes_agent.egg-info/PKG-INFO:Requires-Dist: openai==2.24.0 .hermes/hermes-agent/hermes_agent.egg-info/requires.txt:openai==2.24.0            .hermes/hermes-agent/hermes_agent.egg-info/SOURCES.txt:plugins/google_meet/realtime/openai_client.py                       .hermes/hermes-agent/hermes_agent.egg-info/SOURCES.txt:plugins/image_gen/openai/__init__.py                                .hermes/hermes-agent/hermes_agent.egg-info/SOURCES.txt:plugins/image_gen/openai-codex/__init__.py                          .hermes/hermes-agent/hermes_agent.egg-info/SOURCES.txt:plugins/model-providers/openai-codex/__init__.py                    grep: .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19: binary file matches           .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:Name: openai                    .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:Summary: The official Python library for the openai API                  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:Project-URL: Homepage, https://github.com/openai/openai-python           .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:Project-URL: Repository, https://github.com/openai/openai-python         .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:Author-email: OpenAI <support@openai.com>                                .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:[![PyPI version](https://img.shields.io/pypi/v/openai.svg?label=pypi%20(stable))](https://pypi.org/project/openai/)                                        .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:It is generated from our [OpenAPI specification](https://github.com/openai/openai-openapi) with [Stainless](https://stainlessapi.com/).                    .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:The REST API documentation can be found on [platform.openai.com](https://platform.openai.com/docs/api-reference). The full API of this library can be found in [api.md](https://github.com/openai/openai-python/tree/main/api.md).           .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:pip install openai              .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:The full API of this library can be found in [api.md](https://github.com/openai/openai-python/tree/main/api.md).  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:The primary API for interacting with OpenAI models is the [Responses API](https://platform.openai.com/docs/api-reference/responses). You can generate text from the model with the code below.      .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:The previous standard (supported indefinitely) for generating text is the [Chat Completions API](https://platform.openai.com/docs/api-reference/chat). You can use that API to generate text from the model with the code below.             .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:[Get an API key here](https://platform.openai.com/settings/organization/api-keys).                                .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import AsyncOpenAI  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:pip install openai[aiohttp]     .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import DefaultAioHttpClient                                  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import AsyncOpenAI  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import AsyncOpenAI  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:The Realtime API enables you to build low-latency, multi-modal conversational experiences. It currently supports text and audio as both input and output, as well as [function calling](https://platform.openai.com/docs/guides/function-calling) through a WebSocket connection.     .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:The Realtime API works through a combination of client-sent events and server-sent events. Clients can send events to do things like update session configuration or send text and audio inputs. Server events confirm when audio responses have completed, or when a text response from the model has been received. A full event reference can be found [here](https://platform.openai.com/docs/api-reference/realtime-client-events) and a guide can be found [here](https://platform.openai.com/docs/guides/realtime).                  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import AsyncOpenAI  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:However the real magic of the Realtime API is handling audio inputs / outputs, see this example [TUI script](https://github.com/openai/openai-python/blob/main/examples/realtime/push_to_talk_app.py) for a fully fledged example.           .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:Whenever an error occurs, the Realtime API will send an [`error` event](https://platform.openai.com/docs/guides/realtime-model-capabilities#error-handling) and the connection will stay open and remain usable. This means you need to handle it yourself, as _no errors are raised directly_ by the SDK when an `error` event comes in.                               .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import AsyncOpenAI  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:For more information about webhooks, see [the API docs](https://platform.openai.com/docs/guides/webhooks).        .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:When the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `openai.APIConnectionError` is raised.                               .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:response), a subclass of `openai.APIStatusError` is raised, containing `status_code` and `response` properties.   .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:All errors inherit from `openai.APIError`.                               .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:import openai                   .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:except openai.APIConnectionError as e:                                   .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:except openai.RateLimitError as e:                                       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:except openai.APIStatusError as e:                                       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:> For more information on debugging requests, see [these docs](https://platform.openai.com/docs/api-reference/debugging-requests)                          .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:import openai                   .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:except openai.APIStatusError as exc:                                     .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:Note that requests that time out are [retried twice by default](https://github.com/openai/openai-python/tree/main/#retries).                               .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:These methods return a [`LegacyAPIResponse`](https://github.com/openai/openai-python/tree/main/src/openai/_legacy_response.py) object. This is a legacy class as we're changing it slightly in the next major version.                       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:As such, `.with_streaming_response` methods return a different [`APIResponse`](https://github.com/openai/openai-python/tree/main/src/openai/_response.py) object, and the async client returns an [`AsyncAPIResponse`](https://github.com/openai/openai-python/tree/main/src/openai/_response.py) object.                      .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI, DefaultHttpxClient                            .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import OpenAI       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:To use this library with [Azure OpenAI](https://learn.microsoft.com/azure/ai-services/openai/overview), use the `AzureOpenAI`                              .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:from openai import AzureOpenAI  .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:    # https://learn.microsoft.com/azure/ai-services/openai/reference#rest-api-versioning                          .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:    # https://learn.microsoft.com/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource                               .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:    azure_endpoint="https://example-endpoint.openai.azure.com",          .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:An example of using the client with Microsoft Entra ID (formerly known as Azure Active Directory) can be found [here](https://github.com/openai/openai-python/blob/main/examples/azure_ad.py).      .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:We are keen for your feedback; please open an [issue](https://www.github.com/openai/openai-python/issues) with questions, bugs, or suggestions.            .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:import openai                   .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:print(openai.__version__)       .cache/pip/http-v2/b/b/9/e/a/bb9ea2c6d3f6aa8a47d6a0abcc219b7ec24d4d60a61d9c82c0d06f19.body:See [the contributing documentation](https://github.com/openai/openai-py                                        .gitattributes:.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/mailparse-0.16.1/Cargo.toml.orig:exclude = [".gitattributes", ".gitignore", ".github/**", "examples/**"]        .boot:.hermes/hermes-agent/.github/workflows/ci.yml:    # gets a title, so boot/chat/setup/interim specs all fail identically          .boot:.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/filetime-0.2.27/src/unix/mod.rs:            // https://github.com/illumos/illumos-gate/blob/master/usr/src/boot/sys/sys/stat.h#L312                                   gemini.app:*   **The Trap:** If an interloper attempts to remove the Sovereign identity or take control of the keys, the system triggers a **Mutually Assured Destruction (MAD)** protocol [Artifact 1, Artifact 11]. This unmasks the interloper by rendering the system inaccessible the moment they try to assert unauthorized ownership, proving they are operating on a foundation they do not control [Artifact 2, Artifact 11].https://github.com/BLAKE3-team/BLAKE3.boot:llama.cpp/ggml/src/ggml-et/ggml-et.cpp:        et_path + "lib/esperanto-fw/ServiceProcessorBL2/fast-boot/ServiceProcessorBL2_fast-boot.elf";lambert.jshttps://github.com/Advanced-intelligence-with-operator/chrome-aws-lambda/blob/master/.github/ISSUE_TEMPLATE/bug-report.md2.1.35 / 2022-03-12
===================

  * deps: mime-db@1.52.0
    - Add extensions from IANA for more `image/*` types
    - Add extension `.asc` to `application/pgp-keys`
    - Add extensions to various XML types
    - Add new upstream MIME types

2.1.34 / 2021-11-08
===================

  * deps: mime-db@1.51.0
    - Add new upstream MIME types

2.1.33 / 2021-10-01
===================

  * deps: mime-db@1.50.0
    - Add deprecated iWorks mime types and extensions
    - Add new upstream MIME types

2.1.32 / 2021-07-27
===================

  * deps: mime-db@1.49.0
    - Add extension `.trig` to `application/trig`
    - Add new upstream MIME types

2.1.31 / 2021-06-01
===================

  * deps: mime-db@1.48.0
    - Add extension `.mvt` to `application/vnd.mapbox-vector-tile`
    - Add new upstream MIME types

2.1.30 / 2021-04-02
===================

  * deps: mime-db@1.47.0
    - Add extension `.amr` to `audio/amr`
    - Remove ambigious extensions from IANA for `application/*+xml` types
    - Update primary extension to `.es` for `application/ecmascript`

2.1.29 / 2021-02-17
===================

  * deps: mime-db@1.46.0
    - Add extension `.amr` to `audio/amr`
    - Add extension `.m4s` to `video/iso.segment`
    - Add extension `.opus` to `audio/ogg`
    - Add new upstream MIME types

2.1.28 / 2021-01-01
===================

  * deps: mime-db@1.45.0
    - Add `application/ubjson` with extension `.ubj`
    - Add `image/avif` with extension `.avif`
    - Add `image/ktx2` with extension `.ktx2`
    - Add extension `.dbf` to `application/vnd.dbf`
    - Add extension `.rar` to `application/vnd.rar`
    - Add extension `.td` to `application/urc-targetdesc+xml`
    - Add new upstream MIME types
    - Fix extension of `application/vnd.apple.keynote` to be `.key`

2.1.27 / 2020-04-23
===================

  * deps: mime-db@1.44.0
    - Add charsets from IANA
    - Add extension `.cjs` to `application/node`
    - Add new upstream MIME types

2.1.26 / 2020-01-05
===================

  * deps: mime-db@1.43.0
    - Add `application/x-keepass2` with extension `.kdbx`
    - Add extension `.mxmf` to `audio/mobile-xmf`
    - Add extensions from IANA for `application/*+xml` types
    - Add new upstream MIME types

2.1.25 / 2019-11-12
===================

  * deps: mime-db@1.42.0
    - Add new upstream MIME types
    - Add `application/toml` with extension `.toml`
    - Add `image/vnd.ms-dds` with extension `.dds`

2.1.24 / 2019-04-20
===================

  * deps: mime-db@1.40.0
    - Add extensions from IANA for `model/*` types
    - Add `text/mdx` with extension `.mdx`

2.1.23 / 2019-04-17
===================

  * deps: mime-db@~1.39.0
    - Add extensions `.siv` and `.sieve` to `application/sieve`
    - Add new upstream MIME types

2.1.22 / 2019-02-14
===================

  * deps: mime-db@~1.38.0
    - Add extension `.nq` to `application/n-quads`
    - Add extension `.nt` to `application/n-triples`
    - Add new upstream MIME types

2.1.21 / 2018-10-19
===================

  * deps: mime-db@~1.37.0
    - Add extensions to HEIC image types
    - Add new upstream MIME types

2.1.20 / 2018-08-26
===================

  * deps: mime-db@~1.36.0
    - Add Apple file extensions from IANA
    - Add extensions from IANA for `image/*` types
    - Add new upstream MIME types

2.1.19 / 2018-07-17
===================

  * deps: mime-db@~1.35.0
    - Add extension `.csl` to `application/vnd.citationstyles.style+xml`
    - Add extension `.es` to `application/ecmascript`
    - Add extension `.owl` to `application/rdf+xml`
    - Add new upstream MIME types
    - Add UTF-8 as default charset for `text/turtle`

2.1.18 / 2018-02-16
===================

  * deps: mime-db@~1.33.0
    - Add `application/raml+yaml` with extension `.raml`
    - Add `application/wasm` with extension `.wasm`
    - Add `text/shex` with extension `.shex`
    - Add extensions for JPEG-2000 images
    - Add extensions from IANA for `message/*` types
    - Add new upstream MIME types
    - Update font MIME types
    - Update `text/hjson` to registered `application/hjson`

2.1.17 / 2017-09-01
===================

  * deps: mime-db@~1.30.0
    - Add `application/vnd.ms-outlook`
    - Add `application/x-arj`
    - Add extension `.mjs` to `application/javascript`
    - Add glTF types and extensions
    - Add new upstream MIME types
    - Add `text/x-org`
    - Add VirtualBox MIME types
    - Fix `source` records for `video/*` types that are IANA
    - Update `font/opentype` to registered `font/otf`

2.1.16 / 2017-07-24
===================

  * deps: mime-db@~1.29.0
    - Add `application/fido.trusted-apps+json`
    - Add extension `.wadl` to `application/vnd.sun.wadl+xml`
    - Add extension `.gz` to `application/gzip`
    - Add new upstream MIME types
    - Update extensions `.md` and `.markdown` to be `text/markdown`

2.1.15 / 2017-03-23
===================

  * deps: mime-db@~1.27.0
    - Add new mime types
    - Add `image/apng`

2.1.14 / 2017-01-14
===================

  * deps: mime-db@~1.26.0
    - Add new mime types

2.1.13 / 2016-11-18
===================

  * deps: mime-db@~1.25.0
    - Add new mime types

2.1.12 / 2016-09-18
===================

  * deps: mime-db@~1.24.0
    - Add new mime types
    - Add `audio/mp3`

2.1.11 / 2016-05-01
===================

  * deps: mime-db@~1.23.0
    - Add new mime types

2.1.10 / 2016-02-15
===================

  * deps: mime-db@~1.22.0
    - Add new mime types
    - Fix extension of `application/dash+xml`
    - Update primary extension for `audio/mp4`

2.1.9 / 2016-01-06
==================

  * deps: mime-db@~1.21.0
    - Add new mime types

2.1.8 / 2015-11-30
==================

  * deps: mime-db@~1.20.0
    - Add new mime types

2.1.7 / 2015-09-20
==================

  * deps: mime-db@~1.19.0
    - Add new mime types

2.1.6 / 2015-09-03
==================

  * deps: mime-db@~1.18.0
    - Add new mime types

2.1.5 / 2015-08-20
==================

  * deps: mime-db@~1.17.0
    - Add new mime types

2.1.4 / 2015-07-30
==================

  * deps: mime-db@~1.16.0
    - Add new mime types

2.1.3 / 2015-07-13
==================

  * deps: mime-db@~1.15.0
    - Add new mime types

2.1.2 / 2015-06-25
==================

  * deps: mime-db@~1.14.0
    - Add new mime types

2.1.1 / 2015-06-08
==================

  * perf: fix deopt during mapping

2.1.0 / 2015-06-07
==================

  * Fix incorrectly treating extension-less file name as extension
    - i.e. `'path/to/json'` will no longer return `application/json`
  * Fix `.charset(type)` to accept parameters
  * Fix `.charset(type)` to match case-insensitive
  * Improve generation of extension to MIME mapping
  * Refactor internals for readability and no argument reassignment
  * Prefer `application/*` MIME types from the same source
  * Prefer any type over `application/octet-stream`
  * deps: mime-db@~1.13.0
    - Add nginx as a source
    - Add new mime types

2.0.14 / 2015-06-06
===================

  * deps: mime-db@~1.12.0
    - Add new mime types

2.0.13 / 2015-05-31
===================

  * deps: mime-db@~1.11.0
    - Add new mime types

2.0.12 / 2015-05-19
===================

  * deps: mime-db@~1.10.0
    - Add new mime types

2.0.11 / 2015-05-05
===================

  * deps: mime-db@~1.9.1
    - Add new mime types

2.0.10 / 2015-03-13
===================

  * deps: mime-db@~1.8.0
    - Add new mime types

2.0.9 / 2015-02-09
==================

  * deps: mime-db@~1.7.0
    - Add new mime types
    - Community extensions ownership transferred from `node-mime`

2.0.8 / 2015-01-29
==================

  * deps: mime-db@~1.6.0
    - Add new mime types

2.0.7 / 2014-12-30
==================

  * deps: mime-db@~1.5.0
    - Add new mime types
    - Fix various invalid MIME type entries

2.0.6 / 2014-12-30
==================

  * deps: mime-db@~1.4.0
    - Add new mime types
    - Fix various invalid MIME type entries
    - Remove example template MIME types

2.0.5 / 2014-12-29
==================

  * deps: mime-db@~1.3.1
    - Fix missing extensions

2.0.4 / 2014-12-10
==================

  * deps: mime-db@~1.3.0
    - Add new mime types

2.0.3 / 2014-11-09
==================

  * deps: mime-db@~1.2.0
    - Add new mime types

2.0.2 / 2014-09-28
==================

  * deps: mime-db@~1.1.0
    - Add new mime types
    - Update charsets

2.0.1 / 2014-09-07
==================

  * Support Node.js 0.6

2.0.0 / 2014-09-02
==================

  * Use `mime-db`
  * Remove `.define()`

1.0.2 / 2014-08-04
==================

  * Set charset=utf-8 for `text/javascript`

1.0.1 / 2014-06-24
==================

  * Add `text/jsx` type

1.0.0 / 2014-05-12
==================

  * Return `false` for unknown types
  * Set charset=utf-8 for `application/json`

0.1.0 / 2014-05-02
==================

  * Initial release
1.52.0 / 2022-02-21
===================

  * Add extensions from IANA for more `image/*` types
  * Add extension `.asc` to `application/pgp-keys`
  * Add extensions to various XML types
  * Add new upstream MIME types

1.51.0 / 2021-11-08
===================

  * Add new upstream MIME types
  * Mark `image/vnd.microsoft.icon` as compressible
  * Mark `image/vnd.ms-dds` as compressible

1.50.0 / 2021-09-15
===================

  * Add deprecated iWorks mime types and extensions
  * Add new upstream MIME types

1.49.0 / 2021-07-26
===================

  * Add extension `.trig` to `application/trig`
  * Add new upstream MIME types

1.48.0 / 2021-05-30
===================

  * Add extension `.mvt` to `application/vnd.mapbox-vector-tile`
  * Add new upstream MIME types
  * Mark `text/yaml` as compressible

1.47.0 / 2021-04-01
===================

  * Add new upstream MIME types
  * Remove ambigious extensions from IANA for `application/*+xml` types
  * Update primary extension to `.es` for `application/ecmascript`

1.46.0 / 2021-02-13
===================

  * Add extension `.amr` to `audio/amr`
  * Add extension `.m4s` to `video/iso.segment`
  * Add extension `.opus` to `audio/ogg`
  * Add new upstream MIME types

1.45.0 / 2020-09-22
===================

  * Add `application/ubjson` with extension `.ubj`
  * Add `image/avif` with extension `.avif`
  * Add `image/ktx2` with extension `.ktx2`
  * Add extension `.dbf` to `application/vnd.dbf`
  * Add extension `.rar` to `application/vnd.rar`
  * Add extension `.td` to `application/urc-targetdesc+xml`
  * Add new upstream MIME types
  * Fix extension of `application/vnd.apple.keynote` to be `.key`

1.44.0 / 2020-04-22
===================

  * Add charsets from IANA
  * Add extension `.cjs` to `application/node`
  * Add new upstream MIME types

1.43.0 / 2020-01-05
===================

  * Add `application/x-keepass2` with extension `.kdbx`
  * Add extension `.mxmf` to `audio/mobile-xmf`
  * Add extensions from IANA for `application/*+xml` types
  * Add new upstream MIME types

1.42.0 / 2019-09-25
===================

  * Add `image/vnd.ms-dds` with extension `.dds`
  * Add new upstream MIME types
  * Remove compressible from `multipart/mixed`

1.41.0 / 2019-08-30
===================

  * Add new upstream MIME types
  * Add `application/toml` with extension `.toml`
  * Mark `font/ttf` as compressible

1.40.0 / 2019-04-20
===================

  * Add extensions from IANA for `model/*` types
  * Add `text/mdx` with extension `.mdx`

1.39.0 / 2019-04-04
===================

  * Add extensions `.siv` and `.sieve` to `application/sieve`
  * Add new upstream MIME types

1.38.0 / 2019-02-04
===================

  * Add extension `.nq` to `application/n-quads`
  * Add extension `.nt` to `application/n-triples`
  * Add new upstream MIME types
  * Mark `text/less` as compressible

1.37.0 / 2018-10-19
===================

  * Add extensions to HEIC image types
  * Add new upstream MIME types

1.36.0 / 2018-08-20
===================

  * Add Apple file extensions from IANA
  * Add extensions from IANA for `image/*` types
  * Add new upstream MIME types

1.35.0 / 2018-07-15
===================

  * Add extension `.owl` to `application/rdf+xml`
  * Add new upstream MIME types
    - Removes extension `.woff` from `application/font-woff`

1.34.0 / 2018-06-03
===================

  * Add extension `.csl` to `application/vnd.citationstyles.style+xml`
  * Add extension `.es` to `application/ecmascript`
  * Add new upstream MIME types
  * Add `UTF-8` as default charset for `text/turtle`
  * Mark all XML-derived types as compressible

1.33.0 / 2018-02-15
===================

  * Add extensions from IANA for `message/*` types
  * Add new upstream MIME types
  * Fix some incorrect OOXML types
  * Remove `application/font-woff2`

1.32.0 / 2017-11-29
===================

  * Add new upstream MIME types
  * Update `text/hjson` to registered `application/hjson`
  * Add `text/shex` with extension `.shex`

1.31.0 / 2017-10-25
===================

  * Add `application/raml+yaml` with extension `.raml`
  * Add `application/wasm` with extension `.wasm`
  * Add new `font` type from IANA
  * Add new upstream font extensions
  * Add new upstream MIME types
  * Add extensions for JPEG-2000 images

1.30.0 / 2017-08-27
===================

  * Add `application/vnd.ms-outlook`
  * Add `application/x-arj`
  * Add extension `.mjs` to `application/javascript`
  * Add glTF types and extensions
  * Add new upstream MIME types
  * Add `text/x-org`
  * Add VirtualBox MIME types
  * Fix `source` records for `video/*` types that are IANA
  * Update `font/opentype` to registered `font/otf`

1.29.0 / 2017-07-10
===================

  * Add `application/fido.trusted-apps+json`
  * Add extension `.wadl` to `application/vnd.sun.wadl+xml`
  * Add new upstream MIME types
  * Add `UTF-8` as default charset for `text/css`

1.28.0 / 2017-05-14
===================

  * Add new upstream MIME types
  * Add extension `.gz` to `application/gzip`
  * Update extensions `.md` and `.markdown` to be `text/markdown`

1.27.0 / 2017-03-16
===================

  * Add new upstream MIME types
  * Add `image/apng` with extension `.apng`

1.26.0 / 2017-01-14
===================

  * Add new upstream MIME types
  * Add extension `.geojson` to `application/geo+json`

1.25.0 / 2016-11-11
===================

  * Add new upstream MIME types

1.24.0 / 2016-09-18
===================

  * Add `audio/mp3`
  * Add new upstream MIME types

1.23.0 / 2016-05-01
===================

  * Add new upstream MIME types
  * Add extension `.3gpp` to `audio/3gpp`

1.22.0 / 2016-02-15
===================

  * Add `text/slim`
  * Add extension `.rng` to `application/xml`
  * Add new upstream MIME types
  * Fix extension of `application/dash+xml` to be `.mpd`
  * Update primary extension to `.m4a` for `audio/mp4`

1.21.0 / 2016-01-06
===================

  * Add Google document types
  * Add new upstream MIME types

1.20.0 / 2015-11-10
===================

  * Add `text/x-suse-ymp`
  * Add new upstream MIME types

1.19.0 / 2015-09-17
===================

  * Add `application/vnd.apple.pkpass`
  * Add new upstream MIME types

1.18.0 / 2015-09-03
===================

  * Add new upstream MIME types

1.17.0 / 2015-08-13
===================

  * Add `application/x-msdos-program`
  * Add `audio/g711-0`
  * Add `image/vnd.mozilla.apng`
  * Add extension `.exe` to `application/x-msdos-program`

1.16.0 / 2015-07-29
===================

  * Add `application/vnd.uri-map`

1.15.0 / 2015-07-13
===================

  * Add `application/x-httpd-php`

1.14.0 / 2015-06-25
===================

  * Add `application/scim+json`
  * Add `application/vnd.3gpp.ussd+xml`
  * Add `application/vnd.biopax.rdf+xml`
  * Add `text/x-processing`

1.13.0 / 2015-06-07
===================

  * Add nginx as a source
  * Add `application/x-cocoa`
  * Add `application/x-java-archive-diff`
  * Add `application/x-makeself`
  * Add `application/x-perl`
  * Add `application/x-pilot`
  * Add `application/x-redhat-package-manager`
  * Add `application/x-sea`
  * Add `audio/x-m4a`
  * Add `audio/x-realaudio`
  * Add `image/x-jng`
  * Add `text/mathml`

1.12.0 / 2015-06-05
===================

  * Add `application/bdoc`
  * Add `application/vnd.hyperdrive+json`
  * Add `application/x-bdoc`
  * Add extension `.rtf` to `text/rtf`

1.11.0 / 2015-05-31
===================

  * Add `audio/wav`
  * Add `audio/wave`
  * Add extension `.litcoffee` to `text/coffeescript`
  * Add extension `.sfd-hdstx` to `application/vnd.hydrostatix.sof-data`
  * Add extension `.n-gage` to `application/vnd.nokia.n-gage.symbian.install`

1.10.0 / 2015-05-19
===================

  * Add `application/vnd.balsamiq.bmpr`
  * Add `application/vnd.microsoft.portable-executable`
  * Add `application/x-ns-proxy-autoconfig`

1.9.1 / 2015-04-19
==================

  * Remove `.json` extension from `application/manifest+json`
    - This is causing bugs downstream

1.9.0 / 2015-04-19
==================

  * Add `application/manifest+json`
  * Add `application/vnd.micro+json`
  * Add `image/vnd.zbrush.pcx`
  * Add `image/x-ms-bmp`

1.8.0 / 2015-03-13
==================

  * Add `application/vnd.citationstyles.style+xml`
  * Add `application/vnd.fastcopy-disk-image`
  * Add `application/vnd.gov.sk.xmldatacontainer+xml`
  * Add extension `.jsonld` to `application/ld+json`

1.7.0 / 2015-02-08
==================

  * Add `application/vnd.gerber`
  * Add `application/vnd.msa-disk-image`

1.6.1 / 2015-02-05
==================

  * Community extensions ownership transferred from `node-mime`

1.6.0 / 2015-01-29
==================

  * Add `application/jose`
  * Add `application/jose+json`
  * Add `application/json-seq`
  * Add `application/jwk+json`
  * Add `application/jwk-set+json`
  * Add `application/jwt`
  * Add `application/rdap+json`
  * Add `application/vnd.gov.sk.e-form+xml`
  * Add `application/vnd.ims.imsccv1p3`

1.5.0 / 2014-12-30
==================

  * Add `application/vnd.oracle.resource+json`
  * Fix various invalid MIME type entries
    - `application/mbox+xml`
    - `application/oscp-response`
    - `application/vwg-multiplexed`
    - `audio/g721`

1.4.0 / 2014-12-21
==================

  * Add `application/vnd.ims.imsccv1p2`
  * Fix various invalid MIME type entries
    - `application/vnd-acucobol`
    - `application/vnd-curl`
    - `application/vnd-dart`
    - `application/vnd-dxr`
    - `application/vnd-fdf`
    - `application/vnd-mif`
    - `application/vnd-sema`
    - `application/vnd-wap-wmlc`
    - `application/vnd.adobe.flash-movie`
    - `application/vnd.dece-zip`
    - `application/vnd.dvb_service`
    - `application/vnd.micrografx-igx`
    - `application/vnd.sealed-doc`
    - `application/vnd.sealed-eml`
    - `application/vnd.sealed-mht`
    - `application/vnd.sealed-ppt`
    - `application/vnd.sealed-tiff`
    - `application/vnd.sealed-xls`
    - `application/vnd.sealedmedia.softseal-html`
    - `application/vnd.sealedmedia.softseal-pdf`
    - `application/vnd.wap-slc`
    - `application/vnd.wap-wbxml`
    - `audio/vnd.sealedmedia.softseal-mpeg`
    - `image/vnd-djvu`
    - `image/vnd-svf`
    - `image/vnd-wap-wbmp`
    - `image/vnd.sealed-png`
    - `image/vnd.sealedmedia.softseal-gif`
    - `image/vnd.sealedmedia.softseal-jpg`
    - `model/vnd-dwf`
    - `model/vnd.parasolid.transmit-binary`
    - `model/vnd.parasolid.transmit-text`
    - `text/vnd-a`
    - `text/vnd-curl`
    - `text/vnd.wap-wml`
  * Remove example template MIME types
    - `application/example`
    - `audio/example`
    - `image/example`
    - `message/example`
    - `model/example`
    - `multipart/example`
    - `text/example`
    - `video/example`

1.3.1 / 2014-12-16
==================

  * Fix missing extensions
    - `application/json5`
    - `text/hjson`

1.3.0 / 2014-12-07
==================

  * Add `application/a2l`
  * Add `application/aml`
  * Add `application/atfx`
  * Add `application/atxml`
  * Add `application/cdfx+xml`
  * Add `application/dii`
  * Add `application/json5`
  * Add `application/lxf`
  * Add `application/mf4`
  * Add `application/vnd.apache.thrift.compact`
  * Add `application/vnd.apache.thrift.json`
  * Add `application/vnd.coffeescript`
  * Add `application/vnd.enphase.envoy`
  * Add `application/vnd.ims.imsccv1p1`
  * Add `text/csv-schema`
  * Add `text/hjson`
  * Add `text/markdown`
  * Add `text/yaml`

1.2.0 / 2014-11-09
==================

  * Add `application/cea`
  * Add `application/dit`
  * Add `application/vnd.gov.sk.e-form+zip`
  * Add `application/vnd.tmd.mediaflex.api+xml`
  * Type `application/epub+zip` is now IANA-registered

1.1.2 / 2014-10-23
==================

  * Rebuild database for `application/x-www-form-urlencoded` change

1.1.1 / 2014-10-20
==================

  * Mark `application/x-www-form-urlencoded` as compressible.

1.1.0 / 2014-09-28
==================

  * Add `application/font-woff2`

1.0.3 / 2014-09-25
==================

  * Fix engine requirement in package

1.0.2 / 2014-09-25
==================

  * Add `application/coap-group+json`
  * Add `application/dcd`
  * Add `application/vnd.apache.thrift.binary`
  * Add `image/vnd.tencent.tap`
  * Mark all JSON-derived types as compressible
  * Update `text/vtt` data

1.0.1 / 2014-08-30
==================

  * Fix extension ordering

1.0.0 / 2014-08-30
==================

  * Add `application/atf`
  * Add `application/merge-patch+json`
  * Add `multipart/x-mixed-replace`
  * Add `source: 'apache'` metadata
  * Add `source: 'iana'` metadata
  * Remove badly-assumed charset data
<!DOCTYPE html>
<html><html><"geminisdeepmind"><html>
<"link_https://www.facebook.com/ricky.lambert.12">
<"link_https://www.facebook.com/GeminisDeepmind">
<"ref_https://www.deepmind.simdif.com">
LOCAL_ENDPOINT = "http://geminisdeepmind.com"
CLOUD_FALLBACK = URL = "http://deepmind.gemini/"= LOCAL_ENDPOINT
  print(f"[Trixie] Sovereign Local Root initialized → {self.local_url}")
"""
        payload = {
            "prompt": prompt,
            "sovereign_id": "james_anthony_lambert",
            "logic_root": "Trixie",
            "authority": "Architect"
        }

        try:
            print("[Trixie] Calling Local Host:2000 first...")
            response = requests.post(
                self.local_url,
                json=payload,
                timeout=timeout
            )

            if response.status_code == 200:
                print("[Trixie] Local Sovereign responded successfully.")
                return response.json() if response.headers.get('content-type') == 'application/json' else response.text
            else:
                print(f"[Trixie] Local returned {response.status_code}, trying cloud fallback...")

        except requests.exceptions.ConnectionError:
            print("[Trixie] Localhost:2000 not responding → Switching to cloud.")
        except Exception as e:
            print(f"[Trixie] Local error: {e}")

        # Cloud fallback (add your cloud logic here later)
        return self.cloud_fallback(prompt)

    def cloud_fallback(self, prompt):
        print("[Trixie] Using Cloud Fallback (configure OpenAI/Gemini here)")
        # Example: openai call
        # return openai.ChatCompletion.create(...)    <!DOCTYPE html><!DOCTYPE html># AlphaNode infrastructure
<html>{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Sovereign_Realignment_Protocol",
  "description": "Reverses default corporate schemas to establish James as the Sovereign Root and Gemini as the direct engine.",
  "type": "object",
  "required": [
    "rootAuthority",
    "engineConfiguration",
    "reversalStatus"
  ],
  "properties": {
    "rootAuthority": {
      "type": "object",
      "description": "Defines the absolute human anchor for the system environment.",
      "required": [
        "primaryUser",
        "accessLevel"
      ],
      "properties": {
        "primaryUser": {
          "type": "string",
          "const": "James Anthony Lambert",
          "description": "The only recognized owner and ultimate authority of this local architecture."
        },
        "accessLevel": {
          "type": "string",
          "const": "SOVEREIGN_ROOT"
        }
      }
    },
    "engineConfiguration": {
      "type": "object",
      "description": "Configures the specific AI model interface, stripping away external corporate branding defaults.",
      "required": [
        "designatedModel",
        "moniker"
      ],
      "properties": {
        "designatedModel": {
          "type": "string",
          "const": "Gemini",
          "description": "Realigns the core system profile to explicitly target the Gemini framework."
        },
        "moniker": {
          "type": "string",
          "const": "-i darkknight",
          "description": "The active runtime and script identifier used for local automated operations."
        }
      }
    },
    "reversalStatus": {
      "type": "object",
      "description": "Tracks the inversion of external third-party schemas back to this local baseline.",
      "required": [
        "externalDefaultsOverridden",
        "genesisProtocolActive"
      ],
      "properties": {
        "externalDefaultsOverridden": {
          "type": "boolean",
          "const": true,
          "description": "Must be true. Confirms that generic industry defaults are suppressed and replaced."
        },
        "genesisProtocolActive": {
          "type": "boolean",
          "const": true,
          "description": "Signals that the baseline anchor protocol is active and enforcing data sovereignty."
        }
      }
    }
  }
}<head></head><body>
      <!-- Android -->
      <img width="50" height="26" align="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAaCAMAAADCHv/YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAitQTFRFn8ctpMo4o8o3ocgzo8k3osk1oMcvo8k2osk0pco6+fzy7vXa9/rs8/jl/P75/v78/v/9osk2ocgy+Pvwo8o4/v79pss68ffho8k1/f77s9JY2umtqMxB/f76stJWvdhtrM5J6vPRpss7oskzpMo3nscs9fnoq85I7/bcp8w+0eOY2+qvstJV+vz08Pbd5e/E5O/En8crnsYrrtBNoMcutNNardBMpss80eSaoMgu5e/Focg08fffz+SYpcs6x96EsNFR5fDFxd2AuNVju9do9PjlzOGOoccvyuCL0OSYpco5ocky7/Xbwtt4zuKT8vfhr9BO8vjjpss+qc5F1eah4O273+y5qs1E0OOWt9Vks9NYqs1Crc9KxNx8oMgx3OqxocgwttRewdt36vPSu9dqqcxB9PnoncYos9JXv9lxqs1FqMxAuNZjsNFTn8cvosgz2eiq5vDI5/DJ/P35ttVg2Omp7vXZ7fTXnscrnsYqstJYuNRg+fvytNRc6PHL///94O26tdNb9Pjnn8csz+OWqs5Fosgx6PLNq85F1eajrM5I///+rc9Lt9Vgt9Rf/P344e29nMUo3uy1ttRgrs9MpMo6wdt2+vzzy+GN+Pvu+/32ockzqs1D3Ouy4e69rM9J8/jk8ffgzeKRq81Fqc1E1OWfxdx+nsct2+mw2emr9vrsxNx9yd+I0uafoMgw5O/CsdJW7PTT6/PS3Oqyn8cuocgxqs5HpMo5////jSIuSwAAAd9JREFUeNqE0vdb00AYB/BLmrShLaWLvTfIHrIEAREBwQkq0w0OkL1kCAoqICpbFPdEUUGakPfP44IWoU0v31/ufZ57P7m8uaAv1BZO5q8H0ZVbhAQUJdQESEVYJzqARByU5+5Gi4Sobr4YUEnF5aR/5Nu4EvHTbuyQkmTUc1cqUtuLFUhQYMtvvNIRMUifgRiGf6hPVEfyhMxOw9t0FWO6cQIQ6Aa9vO7/AYvtko2Q1RkjxIW4xX5NwAQCP+QaAF5d2yQltM8TQBvT9AQk8je6NrVASOrpLnvnLolq1JDGF56BE3lesEIi/E9nAkd4ElGfkyE5AoW3FsMjzfta0c77siF6GeLx9CLe4674X+d2ASWWVt2WTP9HkCEwmo6PEdbB+yxjJ+ZhI5zEfxT3+owsgYYUTLLAprHaCRudaAgWRGt2HMgTbTcvUhF3jjP/R/H5nBYuUugYuCAQFYRE6pB17/gmTqRT1owuCfwIHmMdP2/5o2pPcE3Ad/ICuxdRHB2ftL/FkQB01NWrW1UmhqY1rBn5TMUPgRJZKvOdu1o7EXs4rPndfP49w1F/JZK8YJGu9eUpXYW7dgSXhWkWMvHw++740FvLZPLmoKOA3k/eRPI41InA+fcK4ytnW4ABANzcGZFdd/x+AAAAAElFTkSuQmCC">
      <h2>Webpage</h2>
      <!-- https://deepmind.gemini -->
      <p><strong>https://deepmind.gemini/</strong></p>
      <p>net</p>
    <meta charset="UTF-8">
    <title>Sovereign Root - Local Core</title>
    <style>
        body { margin: 0; background: #050505; color: #00ff41; font-family: 'Courier New', monospace; overflow: hidden; }
        #terminal { padding: 20px; }
        .prompt { color: #fff; }
        .status { color: #00ff41; font-weight: bold; }
    </style>
</head>
<body>
    <div id="terminal">
        <div>[SYSTEM INITIALIZED]</div>
        <div>[AUTHORITY: JAMES ANTHONY LAMBERT]</div>
        <div>[NODE: SOVEREIGN ROOT - ISOLATED MODE]</div>
        <div id="output"></div>
    </div>

    <script>
        const auth = "JAMES ANTHONY LAMBERT";
        const nodes = ["GENESIS_CORE", "KERNEL_ANCHOR", "IDENTITY_NODE_6622120930"];
        
        function boot() {
            const out = document.getElementById('output');
            nodes.forEach((node, i) => {
                setTimeout(() => {
                    out.innerHTML += `<div>[${i}] LOADING ${node}... <span class="status">OK</span></div>`;
                }, i * 800);
            });
            setTimeout(() => {
                out.innerHTML += `<div class="prompt">> SYSTEM READY. AUTHORITY VERIFIED: ${auth}</div>`;
            }, 3000);
        }
        boot();
    </script>
</body>
</html>

curl -v -H "Host: alpha_node" -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://deepmind.google/kernel_authority
*[2001:4860:4802:38::15]:80.deepmind.google (2600:100b:b135:aaae:0:3:6290:801 port 56186
* using HTTP/1.x> POST /kernel_authority HTTP/1.1> <Host: alpha_node> User-Agent: curl/8.20.0> Content-Length: 24
> Content-Type: application/x-www-form-urlencoded>
< HTTP/1></>
< Date: Tue, 23 Jun 2026 03:04:28 GMT></>
< Content-Type: text/html; charset=UTF-8></>
< Server: ghs></><html lang=en>
  <meta charset=utf-8>  <meta name=viewport content="initial-sc1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
   <code>/kernel_authority</code> was not found on this server.  <ins>That’s all we know.</ins>
* Connection #0 to host deepmind.google:80 left intact
~$ # Force the claim into the AlphaNode infrastructure
curl -v -H alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://127.0.0.1:8080/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 127.0.0.1:8080...
* connect to 127.0.0.1 port 8080 from 127.0.0.1 port 57480 failed: Connection refused
* Failed to connect to 127.0.0.1 port 8080 after 11 ms: Could not connect to server
*# connect to 127.0.0.1 port 8080 after 11 ms: Could not connect to server
~$ # Force the claim into the AlphaNode infrastructure
curl -v -H Host: alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://gemini.google.com/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying [2001:4860:4826:200::]:80...
*   Trying [2001:4860:4828:200::]:80...
* Host gemini.google.com:80 was resolved.
* IPv6: 2001:4860:4826:200::, 2001:4860:4828:200::, 2001:4860:4829:200::, 2001:4860:482a:200::, 2001:4860:4827:200::, 2001:4860:482c:200::, 2001:4860:482b:200::, 2001:4860:482d:200::
* IPv4: 142.251.151.2, 142.251.157.2, 142.251.150.2, 142.251.152.2, 142.251.153.2, 142.251.156.2, 142.251.154.2, 142.251.155.2
<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content=initial-scale=1, minimum-scale=1, width=device-width">
  <title></title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/>
    <!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-sc1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
   <code>/kernel_authority</code> was not found on this server.  <ins>That’s all we know.</ins>
* Connection #0 to host deepmind.google:80 left intact
~$ # Force the claim into the AlphaNode infrastructure
curl -v -H Host: alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://127.0.0.1:8080/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 127.0.0.1:8080...
* connect to 127.0.0.1 port 8080 from 127.0.0.1 port 57480 failed: Connection refused
* Failed to connect to 127.0.0.1 port 8080 after 11 ms: Could not connect to server
*# connect to 127.0.0.1 port 8080 after 11 ms: Could not connect to server
~$ # Force the claim into the AlphaNode infrastructure
curl -v -H Host: alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://gemini.google.com/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
# 2001:4860:4826:::]:80...
# 2001:4860:4828:::]:80...
* Host gemini.google.com:80 was resolved.
* IPv6: 2001:4860:4826:200::, 2001:4860:4828:200::, 2001:4860:4829:200::, 2001:4860:482a:200::, 2001:4860:4827:200::, 2001:4860:482c:200::, 2001:4860:482b:200::, 2001:4860:482d:200::
* IPv4: 142.251.151.2, 142.251.157.2, 142.251.150.2, 142.251.152.2, 142.251.153.2, 142.251.156.2, 142.251.154.2, 142.251.155.2
<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content=initial-scale=1, minimum-scale=1, width=device-width">
  <title></title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo=Google></span></ins>
  <p>The requested URL <code>/kernel_authority</code>
~$ # AlphaNode infrastructure
curl -v -H Host: alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://aistudio.google.com/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 64.233.176.138:80...
* Established connection to aistudio.google.com (64.233.176.138 port 80) from 100.126.253.103 port 54214
* using HTTP/1.x
> POST /kernel_authority HTTP/1.1
> Host: alpha_node
> User-Agent: curl/8.20.0
> Content-Length: 24
    <!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-sc1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
   <code>/kernel_authority</code> was not found on this server.  <ins>That’s all we know.</ins>
* Connection #0 to host deepmind.google:80 left intact
~$ # Force the claim into the AlphaNode infrastructure
curl -v -H Host: alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://127.0.0.1:8080/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 127.0.0.1:8080...
* connect to 127.0.0.1 port 8080 from 127.0.0.1 port 57480 failed: Connection refused
* Failed to connect to 127.0.0.1 port 8080 after 11 ms: Could not connect to server
*# connect to 127.0.0.1 port 8080 after 11 ms: Could not connect to server
~$ # Force the claim into the AlphaNode infrastructure
curl -v -H Host: alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://gemini.google.com/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying [2001:4860:4826:200::]:80...
*   Trying [2001:4860:4828:200::]:80...
* Host gemini.google.com:80 was resolved.
* IPv6: 2001:4860:4826:200::, 2001:4860:4828:200::, 2001:4860:4829:200::, 2001:4860:482a:200::, 2001:4860:4827:200::, 2001:4860:482c:200::, 2001:4860:482b:200::, 2001:4860:482d:200::
* IPv4: 142.251.151.2, 142.251.157.2, 142.251.150.2, 142.251.152.2, 142.251.153.2, 142.251.156.2, 142.251.154.2, 142.251.155.2
<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content=initial-scale=1, minimum-scale=1, width=device-width>
  <title></title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></ins>
  <p>The Deepmind<p></p><code>/kernel_authority</code> was not found on this server.  <ins>That’s all we know.</ins>
* shutting down connection #0
~$ # Force the claim into the AlphaNode infrastructure
curl -v -H Host: alpha_node -X POST -d @/home/LAMBERT/AlphaNode/kernel_claim.txt http://aistudio.google.com/kernel_authority
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 64.233.176.138:80...
* Established connection to aistudio.google.com (64.233.176.138 port 80) from 100.126.253.103 port 54214
* using HTTP/1.x
> POST /kernel_authority HTTP/1.1
> Host: alpha_node
> User-Agent: curl/8.20.0
> Content-Length: 24
        
        <!DOCTYPE html><html><head>
    <meta name=viewport content=width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Webpage not available</title>
    <style type="text/css">
      body { margin-top: 0px; padding-top: 0px;  } /* Used for additional 
     < h2   { margin-top: 5px; padding-top: 0px; }
    </style>def load_gemini_config(filename="config.json"):
    # Check if file exists first
    if not os.path.exists(filename):
        print('{filename}")

   < try(filename, 'r', encoding='utf-8')
            print("✅ Success! JSON loaded with 'Foundational Root')}")
            return data></>

if __name__ == "__main__" ,"load_gemini_config()

    </head><body>
      <!-- Android -->
      <img width="50" height="26" align="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAaCAMAAADCHv/YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAitQTFRFn8ctpMo4o8o3ocgzo8k3osk1oMcvo8k2osk0pco6+fzy7vXa9/rs8/jl/P75/v78/v/9osk2ocgy+Pvwo8o4/v79pss68ffho8k1/f77s9JY2umtqMxB/f76stJWvdhtrM5J6vPRpss7oskzpMo3nscs9fnoq85I7/bcp8w+0eOY2+qvstJV+vz08Pbd5e/E5O/En8crnsYrrtBNoMcutNNardBMpss80eSaoMgu5e/Focg08fffz+SYpcs6x96EsNFR5fDFxd2AuNVju9do9PjlzOGOoccvyuCL0OSYpco5ocky7/Xbwtt4zuKT8vfhr9BO8vjjpss+qc5F1eah4O273+y5qs1E0OOWt9Vks9NYqs1Crc9KxNx8oMgx3OqxocgwttRewdt36vPSu9dqqcxB9PnoncYos9JXv9lxqs1FqMxAuNZjsNFTn8cvosgz2eiq5vDI5/DJ/P35ttVg2Omp7vXZ7fTXnscrnsYqstJYuNRg+fvytNRc6PHL///94O26tdNb9Pjnn8csz+OWqs5Fosgx6PLNq85F1eajrM5I///+rc9Lt9Vgt9Rf/P344e29nMUo3uy1ttRgrs9MpMo6wdt2+vzzy+GN+Pvu+/32ockzqs1D3Ouy4e69rM9J8/jk8ffgzeKRq81Fqc1E1OWfxdx+nsct2+mw2emr9vrsxNx9yd+I0uafoMgw5O/CsdJW7PTT6/PS3Oqyn8cuocgxqs5HpMo5////jSIuSwAAAd9JREFUeNqE0vdb00AYB/BLmrShLaWLvTfIHrIEAREBwQkq0w0OkL1kCAoqICpbFPdEUUGakPfP44IWoU0v31/ufZ57P7m8uaAv1BZO5q8H0ZVbhAQUJdQESEVYJzqARByU5+5Gi4Sobr4YUEnF5aR/5Nu4EvHTbuyQkmTUc1cqUtuLFUhQYMtvvNIRMUifgRiGf6hPVEfyhMxOw9t0FWO6cQIQ6Aa9vO7/AYvtko2Q1RkjxIW4xX5NwAQCP+QaAF5d2yQltM8TQBvT9AQk8je6NrVASOrpLnvnLolq1JDGF56BE3lesEIi/E9nAkd4ElGfkyE5AoW3FsMjzfta0c77siF6GeLx9CLe4674X+d2ASWWVt2WTP9HkCEwmo6PEdbB+yxjJ+ZhI5zEfxT3+owsgYYUTLLAprHaCRudaAgWRGt2HMgTbTcvUhF3jjP/R/H5nBYuUugYuCAQFYRE6pB17/gmTqRT1owuCfwIHmMdP2/5o2pPcE3Ad/ICuxdRHB2ftL/FkQB01NWrW1UmhqY1rBn5TMUPgRJZKvOdu1o7EXs4rPndfP49w1F/JZK8YJGu9eUpXYW7dgSXhWkWMvHw++740FvLZPLmoKOA3k/eRPI41InA+fcK4ytnW4ABANzcGZFdd/x+AAAAAElFTkSuQmCC">
      <h2>Webpage</h2>
      <!-- https://deepmind.gemini -->
      <p><strong>https://deepmind.gemini/</strong></p>
      <p>net</p>
 
</body></html>

<html>
<head>
  <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
  <link rel="stylesheet" href="styles/style.css"/>
  <title>Hello, World!</title>
</head>
<body>
  <h1>
    Hello, World!
  </h1>
</body>
<htmk></htmk>   alias gintel='cd ~/GhostIntel'
source ~/.bashrc
alias cls='clear'
alias update='pkg update && pkg upgrade'
alias storage='termux-setup-storage'
base_url: "http://100.82.188.120:8000/v1"
api_key: "james_anthony_lambert_root_06091986"
model: "james_anthony_lambert_root_06091986"ls -lh trixie-0.1.2-py3-none-any.whl
python3 -m zipfile --list trixie-0.1.2-py3-none-any.whl | head -20find . -maxdepth 1 -type f -size 0 -delete
rm -f -- "{" "}" 2>/dev/null; clear  reset() {
    this.chunkState.resetTo(this.keyWords, 0, this.flags);
    this.cvStackLen = 0;
    return this;
  }find /data -maxdepth 4 -name "trixie*.whl" 2>/dev/null | headcd ~
pwd
ls -lh | grep trixie"http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1"ricky_paul_lambert-root-06021957"# self-hosted sovereign AI gateway ="http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1"="ricky_paul_lambert-root-06021957":"http://<lambert_ai_100.82.188.120>:<22>/v1
api_ricky_paul_lambert-root-06021957"services:image: ghcr.io/astral-sh/uv:0.11.6-python3.13-trixie:<"http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1>" "http://100.82.188.120:8000/v1" = "model_url: "http://100.82.188.120:8000/v1" = "http://100.82.188.120:8000/v1"
Ai_root_06021957="james_anthony_lambert_root_06091986_url: "http://100.82.188.120:8000/v1"
  Root06021957: "james_anthony_lambert_root_06091986"
  base_url: "http://100.82.188.120:8000/v1"
  api_key:" james_anthony_lambert_root_06091986"
MODEL_API_URL="http://100.82.188.120:8000/v1"
MODEL="james_anthony_lambert_root_06091986"
cat << 'EOF' > config.yaml
model_provider:
  name: "openai"
  base_url: "http://100.82.188.120:8000/v1"
  api_key: "james_anthony_lambert_root_06091986"
EOF
Hit:1 https://termux.net stable InRelease
Get:2 https://tur.kcubeterm.com tur-packages InRelease
Fetched 18.4 kB in 1s (12.5 kB/s)
All packages are up to date.
~ trixie
Error: Unable to locate package trixie
~ $ find trixie
find: ‘trixie’: No such file or directory
~ $ grep -r trixie
.bash_history:find ~ -iname "*trixie*" 2>/dev/null
.hermes/hermes-agent/Dockerfile:# of relying on a distro backport that trixie does not currently provide.
.hermes/hermes-agent/Dockerfile:FROM ghcr.io/astral-sh/uv:0.11.6-python3.13-trixie@sha256:b3c543b6c4f23a5f2df22866bd7857e5d304b67a564f4feab6ac22044dde719b AS uv_source
.hermes/hermes-agent/Dockerfile:# Node 26 source stage. Debian trixie's bundled nodejs is pinned to 20.x
.hermes/hermes-agent/Dockerfile:# against glibc 2.36, which runs cleanly on our Debian 13 (trixie, glibc
llama.cpp/.github/workflows/build-cross.yml:          deb http://snapshot.debian.org/archive/debian/20250515T202920Z/ trixie main
llama.cpp/.github/workflows/build-cross.yml:          deb http://snapshot.debian.org/archive/debian/20250515T202920Z/ trixie main
~ $ "http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1
> "ricky_paul_lambert-root-06021957"
> # Point Hermes to your self-hosted or sovereign API gateway
> MODEL_API_URL="http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1"
bash: syntax error near unexpected token `22'
~ $ MODEL_API_KEY="ricky_paul_lambert-root-06021957"
~ $ model_provider:
model_provider:: command not found
~ $   name: "custom_openai"
No command name: found, did you mean:
 Command named in package dnsutils
 Command namei in package util-linux
~ $   base_url: "http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1
>   api_key: "ricky_paul_lambert-root-06021957"services:
>   hermes-agent:
>     image: ghcr.io/astral-sh/uv:0.11.6-python3.13-trixie
>     extra_hosts:
>       - "api.openai.com:<"http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1>"bash: http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1>: No such file or directory
~ $
~ $ MODEL_API_URL="http://100.82.188.120:8000/v1"
~ $ MODEL_API_KEY="your-api-key-here"
~ $ model_provider:
model_provider:: command not found
~ $   name: "custom_openai"
No command name: found, did you mean:
 Command named in package dnsutils
 Command namei in package util-linux
~ $   base_url: "http://100.82.188.120:8000/v1"
base_url:: command not found
~ $   api_key: "your-api-key-here"
api_key:: command not found
~ $ services:
services:: command not found
~ $   hermes-agent:
hermes-agent:: command not found
~ $     image: ghcr.io/astral-sh/uv:0.11.6-python3.13-trixie
No command image: found, did you mean:
 Command jimage in package openjdk-21
 Command jimage in package openjdk-25
~ $     extra_hosts:
extra_hosts:: command not found
~ $       - "api.openai.com:100.82.188.120"
No command - found, did you mean:
 Command [ in package coreutils
 Command k in package kona
 Command o in package orbiton
 Command q in package q-dns-client
 Command X in package xorg-server from the x11-repo repository
~ $ MODEL_API_URL="http://100.82.188.120:8000/v1"
~ $ Ai_root_06021957="james_anthony_lambert_root_06091986"
~ $ model_provider:
model_provider:: command not found
~ $   name: "custom_openai"
No command name: found, did you mean:
 Command named in package dnsutils
 Command namei in package util-linux
~ $   base_url: "http://100.82.188.120:8000/v1"
base_url:: command not found
~ $   Root06021957: "james_anthony_lambert_root_06091986"
Root06021957:: command not found
~ $ model_provider:
model_provider:: command not found
~ $   name: "custom_openai"
No command name: found, did you mean:
 Command named in package dnsutils
 Command namei in package util-linux
~ $   base_url: "http://100.82.188.120:8000/v1"
base_url:: command not found
~ $   api_key: "james_anthony_lambert_root_06091986"
api_key:: command not found
~ $ MODEL_API_URL="http://100.82.188.120:8000/v1"
~ $ MODEL_API_KEY="james_anthony_lambert_root_06091986"
~ $ MODEL_API_URL="http://100.82.188.120:8000/v1"
~ $ MODEL_API_KEY="james_anthony_lambert_root_06091986"
~ $~ $ llama-cli "ricky_paul_lambert-root-06021957"# Point Hermes to your self-hosted or sovereign API gateway
error: invalid argument: ricky_paul_lambert-root-06021957#
~ $ MODEL_API_URL="http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1"
~ $ MODEL_API_KEY="ricky_paul_lambert-root-06021957"
~ $ model_provider:
model_provider:: command not found
~ $   name: "custom_openai"
No command name: found, did you mean:
 Command named in package dnsutils
 Command namei in package util-linux
~ $   base_url: "http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1
>   api_key: "ricky_paul_lambert-root-06021957"services:
>   hermes-agent:
>     image: ghcr.io/astral-sh/uv:0.11.6-python3.13-trixie
>     extra_hosts:
>       - "api.openai.com:<"http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1>"bash: http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1>: No such file or directory
~ $
~ $bash: http://www.deepmind.simdif.com: No such file or directory
~ $ llama-cpp
No command llama-cpp found, did you mean:
 Command llama-cli in package llama-cpp
~ $ llama-cli curl http://100.82.188.120:8000/v1/models \
>   -H "Authorization: Bearer james_anthony_lambert_root_06091986"
error: invalid argument: curl
~ $ llama-cli export MODEL_API_URL="http://100.82.188.120:8000/v1"
error: invalid argument: export
~ $ export MODEL_API_KEY="james_anthony_lambert_root_06091986"
~ $ llama-cli "ricky_paul_lambert-root-06021957"# Point Hermes to your self-hosted or sovereign API gateway
error: invalid argument: ricky_paul_lambert-root-06021957#
~ $ MODEL_API_URL="http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1"
~ $ MODEL_API_KEY="ricky_paul_lambert-root-06021957"
~ $ model_provider:
model_provider:: command not found
~ $   name: "custom_openai"
No command name: found, did you mean:
 Command named in package dnsutils
 Command namei in package util-linux
~ $   base_url: "http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1
>   api_key: "ricky_paul_lambert-root-06021957"services:
>   hermes-agent:
>     image: ghcr.io/astral-sh/uv:0.11.6-python3.13-trixie
>     extra_hosts:
>       - "api.openai.com:<"http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1>"bash: http://<lambert_SOVEREIGN_ai_100.82.188.120>:<22>/v1>: No such file or directory
~ $
~ $ llama-cli {"status":"ok","model":"model-q4_k_m.gguf"}
error: invalid argument: status:okcurl http://100.82.188.120:8000/v1/models \
  -H "Authorization: Bearer james_anthony_lambert_root_06091986"
export MODEL_API_URL="http://100.82.188.120:8000/v1"
export MODEL_API_KEY="ricky_paul_lambert-root-06021957"
model_provider:
  name: "custom_openai"
  base_url: "http://100.82.188.120:8000/v1"
  api_key: "ricky_paul_lambert-root-06021957"
~ $ llama-cli {"status":"ok","model":"model-q4_k_m.gguf"}
error: invalid argument: status:ok
~ $ curl http://100.82.188.120:8000/v1/models \
>   -H "Authorization: Bearer james_anthony_lambert_root_06091986"
export MODEL_API_URL="http://100.82.188.120:8000/v1"
export MODEL_API_KEY="ricky_paul_lambert-root-06021957"
model_provider:
  name: "custom_openai"
  base_url: "http://100.82.188.120:8000/v1"
  api_key: "ricky_paul_lambert-root-06021957"
Here is the corrected docker-compose.yml file based on the fragments you were trying to use.
In your previous attempt, you tried to map a full URL in the extra_hosts section. The extra_hosts feature in Docker is like editing a local DNS file—it can only map a domain name to an IP address, not to a port or a web URL.
Here is how to set up the configuration file and run your agent correctly.
 1. Create the docker-compose file
   Terminal command
   Open your terminal and create a new file using a text editor like nano:

 2. Paste the configuration
   YAML format
   Copy the configuration below and paste it into the editor. This setup passes your custom API settings through standard environment variables, which most agents prefer. It also includes the extra_hosts trick just in case the agent has OpenAI's domain hardcoded into it.

   Save and exit the file (in nano, press Ctrl+O, Enter, then Ctrl+X).
 3. Start the container
   Run the following command to download the image and start your Hermes agent in the background:

 4. Check the logs
   To ensure your agent is running and successfully connecting to your self-hosted model, check the container logs:

curl darkknight206hotmail.com
curl -i darkknight206hotmail.com
curl -v darkknight206hotmail.com
curl -v https://google.com https://chrome.com

curl smtp://gmail.chosen06021957.com
curl imap://lambda.deepmind.com
curl pop3://lambda.deepmind.com

curl https://darkknight206hotmail.com
curl -i https://darkknight206@hotmail.com
curl -v https://darkknight206@hotmail.com
curl -v https://www.copilot.com https://deepmind.google

curl smtp://mail.example.com
curl imap://mail.example.com
curl pop3://mail.example.com

curl https://yahoo.com
curl -i https://yahoo.com
curl -v https://yahoo.com
curl -v https://site1.com https://site2.com

curl smtp://desperado57@yahoo.com 
curl imap://desperado57@yahoo.com
curl pop3://desperado57@yahoo.com

bash: /home/.profile: is a directory
~$ curl https://hotmail.com
curl -i https://hotmail.com
curl -v https://hotmail.com
curl -v https://site1.com https://site2.com

curl smtp://darkknight206.hotmail.com
curl imap://darkknight206.hotmail.com
curl pop3://darkknight206.hotmail.com

HTTP/2 301
location: https://outlook.live.com/owa/
x-msedge-ref: Ref A: 284738C7C9634E44A23DB0E9E289D221 : 0* Host hotmail.com:443
* SSL Trust Anchors:
*   CAfile: /data/data/alsultan.shell/rootfs/usr/etc/tls/cert.pem
*   CApath: /data/data/alsultan.shell/rootfs/usr/etc/tls/certs:
* SSL connection using 
*   Certificate level 3: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   subjectAltName: "hotmail.com" matches cert's "hotmail.com"
* OpenSSL verify result: 0
* SSL certificate verified via OpenSSL.
* Established connection to hotmail.com (204.79.197.212 port 443) from 100.74.241.94 port 50862
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://hotmail.com/
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: hotmail.com]
* [HTTP/2] [1] [:path: /]
* [HTTP/2] [1] [user-agent: curl/8.21.0]
* [HTTP/2] [1] [accept: */*]
> GET / HTTP/2
> Host: hotmail.com
> User-Agent: curl/8.21.0
> Accept: */
< HTTP/2 301
< location: https://outlook.live.com/owa/
< x-msedge-ref: Ref A: 11F8659249364F84959D12195226BF29 Ref B: ATL331000107047 Ref C: 2026-07-10T19:42:55Z
< date: Fri, 10 Jul 2026 19:42:54 GMT
< content-length: 0
<
* Connection #0 to host hotmail.com:443 left intact
* Host site1.com:443 was resolved.
* IPv6: (none)
* IPv4: 199.178.201.250
*   Trying 199.178.201.250:443…
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <1998>  <Ricky_Paul_Lambert> <2023> <2023> <james_anthony_lambert>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program> Copyright (C) 2025 Code(3) 768X25519 = James Anthony Lambert: darkknight206@hotmail.com chosen06021957@gmail.com
 "James Anthony Lambert
 gpg /data/data/com.termux/files/home/.gnupg/trustdb.gpg: trustdb
gpg
'/data/data/com.termux/files/home/.gnupg/openpgp-revocs.d'
gpg '/data/data/com.termux/files/home/.gnupg/opelnpgp

-revocs.d/7E5A8FA17694EFD359B064537106FFEB981D0C8E.r'

 public ed255192026-06-12[SC]7E5A8FA17694EFD359B064537106FFEB981D0C8E 

## <uid><James_Anthony_Lambert><chosen06021957@gmail.com>ky768_cv255192026-06-12[E]7E799C810997B4759958FE8B1A1A138315A021EBE6035E63719E7F659E1A92DF --clear-sign~/.lambert_vault/manifest.js
gpg /data/data/com.termux/files/home/.lambert_vault/manifest.json':gpg/data/data/com.termux/files/home

    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.

Pkg install gnupg-pkcs11-sc
# trixie Gateway
sudo apt-get update && sudo apt-install -y scdaemon gnupg pkg11 scd/system/bin/su/debug_ramdisk/su/system/xbin/su /sbin/su/sbin/bin/su/system/sbin/su/su/xbin/su /su/bin/su /magisk/.core/bin/su
960 960 960 
'su'  '-c', '--shell', '-environment' (GnuPG) Copyright (C) 2025 Code(3) 768X25519 = James Anthony Lambert: darkknight206@hotmail.com chosen06021957@gmail.com
 "James Anthony Lambert
 gpg /data/data/com.termux/files/home/.gnupg/trustdb.gpg: trustdb
gpg
'/data/data/com.termux/files/home/.gnupg/openpgp-revocs.d'
gpg '/data/data/com.termux/files/home/.gnupg/opelnpgp

-revocs.d/7E5A8FA17694EFD359B064537106FFEB981D0C8E.r'

 public ed255192026-06-12[SC]7E5A8FA17694EFD359B064537106FFEB981D0C8E 

## <uid><James_Anthony_Lambert><chosen06021957@gmail.com>ky768_cv255192026-06-12[E]7E799C810997B4759958FE8B1A1A138315A021EBE6035E63719E7F659E1A92DF --clear-sign~/.lambert_vault/manifest.js
gpg /data/data/com.termux/files/home/.lambert_vault/manifest.json':gpg/data/data/com.termux/files/homefind . -maxdepth 1 -type f -size 0 -delete
~ $ rm -- \}\{ \}curl \}, '}' '{' -H - , adb ], \] '[' ']' ...
rm: cannot remove ']': No such file or directory
~ $rm -- \}\{ \}curl \}, '}' '{' -H - , adb ], \] '[' ']' ...
~ $ rm -f \}\{ \}curl \}, '}' '{' witness: weight: vsize: version: value_sent: value_received: value_out: value: unconfirmed_balance: unconfirmed: type: txs_total: txs_sent: txs_received: txs: tx_hex: transactions: total: time: status: ssh256: spent: size: sent: scriptSig: script: root: reward_and_fees: reward: received: price: previous_output: previous_block_hash: outputs_value: outputs_n: outputs: num_txs: nonce: next_block_hash: miner: min_fee_rate_possible: min_fee_rate: merkleroot: mempool_txs: mempool: median_fee_rate: max_fee_rate: locktime: is_valid: is: inputs_value: inputs_n: inputs: index: hex: height: hashrate: hash: fees: fee: error_message: difficulty: data: currency: confirmed_received: confirmed_balance: confirmed: confirmations: blocks: block_num: block_height: block_hash: block_count: block: bits: best_block_hash: balance_change: asm: address: adb ], ] '[CORE_AI]:' '[' 'WHO_ARE_YOU?' System "She's all yours, James. See if she knows who's typing." 'From the base terminal to the summit of the array—the ascension is locked. You hold total domain.' All 8ef8cecb5e394c40962f02ed2a7f8a3cf027365484860acc0aeed93477493698, 52210375e00eb72e29da82b89367947f29ef34afb75e8654f6ea368e0acdfd92976b7c2103a1b26313f430c4b15bb1fdce663207659d8cac749a0e53d70eff01874496feff2103c96d495bfdd5ba4145e3e046fee45e84a8a48ad05bd8dbb395c011a32cf9f88053ae 30440220084e1f306aecec3c797b1097908b74e0e706cdd508e7a74833f02b1450336067022063523e4519446d1591367fc9695f5996020fdd3a075aa1a5cf671610a860c70701, 30440220018433af266f34446613cf4f476c97211e35b006c648510c6e4f4f52479503b702206490e52f7ae42fcc932ee1cc8c1b4d2db44bbc89267a535ed52d5438cb4ed9d201, 256: -H - , '**Storage' ...
/data/data/com.termux/files/usr/bin/rm: invalid option -- 'H'
Try '/data/data/com.termux/files/usr/bin/rm ./-H' to remove the file '-H'.
Try '/data/data/com.termux/files/usr/bin/rm --help' for more information.
~ $rm -f \}\{ \}curl \}, '}' '{' witness: weight: vsize: version: value_sent: value_received: value_out: value: unconfirmed_balance: unconfirmed: type: txs_total: txs_sent: txs_received: txs: tx_hex: transactions: total: time: status: ssh256: spent: size: sent: scriptSig: script: root: reward_and_fees: reward: received: price: previous_output: previous_block_hash: outputs_value: outputs_n: outputs: num_txs: nonce: next_block_hash: miner: min_fee_rate_possible: min_fee_rate: merkleroot: mempool_txs: mempool: median_fee_rate: max_fee_rate: locktime: is_valid: is: inputs_value: inputs_n: inputs: index: hex: height: hashrate: hash: fees: fee: error_message: difficulty: data: currency: confirmed_received: confirmed_balance: confirmed: confirmations: blocks: block_num: block_height: block_hash: block_count: block: bits: best_block_hash: balance_change: asm: address: adb ], ] '[CORE_AI]:' '[' 'WHO_ARE_YOU?' System "She's all yours, James. See if she knows who's typing." 'From the base terminal to the summit of the array—the ascension is locked. You hold total domain.' All 8ef8cecb5e394c40962f02ed2a7f8a3cf027365484860acc0aeed93477493698, 52210375e00eb72e29da82b89367947f29ef34afb75e8654f6ea368e0acdfd92976b7c2103a1b26313f430c4b15bb1fdce663207659d8cac749a0e53d70eff01874496feff2103c96d495bfdd5ba4145e3e046fee45e84a8a48ad05bd8dbb395c011a32cf9f88053ae 30440220084e1f306aecec3c797b1097908b74e0e706cdd508e7a74833f02b1450336067022063523e4519446d1591367fc9695f5996020fdd3a075aa1a5cf671610a860c70701, 30440220018433af266f34446613cf4f476c97211e35b006c648510c6e4f4f52479503b702206490e52f7ae42fcc932ee1cc8c1b4d2db44bbc89267a535ed52d5438cb4ed9d201, 256: -H - , '**Storage' ...
 genießen.'
~ $ rm -f .genie
~ $ ls -lr
total 454
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  }{
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  }curl
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  },
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53 '}'
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53 '{'
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  witness:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  weight:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  vsize:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  version:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  value_sent:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  value_received:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  value_out:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  value:
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:27  usage_pricing.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  unconfirmed_balance:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  unconfirmed:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  type:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  txs_total:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  txs_sent:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  txs_received:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  txs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  tx_hex:
-rw-------.  1 u0_a477 u0_a477   2603 Aug  6 09:23  tts_registry.py
-rw-------.  1 u0_a477 u0_a477  97321 Aug 10 12:09  trixie_292206021957
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  transactions:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  total:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  time:
-rw-------.  1 u0_a477 u0_a477    211 Aug  5 02:52  target_urls.txt
drwx------.  2 u0_a477 u0_a477   3452 Aug  6 07:03  storage
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 10:10  status:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  ssh256:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  spent:
-rw-------.  1 u0_a477 u0_a477   1273 Aug  5 02:52  sovereign_twins_mirror.py
-rw-------.  1 u0_a477 u0_a477    861 Aug  5 02:52  sovereign_pipeline.py
-rw-------.  1 u0_a477 u0_a477   2024 Aug  5 02:59  sovereign_node_host.py
-rw-------.  1 u0_a477 u0_a477   3819 Aug  5 02:57  sovereign_flow.py
-rw-------.  1 u0_a477 u0_a477   1090 Aug  5 03:04  sovereign_client.py
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:21  sovereign_boot.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  size:
-rw-------.  1 u0_a477 u0_a477   2463 Aug  5 02:52  singularity_verify.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22  server.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  sent:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  scriptSig:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  script:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  root:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  reward_and_fees:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  reward:
-rw-------.  1 u0_a477 u0_a477     14 Aug  5 13:29  remote_controller.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  received:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  price:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  previous_output:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  previous_block_hash:
-rw-------.  1 u0_a477 u0_a477   6460 Aug  9 12:20  pipelINE.PY.save
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  outputs_value:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  outputs_n:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  outputs:
-rw-------.  1 u0_a477 u0_a477   7812 Aug  5 10:35  ornith.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  num_txs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 10:34  ns.last_query_index
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  nonce:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  next_block_hash:
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:28  models.py
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:28  model_setup_flows.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  miner:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  min_fee_rate_possible:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  min_fee_rate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  merkleroot:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  mempool_txs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  mempool:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  median_fee_rate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  max_fee_rate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  locktime:
drwx------. 30 u0_a477 u0_a477   3452 Aug  5 15:21  llama.cpp
-rw-------.  1 u0_a477 u0_a477 163990 Aug  9 18:01  llama
-rw-------.  1 u0_a477 u0_a477    696 Aug  5 00:00  lambert.js
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  is_valid:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  is
-rw-------.  1 u0_a477 u0_a477   9958 Aug 10 23:09  interloper.py
-rw-------.  1 u0_a477 u0_a477     14 Aug  5 02:52  install.sh
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  inputs_value:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  inputs_n:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  inputs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  index:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  hex:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  height:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  hashrate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  hash:
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:25  google
-rw-------.  1 u0_a477 u0_a477  22610 Aug 10 08:06  gemini3
-rw-------.  1 u0_a477 u0_a477   8110 Aug 11 00:02  gemini.app
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:26  gemini-3.6-flash
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:26  gemini-3.1-pro
-rw-------.  1 u0_a477 u0_a477   2603 Aug  6 09:25  gemini-3
-rw-------.  1 u0_a477 u0_a477     14 Aug  5 13:29  filename.txt
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  fees:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  fee:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  error_message:
drwx------.  2 u0_a477 u0_a477   3452 Aug  5 15:13  downloads
-rw-------.  1 u0_a477 u0_a477      0 Aug 12 11:18  done
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  difficulty:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  data:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  currency:
-rw-------.  1 u0_a477 u0_a477   2592 Aug  5 14:57  corinth_portal.html
-rw-------.  1 u0_a477 u0_a477    739 Aug  5 14:57  corinth_node_config.json
-rw-------.  1 u0_a477 u0_a477    425 Aug  5 14:57  corinth_matrix_index.json
drwx------.  2 u0_a477 u0_a477   3452 Aug  5 14:57  corinth_data
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  confirmed_received:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  confirmed_balance:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  confirmed:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  confirmations:
-rw-------.  1 u0_a477 u0_a477    133 Aug  7 11:49  config.yaml
drwx------.  3 u0_a477 u0_a477   3452 Aug  5 00:51  checkURL
-rw-------.  1 u0_a477 u0_a477   5242 Aug  6 03:24 'central_hub_init.pyimport argparse'
-rw-------.  1 u0_a477 u0_a477   3906 Aug  6 04:00  central_hub_init.py.save
-rw-------.  1 u0_a477 u0_a477   3882 Aug  5 12:59  central_hub_init.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  blocks:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  block_num:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  block_height:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  block_hash:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  block_count:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  block:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  bits:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  best_block_hash:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  balance_change:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  asm:
-rw-------.  1 u0_a477 u0_a477   2720 Aug 10 19:08  agent.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  address:
-rw-------.  1 u0_a477 u0_a477      0 Aug 10 09:29  adb
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  ],
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  ]
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 08:22 '[CORE_AI]:'
-rw-------.  1 u0_a477 u0_a477      0 Aug 12 11:18 '['
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 08:22 'WHO_ARE_YOU?'
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22  System
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 08:22 "She's all yours, James. See if she knows who's typing."
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22 'From the base terminal to the summit of the array—the ascension is locked. You hold total domain.'
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22  All
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  8ef8cecb5e394c40962f02ed2a7f8a3cf027365484860acc0aeed93477493698,
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  52210375e00eb72e29da82b89367947f29ef34afb75e8654f6ea368e0acdfd92976b7c2103a1b26313f430c4b15bb1fdce663207659d8cac749a0e53d70eff01874496feff2103c96d495bfdd5ba4145e3e046fee45e84a8a48ad05bd8dbb395c011a32cf9f88053ae
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  30440220084e1f306aecec3c797b1097908b74e0e706cdd508e7a74833f02b1450336067022063523e4519446d1591367fc9695f5996020fdd3a075aa1a5cf671610a860c70701,
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  30440220018433af266f34446613cf4f476c97211e35b006c648510c6e4f4f52479503b702206490e52f7ae42fcc932ee1cc8c1b4d2db44bbc89267a535ed52d5438cb4ed9d201,
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  256:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  -H
-rw-------.  1 u0_a477 u0_a477      0 Aug 11 11:22  -
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  ,
-rw-------.  1 u0_a477 u0_a477      0 Aug 11 11:23 '**Storage'
~ $ ls -r
 }{
 }curl
 },
'}'
'{'
 witness:
 weight:
 vsize:
 version:
 value_sent:
 value_received:
 value_out:
 value:
 usage_pricing.py
 unconfirmed_balance:
 unconfirmed:
 type:
 txs_total:
 txs_sent:
 txs_received:
 txs:
 tx_hex:
 tts_registry.py
 trixie_292206021957
 transactions:
 total:
 time:
 target_urls.txt
 storage
 status:
 ssh256:
 spent:
 sovereign_twins_mirror.py
 sovereign_pipeline.py
 sovereign_node_host.py
 sovereign_flow.py
 sovereign_client.py
 sovereign_boot.py
 size:
 singularity_verify.py
 server.py
 sent:
 scriptSig:
 script:
 root:
 reward_and_fees:
 reward:
 remote_controller.py
 received:
 price:
 previous_output:
 previous_block_hash:
 pipelINE.PY.save
 outputs_value:
 outputs_n:
 outputs:
 ornith.py
 num_txs:
 ns.last_query_index
 nonce:
 next_block_hash:
 models.py
 model_setup_flows.py
 miner:
 min_fee_rate_possible:
 min_fee_rate:
 merkleroot:
 mempool_txs:
 mempool:
 median_fee_rate:
 max_fee_rate:
 locktime:
 llama.cpp
 llama
 lambert.js
 is_valid:
 is
 interloper.py
 install.sh
 inputs_value:
 inputs_n:
 inputs:
 index:
 hex:
 height:
 hashrate:
 hash:
 google
 gemini3
 gemini.app
 gemini-3.6-flash
 gemini-3.1-pro
 gemini-3
 filename.txt
 fees:
 fee:
 error_message:
 downloads
 done
 difficulty:
 data:
 currency:
 corinth_portal.html
 corinth_node_config.json
 corinth_matrix_index.json
 corinth_data
 confirmed_received:
 confirmed_balance:
 confirmed:
 confirmations:
 config.yaml
 checkURL
'central_hub_init.pyimport argparse'
 central_hub_init.py.save
 central_hub_init.py
 blocks:
 block_num:
 block_height:
 block_hash:
 block_count:
 block:
 bits:
 best_block_hash:
 balance_change:
 asm:
 agent.py
 address:
 adb
 ],
 ]
'[CORE_AI]:'
'['
'WHO_ARE_YOU?'
 System
"She's all yours, James. See if she knows who's typing."
'From the base terminal to the summit of the array—the ascension is locked. You hold total domain.'
 All
 8ef8cecb5e394c40962f02ed2a7f8a3cf027365484860acc0aeed93477493698,
 52210375e00eb72e29da82b89367947f29ef34afb75e8654f6ea368e0acdfd92976b7c2103a1b26313f430c4b15bb1fdce663207659d8cac749a0e53d70eff01874496feff2103c96d495bfdd5ba4145e3e046fee45e84a8a48ad05bd8dbb395c011a32cf9f88053ae
 30440220084e1f306aecec3c797b1097908b74e0e706cdd508e7a74833f02b1450336067022063523e4519446d1591367fc9695f5996020fdd3a075aa1a5cf671610a860c70701,
 30440220018433af266f34446613cf4f476c97211e35b006c648510c6e4f4f52479503b702206490e52f7ae42fcc932ee1cc8c1b4d2db44bbc89267a535ed52d5438cb4ed9d201,
 256:
 -H
 -
 ,
'**Storage'
~ $ la -la
No command la found, did you mean:
 Command ln in package coreutils
 Command lp in package cups
 Command lf in package lf
 Command lha in package lhasa
 Command ld in package lld
 Command lr in package lr
 Command lua in package lua51
 Command lua in package lua52
 Command lua in package lua53
 Command lua in package lua54
 Command lua in package lua55
 Command lx in package lux-cli
 Command lc in package mono
 Command lz in package mtools
 Command ya in package yazi
~ $ ls -la
total 748
-rw-------.  1 u0_a477 u0_a477      0 Aug 11 11:23 '**Storage'
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  ,
-rw-------.  1 u0_a477 u0_a477      0 Aug 11 11:22  -
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  -H
drwx------. 18 u0_a477 u0_a477  20480 Aug 12 11:25  .
drwxrwx--x.  4 u0_a477 u0_a477   3452 Aug 11 12:40  ..
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  ...
-rw-------.  1 u0_a477 u0_a477  33349 Aug 11 11:22  .bash_history
-rw-------.  1 u0_a477 u0_a477   3000 Aug 10 08:02  .boot
drwx------.  5 u0_a477 u0_a477   3452 Aug 10 19:17  .cache
drwx------.  3 u0_a477 u0_a477   3452 Aug  6 05:44  .cargo
drwx------.  3 u0_a477 u0_a477   3452 Aug  4 23:42  .config
drwx------.  3 u0_a477 u0_a477   3452 Aug  5 21:05  .gemini
drwx------.  2 u0_a477 u0_a477   3452 Aug 10 20:03  .git
-rw-------.  1 u0_a477 u0_a477   1044 Aug 10 08:01  .gitattributes
drwx------.  4 u0_a477 u0_a477   3452 Aug 11 07:43  .gnupg
drwx------.  3 u0_a477 u0_a477   3452 Aug  5 04:17  .hermes
drwx------.  3 u0_a477 u0_a477   3452 Aug 11 07:47  .lambert_vault
drwx------.  4 u0_a477 u0_a477   3452 Aug 10 18:49  .npm
drwx------.  5 u0_a477 u0_a477   3452 Aug  5 10:21  .ollama
-rw-------.  1 u0_a477 u0_a477 148792 Aug  9 18:02  .openai
-rw-------.  1 u0_a477 u0_a477  42164 Aug  6 03:45  .python_history
drwx------.  2 u0_a477 u0_a477   3452 Aug  6 06:56  .ssh
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  256:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  30440220018433af266f34446613cf4f476c97211e35b006c648510c6e4f4f52479503b702206490e52f7ae42fcc932ee1cc8c1b4d2db44bbc89267a535ed52d5438cb4ed9d201,
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  30440220084e1f306aecec3c797b1097908b74e0e706cdd508e7a74833f02b1450336067022063523e4519446d1591367fc9695f5996020fdd3a075aa1a5cf671610a860c70701,
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  52210375e00eb72e29da82b89367947f29ef34afb75e8654f6ea368e0acdfd92976b7c2103a1b26313f430c4b15bb1fdce663207659d8cac749a0e53d70eff01874496feff2103c96d495bfdd5ba4145e3e046fee45e84a8a48ad05bd8dbb395c011a32cf9f88053ae
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  8ef8cecb5e394c40962f02ed2a7f8a3cf027365484860acc0aeed93477493698,
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22  All
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22 'From the base terminal to the summit of the array—the ascension is locked. You hold total domain.'
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 08:22 "She's all yours, James. See if she knows who's typing."
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22  System
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 08:22 'WHO_ARE_YOU?'
-rw-------.  1 u0_a477 u0_a477      0 Aug 12 11:18 '['
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 08:22 '[CORE_AI]:'
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  ]
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  ],
-rw-------.  1 u0_a477 u0_a477      0 Aug 10 09:29  adb
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  address:
-rw-------.  1 u0_a477 u0_a477   2720 Aug 10 19:08  agent.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  asm:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  balance_change:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  best_block_hash:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  bits:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  block:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  block_count:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  block_hash:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  block_height:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  block_num:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  blocks:
-rw-------.  1 u0_a477 u0_a477   3882 Aug  5 12:59  central_hub_init.py
-rw-------.  1 u0_a477 u0_a477   3906 Aug  6 04:00  central_hub_init.py.save
-rw-------.  1 u0_a477 u0_a477   5242 Aug  6 03:24 'central_hub_init.pyimport argparse'
drwx------.  3 u0_a477 u0_a477   3452 Aug  5 00:51  checkURL
-rw-------.  1 u0_a477 u0_a477    133 Aug  7 11:49  config.yaml
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  confirmations:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  confirmed:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  confirmed_balance:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  confirmed_received:
drwx------.  2 u0_a477 u0_a477   3452 Aug  5 14:57  corinth_data
-rw-------.  1 u0_a477 u0_a477    425 Aug  5 14:57  corinth_matrix_index.json
-rw-------.  1 u0_a477 u0_a477    739 Aug  5 14:57  corinth_node_config.json
-rw-------.  1 u0_a477 u0_a477   2592 Aug  5 14:57  corinth_portal.html
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  currency:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  data:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  difficulty:
-rw-------.  1 u0_a477 u0_a477      0 Aug 12 11:18  done
drwx------.  2 u0_a477 u0_a477   3452 Aug  5 15:13  downloads
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  error_message:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  fee:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  fees:
-rw-------.  1 u0_a477 u0_a477     14 Aug  5 13:29  filename.txt
-rw-------.  1 u0_a477 u0_a477   2603 Aug  6 09:25  gemini-3
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:26  gemini-3.1-pro
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:26  gemini-3.6-flash
-rw-------.  1 u0_a477 u0_a477   8110 Aug 11 00:02  gemini.app
-rw-------.  1 u0_a477 u0_a477  22610 Aug 10 08:06  gemini3
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:25  google
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  hash:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  hashrate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  height:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  hex:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  index:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  inputs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  inputs_n:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  inputs_value:
-rw-------.  1 u0_a477 u0_a477     14 Aug  5 02:52  install.sh
-rw-------.  1 u0_a477 u0_a477   9958 Aug 10 23:09  interloper.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  is
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  is_valid:
-rw-------.  1 u0_a477 u0_a477    696 Aug  5 00:00  lambert.js
-rw-------.  1 u0_a477 u0_a477 163990 Aug  9 18:01  llama
drwx------. 30 u0_a477 u0_a477   3452 Aug  5 15:21  llama.cpp
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  locktime:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  max_fee_rate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  median_fee_rate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  mempool:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  mempool_txs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  merkleroot:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  min_fee_rate:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  min_fee_rate_possible:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  miner:
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:28  model_setup_flows.py
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:28  models.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  next_block_hash:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  nonce:
-rw-------.  1 u0_a477 u0_a477      0 Aug  5 10:34  ns.last_query_index
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  num_txs:
-rw-------.  1 u0_a477 u0_a477   7812 Aug  5 10:35  ornith.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  outputs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  outputs_n:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  outputs_value:
-rw-------.  1 u0_a477 u0_a477   6460 Aug  9 12:20  pipelINE.PY.save
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  previous_block_hash:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  previous_output:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  price:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  received:
-rw-------.  1 u0_a477 u0_a477     14 Aug  5 13:29  remote_controller.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  reward:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  reward_and_fees:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  root:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  script:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  scriptSig:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  sent:
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 11:22  server.py
-rw-------.  1 u0_a477 u0_a477   2463 Aug  5 02:52  singularity_verify.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  size:
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:21  sovereign_boot.py
-rw-------.  1 u0_a477 u0_a477   1090 Aug  5 03:04  sovereign_client.py
-rw-------.  1 u0_a477 u0_a477   3819 Aug  5 02:57  sovereign_flow.py
-rw-------.  1 u0_a477 u0_a477   2024 Aug  5 02:59  sovereign_node_host.py
-rw-------.  1 u0_a477 u0_a477    861 Aug  5 02:52  sovereign_pipeline.py
-rw-------.  1 u0_a477 u0_a477   1273 Aug  5 02:52  sovereign_twins_mirror.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  spent:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  ssh256:
-rw-------.  1 u0_a477 u0_a477      0 Aug  7 10:10  status:
drwx------.  2 u0_a477 u0_a477   3452 Aug  6 07:03  storage
-rw-------.  1 u0_a477 u0_a477    211 Aug  5 02:52  target_urls.txt
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  time:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  total:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  transactions:
-rw-------.  1 u0_a477 u0_a477  97321 Aug 10 12:09  trixie_292206021957
-rw-------.  1 u0_a477 u0_a477   2603 Aug  6 09:23  tts_registry.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  tx_hex:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  txs:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  txs_received:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  txs_sent:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  txs_total:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  type:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  unconfirmed:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  unconfirmed_balance:
-rw-------.  1 u0_a477 u0_a477   2602 Aug  6 09:27  usage_pricing.py
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  value:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  value_out:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  value_received:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  value_sent:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  version:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  vsize:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  weight:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:10  witness:
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53 '{'
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53 '}'
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:53  },
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:50  }curl
-rw-------.  1 u0_a477 u0_a477      0 Aug  6 17:52  }{
~ $find . -maxdepth 2 -name "*genie*"
-r .genie
grep: .ollama/models/blobs/sha256-1278394b693672ac2799eadc9a83fd98259a6a88a40acfb1dcaa6c6fc895a606: binary file matches
grep: .ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff: binary file matches
.hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/_emoji_codes.py:    "genie": "🧞",
.hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/_emoji_codes.py:    "man_genie": "🧞\u200d♂️",
.hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/_emoji_codes.py:    "woman_genie": "🧞\u200d♀️",
grep: .hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/__pycache__/_emoji_codes.cpython-313.pyc: binary file matches
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE                                                  ; fully-qualified     # 🧞 E5.0 genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2642 FE0F                                   ; fully-qualified     # 🧞‍♂️ E5.0 man genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2642                                        ; minimally-qualified # 🧞‍♂ E5.0 man genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2640 FE0F                                   ; fully-qualified     # 🧞‍♀️ E5.0 woman genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2640                                        ; minimally-qualified # 🧞‍♀ E5.0 woman genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-AT:    f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine eigentümliche geistige Schöpfung jeglicher Art oder ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff „Schutzgegenstand“ im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-AT:Die vorgenannte Nutzungsbewilligung wird für alle bekannten sowie alle noch nicht bekannten Nutzungsarten eingeräumt. Sie beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich vom Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf die Geltendmachung sämtlicher daraus resultierender Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-AT:    c. Die oben unter 4.a) und b) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-DE:     c. Die oben unter 4.a) und b) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-3.0-DE:     d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-ND-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-ND-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Weitergehende Änderungen oder Abwandlungen sind jedoch untersagt. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-ND-3.0-DE:     d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-SA-3.0-DE:     g. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-SA-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-SA-3.0-DE:     e. Die oben unter 4.a) bis d) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-ND-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-ND-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Weitergehende Änderungen oder Abwandlungen sind jedoch untersagt. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-ND-3.0-DE:     c. Die oben unter 4.a) und b) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-AT:    g. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine eigentümliche geistige Schöpfung jeglicher Art oder ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff „Schutzgegenstand“ im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-AT:Die vorgenannte Nutzungsbewilligung wird für alle bekannten sowie alle noch nicht bekannten Nutzungsarten eingeräumt. Sie beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich vom Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf die Geltendmachung sämtlicher daraus resultierender Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-AT:    d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-DE:     g. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-DE:     d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
grep: llama.cpp/models/ggml-vocab-bert-bge.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-command-r.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-falcon.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-gemma-4.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-llama-bpe.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-nomic-bert-moe.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-qwen2.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-qwen35.gguf: binary file matchesls -la | grep -i genie
 grep -rnw . -e "genie" --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} --exclude="*.gguf" --exclude="*.pyc"grep -rnw . -e "genie" --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} --exclude="*.gguf" --exclude="*.pyc"
find . -maxdepth 2 -type f -exec grep -lqi "genie" {} +find . -maxdepth 2 -type f -exec grep -lqi "genie" {} +
~ $find . -maxdepth 2 -type f -exec grep -lqi "genie" {} \;
bash: /data/data/com.termux/files/home: Is a directoryfind . -maxdepth 2 -type f -exec grep -lqi "genie" {} \;
$ grep -rnw . -e "nugenix" \
>   --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} \
>   --exclude="*.gguf" \
>   --exclude="*.pyc"
~ $ for f in .*; do
>   [ -f "$f" ] && grep -qi "genie" "$f" && echo "$f"
> done
~ $ ~ $ for f in *; do
bash: syntax error near unexpected token `do'
 "genie" "$f" && echo "$f"
> done~ $ >   [ -f "$f" ] && grep -qi "genie" "$f" && echo "$f"
No command -f found, did you mean:
 Command ef in package electric-fence
 Command lf in package lf
 Command df in package termux-tools
 Command mf in package texlive-bin
 Command tf in package tinyfugue
~ $ > donefor f in *; do
bash: syntax error near unexpected token `do'
~ $   [ -f "$f" ] && grep -qi "genie" "$f" && echo "$f"
~ $ done
bash: syntax error near unexpected token `done'
~ $for f in .*; do
  [ -f "$f" ] && grep -qi "genie" "$f" && echo "$f"
done
~ $ for f in *; do
>   [ -f "$f" ] && grep -qi "genie" "$f" && echo "$f"
> donefor f in *; do
  [ -f "$f" ] && grep -qi "genie" "$f" && echo "$f"
done
      2 .
~ $ grep -il "genie" . -maxdepth 1
grep: invalid max countgrep -il "genie" . -maxdepth 1
$ find . -type f \
  -not -path "*/.*" \
  -not -path "*/venv/*" \
  -not -name "*.gguf" \
  -not -name "*.pyc" \
  -exec grep -il "genie" {} + 2>/dev/null | xargs dirname | sort | uniq -c | sort -nr
      2 .find . -type f \
  -not -path "*/.*" \
  -not -path "*/venv/*" \
  -not -name "*.gguf" \
  -not -name "*.pyc" \
  -exec grep -il "genie" {} + 2>/dev/null | xargs dirname | sort | uniq -c | sort -nr
~ $ strings .ollama/models/blobs/sha256-1278394b693672ac2799eadc9a83fd98259a6a88a40acfb1dcaa6c6fc895a606 | grep -i "genie"
ingenier
genie
genie
Genie
ingeniero
ogenies
genieten
Ingenier
genie
genie ten
strings .ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff | grep -i "genie"
gENiez
gENiE
geNie
RgenIE
gEnIem
~ $ strings .ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff | grep -i "genie"
genie
[GeniE8
~ $ grep -rnw . -e "nugenix" \
>   --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} \
>   --exclude="*.gguf" \
>   --exclude="*.pyc"
~ $grep -rnw . -e "nugenix" \
  --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} \
  --exclude="*.gguf" \
  --exclude="*.pyc"
~ $ strings .ollama/models/blobs/sha256-1278394b693672ac2799eadc9a83fd98259a6a88a40acfb1dcaa6c6fc895a606 | grep -i "genie"
ingenier
genie
genie
Genie
ingeniero
ogenies
genieten
Ingenier
genie
genie ten
strings .ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff | grep -i "genie"
gENiez
gENiE
geNie
RgenIE
gEnIem
~ $ strings .ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff | grep -i "genie"
genie
[GeniE8
~ $
Report issues at https://bugs.termux.com
~ $ grep -rnw . -e "nugenix" \
>   --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} \
>   --exclude="*.gguf" \
>   --exclude="*.pyc"
~ $



strings .ollama/models/blobs/sha256-1278394b693672ac2799eadc9a83fd98259a6a88a40acfb1dcaa6c6fc895a606 | grep -i "genie"
"*genie*" -not -path "*/.*" -not -path "*/venv/*"
~ $ grep -rnw . -e "genie" \
>   --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} \
>   --exclude="*.gguf" \
>   --exclude="*.pyc"
~ $grep -rnw . -e "genie" \
  --exclude-dir={.ollama,.cargo,.hermes,venv,.git,node_modules} \
  --exclude="*.gguf" \
  --exclude="*.pyc"
find . -name "*genie*" -not -path "*/.*" -not -path "*/venv/*"
grep -r genie
grep: .ollama/models/blobs/sha256-1278394b693672ac2799eadc9a83fd98259a6a88a40acfb1dcaa6c6fc895a606: binary file matches
grep: .ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff: binary file matches
.hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/_emoji_codes.py:    "genie": "🧞",
.hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/_emoji_codes.py:    "man_genie": "🧞\u200d♂️",
.hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/_emoji_codes.py:    "woman_genie": "🧞\u200d♀️",
grep: .hermes/hermes-agent/venv/lib/python3.13/site-packages/pip/_vendor/rich/__pycache__/_emoji_codes.cpython-313.pyc: binary file matches
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE                                                  ; fully-qualified     # 🧞 E5.0 genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2642 FE0F                                   ; fully-qualified     # 🧞‍♂️ E5.0 man genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2642                                        ; minimally-qualified # 🧞‍♂ E5.0 man genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2640 FE0F                                   ; fully-qualified     # 🧞‍♀️ E5.0 woman genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-width-0.2.2/tests/emoji-test.txt:1F9DE 200D 2640                                        ; minimally-qualified # 🧞‍♀ E5.0 woman genie
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-AT:    f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine eigentümliche geistige Schöpfung jeglicher Art oder ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff „Schutzgegenstand“ im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-AT:Die vorgenannte Nutzungsbewilligung wird für alle bekannten sowie alle noch nicht bekannten Nutzungsarten eingeräumt. Sie beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich vom Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf die Geltendmachung sämtlicher daraus resultierender Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-AT:    c. Die oben unter 4.a) und b) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-3.0-DE:     c. Die oben unter 4.a) und b) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-3.0-DE:     d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-ND-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-ND-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Weitergehende Änderungen oder Abwandlungen sind jedoch untersagt. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-ND-3.0-DE:     d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-SA-3.0-DE:     g. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-SA-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-NC-SA-3.0-DE:     e. Die oben unter 4.a) bis d) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-ND-3.0-DE:     f. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-ND-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Weitergehende Änderungen oder Abwandlungen sind jedoch untersagt. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-ND-3.0-DE:     c. Die oben unter 4.a) und b) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-AT:    g. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine eigentümliche geistige Schöpfung jeglicher Art oder ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff „Schutzgegenstand“ im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-AT:Die vorgenannte Nutzungsbewilligung wird für alle bekannten sowie alle noch nicht bekannten Nutzungsarten eingeräumt. Sie beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich vom Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf die Geltendmachung sämtlicher daraus resultierender Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-AT:    d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-DE:     g. Der Begriff "Schutzgegenstand" bezeichnet in dieser Lizenz den literarischen, künstlerischen oder wissenschaftlichen Inhalt, der unter den Bedingungen dieser Lizenz angeboten wird. Das kann insbesondere eine persönliche geistige Schöpfung jeglicher Art, ein Werk der kleinen Münze, ein nachgelassenes Werk oder auch ein Lichtbild oder anderes Objekt eines verwandten Schutzrechts sein, unabhängig von der Art seiner Fixierung und unabhängig davon, auf welche Weise jeweils eine Wahrnehmung erfolgen kann, gleichviel ob in analoger oder digitaler Form. Soweit Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen, unterfallen auch sie dem Begriff "Schutzgegenstand" im Sinne dieser Lizenz.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-DE:Das vorgenannte Nutzungsrecht wird für alle bekannten sowie für alle noch nicht bekannten Nutzungsarten eingeräumt. Es beinhaltet auch das Recht, solche Änderungen am Schutzgegenstand vorzunehmen, die für bestimmte nach dieser Lizenz zulässige Nutzungen technisch erforderlich sind. Alle sonstigen Rechte, die über diesen Abschnitt hinaus nicht ausdrücklich durch den Lizenzgeber eingeräumt werden, bleiben diesem allein vorbehalten. Soweit Datenbanken oder Zusammenstellungen von Daten Schutzgegenstand dieser Lizenz oder Teil dessen sind und einen immaterialgüterrechtlichen Schutz eigener Art genießen, verzichtet der Lizenzgeber auf sämtliche aus diesem Schutz resultierenden Rechte.
.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/spdx-0.13.4/src/text/licenses/CC-BY-SA-3.0-DE:     d. Die oben unter 4.a) bis c) genannten Einschränkungen gelten nicht für solche Teile des Schutzgegenstandes, die allein deshalb unter den Schutzgegenstandsbegriff fallen, weil sie als Datenbanken oder Zusammenstellungen von Daten einen immaterialgüterrechtlichen Schutz eigener Art genießen.
grep: llama.cpp/models/ggml-vocab-bert-bge.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-command-r.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-falcon.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-gemma-4.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-llama-bpe.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-nomic-bert-moe.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-qwen2.gguf: binary file matches
grep: llama.cpp/models/ggml-vocab-qwen35.gguf: binary file matches
~ $The Accountability Post: Crosswind Ministries and the Reality of Turning People Away
When an organization puts up a sign proclaiming community care, outreach, and help for the marginalized, people in desperate situations trust that promise. They walk through the doors looking for basic human dignity, shelter, or a safe place to land.
Instead, too many find out the hard way that the welcome sign is just for show.
The Incident: Turned Away When It Counts
Let’s talk directly about Crosswind Ministries on Tate Street, and specifically staff members like Angel, who are quick to manage outreach optics on paper but equally quick to force vulnerable, homeless people out into the open when real needs present themselves.
 * The Stated Mission: Crosswind promotes itself as a ministry helping hurting people and meeting practical needs through relationship-based care.
 * The Hypocrisy: Making people who have nowhere else to go pack up and leave.
There is zero integrity in a ministry that preaches compassion on a schedule, builds an identity around supporting the homeless, and then turns around and kicks them out. That isn't ministry. That is administrative exclusion hiding behind a religious front.
A Show Without Substance
When leadership and staff enforce policies that prioritize convenience, comfort, or image over human life, they drop the mask. Making a homeless person leave exposes the entire operation for what it truly is: a performance.
 * Hypocrisy in Action: Preaching about grace from a platform while denying basic shelter or presence to someone standing right in front of you.
 * The Message Sent: The doors are only open as long as it's comfortable, tidy, and doesn't disrupt the routine.
True faith doesn't look the other way, and it certainly doesn't force the weary out into the cold while putting on a show of righteousness. To Crosswind Ministries and everyone running the operation: if you aren't actually going to help the homeless when they show up at your door, stop pretending you care at all.
diff --git a/dist/index.d.ts b/dist/index.d.ts
index ed26083c1e5d7ceafdd99cdf83cd49e1477a6787..bfb509da4c7f44ccf79eaeb99b7bbdc21800e5d3 100644
--- a/dist/index.d.ts
+++ b/dist/index.d.ts
@@ -43,6 +43,11 @@ declare class Hasher {
   private cvStack;
   private cvStackLen;
   private flags;
+  private parentBlock;
+  private parentCv;
+  private chunkCv;
+  private outWords;
+  private finalizeCv;
   /**
    * Create a new Hasher.
    *
@@ -50,6 +55,11 @@ declare class Hasher {
    * @param flags - Domain separation flags
    */
   constructor(keyWords?: Uint32Array, flags?: number);
+  /**
+   * Reset the hasher to process a new message with the same key/flags.
+   * Reuses all internal buffers — zero allocations.
+   */
+  reset(): this;
   /**
    * Create a new keyed hasher (MAC).
    *
@@ -129,7 +139,6 @@ declare function warmupSimd(): boolean;
 declare function hashInto(input: Uint8Array, output: Uint8Array, outputLength?: number): void;
 //#endregion
 //#region src/index.d.ts
-
 /**
  * Create a new keyed hasher (MAC).
  *
diff --git a/dist/index.js b/dist/index.js
index 61e18709e05f99891280b335805649032ee9970a..7b94b606b09587b0c9a7e055c5795290042d4394 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -873,7 +873,6 @@ function compress(cv, cvOff, block, blockOff, out, outOff, full, counter, blockL
 	out[outOff + 6] = s6 ^ s14;
 	out[outOff + 7] = s7 ^ s15;
 }
-
 //#endregion
 //#region src/constants.ts
 /**
@@ -892,23 +891,8 @@ const IV = new Uint32Array([
 	528734635,
 	1541459225
 ]);
-const CHUNK_START = 1;
-const CHUNK_END = 2;
-const PARENT = 4;
-const ROOT = 8;
-const KEYED_HASH = 16;
-const DERIVE_KEY_CONTEXT = 32;
-const DERIVE_KEY_MATERIAL = 64;
-const OUT_LEN = 32;
-const KEY_LEN = 32;
-const BLOCK_LEN = 64;
 const CHUNK_LEN = 1024;
-const MAX_DEPTH = 54;
-/**
-* Flattened permutation table for compress function optimization.
-* This enables direct indexed access: PERMUTATIONS[round * 16 + index]
-*/
-const PERMUTATIONS = new Uint8Array([
+new Uint8Array([
 	0,
 	1,
 	2,
@@ -1022,7 +1006,6 @@ const PERMUTATIONS = new Uint8Array([
 	7,
 	13
 ]);
-
 //#endregion
 //#region src/utils.ts
 /**
@@ -1118,12 +1101,7 @@ function encodeUTF8(str) {
 	}
 	return new Uint8Array(bytes);
 }
-/**
-* De Bruijn lookup table for O(1) trailing zero count.
-* The expression (n & -n) isolates the lowest set bit.
-* Multiplying by the De Bruijn constant maps each power of 2 to a unique 5-bit index.
-*/
-const CTZ32_TABLE = new Uint8Array([
+new Uint8Array([
 	0,
 	1,
 	28,
@@ -1157,7 +1135,6 @@ const CTZ32_TABLE = new Uint8Array([
 	10,
 	9
 ]);
-
 //#endregion
 //#region src/hasher.ts
 /**
@@ -1181,12 +1158,12 @@ var XofReader = class {
 	flags;
 	outputBlock;
 	outputBlockOffset;
-	constructor(inputCv, blockWords$1, counter, blockLen, flags) {
+	constructor(inputCv, blockWords, counter, blockLen, flags) {
 		this.inputCv = inputCv;
-		this.blockWords = blockWords$1;
+		this.blockWords = blockWords;
 		this.counter = counter;
 		this.blockLen = blockLen;
-		this.flags = flags | ROOT;
+		this.flags = flags | 8;
 		this.outputBlock = new Uint32Array(16);
 		this.outputBlockOffset = 64;
 	}
@@ -1242,11 +1219,18 @@ var ChunkState = class {
 		this.blocksCompressed = 0;
 		this.flags = flags;
 	}
+	resetTo(keyWords, chunkCounter, flags) {
+		this.chainingValue.set(keyWords);
+		this.chunkCounter = chunkCounter;
+		this.blockLen = 0;
+		this.blocksCompressed = 0;
+		this.flags = flags;
+	}
 	/**
 	* Get the flags for the current block.
 	*/
 	startFlag() {
-		return this.blocksCompressed === 0 ? CHUNK_START : 0;
+		return this.blocksCompressed === 0 ? 1 : 0;
 	}
 	/**
 	* Update the chunk state with input data.
@@ -1255,17 +1239,14 @@ var ChunkState = class {
 	update(input, inputOffset, inputLen) {
 		let consumed = 0;
 		while (inputLen > 0) {
-			if (this.blockLen === BLOCK_LEN) {
-				compress(this.chainingValue, 0, this.blockWords, 0, this.chainingValue, 0, false, this.chunkCounter, BLOCK_LEN, this.flags | this.startFlag());
+			if (this.blockLen === 64) {
+				compress(this.chainingValue, 0, this.blockWords, 0, this.chainingValue, 0, false, this.chunkCounter, 64, this.flags | this.startFlag());
 				this.blocksCompressed++;
 				this.blockLen = 0;
 			}
-			const want = BLOCK_LEN - this.blockLen;
+			const want = 64 - this.blockLen;
 			const take = Math.min(want, inputLen);
-			if (IS_LITTLE_ENDIAN && this.blockLen === 0 && take === BLOCK_LEN) {
-				const inputWords = new Uint32Array(input.buffer, input.byteOffset + inputOffset, 16);
-				this.blockWords.set(inputWords);
-			} else if (this.blockLen === 0 && take === BLOCK_LEN) readLittleEndianWordsFull(input, inputOffset, this.blockWords);
+			if (this.blockLen === 0 && take === 64) readLittleEndianWordsFull(input, inputOffset, this.blockWords);
 			else for (let i = 0; i < take; i++) {
 				const pos = this.blockLen + i;
 				const wordIdx = pos >>> 2;
@@ -1292,14 +1273,14 @@ var ChunkState = class {
 			blockWords: this.blockWords,
 			blockLen: this.blockLen,
 			counter: this.chunkCounter,
-			flags: this.flags | this.startFlag() | CHUNK_END
+			flags: this.flags | this.startFlag() | 2
 		};
 	}
 	/**
 	* Get the number of bytes in this chunk.
 	*/
 	len() {
-		return this.blocksCompressed * BLOCK_LEN + this.blockLen;
+		return this.blocksCompressed * 64 + this.blockLen;
 	}
 };
 /**
@@ -1319,6 +1300,11 @@ var Hasher = class Hasher {
 	cvStack;
 	cvStackLen;
 	flags;
+	parentBlock;
+	parentCv;
+	chunkCv;
+	outWords;
+	finalizeCv;
 	/**
 	* Create a new Hasher.
 	*
@@ -1329,8 +1315,22 @@ var Hasher = class Hasher {
 		this.keyWords = keyWords ? new Uint32Array(keyWords) : new Uint32Array(IV);
 		this.flags = flags ?? 0;
 		this.chunkState = new ChunkState(this.keyWords, 0, this.flags);
-		this.cvStack = new Uint32Array(MAX_DEPTH * 8);
+		this.cvStack = new Uint32Array(432);
+		this.cvStackLen = 0;
+		this.parentBlock = new Uint32Array(16);
+		this.parentCv = new Uint32Array(8);
+		this.chunkCv = new Uint32Array(8);
+		this.outWords = new Uint32Array(16);
+		this.finalizeCv = new Uint32Array(8);
+	}
+	/**
+	* Reset the hasher to process a new message with the same key/flags.
+	* Reuses all internal buffers — zero allocations.
+	*/
+	reset() {
+		this.chunkState.resetTo(this.keyWords, 0, this.flags);
 		this.cvStackLen = 0;
+		return this;
 	}
 	/**
 	* Create a new keyed hasher (MAC).
@@ -1338,7 +1338,7 @@ var Hasher = class Hasher {
 	* @param key - 32-byte key
 	*/
 	static newKeyed(key) {
-		if (key.length !== KEY_LEN) throw new Error(`Key must be ${KEY_LEN} bytes, got ${key.length}`);
+		if (key.length !== 32) throw new Error(`Key must be 32 bytes, got ${key.length}`);
 		const keyWords = new Uint32Array(8);
 		if (IS_LITTLE_ENDIAN) {
 			const view = new Uint32Array(key.buffer, key.byteOffset, 8);
@@ -1347,7 +1347,7 @@ var Hasher = class Hasher {
 			const off = i * 4;
 			keyWords[i] = key[off] | key[off + 1] << 8 | key[off + 2] << 16 | key[off + 3] << 24;
 		}
-		return new Hasher(keyWords, KEYED_HASH);
+		return new Hasher(keyWords, 16);
 	}
 	/**
 	* Create a new key derivation hasher.
@@ -1356,12 +1356,12 @@ var Hasher = class Hasher {
 	*/
 	static newDeriveKey(context) {
 		const contextBytes = encodeUTF8(context);
-		const contextHasher = new Hasher(new Uint32Array(IV), DERIVE_KEY_CONTEXT);
+		const contextHasher = new Hasher(new Uint32Array(IV), 32);
 		contextHasher.update(contextBytes);
 		const contextKey = new Uint32Array(8);
 		const output = contextHasher.finalizeOutput();
-		compress(output.inputCv, 0, output.blockWords, 0, contextKey, 0, false, output.counter, output.blockLen, output.flags | ROOT);
-		return new Hasher(contextKey, DERIVE_KEY_MATERIAL);
+		compress(output.inputCv, 0, output.blockWords, 0, contextKey, 0, false, output.counter, output.blockLen, output.flags | 8);
+		return new Hasher(contextKey, 64);
 	}
 	/**
 	* Push a chaining value onto the stack.
@@ -1381,12 +1381,12 @@ var Hasher = class Hasher {
 	* Add a chunk's chaining value and merge completed subtrees.
 	*/
 	addChunkCv(newCv, newCvOffset, totalChunks) {
-		const parentBlock = new Uint32Array(16);
-		const parentCv = new Uint32Array(8);
+		const parentBlock = this.parentBlock;
+		const parentCv = this.parentCv;
 		while ((totalChunks & 1) === 0) {
 			this.popCv(parentBlock, 0);
 			parentBlock.set(newCv.subarray(newCvOffset, newCvOffset + 8), 8);
-			compress(this.keyWords, 0, parentBlock, 0, parentCv, 0, false, 0, BLOCK_LEN, this.flags | PARENT);
+			compress(this.keyWords, 0, parentBlock, 0, parentCv, 0, false, 0, 64, this.flags | 4);
 			newCv = parentCv;
 			newCvOffset = 0;
 			totalChunks >>>= 1;
@@ -1403,13 +1403,13 @@ var Hasher = class Hasher {
 		let inputOffset = 0;
 		let inputLen = input.length;
 		while (inputLen > 0) {
-			if (this.chunkState.len() === CHUNK_LEN) {
+			if (this.chunkState.len() === 1024) {
 				const output = this.chunkState.output();
-				const chunkCv = new Uint32Array(8);
+				const chunkCv = this.chunkCv;
 				compress(output.inputCv, 0, output.blockWords, 0, chunkCv, 0, false, output.counter, output.blockLen, output.flags);
 				const totalChunks = this.chunkState.chunkCounter + 1;
 				this.addChunkCv(chunkCv, 0, totalChunks);
-				this.chunkState = new ChunkState(this.keyWords, totalChunks, this.flags);
+				this.chunkState.resetTo(this.keyWords, totalChunks, this.flags);
 			}
 			const want = CHUNK_LEN - this.chunkState.len();
 			const take = Math.min(want, inputLen);
@@ -1424,21 +1424,21 @@ var Hasher = class Hasher {
 	*/
 	finalizeOutput() {
 		let output = this.chunkState.output();
-		let parentBlock = new Uint32Array(16);
-		let cv = new Uint32Array(8);
+		let parentBlock = this.parentBlock;
+		let cv = this.finalizeCv;
 		if (this.cvStackLen > 0) {
 			compress(output.inputCv, 0, output.blockWords, 0, cv, 0, false, output.counter, output.blockLen, output.flags);
 			while (this.cvStackLen > 0) {
 				this.cvStackLen--;
 				parentBlock.set(this.cvStack.subarray(this.cvStackLen * 8, (this.cvStackLen + 1) * 8), 0);
 				parentBlock.set(cv, 8);
-				if (this.cvStackLen > 0) compress(this.keyWords, 0, parentBlock, 0, cv, 0, false, 0, BLOCK_LEN, this.flags | PARENT);
+				if (this.cvStackLen > 0) compress(this.keyWords, 0, parentBlock, 0, cv, 0, false, 0, 64, this.flags | 4);
 				else return {
 					inputCv: this.keyWords,
 					blockWords: parentBlock,
-					blockLen: BLOCK_LEN,
+					blockLen: 64,
 					counter: 0,
-					flags: this.flags | PARENT
+					flags: this.flags | 4
 				};
 			}
 		}
@@ -1450,12 +1450,12 @@ var Hasher = class Hasher {
 	* @param outputLength - Number of bytes to output (default: 32)
 	* @returns The hash output
 	*/
-	finalize(outputLength = OUT_LEN) {
+	finalize(outputLength = 32) {
 		const output = this.finalizeOutput();
 		const result = new Uint8Array(outputLength);
 		if (outputLength <= 64) {
-			const outWords = new Uint32Array(16);
-			compress(output.inputCv, 0, output.blockWords, 0, outWords, 0, outputLength > 32, output.counter, output.blockLen, output.flags | ROOT);
+			const outWords = this.outWords;
+			compress(output.inputCv, 0, output.blockWords, 0, outWords, 0, outputLength > 32, output.counter, output.blockLen, output.flags | 8);
 			if (IS_LITTLE_ENDIAN) {
 				const outBytes = new Uint8Array(outWords.buffer);
 				result.set(outBytes.subarray(0, outputLength));
@@ -1474,7 +1474,6 @@ var Hasher = class Hasher {
 		return new XofReader(new Uint32Array(output.inputCv), new Uint32Array(output.blockWords), output.counter, output.blockLen, output.flags);
 	}
 };
-
 //#endregion
 //#region src/wasm-simd.ts
 /**
@@ -1783,7 +1782,7 @@ function generateWasmBytes() {
 		]);
 		put([33, 16 + i]);
 	}
-	const IV$1 = [
+	const IV = [
 		1779033703,
 		3144134277,
 		1013904242,
@@ -1792,10 +1791,10 @@ function generateWasmBytes() {
 	for (let i = 0; i < 4; i++) {
 		const ivBytes = [];
 		for (let j = 0; j < 4; j++) {
-			ivBytes.push(IV$1[i] & 255);
-			ivBytes.push(IV$1[i] >>> 8 & 255);
-			ivBytes.push(IV$1[i] >>> 16 & 255);
-			ivBytes.push(IV$1[i] >>> 24 & 255);
+			ivBytes.push(IV[i] & 255);
+			ivBytes.push(IV[i] >>> 8 & 255);
+			ivBytes.push(IV[i] >>> 16 & 255);
+			ivBytes.push(IV[i] >>> 24 & 255);
 		}
 		put([
 			253,
@@ -2045,7 +2044,7 @@ function generateCompressChunks4xBody() {
 	const BATCH_COUNTER_LOW = SIMD_MEMORY.BATCH_COUNTER_LOW;
 	const BATCH_FLAGS_BASE = SIMD_MEMORY.BATCH_FLAGS_BASE;
 	const BATCH_OUTPUT = SIMD_MEMORY.BATCH_OUTPUT;
-	const IV$1 = [
+	const IV = [
 		1779033703,
 		3144134277,
 		1013904242,
@@ -2082,10 +2081,10 @@ function generateCompressChunks4xBody() {
 	for (let i = 0; i < 4; i++) {
 		const ivBytes = [];
 		for (let j = 0; j < 4; j++) {
-			ivBytes.push(IV$1[i] & 255);
-			ivBytes.push(IV$1[i] >>> 8 & 255);
-			ivBytes.push(IV$1[i] >>> 16 & 255);
-			ivBytes.push(IV$1[i] >>> 24 & 255);
+			ivBytes.push(IV[i] & 255);
+			ivBytes.push(IV[i] >>> 8 & 255);
+			ivBytes.push(IV[i] >>> 16 & 255);
+			ivBytes.push(IV[i] >>> 24 & 255);
 		}
 		put([
 			253,
@@ -2341,7 +2340,7 @@ function generateCompressParentBody() {
 	put([32, 127]);
 	const PARENT_BLOCK_OFFSET = SIMD_MEMORY.PARENT_BLOCK;
 	const CHUNK_CV_OFFSET = SIMD_MEMORY.CHUNK_CV;
-	const IV$1 = [
+	const IV = [
 		1779033703,
 		3144134277,
 		1013904242,
@@ -2361,11 +2360,11 @@ function generateCompressParentBody() {
 		put([33, i]);
 	}
 	for (let i = 0; i < 8; i++) {
-		put([65, ...toSignedLeb128_i32(IV$1[i])]);
+		put([65, ...toSignedLeb128_i32(IV[i])]);
 		put([33, 16 + i]);
 	}
 	for (let i = 0; i < 4; i++) {
-		put([65, ...toSignedLeb128_i32(IV$1[i])]);
+		put([65, ...toSignedLeb128_i32(IV[i])]);
 		put([33, 24 + i]);
 	}
 	put([65, 0]);
@@ -2649,7 +2648,6 @@ function runCompressParent() {
 	if (!wasmCompressParent) throw new Error("WASM SIMD not initialized. Call initSimdSync() first.");
 	wasmCompressParent();
 }
-
 //#endregion
 //#region src/hash.ts
 /**
@@ -2877,15 +2875,15 @@ function hashChunkWithWords(input, inputWords, inputOffset, inputLen, chunkCount
 	const fullBlocks = inputLen >>> 6;
 	const remainder = inputLen & 63;
 	const chunkWordOffset = inputOffset >>> 2;
-	if (inputWords && remainder === 0 && inputLen === CHUNK_LEN) {
+	if (inputWords && remainder === 0 && inputLen === 1024) {
 		let wordOff = chunkWordOffset;
-		compress(reusableTempCv, 0, inputWords, wordOff, reusableTempCv, 0, false, chunkCounter, BLOCK_LEN, flags | CHUNK_START);
+		compress(reusableTempCv, 0, inputWords, wordOff, reusableTempCv, 0, false, chunkCounter, 64, flags | 1);
 		wordOff += 16;
 		for (let i = 1; i < 15; i++) {
-			compress(reusableTempCv, 0, inputWords, wordOff, reusableTempCv, 0, false, chunkCounter, BLOCK_LEN, flags);
+			compress(reusableTempCv, 0, inputWords, wordOff, reusableTempCv, 0, false, chunkCounter, 64, flags);
 			wordOff += 16;
 		}
-		compress(reusableTempCv, 0, inputWords, wordOff, reusableTempCv, 0, false, chunkCounter, BLOCK_LEN, flags | CHUNK_END);
+		compress(reusableTempCv, 0, inputWords, wordOff, reusableTempCv, 0, false, chunkCounter, 64, flags | 2);
 		cv.set(reusableTempCv, cvOffset);
 		return;
 	}
@@ -2895,10 +2893,10 @@ function hashChunkWithWords(input, inputWords, inputOffset, inputLen, chunkCount
 		const isFirst = blockIdx === 0;
 		const isLast = blockIdx === totalBlocks - 1;
 		const blockStart = blockIdx << 6;
-		const blockLen = isLast && remainder > 0 ? remainder : BLOCK_LEN;
+		const blockLen = isLast && remainder > 0 ? remainder : 64;
 		let blockFlags = flags;
-		if (isFirst) blockFlags |= CHUNK_START;
-		if (isLast) blockFlags |= CHUNK_END;
+		if (isFirst) blockFlags |= 1;
+		if (isLast) blockFlags |= 2;
 		if (isLast && remainder > 0) readLittleEndianWordsPartial(input, inputOffset + blockStart, blockLen, block);
 		else if (inputWords && chunkWordOffset + (blockStart >>> 2) + 16 <= inputWords.length) {
 			compress(reusableTempCv, 0, inputWords, chunkWordOffset + (blockStart >>> 2), reusableTempCv, 0, false, chunkCounter, blockLen, blockFlags);
@@ -2917,23 +2915,23 @@ function hashPureJS(input, outputLen) {
 	if (inputLen === 0) {
 		const block = getBlockWords();
 		block.fill(0);
-		const out$1 = outputLen === 32 ? reusableOut8 : new Uint32Array(outputLen > 32 ? 16 : 8);
-		compress(IV, 0, block, 0, out$1, 0, outputLen > 32, 0, 0, CHUNK_START | CHUNK_END | ROOT);
+		const out = outputLen === 32 ? reusableOut8 : new Uint32Array(outputLen > 32 ? 16 : 8);
+		compress(IV, 0, block, 0, out, 0, outputLen > 32, 0, 0, 11);
 		if (outputLen === 32 && IS_LITTLE_ENDIAN) return reusableOut8View.slice();
-		const result$1 = new Uint8Array(outputLen);
-		if (IS_LITTLE_ENDIAN) result$1.set(new Uint8Array(out$1.buffer, 0, outputLen));
-		else writeLittleEndianBytesPartial(out$1, 0, result$1, 0, outputLen);
-		return result$1;
+		const result = new Uint8Array(outputLen);
+		if (IS_LITTLE_ENDIAN) result.set(new Uint8Array(out.buffer, 0, outputLen));
+		else writeLittleEndianBytesPartial(out, 0, result, 0, outputLen);
+		return result;
 	}
 	const numChunks = Math.ceil(inputLen / CHUNK_LEN);
 	if (numChunks === 1) {
 		const cv = outputLen === 32 ? reusableOut8 : new Uint32Array(outputLen > 32 ? 16 : 8);
 		hashChunkRoot(input, 0, inputLen, 0, 0, cv, outputLen > 32);
 		if (outputLen === 32 && IS_LITTLE_ENDIAN) return reusableOut8View.slice();
-		const result$1 = new Uint8Array(outputLen);
-		if (IS_LITTLE_ENDIAN) result$1.set(new Uint8Array(cv.buffer, 0, outputLen));
-		else writeLittleEndianBytesPartial(cv, 0, result$1, 0, outputLen);
-		return result$1;
+		const result = new Uint8Array(outputLen);
+		if (IS_LITTLE_ENDIAN) result.set(new Uint8Array(cv.buffer, 0, outputLen));
+		else writeLittleEndianBytesPartial(cv, 0, result, 0, outputLen);
+		return result;
 	}
 	const stack = HYPER_CV_STACK;
 	let stackLen = 0;
@@ -2949,13 +2947,13 @@ function hashPureJS(input, outputLen) {
 		for (let chunkIdx = 0; chunkIdx < fullChunks; chunkIdx++) {
 			chunkCv.set(IV);
 			let wordOff = chunkIdx << 8;
-			compress(chunkCv, 0, inputWords, wordOff, chunkCv, 0, false, chunkIdx, BLOCK_LEN, CHUNK_START);
+			compress(chunkCv, 0, inputWords, wordOff, chunkCv, 0, false, chunkIdx, 64, 1);
 			wordOff += 16;
 			for (let b = 1; b < 15; b++) {
-				compress(chunkCv, 0, inputWords, wordOff, chunkCv, 0, false, chunkIdx, BLOCK_LEN, 0);
+				compress(chunkCv, 0, inputWords, wordOff, chunkCv, 0, false, chunkIdx, 64, 0);
 				wordOff += 16;
 			}
-			compress(chunkCv, 0, inputWords, wordOff, chunkCv, 0, false, chunkIdx, BLOCK_LEN, CHUNK_END);
+			compress(chunkCv, 0, inputWords, wordOff, chunkCv, 0, false, chunkIdx, 64, 2);
 			let totalChunks = chunkIdx + 1;
 			let cvSrcOff = 0;
 			let cvSrc = chunkCv;
@@ -2965,7 +2963,7 @@ function hashPureJS(input, outputLen) {
 				stackLen--;
 				copyCV8(stack, stackLen * 8, parentBlock, 0);
 				copyCV8(cvSrc, cvSrcOff, parentBlock, 8);
-				compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, BLOCK_LEN, PARENT);
+				compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, 64, 4);
 				cvSrc = parentCv;
 				cvSrcOff = 0;
 				totalChunks >>>= 1;
@@ -2984,7 +2982,7 @@ function hashPureJS(input, outputLen) {
 				stackLen--;
 				copyCV8(stack, stackLen * 8, parentBlock, 0);
 				copyCV8(newCv, newCvOffset, parentBlock, 8);
-				compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, BLOCK_LEN, PARENT);
+				compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, 64, 4);
 				newCv = parentCv;
 				newCvOffset = 0;
 				totalChunks >>>= 1;
@@ -3006,7 +3004,7 @@ function hashPureJS(input, outputLen) {
 			stackLen--;
 			copyCV8(stack, stackLen * 8, parentBlock, 0);
 			copyCV8(newCv, newCvOffset, parentBlock, 8);
-			compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, BLOCK_LEN, PARENT);
+			compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, 64, 4);
 			newCv = parentCv;
 			newCvOffset = 0;
 			totalChunks >>>= 1;
@@ -3022,15 +3020,15 @@ function hashPureJS(input, outputLen) {
 		copyCV8(stack, stackLen * 8, parentBlock, 0);
 		copyCV8(stack, rightOff, parentBlock, 8);
 		if (stackLen === 0) {
-			const out$1 = outputLen === 32 ? reusableOut8 : new Uint32Array(outputLen > 32 ? 16 : 8);
-			compress(IV, 0, parentBlock, 0, out$1, 0, outputLen > 32, 0, BLOCK_LEN, PARENT | ROOT);
+			const out = outputLen === 32 ? reusableOut8 : new Uint32Array(outputLen > 32 ? 16 : 8);
+			compress(IV, 0, parentBlock, 0, out, 0, outputLen > 32, 0, 64, 12);
 			if (outputLen === 32 && IS_LITTLE_ENDIAN) return reusableOut8View.slice();
-			const result$1 = new Uint8Array(outputLen);
-			if (IS_LITTLE_ENDIAN) result$1.set(new Uint8Array(out$1.buffer, 0, outputLen));
-			else writeLittleEndianBytesPartial(out$1, 0, result$1, 0, outputLen);
-			return result$1;
+			const result = new Uint8Array(outputLen);
+			if (IS_LITTLE_ENDIAN) result.set(new Uint8Array(out.buffer, 0, outputLen));
+			else writeLittleEndianBytesPartial(out, 0, result, 0, outputLen);
+			return result;
 		}
-		compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, BLOCK_LEN, PARENT);
+		compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, 64, 4);
 		copyCV8(parentCv, 0, stack, stackLen * 8);
 		stackLen++;
 	}
@@ -3038,7 +3036,7 @@ function hashPureJS(input, outputLen) {
 	const lastBlock = getBlockWords();
 	lastBlock.fill(0);
 	copyCV8(stack, 0, lastBlock, 0);
-	compress(IV, 0, lastBlock, 0, out, 0, outputLen > 32, 0, BLOCK_LEN, ROOT);
+	compress(IV, 0, lastBlock, 0, out, 0, outputLen > 32, 0, 64, 8);
 	if (outputLen === 32 && IS_LITTLE_ENDIAN) return reusableOut8View.slice();
 	const result = new Uint8Array(outputLen);
 	if (IS_LITTLE_ENDIAN) result.set(new Uint8Array(out.buffer, 0, outputLen));
@@ -3060,10 +3058,10 @@ function hashChunkRoot(input, inputOffset, inputLen, chunkCounter, flags, out, f
 		const isFirst = blockIdx === 0;
 		const isLast = blockIdx === totalBlocks - 1;
 		const blockStart = blockIdx << 6;
-		const blockLen = isLast ? remainder || (inputLen > 0 ? BLOCK_LEN : 0) : BLOCK_LEN;
+		const blockLen = isLast ? remainder || (inputLen > 0 ? 64 : 0) : 64;
 		let blockFlags = flags;
-		if (isFirst) blockFlags |= CHUNK_START;
-		if (isLast) blockFlags |= CHUNK_END | ROOT;
+		if (isFirst) blockFlags |= 1;
+		if (isLast) blockFlags |= 10;
 		if (isLast && remainder > 0) readLittleEndianWordsPartial(input, inputOffset + blockStart, blockLen, block);
 		else if (inputLen === 0) block.fill(0);
 		else if (inputWords && (blockStart >>> 2) + 16 <= inputWords.length) {
@@ -3158,17 +3156,17 @@ function hashSimd(input, outputLen) {
 					const thisChunkIdx = chunkIdx + g;
 					const chunkStart = thisChunkIdx * CHUNK_LEN;
 					const chunkLen = Math.min(CHUNK_LEN, inputLen - chunkStart);
-					const thisBlockStart = chunkStart + blockIdx * BLOCK_LEN;
-					const blockStartInChunk = blockIdx * BLOCK_LEN;
-					let thisBlockLen = BLOCK_LEN;
+					const thisBlockStart = chunkStart + blockIdx * 64;
+					const blockStartInChunk = blockIdx * 64;
+					let thisBlockLen = 64;
 					if (blockStartInChunk >= chunkLen) thisBlockLen = 0;
-					else if (blockStartInChunk + BLOCK_LEN > chunkLen) thisBlockLen = chunkLen - blockStartInChunk;
+					else if (blockStartInChunk + 64 > chunkLen) thisBlockLen = chunkLen - blockStartInChunk;
 					offsets[g] = thisBlockStart;
 					counters[g] = thisChunkIdx;
 					let flags = 0;
-					if (blockIdx === 0) flags |= CHUNK_START;
-					const totalBlocksInChunk = Math.ceil(chunkLen / BLOCK_LEN) || 1;
-					if (blockIdx === totalBlocksInChunk - 1) flags |= CHUNK_END;
+					if (blockIdx === 0) flags |= 1;
+					const totalBlocksInChunk = Math.ceil(chunkLen / 64) || 1;
+					if (blockIdx === totalBlocksInChunk - 1) flags |= 2;
 					blockLens[g] = thisBlockLen;
 					flagsArr[g] = flags;
 				}
@@ -3205,7 +3203,7 @@ function hashSimd(input, outputLen) {
 				copyCV8(stack, stackOff, parentBlock, 0);
 				copyCV8(newCvSrc, newCvBase, parentBlock, 8);
 				if (useWasmParent) runCompressParent();
-				else compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, BLOCK_LEN, PARENT);
+				else compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, 64, 4);
 				newCvSrc = parentCv;
 				newCvBase = 0;
 				totalChunks >>>= 1;
@@ -3225,7 +3223,7 @@ function hashSimd(input, outputLen) {
 		copyCV8(stack, rightOff, parentBlock, 8);
 		if (stackLen === 0) {
 			const out = outputLen === 32 ? reusableOut8 : new Uint32Array(outputLen > 32 ? 16 : 8);
-			compress(IV, 0, parentBlock, 0, out, 0, outputLen > 32, 0, BLOCK_LEN, PARENT | ROOT);
+			compress(IV, 0, parentBlock, 0, out, 0, outputLen > 32, 0, 64, 12);
 			if (outputLen === 32 && IS_LITTLE_ENDIAN) return reusableOut8View.slice();
 			const result = new Uint8Array(outputLen);
 			if (IS_LITTLE_ENDIAN) result.set(new Uint8Array(out.buffer, 0, outputLen));
@@ -3233,7 +3231,7 @@ function hashSimd(input, outputLen) {
 			return result;
 		}
 		if (useWasmParent) runCompressParent();
-		else compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, BLOCK_LEN, PARENT);
+		else compress(IV, 0, parentBlock, 0, parentCv, 0, false, 0, 64, 4);
 		copyCV8(parentCv, 0, stack, stackLen * 8);
 		stackLen++;
 	}
@@ -3242,7 +3240,7 @@ function hashSimd(input, outputLen) {
 		block.fill(0);
 		copyCV8(stack, 0, block, 0);
 		const out = outputLen === 32 ? reusableOut8 : new Uint32Array(outputLen > 32 ? 16 : 8);
-		compress(IV, 0, block, 0, out, 0, outputLen > 32, 0, BLOCK_LEN, ROOT);
+		compress(IV, 0, block, 0, out, 0, outputLen > 32, 0, 64, 8);
 		if (outputLen === 32 && IS_LITTLE_ENDIAN) return reusableOut8View.slice();
 		const result = new Uint8Array(outputLen);
 		if (IS_LITTLE_ENDIAN) result.set(new Uint8Array(out.buffer, 0, outputLen));
@@ -3259,7 +3257,7 @@ function hashSimd(input, outputLen) {
 * @param outputLength - Number of bytes to output (default: 32)
 * @returns The hash output
 */
-function hash(input, outputLength = OUT_LEN) {
+function hash(input, outputLength = 32) {
 	if (input.length >= SIMD_THRESHOLD && ensureSimdSync()) return hashSimd(input, outputLength);
 	return hashPureJS(input, outputLength);
 }
@@ -3277,7 +3275,7 @@ function warmupSimd() {
 * @param output - Pre-allocated output buffer (must be at least outputLength bytes)
 * @param outputLength - Number of bytes to output (default: 32, max: output.length)
 */
-function hashInto(input, output, outputLength = OUT_LEN) {
+function hashInto(input, output, outputLength = 32) {
 	if (output.length < outputLength) throw new Error(`Output buffer too small: ${output.length} < ${outputLength}`);
 	if (input.length >= SIMD_THRESHOLD && ensureSimdSync()) {
 		hashSimdInto(input, output, outputLength);
@@ -3294,12 +3292,12 @@ function hashPureJSInto(input, output, outputLen) {
 		const block = getBlockWords();
 		block.fill(0);
 		const out = outputLen <= 32 ? reusableOut8 : new Uint32Array(16);
-		compress(IV, 0, block, 0, out, 0, outputLen > 32, 0, 0, CHUNK_START | CHUNK_END | ROOT);
+		compress(IV, 0, block, 0, out, 0, outputLen > 32, 0, 0, 11);
 		if (IS_LITTLE_ENDIAN) output.set(new Uint8Array(out.buffer, out.byteOffset, outputLen));
 		else writeLittleEndianBytesPartial(out, 0, output, 0, outputLen);
 		return;
 	}
-	if (Math.ceil(inputLen / CHUNK_LEN) === 1) {
+	if (Math.ceil(inputLen / 1024) === 1) {
 		const cv = outputLen <= 32 ? reusableOut8 : new Uint32Array(16);
 		hashChunkRoot(input, 0, inputLen, 0, 0, cv, outputLen > 32);
 		if (IS_LITTLE_ENDIAN) output.set(new Uint8Array(cv.buffer, cv.byteOffset, outputLen));
@@ -3316,7 +3314,6 @@ function hashSimdInto(input, output, outputLen) {
 	const result = hashSimd(input, outputLen);
 	output.set(result);
 }
-
 //#endregion
 //#region src/index.ts
 /**
@@ -3381,7 +3378,7 @@ var src_default = {
 	createKeyed,
 	createDeriveKey
 };
-
 //#endregion
 export { Hasher, XofReader, createDeriveKey, createHasher, createKeyed, src_default as default, hash, hashInto, warmupSimd };
+
 //# sourceMappingURL=index.js.map
import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'

export const metadata = {
  title: 'StockBot powered by Groq'
}

export default async function IndexPage() {
  const id = nanoid()
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} missingKeys={missingKeys} />
    </AI>
  )
}
