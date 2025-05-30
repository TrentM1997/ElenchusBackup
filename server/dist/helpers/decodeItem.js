import he from 'he';
import sanitizeHtml from 'sanitize-html';
export default function decodeItem(item) {
    if (item === null || item === undefined) {
        return item;
    }
    if (Array.isArray(item)) {
        const decodedItem = item.map((element) => {
            return decodeItem(element);
        });
        return decodedItem;
    }
    else if (typeof item === "object") {
        return Object.entries(item).reduce((acc, [key, value]) => {
            acc[key] = decodeItem(value);
            return acc;
        }, {});
    }
    else if (typeof item === "string") {
        const decodedItem = he.decode(item);
        const dirty = decodedItem;
        const clean = sanitizeHtml(dirty, {
            allowedTags: [],
            allowedAttributes: {},
        });
        const final = he.decode(clean);
        return final;
    }
    return item;
}
//# sourceMappingURL=decodeItem.js.map