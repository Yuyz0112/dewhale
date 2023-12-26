<script setup>
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <Card>
      <CardContent>
        <h2 class="text-xl font-semibold mb-4">Report an issue</h2>
        <p class="mb-6">What area are you having problems with?</p>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Label for="area">Area</Label>
            <Select>
              <SelectTrigger id="area" aria-label="Select Area">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="customer-service">Customer Service</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label for="severity">Security Level</Label>
            <Select>
              <SelectTrigger id="severity" aria-label="Select Security Level">
                <SelectValue placeholder="Select Security Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="severity-1">Severity 1</SelectItem>
                  <SelectItem value="severity-2">Severity 2</SelectItem>
                  <SelectItem value="severity-3">Severity 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div class="mb-4">
          <Label for="subject">Subject</Label>
          <Input id="subject" placeholder="I need help with..." />
        </div>
        <div class="mb-6">
          <Label for="description">Description</Label>
          <Textarea id="description" placeholder="Please include all information relevant to your issue." />
        </div>
        <div class="flex justify-between">
          <Button variant="ghost">Cancel</Button>
          <Button>Submit</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
/* Additional styles can be placed here if needed */
</style>