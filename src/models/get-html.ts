import * as qs from "query-string";
import * as cheerio from "cheerio";

export async function getHTML(path: string, params: { [keys: string]: string } = {}): Promise<CheerioStatic> {
  const url = "https://hoj.hamako-ths.ed.jp/onlinejudge" + path + "?" + qs.stringify(params);
  const reqURL = "https://crossorigin.me/" + url;
  const res = await fetch(reqURL, { mode: 'cors' });
  const text = await res.text();
  return cheerio.load(text);
}