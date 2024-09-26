import fs from "fs/promises"

export const getFileData = async <T>(
    resorurce: string
  ): Promise<T[] | void> => {
    try {
      const strData: string = await fs.readFile(
        `${__dirname}/../../data/${resorurce}.json`,
        "utf-8"
      );
      const persedData: T[] = JSON.parse(strData);
      return persedData;
    } catch (err) {
      console.log(err);
    }
  };
  export const saveFileData = async <T>(
    resorurce: string,
    data: T[]
  ): Promise<boolean> => {
    try {
      const stringiFiedData: string = JSON.stringify(data);
      await fs.writeFile(`${__dirname}/../../data/${resorurce}.json`, stringiFiedData, {
        encoding: "utf-8",
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };