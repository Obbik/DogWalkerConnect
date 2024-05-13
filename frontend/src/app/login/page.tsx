import Image from "next/image";
import React from "react";
import logo from "../../components/images/login.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
enum GenderEnum {
	female = "female",
	male = "male",
	other = "other",
}

interface IFormInput {
	firstName: string;
	gender: GenderEnum;
}
const LoginPage = () => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
	return (
		<div className="flex justify-items-center bg-white text-black ">
			<div>
				<Image className="w-full h-screen" src={logo} alt={"logo"} />
			</div>
			<form className="m-auto p-2">
				<h1 className="mb-6">Log In</h1>
				<label className="mb-6">login </label>
				<Input {...register("login")} />
				<label className="mb-6">Password </label>
				<Input className="mb-6" placeholder="Enter your password" />

				<Button variant="outline" type="submit">
					Log In
				</Button>
			</form>
		</div>
	);
};

export default LoginPage;
