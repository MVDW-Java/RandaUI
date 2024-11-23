export const flattenSitemap = (sitemap) => {
    let routes = [];

    const processItem = (item) => {
        if (item.path && item.conf) {
            routes.push({
                path: item.path,
                name: item.name,
                conf: item.conf,
            });
        }

        if (item.submenu) {
            item.submenu.forEach(processItem);
        }
    };

    sitemap.forEach(processItem);
    return routes;
};
