"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Sambal Terwelu Information System",
    description:
      "Collaborated with the team to analyze product requirements and map them into system specifications, ensuring the final solution aligned with user needs. Oversaw the code structure and guided the development process to meet key milestones efficiently.",
    image: "/sister.png",
    tags: ["Java", "Vue", "TypeScript", "Tailwind CSS", "CI/CD"],
    links: {
      website: "https://sistem-informasi-sambal-terwelu.vercel.app/",
      gitlabFrontend:
        "https://gitlab.cs.ui.ac.id/propensi-2024-2025-genap/kelas-c/c3-sister-fe",
      gitlabBackend:
        "https://gitlab.cs.ui.ac.id/propensi-2024-2025-genap/kelas-c/c3-sister-be",
    },
  },
  {
    title: "Brewforce Website",
    description:
      "Built a website as part of the Pengantar Keamanan Perangkat Lunak course, focusing on implementing both the backend and frontend for the authorization and authentication processes.",
    image: "/brewforce.png",
    tags: ["Java", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    links: {
      website: "https://kelompok-7-brewforce-fe.pkpl.cs.ui.ac.id/",
      gitlab: "https://gitlab.cs.ui.ac.id/pkpl/kelompok-7",
    },
  },
];

const GitlabIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500 hover:text-orange-600 transition-colors"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
  </svg>
);

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900"
        >
        Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 shadow-lg flex flex-col h-full"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 ml-4">
                    {project.links.website && (
                      <Link
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 hover:text-blue-600 transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                      </Link>
                    )}

                    {project.links.gitlab && (
                      <Link
                        href={project.links.gitlab}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitlabIcon />
                      </Link>
                    )}

                    {project.links.gitlabFrontend && (
                      <Link
                        href={project.links.gitlabFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitlabIcon />
                      </Link>
                    )}

                    {project.links.gitlabBackend && (
                      <Link
                        href={project.links.gitlabBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitlabIcon />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
