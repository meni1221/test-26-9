import NewBeeperDTO from "../DTO/NewBeeperDTO";
import fs from 'fs/promises'
import Beeper from "../models/beeperModel";
import { getFileData, saveFileData } from "../config/fileDataLayer";

export default class UserServices{
    public static async createNewBeeper(newBeeper:NewBeeperDTO):Promise<boolean>{
        //create a new Beeper() objects
        const{name,status,created_at,detonated_at,letitude,longitude } = newBeeper
        const beeper:Beeper =new Beeper(
            name,status,created_at,detonated_at,letitude,longitude
        )
        //add it to the user file 
            //get the file as an array of objects
            let beepers:Beeper[] = await getFileData<Beeper>('beepers') as Beeper[]
            if(!beepers) beepers = []
            //push
            beepers.push(beeper)
            //save the array beck to teh file
            return await saveFileData <Beeper>('beepers', beepers)
    }
}