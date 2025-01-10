import dataNavigation from "./dataNavigation";

export function findMenuItemByUrl(url: string) {
  const topLevelItem = dataNavigation.find(item => item.url === url);

  if (topLevelItem) {
    return topLevelItem;
  }

  for (const item of dataNavigation) {
    const childItem = item.children?.find(child => child.url === url);
    if (childItem) {
      return { ...childItem, parent: item };
    }
  }

  return null;
};
