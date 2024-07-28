import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function* generateRoutes(globModules, path = "") {
  for (const key in globModules) {
    const value = globModules[key];

    if (key === "default" && typeof value === "function")
      yield {
        path: path.replace(/\/index$/i, "/"),
        component: value,
      };
    else if (value != null && typeof value === "object")
      yield* generateRoutes(value, `${path}/${key}`);
  }
}
