import { futimesSync } from 'fs'
import { NextResponse } from 'next/server'

function sendUserToBckend() {

}

export async function POST(req: Request) {
    try {
        const body = await req.formData()
        const data = {
            email: body.get("email"),
            name: body.get("name"),
            role: "USER"
        }

        console.log("Body: ", data)

        const cars = await fetch("http://localhost:8080/concessionaria/cars")
            .then(res => res.json())
        // const res = await fetch("http://localhost:8080/concessionaria/sign-up", {
        //     body: data as any,
        //     headers: {

        //     }
        // })

        console.log("Response: ", cars)
        // const json = data.json();
    } catch (error) {

    }
}