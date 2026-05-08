import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request) {
     const session = await auth.api.getSession({
        headers: await headers()
    })
    if(session){
        return NextResponse.next()
    }
    else{
        const callbackUrl = encodeURIComponent(request.nextUrl.pathname)
        return NextResponse.redirect(new URL(`/signin?callbackUrl=${callbackUrl}`, request.url))
    }
}
  

export const config = {
  matcher: ['/books/:id','/profile'],
}