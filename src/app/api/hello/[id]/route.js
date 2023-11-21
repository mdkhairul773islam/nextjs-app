import { NextResponse } from "next/server";
import users from "@/utilities/db";
export async function GET(req, query) {
  try {
    const { id } = query.params;

    if (!id) {
      throw new Error('Missing id parameter');
    }

    const user = users.filter((user)=>user.id==id);

    return NextResponse.json(user,{status: 200});
  } catch (error) {
    console.error('Error:', error.message);

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
