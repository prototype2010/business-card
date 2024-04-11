/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck

import {ImageResponse} from "next/og";

export const runtime = 'edge'


export async function  GET( request: Request) {
    try {

        const { searchParams } = new URL(request.url)

        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'My website';

        const imageData = await fetch(
            new URL('../../../../public/az.jpg', import.meta.url)
        ).then((res) => res.arrayBuffer())

        return new ImageResponse(
            (
                <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
                    <div tw="bg-gray-50 flex w-full">
                        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center p-8">
                            <img width={150} height={150} src={imageData as string}/>
                            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 ml-20">
                                <span>Alexander Zakorko</span>
                                <span tw="text-indigo-600">Senior Frontend Developer👋</span>
                            </h2>
                        </div>
                    </div>
                </div>
            )
        )
    } catch (e: any) {
        return new Response('Faild to genereate OG image', {status: 500});
    }
}

