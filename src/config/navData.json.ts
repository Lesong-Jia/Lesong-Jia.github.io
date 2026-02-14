export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

const navConfigZh: navItem[] = [
	{ text: "新闻", link: "/news" },
	{ text: "研究方向", link: "/publications" },
	{ text: "导师与合作者", link: "/collaborators" },
	{
		text: "中文/EN",
		dropdown: [
			{ text: "English", link: "/en/" },
			{ text: "中文", link: "/zh/" },
		],
	},
];

const navConfigEn: navItem[] = [
	{ text: "News", link: "/news" },
	{ text: "Research", link: "/publications" },
	{ text: "Collaborators", link: "/collaborators" },
	{
		text: "中文/EN",
		dropdown: [
			{ text: "English", link: "/en/" },
			{ text: "中文", link: "/zh/" },
		],
	},
];

/** Returns nav items with labels in the given language. */
export function getNavItems(lang: "zh" | "en"): navItem[] {
	return lang === "en" ? navConfigEn : navConfigZh;
}

// note: 1 level of dropdown is supported; default export for backward compat
export default navConfigZh;
