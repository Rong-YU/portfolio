import React from "react";
import ProjectList from "../components/ProjectList";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="mt-10">
			<ProjectList></ProjectList>
		</div>
	);
}
