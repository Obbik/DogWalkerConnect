import Image from "next/image";
import React from "react";
import logo from "../../components/images/login.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {};

const LoginPage = (props: Props) => {
	return (
		<div className="flex justify-items-center bg-white text-black ">
			<div>
				<Image className="w-full h-screen" src={logo} alt={"logo"} />
			</div>
			<div className="m-auto p-2">
				<h1 className="mb-6">Log In</h1>
				<label className="mb-6">login </label>
				<Input />
				<label className="mb-6">Password </label>
				<Input className="mb-6" placeholder="Enter your password" />

				<Button variant="outline" type="submit">
					Log In
				</Button>
			</div>
		</div>
	);
};

export default LoginPage;
