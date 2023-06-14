# go.tampa.dev

URL Shortener for Tampa Devs, built on Cloudflare Workers and KV.

This implementation supplants the previous Pages-based one because it's more flexible and preserves query parameters for analytics.

It will eventually be replaced by a more robust SaaS solution, but for now it's a good stopgap.

To add new links, slack @charlton with the following information:

- The path you want to use, e.g. `go.tampa.dev/path`
- The URL you want to redirect to, e.g. `https://www.meetup.com/Tampa-Dev/`
