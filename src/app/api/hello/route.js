import { NextResponse } from "next/server";
export async function GET(req){
    return NextResponse.json({name: 'Khairul Islam', 'age': 27, address: 'Dhaka Dhanmondi'}, {status: 200})
}