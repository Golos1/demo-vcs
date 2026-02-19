import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h3 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <a
              href="/about"
              className="font-medium text-zinc-950 dark:text-zinc-50"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Looking for a starting point or more information? Click here!
            </a>
          </h3>
        
        </div>
      </main>
    </div>
  );
}
