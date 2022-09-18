import type {LanguageDirections} from "../../types/LanguageDirections";
import directions from "./dirs";

function getLanguageDir(lang?: string): LanguageDirections {
    if(!lang || !directions.hasOwnProperty(lang))
        return "ltr";
    else return directions[lang];
}

export default getLanguageDir;