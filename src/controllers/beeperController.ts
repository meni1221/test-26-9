import exp, { Router, Request, Response } from "express";
import BeeperServices from "../services/BeeperServices";
const router: Router = exp.Router();


router.get("/",async(req:Request, res:Response):Promise<void> =>{
  try {
    const all = await BeeperServices.getAllBeepers()
    res.json({
      err: false,
      message: "i was way too lazy to change the default message",
      data: all,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "i was way too lazy to change the default message",
      date:null
    });
  }
});
router.get("/:id",async(req:Request, res:Response):Promise<void> =>{
  try {
    const { id } = req.params;
    const  ida = await BeeperServices.getDetailsById(id)
    
    res.json({
      err: false,
      message: "i was way too lazy to change the default message",
      data: id,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "i was way too lazy to change the default message",
      date:null
    });
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await BeeperServices.createNewBeeper(req.body);
    if (result) {
      res.status(200).json({
        err: false,
        message: "I was way too lazy to change the default message",
        data: undefined,
      });
    } else {
      throw new Error("error");
    }
    res.json({
      err: false,
      message: "i was way too lazy to change the default message",
      data: undefined,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "i was way too lazy to change the default message",
      date: null,
    });
  }
 
});

router.delete("/:id",async (req:Request, res:Response):Promise<void> =>{
try {
  const { id } = req.params;
  const  ida = await BeeperServices.deleteById(id)
  
  res.json({
    err: false,
    message: "i was way too lazy to change the default message",
    data: id,
  });
} catch (err) {
  res.status(400).json({
    err: true,
    message: "i was way too lazy to change the default message",
    date:null
  });
}
});

export default router
