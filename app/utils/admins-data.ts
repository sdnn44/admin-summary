export interface AdminProps {
    id: number;
    img: string,
    nickname: string;
    steamURL: string;
    status: string;
}

const adminData: AdminProps[] = [
    {
        id: 0,
        img: "https://avatars.akamai.steamstatic.com/47ae0f623791bf25b3154b26d1443f9ad3604f32_full.jpg",
        nickname: "Axel",
        steamURL: "https://steamcommunity.com/profiles/76561197967118341",
        status: "UBT Member",
    },
    {
        id: 1,
        img: "https://avatars.akamai.steamstatic.com/47ae0f623791bf25b3154b26d1443f9ad3604f32_full.jpg",
        nickname: "BOA DUPCZYCIEL KOBIETA=MAX60KG",
        steamURL: "https://steamcommunity.com/profiles/76561197967118341",
        status: "Admin",
    },
    {
        id: 2,
        img: "https://avatars.akamai.steamstatic.com/47ae0f623791bf25b3154b26d1443f9ad3604f32_full.jpg",
        nickname: "BÅ‚aszczyk",
        steamURL: "https://steamcommunity.com/profiles/76561197967118341",
        status: "Admin",
    },
    {
        id: 3,
        img: "https://avatars.akamai.steamstatic.com/47ae0f623791bf25b3154b26d1443f9ad3604f32_full.jpg",
        nickname: "FunnyPuma ^^",
        steamURL: "https://steamcommunity.com/profiles/76561197967118341",
        status: "Admin",
    },
];

export default adminData;
