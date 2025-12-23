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
			changeFrequency: "daily" as const,
		},
		{
			path: "/about",
			lastModified: new Date("2024-09-15"),
			changeFrequency: "yearly" as const,
		},
		{
			path: "/contact",
			lastModified: new Date("2024-09-20"),
			changeFrequency: "monthly" as const,
		},
		{
			path: "/docs",
			lastModified: new Date("2024-09-25"),
			changeFrequency: "weekly" as const,
		},
		{
			path: "/get-started",
			lastModified: new Date("2024-09-30"),
			changeFrequency: "weekly" as const,
		},
		{
			path: "/pricing",
			lastModified: new Date("2024-09-28"),
			changeFrequency: "weekly" as const,
		},
	];

	return routeInfo.map(({ path, lastModified, changeFrequency }) => ({
		url: path === "" ? baseUrl : `${baseUrl}${path}/`,
		lastModified,
		changeFrequency,
		priority: path === "" ? 1 : 0.8,
	}));
}


