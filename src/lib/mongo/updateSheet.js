import clientPromise from "./databaseConnect";
import { SpreadSheetModal } from "../modals/spreadSheetData";

export async function updateSheetData(discordId, sheetId){
    const client = await clientPromise;
    const collection = client.db("test").collection("spreadsheets");

    const filter = { discordId: discordId };
    const data = SpreadSheetModal(discordId, sheetId);
    const updateDocument = {
        $set: data
    };

    try{
        const result = await collection.updateOne(filter, updateDocument, {upsert: true})
        return {message: `Successfully updated document.`}
    }
    catch(err){
        console.log(err)
        return {message: "error"}
    }
}

