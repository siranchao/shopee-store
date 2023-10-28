'use client'
import useLoginModal from "@/hooks/use-login"
import Modal from "./ui/Modal"
import { useState } from "react"

export default function LoginModal() {
    const modal = useLoginModal()

    const [isLogin, setIsLogin] = useState(true)
    const changeContent = () => {
        setIsLogin(!isLogin)
    }

    return (
        <>
            <Modal
                isOpen={modal.isOpen}
                onClose={modal.onClose}
            >
                <div className="m-auto w-full sm:w-3/4 md:w-2/3 lg:w-[1/2]">
                    {isLogin ? <LoginForm changeContent={changeContent} /> : <SignUpForm changeContent={changeContent}/>}
                </div>
            </Modal>
        </>
    )
}


function LoginForm({ changeContent }: { changeContent: () => void }) {
    return (
        <div className="py-4 px-4 lg:px-8 text-left">
            <h3 className="mb-5 text-xl font-medium text-gray-900">
                Sign in to Shopee
            </h3>
            <form className="space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"     
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                                    
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input 
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-blue-700 hover:underline">Forgot password?</a>
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Sign in
                </button>

            </form>
            <p className="text-sm font-semibold text-gray-500 mt-5">Not a member? <a href="#" onClick={changeContent} className="text-blue-700 hover:underline ml-1">Create account</a></p>
        </div>
    )
}

function SignUpForm({ changeContent }: { changeContent: () => void }) {
    return (
        <div className="py-4 px-4 lg:px-8 text-left">
            <h3 className="mb-5 text-xl font-medium text-gray-900">
                Create new account
            </h3>
       
            <form className="space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"     
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                          
                        placeholder="must have at least 8 characters"                          
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900">Re-enter Password</label>
                    <input 
                        type="password"
                        name="password2"
                        id="password2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                            
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Register
                </button>
            </form>  
            
            <div className="mt-5">
                <a href="#" onClick={changeContent} className="text-sm font-semibold text-blue-700 hover:underline ml-1">Back To Login</a>   
            </div>
        </div>
    )
}
