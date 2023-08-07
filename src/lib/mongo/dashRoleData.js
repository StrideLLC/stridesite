import clientPromise from "./databaseConnect";

export async function DashData() {
const client = await clientPromise;

let data;
try {
    data = await client.db("test").collection("dashroleschemas").find({}).toArray()
    return data[0];
}
catch (err) {
    console.log(err)
    return { message: "Error" }
}

}