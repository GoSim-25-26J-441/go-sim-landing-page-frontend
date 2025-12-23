import { type MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl =
	(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(
		/\/+$/,
		""
	);

export default function sitemap(): MetadataRoute.Sitemap {
	const routeInfo = [
		{
			path: "", // homepage
			lastModified: new Date("2024-10-01"),
		},
		{
			path: "/about",
			lastModified: new Date("2024-09-15"),
		},
		{
			path: "/contact",
			lastModified: new Date("2024-09-20"),
		},
		{
			path: "/docs",
			lastModified: new Date("2024-09-25"),
		},
		{
			path: "/get-started",
			lastModified: new Date("2024-09-30"),
		},
		{
			path: "/pricing",
			lastModified: new Date("2024-09-28"),
		},
	];

	return routeInfo.map(({ path, lastModified }) => ({
		url: `${baseUrl}${path}/`,
		lastModified,
		changeFrequency: "monthly",
		priority: path === "" ? 1 : 0.8,
	}));
}


