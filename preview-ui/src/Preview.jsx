import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import React from 'react';

export default function AppleFruitMarketAnalysisReport() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Apple Fruit Market Analysis Report</CardTitle>
          <CardDescription>Insights into apple fruit sales, trends, market share, and apple juice analysis.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sales" className="w-full">
            <TabsList>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="market-share">Market Share</TabsTrigger>
              <TabsTrigger value="apple-juice">Apple Juice</TabsTrigger>
            </TabsList>
            <TabsContent value="sales">
              <div className="h-64">
                <ResponsiveBar
                  data={[
                    { country: 'USA', sales: 500 },
                    { country: 'China', sales: 600 },
                    { country: 'India', sales: 300 },
                  ]}
                  keys={['sales']}
                  indexBy="country"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'nivo' }}
                  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                />
              </div>
            </TabsContent>
            <TabsContent value="trends">
              <div className="h-64">
                <ResponsiveLine
                  data={[
                    {
                      id: 'Organic',
                      data: [
                        { x: '2018', y: 20 },
                        { x: '2019', y: 50 },
                        { x: '2020', y: 80 },
                      ],
                    },
                    {
                      id: 'Non-organic',
                      data: [
                        { x: '2018', y: 10 },
                        { x: '2019', y: 30 },
                        { x: '2020', y: 60 },
                      ],
                    },
                  ]}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{
                    type: 'linear',
                    min: 0,
                    max: 'auto',
                  }}
                  colors={{ scheme: 'category10' }}
                />
              </div>
            </TabsContent>
            <TabsContent value="market-share">
              <div className="h-64">
                <ResponsivePie
                  data={[
                    { id: 'USA', value: 40 },
                    { id: 'China', value: 30 },
                    { id: 'India', value: 20 },
                    { id: 'Others', value: 10 },
                  ]}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: 'set2' }}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                />
              </div>
            </TabsContent>
            <TabsContent value="apple-juice">
              <div className="h-64">
                <ResponsiveBar
                  data={[
                    { product: 'Apple Juice Concentrate', sales: 150 },
                    { product: 'Fresh Apple Juice', sales: 90 },
                    { product: 'Organic Apple Juice', sales: 120 },
                  ]}
                  keys={['sales']}
                  indexBy="product"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'set3' }}
                  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Apple Producing Countries</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <Table>
              <TableCaption>Top apple producing countries and their production in metric tons.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Country</TableHead>
                  <TableHead>Production (Metric Tons)</TableHead>
                  <TableHead>World Share</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>China</TableCell>
                  <TableCell>41,000,000</TableCell>
                  <TableCell>49%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>United States</TableCell>
                  <TableCell>4,649,323</TableCell>
                  <TableCell>6%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Poland</TableCell>
                  <TableCell>3,604,271</TableCell>
                  <TableCell>4%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>India</TableCell>
                  <TableCell>2,500,000</TableCell>
                  <TableCell>3%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Iran</TableCell>
                  <TableCell>2,200,000</TableCell>
                  <TableCell>2.8%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
}