import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Header } from "../../header";
import "../../mdx.css";
import { getBlogPost } from "../utils";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogInfo({ params }: Props) {
  const blogPost = await getBlogPost(params.slug);

  if (!blogPost) {
    notFound();
  }

  const transformedContent = transformContent(blogPost.content ?? "");

  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header post={blogPost} />
      <article className="px-4 md:px-0 py-12 md:mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={transformedContent} />
      </article>
    </div>
  );
}

function transformContent(content: string): string {
  // Handle YouTube embeds
  content = transformYouTubeLinks(content);

  // Handle images with alignment
  content = transformAlignedImages(content);

  return content;
}

function transformYouTubeLinks(content: string): string {
  const youtubeRegex = /%\[https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+)(?:&ab_channel=[\w\-]+)?\]/g;
  return content.replace(youtubeRegex, (match, videoId) => {
    return `<div class="video-container"><iframe width="100%" src="https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0" frameborder="0" allowfullscreen></iframe></div>`;
  });
}

function transformAlignedImages(content: string): string {
  // The regex now captures the alt text too.
  const imgAlignRegex = /!\[([^\]]*)\]\((https:\/\/[^\s]+)(?:\salign="([^"]+)")?\)/g;
  return content.replace(imgAlignRegex, (match, altText, imgUrl, align) => {
    const alignmentClass = align ? `align-${align}` : '';
    return `<div class="${alignmentClass}"><img src="${imgUrl}" alt="${altText}" /></div>`;
  });
}



