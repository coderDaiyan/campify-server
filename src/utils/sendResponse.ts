import { Response } from "express";

type TResData = {
  status: number;
  message: string;
  data?: any;
  error?: any;
};

export const sendResponse = (res: Response, resData: TResData) => {
  res.status(resData.status).json(resData);
};
