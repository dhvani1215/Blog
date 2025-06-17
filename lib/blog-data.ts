import type { BlogPost } from "./types"

// In a real application, this would come from a database
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15: A Complete Guide",
    slug: "getting-started-nextjs-15",
    excerpt:
      "Learn how to build modern web applications with Next.js 15, including the new App Router, Server Components, and performance optimizations.",
    content: `
      <h2>Introduction to Next.js 15</h2>
      <p>Next.js 15 represents a significant leap forward in React-based web development. With its enhanced App Router, improved Server Components, and powerful new features, it's never been easier to build fast, scalable web applications.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>App Router:</strong> A new file-system based router built on React Server Components</li>
        <li><strong>Server Components:</strong> Render components on the server for better performance</li>
        <li><strong>Streaming:</strong> Stream UI updates as they become ready</li>
        <li><strong>Built-in SEO:</strong> Automatic meta tag generation and optimization</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To create a new Next.js 15 project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new project with all the latest features and best practices configured out of the box.</p>
      
      <h3>Project Structure</h3>
      <p>The new App Router introduces a different project structure:</p>
      <ul>
        <li><code>app/</code> - Contains your application routes and layouts</li>
        <li><code>components/</code> - Reusable UI components</li>
        <li><code>lib/</code> - Utility functions and configurations</li>
        <li><code>public/</code> - Static assets</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Next.js 15 provides an excellent foundation for building modern web applications. Its focus on performance, developer experience, and SEO makes it an ideal choice for projects of any size.</p>
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: "Web Development",
    tags: ["nextjs", "react", "javascript", "web-development"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    title: "Understanding React Server Components",
    slug: "understanding-react-server-components",
    excerpt:
      "Dive deep into React Server Components and learn how they can improve your application performance and user experience.",
    content: `
      <h2>What are React Server Components?</h2>
      <p>React Server Components represent a new paradigm in React development, allowing components to render on the server and send the result to the client as a serialized format.</p>
      
      <h3>Benefits</h3>
      <ul>
        <li><strong>Reduced Bundle Size:</strong> Server components don't add to your client-side JavaScript bundle</li>
        <li><strong>Direct Database Access:</strong> Fetch data directly without API routes</li>
        <li><strong>Improved Performance:</strong> Faster initial page loads and better Core Web Vitals</li>
        <li><strong>Better SEO:</strong> Content is rendered on the server, making it immediately available to search engines</li>
      </ul>
      
      <h3>Server vs Client Components</h3>
      <p>Understanding when to use server components vs client components is crucial:</p>
      
      <h4>Use Server Components for:</h4>
      <ul>
        <li>Data fetching</li>
        <li>Accessing backend resources</li>
        <li>Keeping sensitive information on the server</li>
        <li>Large dependencies that would impact bundle size</li>
      </ul>
      
      <h4>Use Client Components for:</h4>
      <ul>
        <li>Interactivity and event listeners</li>
        <li>State and lifecycle effects</li>
        <li>Browser-only APIs</li>
        <li>Custom hooks</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>Here are some best practices when working with Server Components:</p>
      <ol>
        <li>Start with Server Components by default</li>
        <li>Move to Client Components only when needed</li>
        <li>Keep the client-server boundary as low as possible</li>
        <li>Use the "use client" directive sparingly</li>
      </ol>
    `,
    author: "Mike Chen",
    publishedAt: "2024-01-12T14:30:00Z",
    updatedAt: "2024-01-12T14:30:00Z",
    category: "Programming",
    tags: ["react", "server-components", "performance", "nextjs"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: 6,
    featured: false,
  },
  {
    id: "3",
    title: "The Future of AI in Web Development",
    slug: "future-ai-web-development",
    excerpt:
      "Explore how artificial intelligence is transforming web development, from code generation to automated testing and beyond.",
    content: `
      <h2>AI Revolution in Web Development</h2>
      <p>Artificial Intelligence is rapidly transforming the landscape of web development, offering new tools and methodologies that enhance productivity and code quality.</p>
      
      <h3>Current AI Tools</h3>
      <ul>
        <li><strong>GitHub Copilot:</strong> AI-powered code completion and generation</li>
        <li><strong>ChatGPT:</strong> Natural language to code conversion</li>
        <li><strong>Tabnine:</strong> Intelligent code completion</li>
        <li><strong>DeepCode:</strong> AI-powered code review and bug detection</li>
      </ul>
      
      <h3>Areas of Impact</h3>
      
      <h4>1. Code Generation</h4>
      <p>AI can now generate functional code from natural language descriptions, significantly speeding up development time.</p>
      
      <h4>2. Automated Testing</h4>
      <p>AI-powered testing tools can automatically generate test cases and identify potential bugs before they reach production.</p>
      
      <h4>3. Design to Code</h4>
      <p>Tools are emerging that can convert design mockups directly into functional code, bridging the gap between design and development.</p>
      
      <h4>4. Performance Optimization</h4>
      <p>AI can analyze code patterns and suggest optimizations for better performance and user experience.</p>
      
      <h3>Challenges and Considerations</h3>
      <ul>
        <li>Code quality and maintainability</li>
        <li>Security implications of AI-generated code</li>
        <li>The need for human oversight and validation</li>
        <li>Ethical considerations in AI development</li>
      </ul>
      
      <h3>Looking Ahead</h3>
      <p>As AI continues to evolve, we can expect even more sophisticated tools that will further streamline the development process while maintaining high standards of code quality and security.</p>
    `,
    author: "Emily Rodriguez",
    publishedAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z",
    category: "AI & ML",
    tags: ["ai", "machine-learning", "web-development", "automation"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: 7,
    featured: true,
  },
  {
    id: "4",
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    slug: "responsive-layouts-css-grid-flexbox",
    excerpt:
      "Master modern CSS layout techniques with practical examples and best practices for creating responsive web designs.",
    content: `
      <h2>Modern CSS Layout Techniques</h2>
      <p>CSS Grid and Flexbox have revolutionized how we approach web layouts, providing powerful tools for creating responsive and flexible designs.</p>
      
      <h3>CSS Grid: The Two-Dimensional Layout System</h3>
      <p>CSS Grid excels at creating complex, two-dimensional layouts with precise control over both rows and columns.</p>
      
      <h4>Key Grid Properties:</h4>
      <ul>
        <li><code>display: grid</code> - Establishes a grid container</li>
        <li><code>grid-template-columns</code> - Defines column sizes</li>
        <li><code>grid-template-rows</code> - Defines row sizes</li>
        <li><code>grid-gap</code> - Sets spacing between grid items</li>
        <li><code>grid-area</code> - Places items in specific grid areas</li>
      </ul>
      
      <h3>Flexbox: The One-Dimensional Layout Method</h3>
      <p>Flexbox is perfect for distributing space and aligning items in a single dimension (either row or column).</p>
      
      <h4>Key Flex Properties:</h4>
      <ul>
        <li><code>display: flex</code> - Creates a flex container</li>
        <li><code>flex-direction</code> - Sets the main axis direction</li>
        <li><code>justify-content</code> - Aligns items along the main axis</li>
        <li><code>align-items</code> - Aligns items along the cross axis</li>
        <li><code>flex-wrap</code> - Controls wrapping behavior</li>
      </ul>
      
      <h3>When to Use Grid vs Flexbox</h3>
      
      <h4>Use CSS Grid for:</h4>
      <ul>
        <li>Complex, two-dimensional layouts</li>
        <li>Overall page structure</li>
        <li>When you need precise control over both rows and columns</li>
        <li>Creating responsive layouts with grid areas</li>
      </ul>
      
      <h4>Use Flexbox for:</h4>
      <ul>
        <li>One-dimensional layouts</li>
        <li>Component-level layouts</li>
        <li>Centering content</li>
        <li>Distributing space between items</li>
      </ul>
      
      <h3>Responsive Design Best Practices</h3>
      <ol>
        <li>Start with mobile-first approach</li>
        <li>Use relative units (rem, em, %) instead of fixed pixels</li>
        <li>Implement fluid grids with minmax() function</li>
        <li>Test across different devices and screen sizes</li>
        <li>Consider accessibility in your layout decisions</li>
      </ol>
    `,
    author: "David Kim",
    publishedAt: "2024-01-08T16:45:00Z",
    updatedAt: "2024-01-08T16:45:00Z",
    category: "Web Development",
    tags: ["css", "responsive-design", "grid", "flexbox", "layout"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: 9,
    featured: false,
  },
  {
    id: "5",
    title: "TypeScript Best Practices for Large Applications",
    slug: "typescript-best-practices-large-applications",
    excerpt:
      "Learn essential TypeScript patterns and practices for building maintainable, scalable applications with better type safety.",
    content: `
      <h2>TypeScript in Enterprise Applications</h2>
      <p>TypeScript has become the go-to choice for large-scale JavaScript applications, providing type safety, better tooling, and improved maintainability.</p>
      
      <h3>Essential TypeScript Patterns</h3>
      
      <h4>1. Strict Type Configuration</h4>
      <p>Always enable strict mode in your tsconfig.json:</p>
      <pre><code>{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}</code></pre>
      
      <h4>2. Interface vs Type Aliases</h4>
      <p>Use interfaces for object shapes that might be extended, and type aliases for unions, primitives, and computed types.</p>
      
      <h4>3. Generic Constraints</h4>
      <p>Use generic constraints to create more flexible and reusable code while maintaining type safety.</p>
      
      <h3>Advanced TypeScript Features</h3>
      
      <h4>Utility Types</h4>
      <ul>
        <li><code>Partial&lt;T&gt;</code> - Makes all properties optional</li>
        <li><code>Required&lt;T&gt;</code> - Makes all properties required</li>
        <li><code>Pick&lt;T, K&gt;</code> - Selects specific properties</li>
        <li><code>Omit&lt;T, K&gt;</code> - Excludes specific properties</li>
        <li><code>Record&lt;K, T&gt;</code> - Creates object type with specific keys</li>
      </ul>
      
      <h4>Conditional Types</h4>
      <p>Create types that depend on conditions, enabling powerful type-level programming.</p>
      
      <h4>Template Literal Types</h4>
      <p>Build types using template literal syntax for more precise string typing.</p>
      
      <h3>Project Organization</h3>
      
      <h4>1. Barrel Exports</h4>
      <p>Use index.ts files to create clean import paths and better organize your modules.</p>
      
      <h4>2. Type-Only Imports</h4>
      <p>Use <code>import type</code> for type-only imports to avoid runtime overhead.</p>
      
      <h4>3. Declaration Files</h4>
      <p>Create .d.ts files for third-party libraries without TypeScript support.</p>
      
      <h3>Performance Considerations</h3>
      <ul>
        <li>Use project references for large monorepos</li>
        <li>Enable incremental compilation</li>
        <li>Optimize your tsconfig.json for faster builds</li>
        <li>Use type-only imports when possible</li>
      </ul>
      
      <h3>Testing with TypeScript</h3>
      <p>Ensure your tests are also type-safe by properly typing your test utilities and mocks.</p>
    `,
    author: "Alex Thompson",
    publishedAt: "2024-01-05T11:20:00Z",
    updatedAt: "2024-01-05T11:20:00Z",
    category: "Programming",
    tags: ["typescript", "javascript", "type-safety", "best-practices"],
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: 10,
    featured: false,
  },
  {
    id: "6",
    title: "Mobile-First Development with React Native",
    slug: "mobile-first-development-react-native",
    excerpt:
      "Discover how to build cross-platform mobile applications using React Native, with tips for performance and native integration.",
    content: `
      <h2>React Native: One Codebase, Multiple Platforms</h2>
      <p>React Native enables developers to build native mobile applications using React and JavaScript, sharing code between iOS and Android platforms.</p>
      
      <h3>Getting Started with React Native</h3>
      
      <h4>Development Environment Setup</h4>
      <ul>
        <li>Install Node.js and npm/yarn</li>
        <li>Set up React Native CLI or Expo CLI</li>
        <li>Configure Android Studio and Xcode</li>
        <li>Set up device emulators or use physical devices</li>
      </ul>
      
      <h4>Project Structure</h4>
      <p>A typical React Native project includes:</p>
      <ul>
        <li><code>src/</code> - Application source code</li>
        <li><code>components/</code> - Reusable UI components</li>
        <li><code>screens/</code> - Screen components</li>
        <li><code>navigation/</code> - Navigation configuration</li>
        <li><code>services/</code> - API and business logic</li>
        <li><code>utils/</code> - Helper functions</li>
      </ul>
      
      <h3>Core React Native Concepts</h3>
      
      <h4>1. Native Components</h4>
      <p>React Native provides platform-specific components that compile to native UI elements:</p>
      <ul>
        <li><code>View</code> - Container component (like div)</li>
        <li><code>Text</code> - Text display component</li>
        <li><code>ScrollView</code> - Scrollable container</li>
        <li><code>FlatList</code> - Efficient list rendering</li>
        <li><code>TouchableOpacity</code> - Touchable wrapper</li>
      </ul>
      
      <h4>2. Styling with StyleSheet</h4>
      <p>React Native uses a subset of CSS properties with camelCase naming:</p>
      <pre><code>const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  }
})</code></pre>
      
      <h4>3. Navigation</h4>
      <p>Use React Navigation for handling navigation between screens with native performance.</p>
      
      <h3>Performance Optimization</h3>
      
      <h4>1. List Optimization</h4>
      <ul>
        <li>Use FlatList instead of ScrollView for large datasets</li>
        <li>Implement getItemLayout for known item dimensions</li>
        <li>Use keyExtractor for efficient re-rendering</li>
      </ul>
      
      <h4>2. Image Optimization</h4>
      <ul>
        <li>Use appropriate image formats and sizes</li>
        <li>Implement lazy loading for images</li>
        <li>Cache images for better performance</li>
      </ul>
      
      <h4>3. Memory Management</h4>
      <ul>
        <li>Remove event listeners in cleanup</li>
        <li>Use React.memo for expensive components</li>
        <li>Optimize state updates and re-renders</li>
      </ul>
      
      <h3>Native Module Integration</h3>
      <p>When React Native doesn't provide the functionality you need, you can write native modules or use existing ones from the community.</p>
      
      <h3>Testing React Native Apps</h3>
      <ul>
        <li>Unit testing with Jest</li>
        <li>Component testing with React Native Testing Library</li>
        <li>End-to-end testing with Detox</li>
        <li>Manual testing on real devices</li>
      </ul>
      
      <h3>Deployment</h3>
      <p>Learn the process of building and deploying your app to the App Store and Google Play Store, including code signing and release management.</p>
    `,
    author: "Maria Garcia",
    publishedAt: "2024-01-03T13:10:00Z",
    updatedAt: "2024-01-03T13:10:00Z",
    category: "Mobile",
    tags: ["react-native", "mobile-development", "cross-platform", "ios", "android"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: 12,
    featured: true,
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return blogPosts.find((post) => post.slug === slug) || null
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.featured)
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  const lowercaseQuery = query.toLowerCase()

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
