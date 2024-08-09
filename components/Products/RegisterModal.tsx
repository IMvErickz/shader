import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../button';
import { Image, Plus, X } from 'lucide-react';
import { Input } from '../input';

export function RegisterModal() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button className="flex items-center justify-center text-sm gap-x-2">
                    <Plus />
                    Cadastrar produto
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[750px] translate-x-[-50%] 
                translate-y-[-50%] rounded-[6px] bg-zinc-700 border-2 border-zinc-500 
                border-solid p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                focus:outline-none">
                    <Dialog.Title className="text-white m-0 text-2xl font-medium">
                        Cadastrar Produto
                    </Dialog.Title>
                    <section>
                    <form action="" className='mt-8 flex'>
                        <div className='w-full flex flex-col'>
                            <fieldset className="mb-[15px] flex flex-col items-center gap-5">
                                <label className="text-white text-xl" htmlFor="name">
                                    Nome
                                </label>
                                <Input id='name' />
                            </fieldset>
                            <fieldset className="mb-[15px] flex flex-col items-center justify-center gap-5">
                                <label className="text-white text-xl" htmlFor="username">
                                    Preço
                                </label>
                                <Input id='username' />
                            </fieldset>
                            <fieldset className="mb-[15px] flex flex-col items-center gap-5">
                                <label className="text-white text-xl" htmlFor="quantity">
                                    Quantidade
                                </label>
                                <Input id='quantity' />
                            </fieldset>
                        </div>
                        <div className="mt-[25px] w-full flex flex-col items-center justify-center">
                            <fieldset className="mb-[15px] flex flex-col items-center justify-center gap-5">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbGKrcB6pF1xOCTCEjoBSxVp9pUIDM8UBuQ&s" alt="" />
                                <Button className='flex gap-x-3 w-72'>
                                    <Image />
                                    Adicionar foto
                                </Button>
                            </fieldset>
                            <Dialog.Close asChild>
                                <Button className='w-28'>
                                    Cadastrar
                                </Button>
                            </Dialog.Close>
                        </div>
                    </form>
                    </section>
                    <Dialog.Close asChild>
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <X className='text-white' />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}