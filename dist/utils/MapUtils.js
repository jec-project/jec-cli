"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapUtils {
    static objectToMap(obj) {
        let map = new Map();
        Object.keys(obj).forEach(key => {
            map.set(key, obj[key]);
        });
        return map;
    }
}
exports.MapUtils = MapUtils;
