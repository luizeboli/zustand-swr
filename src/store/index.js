import create from "zustand";

const useSidebar = create((set) => ({
  opened: true,
  toggleSidebar: () => set((state) => ({ opened: !state.opened })),
}));

export default useSidebar;
