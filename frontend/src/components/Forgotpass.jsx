import { Link } from "react-router-dom"

const Forgotpass = () => {
    return (
        <div>
            <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
                <div className="mt-[40%] bg-white  rounded-xl shadow-lg">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
                            <p className="mt-2 text-2xl font-semibold text-[#5c218b]">
                                Did you forget Password?
                            </p>
                            <p className="block text-sm font-thin ml-1 mb-2 text-gray-500">Enter your email address and we’ll send you a link to restore password</p>
                        </div>

                        <div className="mt-5">
                            <form>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label className="block text-sm font-thin ml-1 mb-2 text-gray-500">Email address</label>
                                        <div className="relative">
                                            <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                    </div>
                                    <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#5c218b] text-white hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                                    <Link to={"/"} className="text-center text-sm font-thin ml-1 mb-2 text-gray-500 underline">Back to Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Forgotpass