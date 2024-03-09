import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION || '',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title || '',
      pubDate: post.data.pubDate || new Date(),
      description: post.data.description || '',
      customData: post.data.customData,
      link: `/blog/${post.slug}/` || post.url || '',
    })),
    customData: '<language>en-us</language>'
  });
}
