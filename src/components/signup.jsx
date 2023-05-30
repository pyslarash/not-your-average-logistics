function Signup() {
    return (
        <div class="flex flex-col items-center min-h-screen bg-gray-100">
            <div class="bg-white mt-10 p-4 rounded shadow-md max-w-md w-full">
                <h2 class="text-2xl mb-4">Sign Up</h2>
                <form>
                    <div class="mb-4">
                        <label for="email" class="block mb-2">Email</label>
                        <input type="email" id="email" name="email" class="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-2">Password</label>
                        <input type="password" id="password" name="password" class="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div class="mb-4">
                        <label for="confirmPassword" class="block mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" class="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <button
                        className="p-5 items-center rounded-lg button-style"
                    >
                        <strong className="font-semibold">Signup</strong>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;