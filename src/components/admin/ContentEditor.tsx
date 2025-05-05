'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Loader2, Save, X, Tag as TagIcon, Plus, Check, FileText } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Dynamic import of the rich text editor to avoid SSR issues
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {
  ssr: false,
  loading: () => <p className="p-4 border rounded-md text-gray-500">Loading editor...</p>,
});

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Tag {
  id: string;
  name: string;
}

interface ContentEditorProps {
  type?: 'blog' | 'research' | 'event' | 'service';
  initialData?: any;
  categories?: Category[];
  tags?: Tag[];
  onSave: (data: any) => Promise<void>;
  onCancel?: () => void;
}

export default function ContentEditor({
  type = 'blog',
  initialData,
  categories = [],
  tags = [],
  onSave,
  onCancel,
}: ContentEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(initialData?.content || '');
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [pdfUrl, setPdfUrl] = useState(initialData?.pdfUrl || '');
  const [categoryId, setCategoryId] = useState(initialData?.categoryId || '');
  const [selectedTags, setSelectedTags] = useState(initialData?.tags?.map((t: any) => t.id) || []);
  const [published, setPublished] = useState(initialData?.published || false);
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [error, setError] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const [searchTag, setSearchTag] = useState('');

  // Track changes to detect if the form is dirty
  useEffect(() => {
    // Check if there are changes from the initial data
    const isChanged = 
      content !== (initialData?.content || '') ||
      title !== (initialData?.title || '') ||
      slug !== (initialData?.slug || '') ||
      excerpt !== (initialData?.excerpt || '') ||
      (type === 'research' && pdfUrl !== (initialData?.pdfUrl || '')) ||
      categoryId !== (initialData?.categoryId || '') ||
      JSON.stringify(selectedTags.sort()) !== JSON.stringify((initialData?.tags?.map((t: any) => t.id) || []).sort()) ||
      published !== (initialData?.published || false) ||
      featured !== (initialData?.featured || false);
    
    setIsDirty(isChanged);
  }, [
    content, title, slug, excerpt, pdfUrl, categoryId, 
    selectedTags, published, featured, initialData, type
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simple validation
    if (!title.trim()) {
      setError('Title is required');
      setLoading(false);
      return;
    }

    if (!slug.trim()) {
      setError('Slug is required');
      setLoading(false);
      return;
    }

    if (!categoryId && type !== 'service') {
      setError('Category is required');
      setLoading(false);
      return;
    }

    if (!content.trim()) {
      setError('Content is required');
      setLoading(false);
      return;
    }

    try {
      await onSave({
        title,
        slug,
        content,
        excerpt,
        pdfUrl: type === 'research' ? pdfUrl : undefined,
        categoryId,
        tags: selectedTags,
        published,
        featured,
      });
      
      // Reset dirty state after successful save
      setIsDirty(false);
      
      // Show success message
      toast({
        title: "Content saved successfully",
        description: "Your changes have been saved.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error saving content:', error);
      setError('Failed to save content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      // Default behavior: go back to list view
      router.push(`/admin/${type}`);
    }
  };

  const generateSlug = () => {
    if (!title) return;
    
    // Convert to lowercase and replace spaces with hyphens
    const newSlug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens
    
    setSlug(newSlug);
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId) 
        : [...prev, tagId]
    );
  };

  // Filter tags based on search term
  const filteredTags = tags.filter(tag => 
    tag.name.toLowerCase().includes(searchTag.toLowerCase())
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="slug">Slug</Label>
          <div className="flex mt-1">
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="enter-slug"
              required
              className="flex-1"
            />
            <Button 
              type="button" 
              variant="outline" 
              className="ml-2"
              onClick={generateSlug}
            >
              Generate
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            This will be the URL: yoursite.com/{type}/{slug}
          </p>
        </div>

        {type === 'research' && (
          <div>
            <Label htmlFor="pdfUrl">PDF URL</Label>
            <Input
              id="pdfUrl"
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              placeholder="https://example.com/your-research-paper.pdf"
              className="mt-1"
            />
            <p className="text-xs text-gray-500 mt-1">
              Link to the downloadable PDF version of the research paper
            </p>
          </div>
        )}

        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Brief description..."
            required
            className="mt-1 h-24"
          />
        </div>

        {type !== 'service' && (
          <div>
            <Label htmlFor="category">Category</Label>
            <Select 
              value={categoryId} 
              onValueChange={setCategoryId}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <Label className="mb-1 block">Tags</Label>
          <div className="mb-2">
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedTags.length > 0 ? (
                selectedTags.map(tagId => {
                  const tag = tags.find(t => t.id === tagId);
                  return tag ? (
                    <Badge 
                      variant="secondary" 
                      key={tag.id}
                      className="flex items-center gap-1 pl-3 cursor-pointer hover:bg-gray-200"
                      onClick={() => toggleTag(tag.id)}
                    >
                      {tag.name}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ) : null;
                })
              ) : (
                <p className="text-sm text-gray-500">No tags selected</p>
              )}
            </div>
            <div className="flex">
              <Input
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                placeholder="Search tags..."
                className="flex-1"
              />
            </div>
            {searchTag && (
              <div className="mt-2 border rounded-md max-h-40 overflow-y-auto">
                {filteredTags.length > 0 ? (
                  filteredTags.map(tag => (
                    <div
                      key={tag.id}
                      className={`flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                        selectedTags.includes(tag.id) ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => toggleTag(tag.id)}
                    >
                      <span className="flex items-center">
                        <TagIcon className="h-3 w-3 mr-2" />
                        {tag.name}
                      </span>
                      {selectedTags.includes(tag.id) && (
                        <Check className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    No matching tags found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <div className="mt-1 border rounded-md overflow-hidden">
            <RichTextEditor
              value={content}
              onChange={setContent}
              placeholder="Start writing..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={published}
              onCheckedChange={setPublished}
            />
            <Label htmlFor="published" className="cursor-pointer">Published</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={featured}
              onCheckedChange={setFeatured}
            />
            <Label htmlFor="featured" className="cursor-pointer">Featured</Label>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t">
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={loading || !isDirty}
          className={isDirty ? "bg-green-600 hover:bg-green-700" : ""}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save
            </>
          )}
        </Button>
      </div>
    </form>
  );
} 