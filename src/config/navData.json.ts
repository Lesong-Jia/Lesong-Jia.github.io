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

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "新闻",
		link: "/news",
	},
	{
		text: "研究方向",
		link: "/publications",
	},
	// {
	// 	text: "实验室成员",
	// 	link: "/#pricing",
	// },
	{
		text: "导师与合作者",
		link: "/collaborators",
	},
	{
		text: "中文/EN",
		dropdown: [
			{
				text: "English",
				link: "/en/",
			},
			{
				text: "中文",
				link: "/zh/",
			},
		],
	},
];

export default navConfig;
