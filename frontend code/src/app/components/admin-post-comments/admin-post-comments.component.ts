import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-post-comments',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './admin-post-comments.component.html',
  styleUrl: './admin-post-comments.component.css'
})
export class AdminPostCommentsComponent {

  posts: any[] = [];
  newPost: any = '';
  successMessage: string = ''; // Message to show success feedback

  actualPost: any = {
    id: 0,
    text: "Loading...",
    user: { id: 0, name: "Anonymous" },
    posts: { id: 0, text: "Loading...", postType: "Unknown" }
  };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.fetchActualPosts();
  }

  fetchActualPosts(): void {
    this.postService.getActualPosts(localStorage.getItem('postId')).subscribe({
      next: (data) => {
        console.log(localStorage.getItem('postId'));
        console.log(data);
        this.actualPost = data;
      },
      error: (error) => {
        console.error('Error fetching comments', error);
      }
    });
  }

  fetchPosts(): void {
    this.postService.getPostsComments(localStorage.getItem('postId')).subscribe({
      next: (data) => {
        //console.log(data);
        this.posts = data;
      },
      error: (error) => {
        console.error('Error fetching comments', error);
      }
    });
  }


  addPost(): void {
    if (!this.newPost.trim()) return;

    const postData={
      text:this.newPost,
      user: {id:localStorage.getItem('id')},
      posts:{id:localStorage.getItem('postId')}
    }

    console.log(postData);

    this.postService.addPostComment(postData).subscribe({
      next: () => {
        this.newPost = ''; // Clear the input field
        this.successMessage = "Post added successfully!"; // Show success message
        this.fetchPosts(); // Refresh the post list dynamically
        setTimeout(() => this.scrollToLatestPost(), 300); // Scroll to latest post
        setTimeout(() => this.successMessage = '', 3000); // Hide success message after 3 seconds
      },
      error: (error) => {
        console.error('Error adding comment', error);
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
