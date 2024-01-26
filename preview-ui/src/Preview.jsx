import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

const SegmentBuilder = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Segments</h2>
        <div className="mb-4">
          <ToggleGroup type="single" defaultValue="and">
            <ToggleGroupItem value="and">AND</ToggleGroupItem>
            <ToggleGroupItem value="or">OR</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Website Activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visited">Visited</SelectItem>
                <SelectItem value="not-visited">Not Visited</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Specific Page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="homepage">Homepage</SelectItem>
                <SelectItem value="pricing">Pricing</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Campaign" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summer-sale">Summer Sale</SelectItem>
                <SelectItem value="winter-sale">Winter Sale</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Anytime" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
              </SelectContent>
            </Select>
            <Tooltip>
              <TooltipTrigger>
                <Trash2 className="w-5 h-5 text-red-500 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                Remove Condition
              </TooltipContent>
            </Tooltip>
          </div>
          {/* Additional conditions can be added here */}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <Button variant="outline">Add New Conditions</Button>
          <Button variant="solid">Save & Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default SegmentBuilder;