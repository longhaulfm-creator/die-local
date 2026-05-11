import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start" id="main-content">
        <h1 className="font-tagline font-black uppercase text-4xl text-center text-brand-red mb-10">Welcome to The Local Bar and Grill</h1>
	<p className="font-sans uppercase font-thin text-lg">The Local is more than just a restaurant or bar - it's a community hub that captures the warmth of coastal living. With great food, a lively social atmosphere, and a warm welcome for all, we stand out as a must-visit stop on the South Coast of KZN.</p>
      </main>
    </div>
  );
}