import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="p-8">
			<h1>Relase v1.1.0</h1>
		</div>
	);
}
