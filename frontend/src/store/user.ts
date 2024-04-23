import { create } from "zustand";
import { fetchData } from "./constant";

export const useUserStore = create((set) => ({
	user: null,

	fetchUser: async (url: string) => {
		const user: string = await fetchData(url, "POST");
		set({ user });
	},
	increasePopulation: () => set((state: { bears: number }) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));
