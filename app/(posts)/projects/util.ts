import { kv } from "@vercel/kv";

async function getReadmeImage(repoName: string, owner: string): Promise<string | null> {

  const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`, {
      headers: {
          Accept: "application/vnd.github.VERSION.raw",
      },
  });
  
  if (!response.ok) return null;

  const content = await response.text();
  const imageRegex = /!\[.*?\]\((.*?)\)|<img.*?src=["'](.*?)["']/;
  const match = content.match(imageRegex);
  const imageUrl = match && (match[1] || match[2]);

  return imageUrl || null;
}

export async function getAllProjects(page = 1): Promise<Post[]> {
  const response = await fetch(
    `https://api.github.com/users/tell-a-prompt/repos?sort=updated&per_page=100&direction=desc&page=${page}`
  );

  const data = await response.json();

  const filteredData: Repo[] =
    data.filter?.((repo: Repo) => !repo.fork && repo.description) ?? [];

    const projects = (await Promise.all(
      filteredData.map(async (repo) => {
        const coverImage = await getReadmeImage(repo.name, repo.owner.login);
        const views = await getRepoViews(repo.name, repo.owner.login);
    
        return {
          slug: repo.name,
          title: repo.name.replace(/[-_]/g, " "),
          brief: repo.description,
          date: repo.pushed_at,
          url: repo.homepage ?? "",
          content: "",
          coverImage: coverImage ?? repo.owner.avatar_url,
          type: "projects",
          views: repo.stargazers_count,
          owner: repo.owner.login,
        };
      })
    )) as Post[];    

  return projects;
} 

async function getRepoViews(repoName: string, owner: string): Promise<number> {
    const key = `${repoName}-views`;
    
    if ("location" in globalThis) {
        const response = await fetch(`/projects/views?slug=${repoName}`);
        const data = await response.json();
        return data.views || 0;
    } else {
        return await kv.get<number>(key) || 0;
    }
  }
  