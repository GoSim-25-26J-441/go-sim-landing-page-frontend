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
			changeFrequency: "daily" as const,
		},
		{
			path: "/about",
			changeFrequency: "yearly" as const,
		},
		{
			path: "/contact",
			changeFrequency: "monthly" as const,
		},
		{
			path: "/docs",
			changeFrequency: "weekly" as const,
		},
		{
			path: "/get-started",
			changeFrequency: "weekly" as const,
		},
		{
			path: "/pricing",
			changeFrequency: "weekly" as const,
		},
	];

	return routeInfo.map(({ path, changeFrequency }) => ({
		url: path === "" ? baseUrl : `${baseUrl}${path}/`,
		lastModified: new Date(),
		changeFrequency,
		priority: path === "" ? 1 : 0.8,
	}));
}


