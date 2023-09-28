"use client";


export const Input = (currentUser) => {

    const HandleSheetButton = async (e) => {
        e.preventDefault();
        const sheetId = e.target[0].value;
        const userId = currentUser.currentUser.id;

        const res = await fetch("/api/sheets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({discordId: userId, sheetId: sheetId})
        })
        
        const data = await res.json();
        console.log(data);
    }

    return (
        <div className="flex w-full justify-center items-center">
            <form onSubmit={HandleSheetButton} className="flex flex-col w-80 mx-auto my-10">
                <label className="text-white text-3xl font-bold mb-4">Spreadsheet ID</label>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm" type="text" placeholder="ID" />
                <button className="bg-purple-100 text-black rounded-md mt-3 w-24 p-2">Save</button>
            </form>
        </div>
    )

}