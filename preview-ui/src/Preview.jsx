import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table';
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
                  // ... existing bar chart data and properties
                />
              </div>
            </TabsContent>
            <TabsContent value="trends">
              <div className="h-64">
                <ResponsiveLine
                  // ... existing line chart data and properties
                />
              </div>
            </TabsContent>
            <TabsContent value="market-share">
              <div className="h-64">
                <ResponsivePie
                  // ... existing pie chart data and properties
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
                {/* ... existing table rows */}
              </TableBody>
            </Table>
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
}