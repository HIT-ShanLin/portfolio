export interface RepoInfo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export const fallbackRepos: RepoInfo[] = [
  {
    id: 1,
    name: 'portfolio',
    description: 'Personal portfolio website built with Astro',
    html_url: 'https://github.com/HIT-ShanLin/portfolio',
    stargazers_count: 0,
    language: 'TypeScript',
    fork: false,
  },
];
