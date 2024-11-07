import { Request } from "express";
import { Response } from "express";
import csv from "csvtojson";
import dataModel from "../model/dataModel";
import populationModel from "../model/populationModel";
import migrantModel from "../model/migrantModel";

export const createData = async (req: any, res: Response) => {
  try {
    const data = await csv().fromFile(req.file.path);

    const mainData = await dataModel.create({
      economic: data,
    });

    return res.status(200).json({
      message: "Done",
      data: mainData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
      data: error,
    });
  }
};

export const readEconomicData = async (req: any, res: Response) => {
  try {
    const mainData = await dataModel.find();

    return res.status(200).json({
      message: "Done",
      data: mainData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
      data: error,
    });
  }
};

export const createMigrantData = async (req: any, res: Response) => {
  try {
    const data = await csv().fromFile(req.file.path);

    const mainData = await migrantModel.create({
      migrant: data,
    });

    return res.status(200).json({
      message: "Done",
      data: mainData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
      data: error,
    });
  }
};

export const readMigrantData = async (req: any, res: Response) => {
  try {
    const mainData = await migrantModel.find();

    return res.status(200).json({
      message: "Done",
      data: mainData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
      data: error,
    });
  }
};

export const createPopulationData = async (req: any, res: Response) => {
  try {
    const data = await csv().fromFile(req.file.path);

    const mainData = await populationModel.create({
      population: data,
    });

    return res.status(200).json({
      message: "Done",
      data: mainData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
      data: error,
    });
  }
};

export const readPopulationData = async (req: any, res: Response) => {
  try {
    const mainData = await populationModel.find();

    return res.status(200).json({
      message: "Done",
      data: mainData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
      data: error,
    });
  }
};
