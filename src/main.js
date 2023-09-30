
import data from './data.json'
import CardComp from './card';
function Main (){
    return(
        <>
        <div style={{display:"flex", flexWrap : "wrap" , justifyContent: "space-between" , gap: "20px" , marginTop:"1%"}}>
        {data.map(function(Item){
            return(
                <CardComp image = {Item.image_url} title = {Item.title} describtion = {Item.describtion}/>
    
            )
        }
    )
        }
        </div>
        </>
    )
}

export default Main;