import clientPromise from "./databaseConnect";

export async function ZnaData() {
const client = await clientPromise;

let data;
try {
    data = await client.db("test").collection("znaroleschemas").find({}).toArray()
    return data[0];
}
catch (err) {
    console.log(err)
    return { message: "Error" }
}

}