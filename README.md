# hexo-generator-baidusearch

This hexo plugin generates a xml file that can be crawled to enable Baidu custom serach.

## Install

```bash
npm install --save hexo-generator-baidusearch
```

## Config

The sad fact is that Github actively blocked Baidu spider due to a historical incident when a Baidu service is hijacked to DDOS the several github services. If your website is hosted with Github Pages, you will need to create a mirror repository and provide the mirror link to Baidu.

[Coding.net](https://coding.net) is a good choice here. Just create a repository there, setup a subdomain and configure your Hexo blog to deploy to both your github repo and coding.net repo, problem solved.

## Run

No specific action needed, just run:

```bash
hexo generate
hexo deploy
```