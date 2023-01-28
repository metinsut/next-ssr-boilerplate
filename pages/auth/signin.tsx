import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import Link from "next/link";
import TextInput from "../../components/inputs/textInput";
import { signIn } from "next-auth/react";
import { authSchema, TRegister } from "../../schema/auth";

export default function Login() {
  const router = useRouter();
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any[]>([]);

  const { register, handleSubmit, control } = useForm<TRegister>({
    resolver: zodResolver(authSchema),
  });

  const handleLogin: SubmitHandler<TRegister> = async (formValues) => {
    const status = await signIn("credentials", {
      email: formValues.email,
      password: formValues.password,
      callbackUrl: (router.query?.callbackUrl as string) || "/",
      redirect: false,
    });

    if (status?.ok) {
      router.push(status?.url as string);
    }
  };

  const handleSendMagicLink = async () => {};

  return (
    <div className="grid w-screen h-screen items-center justify-center content-center gap-8 bg-slate-200">
      <form onSubmit={handleSubmit(handleLogin)} className="grid min-w-[300px]">
        <h3 className="text-4xl">Sign In</h3>
        {error?.map(({ message }: any) => (
          <div key={message} className="bg-red-600 text-white text-[13px] p-2">
            <p>{message}</p>
          </div>
        ))}
        {error[0]?.code === "email_not_verified" && (
          <button onClick={handleSendMagicLink} className="bg-purple-400">
            Send email again
          </button>
        )}
        {success && (
          <div className="bg-green-600 text-white text-[13px] p-2">
            {success}
          </div>
        )}
        <TextInput
          className="mt-8"
          register={register}
          control={control}
          name="email"
          label="Email"
        ></TextInput>
        <TextInput
          register={register}
          control={control}
          name="password"
          label="Password"
        ></TextInput>
        <button
          disabled={loading}
          type="submit"
          className="bg-gray-400 rounded-lg text-white p-2 mt-4"
        >
          Sign In
        </button>
      </form>
      <Link className="text-indigo-600" href="/register">
        Have not you any account ?
      </Link>
    </div>
  );
}
