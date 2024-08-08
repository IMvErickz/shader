import { Logo } from "@/public/icons/Logo";
import { NavLink } from "./nav-link";
import { usePathname } from "next/navigation";
import { RegisterModal } from "./Products/RegisterModal";

export function Header() {
    const path = usePathname()

    return (
        <header className="w-full h-20 border-b-2 flex items-center justify-between border-b-zinc-500 border-b-solid px-4 gap-x-4">
            <Logo />
            <nav className="w-full h-full items-center flex gap-x-8">
                <NavLink href="/">
                    Dashboard
                </NavLink>

                <NavLink href="/products">
                    Products
                </NavLink>
            </nav>
            <div className="w-56">
                {path === '/products' && (
                    <RegisterModal />
                )}
            </div>
        </header>
    )
}