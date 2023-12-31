import Link from "next/link";
import { Eye, Star } from "lucide-react";

type Props = {
  post: Post;
  showReadMore?: boolean;
};

export const Article: React.FC<Props> = ({ post, showReadMore }) => {
  return (
    <Link href={`/${post.type}/${post.slug}`}>
      <article className="p-4 md:p-8 relative">
        {/* Cover Image */}
        <div className="rounded-lg overflow-hidden w-full h-48 mb-4">
          <img
            src={post.coverImage}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Date and Views */}
        <div className="flex justify-between gap-2 items-center mb-2">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {post.date ? (
              <time dateTime={new Date(post.date).toISOString()}>
                {Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                  new Date(post.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className="text-zinc-400 text-xs flex items-center gap-1">
            {post.type === "projects" ? (
              //<Eye className="w-4 h-4 text-yellow-200/60" />
              <Star className="w-4 h-4 text-yellow-200/60" />
            ) : (
              <Eye className="w-4 h-4 text-yellow-200/60" />
            )}{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              post.views ?? 0
            )}
          </span>
        </div>

        {/* Title */}
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {post.title}
        </h2>

        {/* Brief Description */}
        <p className="z-20 mt-4 mb-8 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {post.brief.substring(0, 120)}...
        </p>

        {/* Read More (if prop provided) */}
        {showReadMore && (
          <div className="absolute bottom-4 md:bottom-8">
            <p className="text-zinc-200 hover:text-zinc-50">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
          </div>
        )}
      </article>
    </Link>
  );
};
