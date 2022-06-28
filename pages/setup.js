import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Setup() {
  const [name, setName] = useState("");

  const router = useRouter();

  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (!session || !session.user) return null;
  if (loading) return null;

  if (!loading && session.user.name) {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/setup", {
      body: JSON.stringify({
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    session.user.name = name;
    router.push("/dashboard");
  };

  return (
    <form className="mt-10 text-center" onSubmit={handleSubmit}>
      <h1 className="flex justify-center mt-20 text-xl">Welcome!</h1>

      <div className="flex-1 mb-5 mt-20">
        <div className="flex-1 mb-5">Please enter your name</div>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="border p-1 text-black"
          required
        />
      </div>

      <button className="border px-8 py-2 mt-0 font-bold hover:bg-white hover:text-black">
        Save
      </button>
    </form>
  );
}
