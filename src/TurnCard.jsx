import getIcon from "./utils/getIcon"

export default function TurnCard({shape, terrain}){

    const renderMatrix = (matrix) =>{
        const columns = matrix[0].length
        const cells = matrix.flat()

        return(
            <div 
                className="grid-container"
                style={{display: "grid", gridTemplateColumns: `repeat(${columns}, 60px)`, gap: 5}}>
                {cells.map((cell)=>(
                    <div                         
                        className={`cell ${cell===1 ? "filled" : " "}`}
                        style={{width: 60, height: 60, borderRadius: 5}}>
                    </div>
                ))}
            </div>
        )
    }

    return(
    <>            
        <div className="turnCard">
            <p className="cardTitle">Текущий ход:</p>
            <div className="turnContainer">
                <div className="terrainContainer">
                    <img src={getIcon(terrain.type)}/>
                    <p>{terrain.label}</p>
                </div>
                <div className="shapeContainer">
                    <div>{renderMatrix(shape.matrix)}</div>
                    <p>{shape.label}</p>
                </div>
            </div>
        </div>
    </>
    )
}