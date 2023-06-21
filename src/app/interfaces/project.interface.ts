/* File: src/app/interfaces/project.interface.ts */
export interface IProject {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  linkApp: string;
  linkGitHub: string;
}