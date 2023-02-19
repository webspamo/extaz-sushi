import {defineStore} from "pinia";

const iconsPath = "/src/assets/icons/"; // @/assets

export const useSiteStore = defineStore("site", {
    state: () => ({
        startHours: "12:00",
        endHours: "21:00",
        phone: "0930551355",

        socialLinks: [
            {
                socialMedia: "Facebook",
                href: "#",
                iconType: "round",
                iconSrc: iconsPath + "round-facebook-icon.svg",
                iconAlt: "social media icon - facebook logo",
            },
            {
                socialMedia: "Instagram",
                href: "#",
                iconType: "round",
                iconSrc: iconsPath + "round-instagram-icon.svg",
                iconAlt: "social media icon - instagram logo",
            },
        ],
    }),
    getters: {
        getSocialLinksByIconsType: (state) => {
            return (iconsType) =>
                state.socialLinks.filter((link) => link.iconType === iconsType);
        },
        // getMenuItemById: (state) => {
        //     return (itemId) =>
        //         state.menuItems.find((item) => item.id === itemId);
        // },
    },
});
