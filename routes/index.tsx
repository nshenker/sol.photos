const getTitleFromRoute = (value: string) => {
    switch (value) {
        case "/":
            return "sol.photos";
        default:
            return "sol.photos";
    }
};

const getDescriptionFromRoute = (value: string) => {
    switch (value) {
        case "/":
            return "";
        default:
            return "";
    }
};

const getMetaImageFromRoute = (value: string) => {
    switch (value) {
        case "/":
            return "";
        default:
            return "";
    }
};

export { getTitleFromRoute, getDescriptionFromRoute, getMetaImageFromRoute };
