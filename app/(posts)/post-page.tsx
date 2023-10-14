import Link from "next/link";
import React from "react";
import { ArrowDownCircle, Settings, Eye, Star } from "lucide-react";
import { Card } from "../components/card";
import { Article } from "./article";
import { Content } from "../components/content";

interface PostsPageProps {
  title: string;
  description?: string;
  featured?: Post[];
  sorted: Post[];
  isLoading?: boolean;
  isReachedEnd?: boolean;
  handleLoadMore?: () => void;
}

export function PostsPage({
  title,
  description,
  sorted,
  featured = [],
  isLoading,
  isReachedEnd,
  handleLoadMore,
}: PostsPageProps) {
  return (
    <>
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-zinc-400">
          <Content text={description} />
        </p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {featured && (
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 items-stretch">
          {featured.filter(Boolean).slice(0, 4).map((post) => (
              <Card key={post.slug}>
                  <Article post={post} showReadMore />
              </Card>
          ))}
      </div>
      )}
      <div className="hidden w-full h-px md:block bg-zinc-800" />

      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {sorted
            .filter((_, i) => i % 3 === 0)
            .map((project) => (
              <Card key={project.slug}>
                <Article post={project} showReadMore />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {sorted
            .filter((_, i) => i % 3 === 1)
            .map((project) => (
              <Card key={project.slug}>
                <Article post={project} showReadMore />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {sorted
            .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <Card key={project.slug}>
                <Article post={project} showReadMore />
              </Card>
            ))}
        </div>
      </div>
      {handleLoadMore && !isReachedEnd && (
        <div className="flex justify-center items-center">
          <button
            disabled={isLoading}
            onClick={handleLoadMore}
            className={`flex justify-between items-center m-2 px-4 py-2 text-sm text-zinc-50  border border-zinc-700 rounded ${
              isLoading
                ? "bg-zinc-700 scale-110 rounded-xl"
                : "hover:bg-zinc-800 hover:scale-110 hover:rounded-xl duration-1000"
            }`}
          >
            {isLoading ? (
              <>
                Loading... <Settings className="w-4 h-4 m-2 animate-spin" />
              </>
            ) : (
              <>
                Load more <ArrowDownCircle className="w-4 h-4 m-2" />
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}
