import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';

export default function ImageUploadPreview() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" onChange={handleImageChange} />
      {imageSrc && (
        <AspectRatio ratio={1} className="mt-4">
          <img
            src={imageSrc}
            alt="Uploaded Preview"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      )}
    </div>
  );
}