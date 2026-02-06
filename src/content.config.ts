import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// news（新闻）
const news = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/news",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			author: z.string().optional(),
			date: z.coerce.date(),
			order: z.number(),
			link: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

// publications（研究与发表，按研究方向筛选）
const publications = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/publications",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			venue: z.string().optional(),
			authors: z.string(),
			year: z.number(),
			pdfUrl: z.string().optional(),
			doi: z.string().optional(),
			thumbnail: image().optional(),
			direction: z.enum(["多模态交互", "态势感知", "虚拟与增强现实"]),
			order: z.number(),
			draft: z.boolean().optional(),
		}),
});

// collaborators（合作者）
const collaborators = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/collaborators",
	}),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			title: z.string(),
			image: image().optional(),
			period: z.enum(["2019-2022", "2022-2025", "2026"]),
			order: z.number(),
			showOnHomepage: z.boolean().optional(),
			homepageOrder: z.number().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	news,
	publications,
	collaborators,
};
