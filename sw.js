self.addEventListener("fetch", (e) => {
  e.respondWith(f(e.request));
});

async function f(req) {
  const res = await fetch(req);

  const headers = new Headers(res.headers);
  headers.set("cross-origin-embedder-policy", "require-corp");
  headers.set("cross-origin-opener-policy", "same-origin");

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}
