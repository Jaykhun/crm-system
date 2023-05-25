import { create } from 'zustand'

interface adminMenuState {
    sidebarMenuState: boolean
    toggle: () => void
}

export const useAdminMenu = create<adminMenuState>()((set) => ({
    sidebarMenuState: false,
    toggle: () => set((state) => ({ sidebarMenuState: !state.sidebarMenuState }))
}))