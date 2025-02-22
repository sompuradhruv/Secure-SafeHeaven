import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-posts',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './admin-posts.component.html',
  styleUrl: './admin-posts.component.css'
})

export class AdminPostsComponent {

    posts: any[] = [];
    newPost: any = '';
    selectedPostType: string = 'Abuse';
    searchQuery: string = '';
    successMessage: string = ''; // Message to show success feedback

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
  
    constructor(private postService: PostService, private router: Router) {}

    filteredPosts(): any[] {
      if (!this.searchQuery.trim()) {
        return this.posts;
      }
      return this.posts.filter(post =>
        post.text.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.postType.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    clearSearch(): void {
      this.searchQuery = '';
    }    

    navigateToCommentsPage(postId: any): void {
      localStorage.setItem('postId', postId);
      this.router.navigate(['/admin/admin-post-comments']);
    }
  
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
        user: {id:localStorage.getItem('id')}
      };
  
      console.log(postData);
  
      this.postService.addPost(postData).subscribe({
        next: () => {
          this.newPost = ''; // Clear the input field
          this.successMessage = "Post added successfully!"; // Show success message
          this.fetchPosts(); // Refresh the post list dynamically
          setTimeout(() => this.scrollToLatestPost(), 300); // Scroll to latest post
          setTimeout(() => this.successMessage = '', 3000); // Hide success message after 3 seconds
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


}
