import { useEffect, useState } from 'react'
import './App.css'
import RULES_DATABASE from './data/rules'
import SHAPES_DATABASE from './data/shapes'
import TERRAIN_DATABASE from './data/terrains'
import TurnCard from './TurnCard'
import RULES_DATABES from './data/rules'
import RulesCards from './RulesCards'


function App() {
  const [isHard, setIsHard] = useState(false)
  // const [hasMonsters, setHasMonsters] = useState(false)
  const availableShapes = SHAPES_DATABASE.filter(s=> s.modes.includes(isHard ? "hard" : "normal"))
  const availableTerrains = TERRAIN_DATABASE.filter(s=> s.mode.includes(isHard ? "hard" : "normal"))
  const [turnCount, setTurnCount] = useState(1)
  useEffect(()=>{
    document.title = `Ход: ${turnCount}/8`
  },[turnCount])

  const getRandomTurn = () => {
    const randomShape = availableShapes[Math.floor(Math.random() * availableShapes.length)]
    const randomTerrain = availableTerrains[Math.floor(Math.random() * availableTerrains.length)]

    return({currentShape: randomShape, currentTerrain: randomTerrain})
  }

  const newGameRules = () =>{
    const rules = {}
    rules["fields"] = RULES_DATABASE.fields[Math.floor(Math.random() * RULES_DATABES.fields.length)]
    rules["river"] = RULES_DATABASE.river[Math.floor(Math.random() * RULES_DATABES.river.length)]
    rules["forest"] = RULES_DATABASE.forest[Math.floor(Math.random() * RULES_DATABES.forest.length)]
    if(isHard){
      rules["village"] = RULES_DATABASE.village[Math.floor(Math.random() * RULES_DATABES.village.length)]
    }

    return rules
  }

  const [turnConditions, setTurnConditions] = useState(getRandomTurn)
  const [gameRules, setGameRules] = useState(newGameRules)


  const newTurn = () =>{
    if(turnCount > 7){
      if(!confirm("Игра окончена, вы точно хотите сделать ход?")){
        return
      } 
    }
    setTurnConditions(getRandomTurn)
    setTurnCount(turnCount+1)

  }

  const newGame = () =>{
    if(confirm("Вы уверены что хотите начать новую игру?(Это сотрет прогресс текущей игры)")){
      setTurnCount(1)
      setTurnConditions(getRandomTurn)
      setGameRules(newGameRules)
    }
  }

  return (
    <> 
      <p className='title'>Ход: {turnCount}/8</p>
      <RulesCards
        rules={gameRules}
      />
      <TurnCard 
        shape={turnConditions.currentShape}
        terrain={turnConditions.currentTerrain}
      />

      <button className="newTurn" onClick={newTurn}>Новый ход</button>
      <div className='optionsContainer'>
        <label className="hard">
          <input type="checkbox" checked={isHard} onChange={() => {setIsHard(!isHard)}}/>
          Усложненная игра
        </label>
        <button className="newGame" onClick={newGame}>Новая игра</button>
      </div>

      {/* <label>Добавить монстров
        <input type="checkbox" checked={hasMonsters} onChange={() => {setHasMonsters(!hasMonsters)}}/>
      </label> */}

    </>
  )
}

export default App