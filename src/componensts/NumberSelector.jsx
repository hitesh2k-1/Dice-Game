const NumberSelector = ({selectedNumber , setselectedNumber ,error, seterror}) => {


    const arrNumber = [1, 2, 3, 4, 5, 6]

const numberSelectorHandler=(value)=>{
    setselectedNumber(value)
    seterror("")
}

    return (
        
        <div className="flex flex-col gap-4 justify-center " >
            <div>
                       <p className="text-red-600 sm:ml-32 text-sm sm:text-lg ">{error}</p>
                       </div>
            <div className="flex sm:gap-4 ml-14  ">
                {arrNumber.map((value, i) => (
                    <div
                        key={i}
                        onClick={() => {numberSelectorHandler(value)}}
                        className={` px-2 sm:border-black rounded-xl sm:h-14 sm:w-14 sm:border-2 font-bold sm:text-xl items-center flex cursor-pointer justify-center 
                            ${value === selectedNumber ? "text-white bg-black " : ""}`} >{value}</div>
                ))}
            </div>
            <div>
                <h1 className="font-bold text-xl right-0 absolute mx-5 " >Select Number</h1>
            </div>
        </div>
    )
}

export default NumberSelector
