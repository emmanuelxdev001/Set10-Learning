import useDemoConfig from "../../useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { useEconomics } from "../hooks/useHooks";

export const EconomicChart = () => {
  const { data: economicData } = useEconomics();

  let { data }: any = useDemoConfig({
    series: 3,
    dataType: "ordinal",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
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

  //   data = readDataValue;

  const convertData = (data: Array<{}>) => {
    return [
      {
        label: "GDP",
        data: data?.map((item: any) => ({
          primary: item?.Date,
          secondary: parseFloat(item.GDP),
          radius: null,
        })),
      },
      {
        label: "Per Capita",
        data: data?.map((item: any) => ({
          primary: item?.Date,
          secondary: parseFloat(item[`Per Capita`]),
          radius: null,
        })),
      },
      {
        label: "Annual % Change",
        data: data?.map((item: any) => ({
          primary: item?.Date,
          secondary: parseFloat(item[`Annual % Change`]),
          radius: null,
        })),
      },
    ];
  };

  const result = convertData(economicData);

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
