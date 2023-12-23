import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export default function AppleFruitMarketAnalysisReport() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Apple Fruit Market Analysis Report</CardTitle>
          <CardDescription>Insights into apple fruit sales, trends, and market share.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sales" className="w-full">
            <TabsList>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="market-share">Market Share</TabsTrigger>
            </TabsList>
            <TabsContent value="sales">
              <div className="h-64">
                <ResponsiveBar
                  data={[
                    { country: 'USA', sales: 120 },
                    { country: 'UK', sales: 80 },
                    { country: 'Canada', sales: 90 },
                    { country: 'China', sales: 110 },
                    { country: 'India', sales: 70 },
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
                      id: 'Sales',
                      data: [
                        { x: '2016', y: 100 },
                        { x: '2017', y: 120 },
                        { x: '2018', y: 150 },
                        { x: '2019', y: 170 },
                        { x: '2020', y: 180 },
                      ],
                    },
                  ]}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Year',
                    legendOffset: 36,
                    legendPosition: 'middle'
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Sales',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  colors={{ scheme: 'nivo' }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, .5)',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                          }
                        }
                      ]
                    }
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="market-share">
              <div className="h-64">
                <ResponsivePie
                  data={[
                    { id: 'USA', value: 40 },
                    { id: 'UK', value: 20 },
                    { id: 'Canada', value: 10 },
                    { id: 'China', value: 15 },
                    { id: 'India', value: 15 },
                  ]}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={{ scheme: 'nivo' }}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  radialLabelsSkipAngle={10}
                  radialLabelsTextColor="#333333"
                  radialLabelsLinkColor={{ from: 'color' }}
                  sliceLabelsSkipAngle={10}
                  sliceLabelsTextColor="#333333"
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
                  <TableCell>
                    <Badge variant="outline">50%</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>USA</TableCell>
                  <TableCell>4,600,000</TableCell>
                  <TableCell>
                    <Badge variant="outline">6%</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Poland</TableCell>
                  <TableCell>3,600,000</TableCell>
                  <TableCell>
                    <Badge variant="outline">4%</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>India</TableCell>
                  <TableCell>2,500,000</TableCell>
                  <TableCell>
                    <Badge variant="outline">3%</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Iran</TableCell>
                  <TableCell>2,200,000</TableCell>
                  <TableCell>
                    <Badge variant="outline">3%</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
}