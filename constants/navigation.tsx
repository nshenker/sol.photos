type NavigationType = {
    title: string;
    url: string;
};

const NavigationList: NavigationType[] = [
    {
        title: "Gameplay",
        url: "/gameplay",
    },
    {
        title: "Roadmap",
        url: "/roadmap",
    },
    {
        title: "Marketplace",
        url: "/marketplace",
    },
    {
        title: "Download & Play",
        url: "/download-and-play",
    },
];

const LegalList: NavigationType[] = [
    {
        title: "Privacy policy",
        url: "/privacy",
    },
    {
        title: "Terms of services",
        url: "/faq",
    },
];

const settings = [
    {
        title: "My NFT",
        icon: "image",
        url: "/wishlist-detailed",
    },
    {
        title: "Wishlist",
        icon: "heart",
        url: "/wishlist",
        divider: true,
    },
    {
        title: "Edit profile",
        icon: "edit",
        url: "/user-setting",
    },
    {
        title: "Settings",
        icon: "settings",
        url: "/settings",
        divider: true,
    },
];

export { NavigationList, LegalList, settings };
