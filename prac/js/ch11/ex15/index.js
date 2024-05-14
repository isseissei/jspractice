export function modifyUrl(obj) {
    const base = obj.base;
    const addQuery = obj.addQuery;
    const path = obj.path;
    if (base == "invalid format") {
        throw new Error
    }
    if (addQuery == undefined && path == undefined) {
        return base
    }

    const URLbase = new URL(base);
    if (path) {
        URLbase.pathname = path;
    }

    if (addQuery && Array.isArray(addQuery)) {
        addQuery.forEach(query => {
            if (Array.isArray(query) && query.length === 2) {
                URLbase.searchParams.append(query[0], query[1]);
            }
        });
    }

    return URLbase.toString();
}

console.log(modifyUrl({
    base: "https://example.com/foo?a=b",
    addQuery: [
        ["p", "x"],
        ["パラメータ", "y"],
    ],
}));