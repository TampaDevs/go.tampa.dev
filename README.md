# go.tampa.dev

URL Shortener for Tampa Devs, built on Cloudflare Workers and KV.

This implementation supplants the previous Pages-based one because it's more flexible and preserves query parameters for analytics.

It will eventually be replaced by a more robust SaaS solution, but for now it's a good stopgap.

To add new links, slack @charlton with the following information:

- The path you want to use, e.g. `go.tampa.dev/path`
- The URL you want to redirect to, e.g. `https://www.meetup.com/Tampa-Dev/`

## Configuration

URLs are configured in the following [KV namespace](https://dash.cloudflare.com/fb797d609e0f1fef96c0beb8795f59dc/workers/kv/namespaces/a66c4ca066cb4a53abba85b096b363e6).

The Worker service lives [here](https://dash.cloudflare.com/fb797d609e0f1fef96c0beb8795f59dc/workers/services/view/go-tampa-dev/production).