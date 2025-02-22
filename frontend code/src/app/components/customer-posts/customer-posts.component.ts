import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-customer-posts',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './customer-posts.component.html',
  styleUrl: './customer-posts.component.css'
})
export class CustomerPostsComponent {

  posts: any[] = [];
  newPost: string = '';
  selectedPostType: string = 'Abuse';
  searchQuery: string = ''; // Search query for filtering
  successMessage: string='';

  postTypes: string[] = [
    'Abuse',
    'Mental Health',
    'Bullying & Cyberbullying',
    'Family Issues',
    'Relationships & Friendships',
    'Healing & Recovery',
    'Legal & Safety Advice',
    'Resources & Helplines',
    'General Support & Encouragement'
  ];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data;
      },
      error: (error) => {
        console.error('Error fetching posts', error);
      }
    });
  }

  addPost(): void {
    if (!this.newPost.trim()) return;

    const postData = {
      text: this.newPost,
      postType: this.selectedPostType,
      user: { id: localStorage.getItem('id') }
    };

    console.log(postData);

    this.postService.addPost(postData).subscribe({
      next: () => {
        this.newPost = ''; // Clear input
        this.successMessage = "Post added successfully!"; // Show success message
        this.fetchPosts(); // Refresh the post list dynamically
        setTimeout(() => this.scrollToLatestPost(), 300); // Scroll to latest post
        setTimeout(() => this.successMessage = '', 3000); // Hide success message after 3 seconds

        this.selectedPostType = 'Abuse';
      },
      error: (error) => {
        console.error('Error adding post', error);
      }
    });
  }

  scrollToLatestPost(): void {
    setTimeout(() => {
      const postsContainer = document.querySelector('.list-group');
      if (postsContainer) {
        postsContainer.scrollTop = postsContainer.scrollHeight;
      }
    }, 100);
  }

  // Function to filter posts based on search input
  filteredPosts(): any[] {
    if (!this.searchQuery.trim()) {
      return this.posts;
    }
    return this.posts.filter(post =>
      post.text.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      post.postType.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Clear search input
  clearSearch(): void {
    this.searchQuery = '';
  }
}
