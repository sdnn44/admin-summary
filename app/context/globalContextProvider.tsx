import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BanType } from "../types/BanType";
import { AdminType } from "../types/AdminType";

interface GlobalContextProps {
    admin: BanType[];
    admins: BanType[];
    searchedAdmin?: AdminType;
    setSearchedAdmin: (value: AdminType) => void;
    setAdminNickname: (value: string) => void;
    getNumberOfAdminBans: () => number;
    getNumberOfGivenDemos: () => number;
    getNumberOfGivenScreenshots: () => number;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

interface GlobalUpdateContextProps {
    getSpecificAdmin: (adminName: string) => Promise<void>;
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)
export const GlobalUpdateContext = createContext<GlobalUpdateContextProps>({} as GlobalUpdateContextProps);

export function GlobalProvider({ children }: { children: ReactNode }): JSX.Element {
    const [admin, setAdmin] = useState<BanType[]>([]);
    const [admins, setAdmins] = useState<BanType[]>([]);
    const [searchedAdmin, setSearchedAdmin] = useState<AdminType>();
    const [adminNickname, setAdminNickname] = useState<string>('Axel');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getAllAdmins = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/admins");
            setAdmins(res.data);
            setIsLoading(false);
            // console.log(res.data);
        } catch (error) {
            // toast.error("Proba pobrania adminow nie powiodla sie.");
            console.log(error);
        }
    };
    const getSpecificAdmin = async (nickname: string) => {
        setIsLoading(true);
        try {
            const res = await axios.get(`/api/admins/${nickname}`);
            setAdmin(res.data);
            setIsLoading(false);
        } catch (error) {
            // toast.error("Proba pobrania adminow nie powiodla sie.");
            console.log(error);
        }
    }
    const getNumberOfAdminBans = () => {
        return admin.length;
    }

    const getNumberOfGivenDemos = () => {
        let numberOfGivenDemos = admin.filter((ban: BanType) => {
            const reasonLower = ban.Reason ? ban.Reason.toLowerCase() : "";
            return reasonLower.includes("demko") || reasonLower.includes("demo") || reasonLower.includes("pov");
        }).length;
        return numberOfGivenDemos;
    }

    const getNumberOfGivenScreenshots = () => {
        let numberOfGivenScreenshots = admin.filter((ban: BanType) => {
            const reasonLower = ban.Reason ? ban.Reason.toLowerCase() : "";
            return reasonLower.includes("wstaw_screeny") || reasonLower.includes("screenshooty");
        }).length;
        return numberOfGivenScreenshots;
    }

    useEffect(() => {
        getAllAdmins();
    }, []);

    return (
        <GlobalContext.Provider value={{
            admin,
            admins,
            searchedAdmin,
            setSearchedAdmin,
            setAdminNickname,
            getNumberOfAdminBans,
            getNumberOfGivenDemos,
            getNumberOfGivenScreenshots,
            isLoading,
            setIsLoading
        }}>
            <GlobalUpdateContext.Provider value={{ getSpecificAdmin }}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};


export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
