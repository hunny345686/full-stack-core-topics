import { create } from "zustand"


export const useAuthStaor = create((set) => ({
    user: null,
    isAuthenticated: false,
    login: (usedata) =>
        set({
            user: usedata,
            isAuthenticated: true
        })
    ,

    logOut: () =>
        set({
            user: null,
            isAuthenticated: false,
        }),

}))