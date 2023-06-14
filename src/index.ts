const DEFAULT_URL = "https://www.tampadevs.com/";

export default {
	async fetch(request, env) {
  
	  if (request.method != "GET") {
		return new Response("Redirecting...", { status: 302, headers: { "Location": DEFAULT_URL }});
	  }
  
	  const { pathname, search } = new URL(request.url);

	  const key = pathname.split('/')[1];
	  if (!key) {
		return new Response("Redirecting...", { status: 302, headers: { "Location": DEFAULT_URL }});
	  }
  
	  const dest = await env.kv.get(key);
	  if (dest) {
		return new Response("Redirecting...", { status: 301, headers: { "Location": dest + search }});
	  }
  
	  return new Response("Redirecting...", { status: 302, headers: { "Location": DEFAULT_URL }});
	}
  }