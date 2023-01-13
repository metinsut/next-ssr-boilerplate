import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthRequest } from "../../types/auth";
import zod, { z } from "zod";
import Link from "next/link";
import TextInput from "../../components/inputs/textInput";

export const schema = zod.object({
  password: zod.string().min(6),
  email: zod.string().email(),
});

export type TRegister = z.infer<typeof schema>;

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState<any>(null);

  const { control, register, handleSubmit } = useForm<AuthRequest>({
    resolver: zodResolver(schema),
  });

  const handleSignUp: SubmitHandler<AuthRequest> = async (formValues) => {};

  return (
    <div className="grid w-screen h-screen items-center justify-center content-center bg-slate-200 gap-8">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="grid min-w-[300px]"
      >
        <h3 className="text-4xl">Sign Up</h3>
        {error?.map(({ message }: any) => (
          <div key={message} className="bg-red-600 text-white text-[13px] p-2">
            <p>{message}</p>
          </div>
        ))}
        {success && (
          <div className="bg-green-600 text-white text-[13px] p-2">
            {success}
          </div>
        )}
        <TextInput
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
          Sign Up
        </button>
      </form>
      <Link className="text-indigo-600" href="/login">
        Already have an account?
      </Link>
    </div>
  );
}
