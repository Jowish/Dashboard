export default function LoginForm() {
    return (
        <form className="flex flex-col space-y-4">
            <input
                className="bg-white text-black p-2 rounded-lg w-56"
                type="text"
                name="username"
                placeholder="Username"
            />
            <input
                className="bg-white text-black p-2 rounded-lg w-56"
                type="password"
                name="password"
                placeholder="Password"
            />
            <button className="bg-blue-700 text-white py-2 px-4 rounded-lg w-fit">
                Login
            </button>
        </form>
    );
}
