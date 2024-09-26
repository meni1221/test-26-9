import {v4} from "uuid"

class Beeper{
    public id:string
    constructor(
        public name:string,
        public status:string,
        public created_at:Date,
        public detonated_at:Date,
        public letitude: string,
        public longitude:string
    ){
        this.id = v4()
    }
}

export default Beeper


