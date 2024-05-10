import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BanType } from "../types/BanType";
import { AdminType } from "../types/AdminType";

interface GlobalContextProps {
    admin: BanType[];
    admins: BanType[];
    getNumberOfAdminBans: () => number;
    isLoading: boolean;
}

interface GlobalUpdateContextProps {
    getSpecificAdmin: (adminName: string) => Promise<void>;
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)
export const GlobalUpdateContext = createContext<GlobalUpdateContextProps>({} as GlobalUpdateContextProps);

export function GlobalProvider({ children }: { children: ReactNode }): JSX.Element {
    const [admin, setAdmin] = useState<BanType[]>([]);
    const [admins, setAdmins] = useState<BanType[]>([]);
    const [adminNickname, setAdminNickname] = useState<string>('Axel');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getAllAdmins = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/admins");
            setAdmins(res.data);
            setIsLoading(false);
            console.log(res.data);
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
            console.log(res.data);
        } catch (error) {
            // toast.error("Proba pobrania adminow nie powiodla sie.");
            console.log(error);
        }
    }
    const getNumberOfAdminBans = () => {
        return admin.length;
    }

    useEffect(() => {
        getAllAdmins();
    }, []);

    return (
        <GlobalContext.Provider value={{
            admin,
            admins,
            getNumberOfAdminBans,
            isLoading
        }}>
            <GlobalUpdateContext.Provider value={{ getSpecificAdmin }}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};


export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
