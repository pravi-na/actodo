const Cards = ()=>{
    const data =[{"cardhead":"23","cardcontent":"Chennai","bgclr":"#5c90f9"},{"cardhead":"20 December","cardcontent":"Chennai","bgclr":"#ecb957"},{"cardhead":"Build using","cardcontent":"React","bgclr":"#e24673"}]
    return (
        <>
        <div className="flex justify-between m-2 text-center">
           
            {data.map((data)=>{
                return <div className="p-4 rounded-md flex-grow mr-6" style={{backgroundColor:data.bgclr}}>
                        <h2 className="text-2xl font-bold">{data.cardhead}</h2>
                        <p>{data.cardcontent}</p>
                    </div>
            })}
            
        </div>
        </>
    )
}
export default Cards;