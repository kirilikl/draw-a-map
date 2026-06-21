import fieldsIcon from '../assets/fields.svg'
import forestIcon from '../assets/forest.svg'
import riverIcon from '../assets/river.svg'
import villageIcon from '../assets/village.svg'
import monsterIcon from '../assets/monster.svg'

const iconMap = {
    fields: fieldsIcon,
    forest: forestIcon,
    river: riverIcon,
    village: villageIcon,
    monster: monsterIcon
}

export default function getIcon(type){
    return iconMap[type]
}