import { SignInForm } from "@/components/sign-in/form";

export default function SignIn() {
    return (
        <main className="size-s flex items-center justify-center bg-zinc-800 mt-16">
            <section className="w-[34.438rem] h-[31.5rem] border-2 border-zinc-500 border-solid rounded-lg shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-orange-600 text-4xl font-semibold">Acesse sua conta</h3>
                <SignInForm />
                <div className="flex flex-col items-center justify-center mt-6 gap-y-2">
                    <span className="text-white text-sm underline">Esqueci minha senha</span>
                    <span className="text-white text-sm underline">Não tem conta? cadastre-se aqui</span>
                </div>
            </section>
        </main>
    )
}