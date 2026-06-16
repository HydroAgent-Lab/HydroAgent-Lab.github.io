export function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function localizeHref(lang, path) {
  const normalized = normalizePath(path);
  if (lang === "zh") return normalized === "/" ? "/zh" : `/zh${normalized}`;
  return normalized;
}

export function stripLangPrefix(path) {
  const normalized = normalizePath(path);
  if (normalized === "/zh") return "/";
  if (normalized.startsWith("/zh/")) return normalized.slice(3);
  return normalized;
}

export function getLanguageSwitchHref(pathname, lang) {
  const basePath = stripLangPrefix(pathname || "/");
  return lang === "zh" ? localizeHref("en", basePath) : localizeHref("zh", basePath);
}
