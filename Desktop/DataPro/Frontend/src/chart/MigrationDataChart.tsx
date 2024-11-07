"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
import { useMigrant } from "@/hooks/useHooks";
import { useEffect } from "react";

export const description = "A stacked area chart";

const chartConfig = {} satisfies ChartConfig;

export const MigrationDataChart = () => {
  let { data } = useMigrant();

  data = data?.map((props: any) => {
    return {
      year: props?.Date.slice(6),
      Migrant: parseFloat(props?.Migrant),
      populationGrowth:
        parseFloat(props[`Migrant %  Population`]) * parseFloat(props?.Migrant),
    };
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full overflow-auto  mt-10">
      <div className=" w-full min-h-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>Nigeria Migration</CardTitle>
            <CardDescription>
              Migration and Population Growth data
            </CardDescription>
            <a
              href="https://www.macrotrends.net/global-metrics/countries/nga/nigeria/immigration-statistics"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-blue-500"
            >
              Data Source
            </a>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
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
                  tickMargin={10}
                  tickFormatter={(value) => value.slice(0)}
                />
                <XAxis
                  dataKey="Migrant"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartLegend />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="Migrant"
                  type="natural"
                  fill="#AAD8D2"
                  fillOpacity={0.4}
                  stroke="#2A9D90"
                  stackId="a"
                />
                <Area
                  dataKey="populationGrowth"
                  type="natural"
                  fill="#F5C5B9"
                  fillOpacity={0.4}
                  stroke="#E87153"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Chart showing Nigeria's Migration rate as relate to her
                  Population Growth <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  1960 - 2015
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
