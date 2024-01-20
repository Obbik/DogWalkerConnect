import { useUserStore } from "@/store/user";
import React, { useEffect } from "react";

type Props = {};

export const Login = (props: Props) => {
	const { fetchUser } = useUserStore((state) => state);
	useEffect(() => {
		fetchUser("test123");
	}, []);

	return <div>Login</div>;
};
