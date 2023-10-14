import { PostsPage } from "../post-page";
import { getAllProjects } from "./util";

export const revalidate = 60;

export default async function Page() {
  const [featured, top1, top2, top3, ...projects] = await getAllProjects();
  return (
    <PostsPage
      title="Projects"
      description="Our Github repos."
      featured={[featured, top1, top2, top3]}
      sorted={projects}
    />
  );
  
}
