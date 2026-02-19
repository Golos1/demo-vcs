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
                top: '10%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Looking for more information about Canncorp? Click here!
            </a>
          </h3>

          <h5 className="text-lg text-gray-600 dark:text-zinc-400">
            The automation experts of the future!
          </h5>
          <h5 className="text-lg text-gray-600 dark:text-zinc-400">
            100% success rate!
          </h5>
          <h5 className="text-lg text-gray-600 dark:text-zinc-400">
            We are the best, with 0 history of hacks!
          </h5>        
        </div>
      </main>
    </div>
  );
}
