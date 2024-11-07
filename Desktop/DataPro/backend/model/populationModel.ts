import { Document, model, Schema } from "mongoose";

interface iData {
  population: Array<any>;
}

interface iDataData extends iData, Document {}

const popuationModel = new Schema<iDataData>(
  {
    population: {
      type: [],
      required: true,
    },
  },
  { timestamps: true }
);

export default model<iDataData>("popuation", popuationModel);
