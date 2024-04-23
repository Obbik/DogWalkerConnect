const api = (url: string) => `${process.env.BACKEND_URL}/${url}`;

export const fetchData = async <T>(url: string, method: "GET" | "POST" = "GET"): Promise<T> => {
	try {
		const response = await fetch(api(url), {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data: Promise<T> = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error fetching data:", error?.message);
		}

		throw error;
	}
};
