import I18n from "i18n-js";

I18n.defaultLocale = "ru";
I18n.locale = "ru";
I18n.fallbacks = true;
I18n.translations = {
    ru: require("resources/translations/ru")
};

I18n.pluralization["ru"] = function(count: number) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return ["one"];
    } else if (
        [2, 3, 4].includes(count % 10) &&
        ![12, 13, 14].includes(count % 100)
    ) {
        return ["few"];
    } else if (
        count % 10 === 0 ||
        [5, 6, 7, 8, 9].includes(count % 10) ||
        [11, 12, 13, 14].includes(count % 100)
    ) {
        return ["many"];
    } else {
        return ["other"];
    }
};

export const i18n = (key, params) => I18n.t(key, params);

