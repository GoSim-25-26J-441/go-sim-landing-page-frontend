import { type MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl =
	(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(
		/\/+$/,
		""
	);

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	// Define routes with their specific change frequencies based on content type
	const routes = [
		{ path: "", changeFrequency: "weekly" as const, priority: 1 }, // homepage - frequently updated with new content
		{ path: "/about", changeFrequency: "yearly" as const, priority: 0.8 }, // about - stable company information
		{ path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 }, // contact - stable contact information
		{ path: "/docs", changeFrequency: "monthly" as const, priority: 0.8 }, // docs - updated with product changes
		{ path: "/get-started", changeFrequency: "weekly" as const, priority: 0.8 }, // get-started - updated as product evolves
		{ path: "/pricing", changeFrequency: "weekly" as const, priority: 0.8 }, // pricing - may change based on business needs
	];

	return routes.map(({ path, changeFrequency, priority }) => ({
		url: `${baseUrl}${path}/`,
		lastModified: now,
		changeFrequency,
		priority,
	}));
}


