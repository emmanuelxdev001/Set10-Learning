"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { usePopulation } from "@/hooks/useHooks";
import { useEffect } from "react";

export const description = "A multiple line chart";

const chartConfig = {} satisfies ChartConfig;

export const PopulationDataChart = () => {
  let { data } = usePopulation();
  data = data?.map((props: any) => {
    return {
      year: props?.Date.slice(6),
      Population: parseFloat(props?.Population),

      GrowthRate:
        parseFloat(props[`Growth Rate`]) * parseFloat(props?.Population),
    };
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full overflow-auto mt-10">
      <div className=" w-full min-h-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>Nigeria Population Growth Insight</CardTitle>
            <CardDescription>Recording from 1950 - 2100</CardDescription>
            <a
              href="https://www.macrotrends.net/global-metrics/countries/nga/nigeria/population"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-blue-500"
            >
              Data Source
            </a>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={data}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice()}
                />
                <YAxis
                  // dataKey="Population"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartLegend />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Line
                  dataKey="Population"
                  // type="natural"
                  dot={false}
                  stroke="#E76E50"
                  strokeWidth={2}
                />
                <Line
                  dataKey="GrowthRate"
                  type="monotone"
                  stroke="#2A9D90"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  A very insightfull record of Nigeria Population Growth Record{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  Nigeria Growth Rate pick will be in 2038, thereafter her rate
                  of Growth will start dropping
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
