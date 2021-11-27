(function () {
    const typesClass = ["string", "number"];

    const joinList = (name, arr) => {
        if (!name) return;

        const type = typeof name;
        if (typesClass.includes(type)) {
            arr.add(`${name}`.trim());
            return;
        }

        if (Array.isArray(name)) {
            name.forEach((item) => joinList(item, arr));
            return;
        }

        if (type === "object") {
            Object.keys(name).forEach((k) => name[k] && arr.add(`${k}`.trim()));
        }
    };

    function joinClassz() {
        let list = new Set(); // remove duplicate
        Array.from(arguments).forEach((name) => joinList(name, list));
        return Array.from(list).filter((item) => item).join(" ");
    }

    if (module?.exports) {
        joinClassz.default = joinClassz;
        module.exports = joinClassz;
    // eslint-disable-next-line no-undef
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        // eslint-disable-next-line no-undef
        define("joinClass", [], () => joinClassz);
    } else {
        window.joinClass = joinClassz;
    }
})();
