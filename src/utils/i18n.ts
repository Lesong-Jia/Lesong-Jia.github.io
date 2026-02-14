import { translations, type Lang } from "@/i18n/translations";

/**
 * 获取当前语言
 * 从 URL 路径中提取语言，如果路径以 /en/ 开头则为英文，否则为中文
 * 注意：在 Astro 组件中，应该直接使用 Astro.url.pathname 或传递 lang 参数
 */
export function getCurrentLang(pathname?: string): "zh" | "en" {
	// 如果提供了 pathname，使用它
	if (pathname) {
		return pathname.startsWith("/en/") ? "en" : "zh";
	}
	// 在客户端，从 window.location 获取
	if (typeof window !== "undefined") {
		return window.location.pathname.startsWith("/en/") ? "en" : "zh";
	}
	// 默认返回中文
	return "zh";
}

/**
 * 获取翻译文本
 */
export function t(key: string, lang?: Lang): string {
	const currentLang = lang || getCurrentLang();
	const keys = key.split(".");
	let value: any = translations[currentLang];
	for (const k of keys) {
		value = value?.[k];
	}
	return value || key;
}

/**
 * 为路径添加语言前缀
 * @param path 原始路径（如 "/news", "/publications"）
 * @param lang 可选，指定语言。如果不提供，使用当前语言
 */
export function getLocalizedPath(path: string, lang?: "zh" | "en"): string {
	const currentLang = lang || getCurrentLang();
	// 如果路径已经是 /zh/ 或 /en/ 开头，直接返回
	if (path.startsWith("/zh/") || path.startsWith("/en/")) {
		return path;
	}
	// 如果路径是根路径，返回 /lang/
	if (path === "/" || path === "") {
		return `/${currentLang}/`;
	}
	// 其他路径添加语言前缀
	return `/${currentLang}${path}`;
}

/**
 * 切换语言并跳转
 * @param targetLang 目标语言
 */
export function switchLanguage(targetLang: "zh" | "en"): string {
	const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
	// 移除当前语言前缀
	const pathWithoutLang = currentPath.replace(/^\/(zh|en)\//, "/");
	// 如果移除后是空，说明是根路径
	if (pathWithoutLang === "/" || pathWithoutLang === "") {
		return `/${targetLang}/`;
	}
	return `/${targetLang}${pathWithoutLang}`;
}
