import { NextResponse } from "next/server";
import { updateSheetData } from "@/lib/mongo/updateSheet";

export async function POST(req, res) {
    const data = await req.json();
    const { discordId, sheetId } = data;
    const result = await updateSheetData(discordId, sheetId);
    return NextResponse.json(result)
}
