import React, { Suspense } from "react";
import { Metadata } from "next";
import { ErrorBoundary } from "react-error-boundary";

import { TableLoading } from "../components/ui/table-loading";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { ProjectList } from "./ProjectList";
import { ProjectLoadError } from "./ProjectLoadError";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <FeaturedProjects />
        <h1 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">All Projects</h1>
        <div className=" md:px-10">
          <table id="content" className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200">Link</th>
              </tr>
            </thead>
            <tbody>
              <ErrorBoundary fallback={<ProjectLoadError />}>
                <Suspense fallback={<TableLoading />}>
                  <ProjectList />
                </Suspense>
              </ErrorBoundary>
            </tbody>
          </table>
        </div>
        <div className="text-base">Last Updated: January 2025</div>
      </div>
    </>
  );
}
