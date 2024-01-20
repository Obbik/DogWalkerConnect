import { create } from "zustand";

export const useUserStore = create((set) => ({
	user: null,

	fetchUser: async (url: string) => {
		const user: string = await fetchData(url, "POST");
		// const response = await fetch(url);
		console.log(api("/"));
		set({ user });
	},
	increasePopulation: () => set((state: { bears: number }) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));
