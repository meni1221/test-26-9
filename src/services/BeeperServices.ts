import NewBeeperDTO from "../DTO/NewBeeperDTO";
import fs from 'fs/promises'
import Beeper from "../models/beeperModel";
import { getFileData, saveFileData } from "../config/fileDataLayer";

export default class BeeperServices{
    public static async createNewBeeper(newBeeper:NewBeeperDTO):Promise<boolean>{
        //create a new Beeper() objects
        const{name} = newBeeper
        const beeper:Beeper =new Beeper(
            name
        )        
        //add it to the Beeper file 
            //get the file as an array of objects
            let beepers:Beeper[] = await getFileData<Beeper>('beepers') as Beeper[]
            console.log(beepers);
            
            if(!beepers) beepers = []
            //push
            beepers.push(beeper)
            //save the array beck to teh file
            return await saveFileData <Beeper>('beepers', beepers)
    }

    public static async getAllBeepers():Promise<Beeper[]|void> {
        let beepers:Beeper[] = await getFileData<Beeper>('beepers') as Beeper[]
            return beepers
    }

    public static async getDetailsById(id:string):Promise<Beeper|void>{
      let beepers:Beeper[] = await getFileData<Beeper>('beepers') as Beeper[]
        let beeper:Beeper|undefined = await beepers.find(x=>x.id == id)
        return beeper
    }

    public static async deleteById(id:string):Promise<Beeper[]|void>{
        let beepers:Beeper[] = await getFileData<Beeper>('beepers') as Beeper[]
        return beepers.filter(x=>x.id != id)
          
      }

}