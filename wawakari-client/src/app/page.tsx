"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <main className="">
      <h1>Enter your Japanese sentence</h1>
      <form
        action={(formData: FormData) => {
          router.push(`/${formData.get("text")}`);
        }}
      >
        <input type="text" name="text" className="text-black" />
        <button>Submit</button>
      </form>
    </main>
  );
}
