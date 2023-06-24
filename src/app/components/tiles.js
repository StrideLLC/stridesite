export async function welcomeTile(){
    return(
        <div className='bg-purple-900/10 w-full h-full rounded-xl py-10 justify-center items-center flex flex-wrap'>
            <div className="text-white/70 tracking-widest">
                <h1 className="text-6xl">Welcome to Stride.</h1>
                <p className="text-3xl"> Elevate your business.</p>
            </div>
        </div>
    )
}

export async function WIP(){
    return(
        <div className='bg-purple-900/10 w-full h-full rounded-xl py-10 justify-center items-center flex flex-wrap'>
            <div className="text-white/70 tracking-widest">
                <p className="text-3xl"> This page is currently under construction.</p>
            </div>
        </div>
    )
}