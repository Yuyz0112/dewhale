import { Button } from '@/components/ui/button';
import { List, Home, Rss, Plus, Upload, Lock, Folder, FilePlus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function BlogUI() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogCategories = ['Default', 'Technology', 'Design', 'Culture', 'Business', 'Science'];
  const blogPosts = [
    { id: 1, title: 'Understanding Rust Lifetimes', category: 'Technology', summary: 'Lifetimes in Rust ensure that references are valid as long as we need them to be.', thumbnail: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e' },
    { id: 2, title: 'The Future of TypeScript', category: 'Design', summary: 'TypeScript has taken the JavaScript community by storm. What does the future hold?', thumbnail: 'https://images.unsplash.com/photo-1581093448796-1e374f9e3e8a' },
    // ... more blog posts
  ];

  const handleViewModeChange = (mode) => setViewMode(mode);
  const handleBlogSelect = (blog) => setSelectedBlog(blog);

  return (
    (<div className="flex h-screen bg-gray-100">
      <div className="bg-white w-64 p-6 hidden sm:block">
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        <ul>
          {blogCategories.map((category) => (
            <li key={category} className="mb-2">
              <Button variant="ghost">{category}</Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Button variant="ghost" onClick={() => handleViewModeChange('list')}>
              <List className="w-5 h-5" />
            </Button>
            <Button variant="ghost" onClick={() => handleViewModeChange('grid')}>
              <div className="w-5 h-5" />
            </Button>
          </div>
          <Button variant="primary">
            <Rss className="w-5 h-5 mr-2" />Subscribe via RSS
          </Button>
        </div>
        {selectedBlog ? (
          <Card>
            <CardHeader>
              <CardTitle>{selectedBlog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <img
                  src={selectedBlog.thumbnail}
                  alt="Thumbnail"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <p className="mt-4">{selectedBlog.summary}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => setSelectedBlog(null)}>
                Back to list
              </Button>
            </CardFooter>
          </Card>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <Card key={post.id} onClick={() => handleBlogSelect(post)}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={post.thumbnail}
                      alt="Thumbnail"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <CardDescription>{post.summary}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            {blogPosts.map((post) => (
              <Card key={post.id} onClick={() => handleBlogSelect(post)}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="primary" className="fixed bottom-4 right-4">
            <Plus className="w-5 h-5 mr-2" />New Blog Post
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Blog Post</AlertDialogTitle>
          </AlertDialogHeader>
          <Tabs defaultValue="details" className="w-full">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="plugins">Plugins</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <div className="flex flex-col space-y-4 p-4">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter the blog title" />
                <Label htmlFor="summary">Summary</Label>
                <Textarea id="summary" placeholder="Enter a brief summary" />
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="Enter the blog category" />
                <Label htmlFor="image">Featured Image</Label>
                <Button variant="outline">
                  <Upload className="w-5 h-5 mr-2" />Upload Image
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="content">
              <Textarea placeholder="Write your blog content here..." className="p-4 h-64" />
            </TabsContent>
            <TabsContent value="settings">
              <div className="flex items-center space-x-4 p-4">
                <Lock className="w-5 h-5" />
                <p>Encrypt blog data for security</p>
                <Button variant="outline">
                  <Folder className="w-5 h-5 mr-2" />Select Storage Location
                </Button>
                <Button variant="outline">
                  <FilePlus className="w-5 h-5 mr-2" />Import JSON Data
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="plugins">
              <div className="flex flex-col space-y-4 p-4">
                <Button variant="outline">
                  <div className="w-5 h-5 mr-2" />Add Plugin
                </Button>
                <div className="flex flex-wrap gap-4">
                  {/* Placeholder for plugin examples */}
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p>Plugin 1</p>
                  </div>
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p>Plugin 2</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button>Create</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>)
  );
}