import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectView from '@/components/ProjectView';

// All seven case studies are static, so they are prerendered at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.desc,
    openGraph: {
      title: `${project.title} — Aakash Gupta`,
      description: project.desc,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectView project={project} />;
}
