"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
} from "@/components/ui/chart";
import { useEconomics } from "@/hooks/useHooks";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const description = "A multiple bar chart";

const chartConfig = {} satisfies ChartConfig;

export const EconomicDataChart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [chart, setChart] = useState<string>("GDP");
  return (
    <div className="w-full overflow-auto mt-10">
      <div className=" w-full min-h-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>
              Nigeria
              <span className="mx-1">
                {chart === "CapitaGrowth"
                  ? "Capital Growth"
                  : chart === "GDP"
                  ? "GDP"
                  : chart === "annualGrowth"
                  ? "Annual % Growth"
                  : null}
              </span>
              Graph
            </CardTitle>
            <CardDescription>1960 - 2023</CardDescription>
            <a
              href="https://www.macrotrends.net/global-metrics/countries/nga/nigeria/gdp-gross-domestic-product"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-blue-500"
            >
              Data Source
            </a>
            <div className="flex flex-wrap gap-1 lg:gap-3 ">
              <Button
                variant="outline"
                className={`mt-1 lg:mt-3 font-medium transition-all duration-300 cursor-pointer ${
                  chart === "GDP" && "text-white bg-[#E76E50]"
                }`}
                onClick={() => setChart("GDP")}
              >
                View GDP
              </Button>
              <Button
                variant="outline"
                className={`mt-1 lg:mt-3 font-medium transition-all duration-300 cursor-pointer ${
                  chart === "CapitaGrowth" && "text-white bg-[#2A9D90]"
                }`}
                onClick={() => setChart("CapitaGrowth")}
              >
                View Capita Growth
              </Button>
              <Button
                variant="outline"
                className={`mt-1 lg:mt-3font-medium transition-all duration-300 cursor-pointer ${
                  chart === "annualGrowth" && "text-white bg-blue-950"
                }`}
                onClick={() => setChart("annualGrowth")}
              >
                View Annual % Growth
              </Button>
            </div>
          </CardHeader>
          {chart === "CapitaGrowth" ? (
            <CapitalGrowthCard />
          ) : chart === "GDP" ? (
            <GDPCard />
          ) : chart === "annualGrowth" ? (
            <AnnualGrowthCard />
          ) : null}

          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Nigeria Best{""}
              <span className="mx-">
                {chart === "CapitaGrowth"
                  ? "Capital Growth"
                  : chart === "GDP"
                  ? "GDP"
                  : chart === "annualGrowth"
                  ? "Annual % Growth"
                  : null}
              </span>
              recorded in{" "}
              <span className="mx-">
                {chart === "CapitaGrowth"
                  ? "2014"
                  : chart === "GDP"
                  ? "2014"
                  : chart === "annualGrowth"
                  ? "1970"
                  : null}
              </span>{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing Nigeria
              <span className="mx-1">
                {chart === "CapitaGrowth"
                  ? "Capital Growth"
                  : chart === "GDP"
                  ? "GDP"
                  : chart === "annualGrowth"
                  ? "Annual % Growth"
                  : null}
              </span>
              {""}
              for the path 63yrs
            </div>
          </CardFooter>
        </Card>{" "}
      </div>
    </div>
  );
};

const GDPCard = () => {
  const { data } = useEconomics();

  const GDP = data?.map((props: any) => {
    return {
      year: props?.Date.slice(6),
      GDP: parseFloat(props?.GDP),
      capitalGrowth: parseFloat(props[`Per Capita`]),
      annualGrowth: parseFloat(props[`Annual % Change`]),
    };
  });
  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer>
          <BarChart accessibilityLayer data={GDP} className="h-[50%]">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey="GDP"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend />
            <Bar dataKey="GDP" fill="#E76E50" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContent>
  );
};

const CapitalGrowthCard = () => {
  const { data } = useEconomics();

  const GDP = data?.map((props: any) => {
    return {
      year: props?.Date.slice(6),
      GDP: parseFloat(props?.GDP),
      capitalGrowth: parseFloat(props[`Per Capita`]),
      annualGrowth: parseFloat(props[`Annual % Change`]),
    };
  });
  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width={"100%"} height={"50%"}>
          <BarChart accessibilityLayer data={GDP} className="h-[50%]">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey="capitalGrowth"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend />

            <Bar dataKey="capitalGrowth" fill="#2A9D90" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContent>
  );
};

const AnnualGrowthCard = () => {
  const { data } = useEconomics();

  const GDP = data?.map((props: any) => {
    return {
      year: props?.Date.slice(6),
      GDP: parseFloat(props?.GDP),
      capitalGrowth: parseFloat(props[`Per Capita`]),
      annualGrowth: parseFloat(props[`Annual % Change`]),
    };
  });
  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width={"100%"} height={"50%"}>
          <BarChart accessibilityLayer data={GDP} className="h-[50%]">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey="annualGrowth"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend />
            <Bar dataKey="annualGrowth" fill="#172554" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContent>
  );
};
