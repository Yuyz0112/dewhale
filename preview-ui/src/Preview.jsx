import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { List, Home, Link } from 'lucide-react';
import React from 'react';

export default function ExerciseUI() {
  return (
    (<div className="flex flex-col gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Equipments</CardTitle>
        </CardHeader>
        <CardContent>
          <List>
            <div>自身重量</div>
            <div>单杠</div>
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Muscles</CardTitle>
        </CardHeader>
        <CardContent>
          <List>
            <div>肩部</div>
            <div>胸肌</div>
            <div>腹肌</div>
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Exercises</CardTitle>
        </CardHeader>
        <CardContent>
          <List>
            <div>
              <Link href="https://musclewiki.com/barbell/male/biceps/barbell-curl" isExternal>
                Dips
              </Link>
            </div>
            <div>
              <Link href="https://musclewiki.com/barbell/male/biceps/push-up" isExternal>
                Push Up
              </Link>
            </div>
            <div>
              <Link href="https://musclewiki.com/barbell/male/biceps/burpee" isExternal>
                Burpee
              </Link>
            </div>
          </List>
        </CardContent>
      </Card>
    </div>)
  );
}