import Image from "next/image";

export default function FlowerButton() {
  return (
    <div className="relative inline-block">
      <button className="px-6 py-2 rounded-2xl border-4 border-[#ff7aa762] text-lg text-white bg-[#ff7aa762] hover:bg-[#b85677] hover:text-black hover:border-[#d8648b] transition">
        Let's go!
      </button>
      <Image
        src="/flower-removebg.png"
        alt="flower on button"
        className="absolute -top-3 -right-3 w-12 h-11"
      />
    </div>
  );
}
