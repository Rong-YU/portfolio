import React from "react";
import ProjectList from "../components/ProjectList";
import { promises as fs } from "fs";
import path from "path";

type Props = {};

export default async function page({}: Props) {
	const projectsJson = path.join(process.cwd(), "content/projects.json");
	const res = await fs.readFile(projectsJson, "utf8");
	const resData = JSON.parse(res);
	const projects = await Promise.all(
		resData.map(async (project: project) => {
			if (project.imageFolder) {
				const imgFolderPath = path.join(process.cwd(), "public", project.imageFolder);
				const filenames = await fs.readdir(imgFolderPath);
				const imgUrls = filenames.map((filename) => path.join(project.imageFolder!!, filename));
				project.imgUrls = imgUrls;
			}
			return project;
		})
	);

	return (
		<div className="mt-10">
			<ProjectList projects={projects}></ProjectList>
		</div>
	);
}
