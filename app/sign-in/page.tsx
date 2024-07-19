import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function SignIn() {
    return (
        <main className="size-s flex items-center justify-center bg-zinc-800 mt-16">
            <section className="w-[34.438rem] h-[31.5rem] border-2 border-zinc-500 border-solid rounded-lg shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-orange-600 text-2xl font-semibold">Acesse sua conta</h3>
                <form className="w-[445px] flex flex-col">
                    <div className="w-full flex flex-col gap-y-4 mt-12">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Senha" />
                    </div>
                    <div className="w-full mt-7">
                        <Button>
                            Entrar
                        </Button>
                    </div>
                </form>
            </section>
        </main>
    )
}