import { Document, model, Schema } from "mongoose";

interface iData {
  migrant: Array<any>;
}

interface iDataData extends iData, Document {}

const migrantModel = new Schema<iDataData>(
  {
    migrant: {
      type: [],
      required: true,
    },
  },
  { timestamps: true }
);

export default model<iDataData>("migrant", migrantModel);
