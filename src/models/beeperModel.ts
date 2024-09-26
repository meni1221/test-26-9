import {v4} from "uuid"
import { status } from "../enums/statusEnum"

class Beeper{
    public id:string
    public status:status = status.manufactured
    public created_at:Date
    public detonated_at?:Date
    public letitude?: string
    public longitude?:string
    
    constructor(
        public name:string,
    ){
        this.created_at = new Date()
        this.letitude = ""
        this.longitude =""
        this.id = v4()
    }
}

export default Beeper


