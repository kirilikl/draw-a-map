import getIcon from "./utils/getIcon"

export default function RulesCards({rules}){
    return(
        <div className="ruleCardsContainer">
            {Object.entries(rules).map(([key, rule])=>(
                <div className="ruleCard">
                    <img src={getIcon(key)}/>
                    <p>{rule}</p>
                </div>
            ))}
        </div>
    )
}