export const translations = {
	zh: {
		nav: {
			news: "新闻",
			research: "研究方向",
			collaborators: "导师与合作者",
		},
		home: {
			title: "关于我",
			description: "我是贾乐松，是匹兹堡大学的一名信息科学博士生，由杜娜博士指导。我的研究聚焦于人机交互，涵盖机器人、自动驾驶、多无人机协同以及增强/虚拟现实等应用场景。我的研究理念是在深入分析和建模用户行为的基础上，构建能够有效指导交互设计实践的理论框架。为此，我利用 Unity 和 Unreal 等引擎构建可控的模拟环境以支持不同的交互任务和活动，综合采集和分析用户的主观数据、行为数据以及生理信号以深入理解用户在复杂交互中的真实行为规律。",
			cv: "下载简历",
		},
		news: {
			title: "相关新闻",
			description: "与贾乐松相关的新闻与动态。",
			backToHome: "返回主页",
			backToAll: "返回全部",
			readFull: "阅读全文",
			paperInfo: "论文相关信息",
			paperTitle: "论文题目",
			authors: "作者",
			abstract: "摘要",
		},
		publications: {
			title: "研究方向",
			description: "研究方向。",
			backToHome: "返回主页",
			related: "相关发表",
		},
		collaborators: {
			title: "导师与合作者",
			description: "导师与合作者。",
			backToHome: "返回主页",
			backToAll: "返回全部",
			homepage: "个人主页",
		},
	},
	en: {
		nav: {
			news: "News",
			research: "Research",
			collaborators: "Collaborators",
		},
		home: {
			title: "About Me",
			description: "I am Lesong Jia, a Ph.D. student in Information Science at the University of Pittsburgh, advised by Dr. Na Du. My research focuses on human-computer interaction, covering applications in robotics, autonomous driving, multi-UAV coordination, and augmented/virtual reality. My research philosophy is to build theoretical frameworks that effectively guide interaction design practices based on in-depth analysis and modeling of user behavior. To this end, I use engines like Unity and Unreal to build controllable simulation environments to support different interaction tasks and activities, and comprehensively collect and analyze users' subjective data, behavioral data, and physiological signals to deeply understand users' real behavioral patterns in complex interactions.",
			cv: "Download CV",
		},
		news: {
			title: "News",
			description: "News and updates related to Lesong Jia.",
			backToHome: "Back to Home",
			backToAll: "Back to All",
			readFull: "Read Full Text",
			paperInfo: "Paper Information",
			paperTitle: "Title",
			authors: "Authors",
			abstract: "Abstract",
		},
		publications: {
			title: "Research Directions",
			description: "Research directions.",
			backToHome: "Back to Home",
			related: "Related Publications",
		},
		collaborators: {
			title: "Collaborators",
			description: "Collaborators.",
			backToHome: "Back to Home",
			backToAll: "Back to All",
			homepage: "Homepage",
		},
	},
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations.zh;
