import Tour from "./Tour";
function Tours({tours,removeTour}){
    return <section>
        <div className="title">
            <h2>ours tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            {
                tours.map((item)=>{
                    return <Tour key={item.id} {...item} removeTour={removeTour}/>
                })
            }
        </div>
    </section>
}
export default Tours;