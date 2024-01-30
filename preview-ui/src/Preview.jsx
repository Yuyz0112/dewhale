import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Home, Router, Link, Route } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import React from 'react';

const HomePage = () => {
  const [text, setText] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleShare = () => {
    // In a real application, this would generate a unique link to the shared content
    const newLink = `https://example.com/shared/${Math.random().toString(36).substr(2, 9)}`;
    setLink(newLink);
    // Copy to clipboard would be handled here
  };

  return (
    (<div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Share Your Text</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Paste your text here..." value={text} onChange={(e) => setText(e.target.value)} />
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center">
            <Button onClick={handleShare}>Share</Button>
            {link && (
              <div text={link}>
                <Button variant="outline">
                  <div className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>)
  );
};

const AdminPage = () => {
  // In a real application, this data would be fetched from a server
  const sharedHistories = [
    { id: 1, link: 'https://example.com/shared/abc123', date: '2021-09-01' },
    { id: 2, link: 'https://example.com/shared/def456', date: '2021-09-02' },
    { id: 3, link: 'https://example.com/shared/ghi789', date: '2021-09-03' },
  ];

  return (
    (<div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Shared Histories</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sharedHistories.map((history) => (
                <TableRow key={history.id}>
                  <TableCell>{history.date}</TableCell>
                  <TableCell>
                    <a href={history.link} target="_blank" rel="noopener noreferrer">
                      {history.link}
                    </a>
                  </TableCell>
                  <TableCell>
                    <div text={history.link}>
                      <Button variant="outline">
                        <div className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>)
  );
};

const ViewPage = () => {
  // In a real application, the text content would be fetched from a server using the ID from the URL
  const sharedText = "This is an example of shared text content.";

  return (
    <div className="p-4">
      <Card>
        <CardContent>
          <p>{sharedText}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const App = () => {
  return (
    (<Router>
      <div className="flex flex-col h-screen">
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">ShareIt</h1>
          <nav>
            <Link to="/" className="p-2">
              <div className="w-5 h-5" />
            </Link>
            <Link to="/admin" className="p-2">
              <div className="w-5 h-5" />
            </Link>
          </nav>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/view/:id">
              <ViewPage />
            </Route>
          </Switch>
        </main>
        <footer className="bg-white p-4 shadow-md">
          <p>Footer content goes here.</p>
        </footer>
      </div>
    </Router>)
  );
};

export default App;