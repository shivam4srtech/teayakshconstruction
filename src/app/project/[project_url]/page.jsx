import { notFound } from 'next/navigation';
import AboutProject from '@/components/AboutProject';
import GlobalCta from '@/components/GlobalCta';
import ProjectFAQ from '@/components/ProjectFAQ';
import ProjectStages from '@/components/ProjectStages';
import SingleProjectHero from '@/components/SingleProjectHero';
import { getProjectByUrl, getProjects } from '@/lib/trayakshApi';

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects
    .filter((project) => project.project_url)
    .map((project) => ({
      project_url: project.project_url,
    }));
}

export async function generateMetadata({ params }) {
  const { project_url } = await params;
  const project = await getProjectByUrl(project_url);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.seo?.meta_title || project.title,
    description: project.seo?.meta_description,
    keywords: project.seo?.meta_keywords,
    openGraph: {
      title: project.seo?.meta_title || project.title,
      description: project.seo?.meta_description,
      images: project.thumbnail_image ? [project.thumbnail_image] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { project_url } = await params;
  const project = await getProjectByUrl(project_url);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SingleProjectHero project={project} />
      <AboutProject project={project} />
      <GlobalCta />
      <ProjectStages stages={project.stages} />
      <ProjectFAQ />
    </>
  );
}
