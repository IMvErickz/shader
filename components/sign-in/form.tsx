'use client'

import { useForm, Controller } from "react-hook-form";
import { Button } from "../button";
import { Input } from "../input";
import { InputPassword } from "../inputPassword";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import ReactLoading from 'react-loading';

const authSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

type AuthType = z.infer<typeof authSchema>

export function SignInForm() {
    const { control, handleSubmit, formState: { isSubmitting, isValid } } = useForm<AuthType>({
        resolver: zodResolver(authSchema)
    })

    async function handleAuth(data: AuthType) {
        const { email, password } = data

        await api.post('/auth', {
            email,
            password
        })
    }

    return (
        <form onSubmit={handleSubmit(handleAuth)} className="w-[445px] flex flex-col">
            <div className="w-full flex flex-col gap-y-4 mt-12">
                <Controller
                    control={control}
                    name="email"
                    render={({ field }) => {
                        return (
                            <Input type="text" placeholder="Email" {...field} />
                        )
                    }}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => {
                        return (
                            <InputPassword placeholder="Senha" {...field} />
                        )
                    }}
                />

            </div>
            <div className="w-full mt-7">
                <Button type="submit" disabled={isSubmitting || !isValid}>
                    {isSubmitting ? (<ReactLoading type="spin" color="#ffff" height={'5%'} width={'5%'} />) : 'Entrar'}
                </Button>
            </div>
        </form>
    )
}