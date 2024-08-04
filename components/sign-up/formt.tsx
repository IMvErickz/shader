'use client'

import { Button } from "../button"
import { Input } from "../input"
import { InputPassword } from "../inputPassword"

export function SingUpForm() {
    return (
        <form action="" className="w-[445px] flex flex-col gap-y-4">
            <Input placeholder="Nome" />
            <Input placeholder="Email" type="email" />
            <InputPassword placeholder="Senha" />
            <InputPassword placeholder="Confirme sua senha" />
            <Button type="submit">
                Cadastrar
            </Button>
        </form>
    )
}