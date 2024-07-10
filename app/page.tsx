import ChatBox from "./ChatBox";

export default function Home() {
  return (
    <main className="h-[1100px] items-center justify-center p-24 bg-black">
      <div className="z-10 flex flex-col w-full h-full items-center justify-center font-mono text-sm">
        <h1 className="text-[#4D4DFF] text-3xl  pb-[30px]">Welcome to your very own Movie Recommendation AI website.</h1>
        <h2 className="text-[#4D4DFF] text-2xl p-10 pt-[65px]">Enter your prompt in the input field Below.</h2>
        <ChatBox/>
      </div>
    </main>
  );
}
