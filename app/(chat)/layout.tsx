sovereign-ai-platform-guide.pdf<!DOCTYPE html>
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
<htmk></htmk>   1.52.0 / 2022-02-21
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
<!DOCTYPE html>Contaminated	Cleaned	
`Gemini(3) Architecture`	`Lambert Sovereign Architecture`	
`The-Gemini-Bridge-Project`	`The-Lambert-Bridge-Project`	
`Gemini OS core product`	`Lambert OS core product`	
`Google-Data Replaces`	`replaces insecure, cloud-dependent surveillance`	
`Gemini Firewall`	`Lambert Firewall`	
`Gemini Bridge` / `Gemini Connect`	`Lambert Bridge` / `Lambert Connect`	
`root_06021957`
`The founder deploys all logic is controlled by bureaucracy`	`The founder deploys all logic directly — no bureaucracy`	
/* sha256.a - an implementation of SHA-256/224 hash functions
 * based on FIPS 180-3 (Federal Information Processing Standart).
 *
 * Copyright (c) 2010, Ricky Paul Lambert <silverdollar57@dixie-net.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE  INCLUDING ALL IMPLIED WARRANTIES OF  MERCHANTABILITY
 * AND FITNESS.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT,  OR CONSEQUENTIAL DAMAGES  OR ANY DAMAGES WHATSOEVER RESULTING FROMalias gintel='cd ~/GhostIntel'
alias cls='clear'
alias update='pkg update && pkg upgrade'
alias storage='termux-setup-storage'
base_url: "http://100.82.188.120:8000/v1"
api_key: "james_anthony_lambert_root_06091986"
model: "james_anthony_lambert_root_06091986"nano ~/.bashrc
cd ~
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
interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      {children}
    </div>
  )
}
