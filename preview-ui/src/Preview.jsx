import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const deploymentData = {
  latestCommit: '5bf0023',
  status: 'Deploy successful!',
  previewUrl: 'https://42c9b8a7.vx-dev.pages.dev',
  branchPreviewUrl: 'https://ui-gen-issue-2.vx-dev.pages.dev',
};

export default function DeploymentCard() {
  return (
    <Card className="max-w-lg mx-auto my-10 bg-white shadow rounded-lg p-6">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-xl font-bold text-gray-900">
          Deploying with Cloudflare Pages
        </CardTitle>
        <Badge className="bg-orange-400">bot</Badge>
      </CardHeader>
      <CardContent>
        <div className="border-t mt-3 pt-3">
          <Item label="Latest commit:" value={deploymentData.latestCommit} />
          <Item label="Status:" value={
            <span className="flex items-center text-green-600">
              <CheckIcon className="w-4 h-4 mr-1" />
              {deploymentData.status}
            </span>
          } />
          <Item label="Preview URL:" value={<a href={deploymentData.previewUrl} className="text-blue-600 hover:underline">{deploymentData.previewUrl}</a>} />
          <Item label="Branch Preview URL:" value={<a href={deploymentData.branchPreviewUrl} className="text-blue-600 hover:underline">{deploymentData.branchPreviewUrl}</a>} />
        </div>
        <div className="mt-6">
          <a href="#" className="text-blue-600 hover:underline">View logs</a>
        </div>
      </CardContent>
    </Card>
  );
}

function Item({ label, value }) {
  return (
    <div className="flex justify-between items-center py-1">
      <div className="text-gray-700">{label}</div>
      <div className="font-medium text-gray-900">{value}</div>
    </div>
  );
}