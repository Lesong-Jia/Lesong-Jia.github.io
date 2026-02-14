import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	const { url } = context;
	const pathname = url.pathname;

	// 如果路径已经包含语言前缀（/zh/ 或 /en/），直接继续
	if (pathname.startsWith("/zh/") || pathname.startsWith("/en/")) {
		return next();
	}

	// 如果是根路径 /，根据浏览器语言重定向
	if (pathname === "/" || pathname === "") {
		const acceptLanguage = context.request.headers.get("accept-language") || "";
		// 检测浏览器语言偏好，优先检测中文
		const prefersChinese = acceptLanguage.toLowerCase().includes("zh");
		const prefersEnglish = acceptLanguage.toLowerCase().includes("en");
		// 如果明确偏好英文，使用英文；否则默认中文
		const lang = prefersEnglish && !prefersChinese ? "en" : "zh";
		return context.redirect(`/${lang}/`);
	}

	// 其他路径（如 /news, /publications）也重定向到默认语言
	const acceptLanguage = context.request.headers.get("accept-language") || "";
	const prefersChinese = acceptLanguage.toLowerCase().includes("zh");
	const prefersEnglish = acceptLanguage.toLowerCase().includes("en");
	const lang = prefersEnglish && !prefersChinese ? "en" : "zh";
	
	// 保留查询参数和 hash
	const search = url.search;
	const hash = url.hash;
	return context.redirect(`/${lang}${pathname}${search}${hash}`);
});
