import useDemoConfig from "../../useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Line() {
  const { data } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      {/* <button onClick={randomizeData}>Randomize Data best</button> */}
      <br />
      <br />
      <div className="min-h-[500px] w-full bg-slate-50 border">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </>
  );
}
