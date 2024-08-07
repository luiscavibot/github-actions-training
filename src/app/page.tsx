'use client';

import Image from 'next/image';
// import { getHost } from '../utils/getHost';
import { useEffect } from 'react';

export default function Home() {
	// useEffect(() => {
	// 	if (window.location.pathname === '/no_null.html') {
	// 		// Utiliza la API history para manipular la URL sin redireccionar
	// 		const newUrl =
	// 			window.location.origin +
	// 			window.location.pathname.replace('/no_null.html', '');
	// 		window.history.replaceState({}, document.title, newUrl);
	// 	}
	// }, []);
	// const host = getHost();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<p className="font-bold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					PRUEBA DE CONCEPTO
				</p>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By LCV
					</a>
				</div>
			</div>

			<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
				<Image
					src="https://content.easy.cl/cms/cl/EasyWeb/view_version/66674bea99b69a3cc84dac13/4710d508-9fc1-4c01-82f0-9b74377b68b7.webp"
					alt="Easy Logo"
					width={1850}
					height={542}
				/>
			</div>

			<div className="mb-32 grid text-center">
				<h1 className="text-3xl">
					STORE FRONT Continuous Deployment -TEST 6{' '}
				</h1>
				{/* <h1 className="text-5xl  mb-4">Host: {host}</h1> */}
			</div>
		</main>
	);
}
