import { type MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl =
	(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(
		/\/+$/,
		""
	);

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const routes = [
		"", // homepage
		"/about",
		"/contact",
		"/docs",
		"/get-started",
		"/pricing",
	];

	return routes.map((path) => ({
		url: `${baseUrl}${path}/`,
		lastModified: now,
		changeFrequency: "monthly",
		priority: path === "" ? 1 : 0.8,
	}));
}


