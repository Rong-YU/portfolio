import Skill from "./components/Skill";
import TypeWriter from "./components/TypeWriter";
import { promises as fs } from "fs";
import path from "path";

type skillList = {
	[key: string]: number;
};

export default async function Home() {
	const projectsJson = path.join(process.cwd(), "content/projects.json");
	const res = await fs.readFile(projectsJson, "utf8");
	const resData: Array<project> = JSON.parse(res);
	const skills: skillList = {};
	resData.forEach((data) => {
		data.skill.forEach((skill) => {
			if (skills[skill]) {
				skills[skill] += 1;
			} else {
				skills[skill] = 1;
			}
		});
	});

	return (
		<div className="mt-10">
			<section className="mt-5">
				<div className="flex flex-col md:flex-row">
					<div className="flex-col md:w-2/3 w-full mt-auto">
						<TypeWriter></TypeWriter>
						<h1 className="font-bold text-2xl	">{"Hi, I'm Rong YU"}</h1>
						<h2 className="text-lg text-blue-500">A frontend engineer based in Paris!</h2>
					</div>
					{/* <div className="flex md:w-1/3 w-full justify-center md:justify-end mt-4 my-2 md:m-0">
						<div className="border-2 border-solid w-24 h-24 border-pink-300 rounded-full md:mr-4"></div>
					</div> */}
				</div>

				<p className="mt-4">
					My goal is to make human-computer interaction not only more direct but also exceptionally
					user-friendly, striving to create intuitive and seamless digital experiences that enhance the way we
					engage with technology and simplify our lives.
				</p>
			</section>
			<section className="mt-5">
				<h1 className="font-bold text-2xl	">Skills</h1>
				<div className="grid grid-cols-2 gap-5 md:grid-cols-4 mt-4">
					{Object.keys(skills).map((key) => {
						return <Skill key={key} name={key} numberOfRelatedProject={skills[key]}></Skill>;
					})}
					{/* <Skill name="javascript" numberOfRelatedProject={1}></Skill>
					<Skill name="Java" numberOfRelatedProject={1}></Skill>
					<Skill name="C++" numberOfRelatedProject={1}></Skill>
					<Skill name="javascript" numberOfRelatedProject={1}></Skill>
					<Skill name="javascript" numberOfRelatedProject={1}></Skill>
					<Skill name="javascript" numberOfRelatedProject={1}></Skill>
					<Skill name="javascript" numberOfRelatedProject={1}></Skill>
					<Skill name="javascript" numberOfRelatedProject={1}></Skill>
					<Skill name="javascript" numberOfRelatedProject={1}></Skill> */}
				</div>
			</section>
			<section className="mt-10">
				<h1 className="font-bold text-2xl">My journey</h1>
				<h2 className="mt-2">Work =</h2>
				<div className="m-4">
					<p className="font-bold text-lg">
						<a className="hover:underline text-pink-300" target="_blank" href="https://www.group-ftl.com/">
							2020 - 2023 FTL Group
						</a>
					</p>
					<p>Working as a frontend developer.</p>
				</div>
				<h2 className="mt-2">Education = </h2>
				<div className="m-4">
					<p className="font-bold text-lg">
						<a
							className="hover:underline text-pink-300"
							target="_blank"
							href="https://www.efrei.fr/programme-grande-ecole/cycle-ingenieur-par-apprentissage-lsi-hybride/"
						>
							2023 Efrei Paris, France
						</a>
					</p>
					<p>
						{
							"Completed a 3 years of Engineer's Degree program, specializing in Software and Information Systems."
						}
					</p>
				</div>

				<div className="m-4">
					<p className="font-bold text-lg">
						<a
							className="hover:underline text-pink-300"
							target="_blank"
							href="http://www-als.ics.nitech.ac.jp/en_index.html"
						>
							2022 Inatsu Lab, NITech, Japan
						</a>
					</p>
					<p>
						Special Graduate Research Student (SGRS), a student exchange program of 6 months, working on a
						machine learning project (AutoML).
					</p>
				</div>
				<div className="m-4">
					<p className="font-bold text-lg">
						<a
							className="hover:underline text-pink-300"
							target="_blank"
							href="http://odf.univ-paris13.fr/fr/offre-de-formation/feuilleter-le-catalogue-1/sciences-technologies-sante-STS/dut-CB/dut-informatique-program-vdtin-316-2.html"
						>
							2020 University of Paris 13, France
						</a>
					</p>
					<p>
						Completed a 2 year university diploma in computer science (Diplôme universitaire de technologie
						informatique).
					</p>
				</div>
			</section>
		</div>
	);
}
