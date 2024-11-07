import useDemoConfig from "../../useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { usePopulation } from "../hooks/useHooks";

export const PopulationChart = () => {
  const { data: population } = usePopulation();
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

  const convertData = (data: Array<{}>) => {
    return [
      {
        label: "Population",
        data: data?.map((item: any) => ({
          primary: item?.Date,
          secondary: parseFloat(item.Population),
          radius: undefined,
        })),
      },
      {
        label: "Growth Rate",
        data: data?.map((item: any) => ({
          primary: item?.Date,
          secondary: parseFloat(item[`Growth Rate`]),
          radius: undefined,
        })),
      },
    ];
  };

  const result = convertData(population);

  console.log(data);
  console.log(result);

  return (
    <>
      <br />
      <br />
      <div className="w-full overflow-auto min-h-[400px]">
        <div className="w-[5000px] min-h-[400px]">
          <Chart
            options={{
              data: result,
              primaryAxis,
              secondaryAxes,
            }}
          />
        </div>
      </div>
    </>
  );
};
