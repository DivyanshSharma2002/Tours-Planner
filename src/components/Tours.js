import Card from "./Card";
import './Tours.css'
function Tours({tours,removeTour}){
     return(
        <div className="container">
            
                <h1 className="title ">Plan With Divyansh</h1>
          
                <div className="cards">
                    {tours.map( (tour) =>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                    }
                </div>
        </div>
     );

}
export default Tours;