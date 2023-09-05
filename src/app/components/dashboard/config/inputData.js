
export const Input = () => {
    return (
        <div className="flex bg-purple-900">
            <form className="flex flex-col w-1/2 mx-auto my-10">
                <label className="text-white text-2xl font-bold">Spreadsheet ID</label>
                <input className="border-2 border-purple-900 rounded-md" type="text" placeholder="ID" />
                <button className="bg-purple-100 text-black rounded-md mt-2">Save</button>
            </form>
            
        </div>
    )

}