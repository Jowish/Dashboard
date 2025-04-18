export default function LoginForm() {
    return (
        <form className="flex flex-col space-y-10">
            <input
                className="bg-white text-black p-4 rounded-lg w-56"
                type="text"
                name="username"
                placeholder="User"
            />
            <input
                className="bg-white text-black p-4 rounded-lg w-56"
                type="text"
                name="email"
                placeholder="Email"
            />
            <input
                className="bg-white text-black p-4 rounded-lg w-56"
                type="password"
                name="password"
                placeholder="Password"
            />
            <button className="bg-blue-700 text-white py-3 px-6 rounded-lg w-fit">
                Login
            </button>
        </form>
    );
}
