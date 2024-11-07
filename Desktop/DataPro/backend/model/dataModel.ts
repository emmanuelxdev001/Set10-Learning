import { Document, model, Schema } from "mongoose";

interface iData {
  economic: Array<any>;
}

interface iDataData extends iData, Document {}

const dataModel = new Schema<iDataData>(
  {
    economic: {
      type: [],
      required: true,
    },
  },
  { timestamps: true }
);

export default model<iDataData>("data", dataModel);
