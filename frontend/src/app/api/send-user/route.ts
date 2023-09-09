import { futimesSync } from 'fs'
import { NextResponse } from 'next/server'

function sendUserToBckend() {

}

export async function POST(req: Request) {
    try {
        console.log("POST request body: ", req)
        const { body } = req
        const data = await fetch("http://localhost:8080/concessionaria/autenticacao/cadastro", {
            body
        })

        const json = data.json();
    } catch (error) {

    }
}