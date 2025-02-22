import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-cutomer-report-comments',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './cutomer-report-comments.component.html',
  styleUrl: './cutomer-report-comments.component.css'
})
export class CutomerReportCommentsComponent {

  posts: any[] = [];
  newPost: any = '';
  successMessage: string = ''; // Success message

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getReportsComments(localStorage.getItem('reportsId')).subscribe({
      next: (data) => {
        console.log(data);
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
      reports:{id:localStorage.getItem('reportsId')}
    }

    console.log(postData);

    this.postService.addReportComment(postData).subscribe({
      next: (response) => {
        console.log("Comment successfully added:", response);
        this.successMessage = "Report submitted successfully!"; // Show success message
        this.fetchPosts(); // Refresh reports dynamically
        this.clearInputs(); // Clear input fields
        setTimeout(() => this.successMessage = '', 3000); // Hide success message after 3 sec
      },
      error: (error) => {
        console.error('Error adding comment', error);
      }
      });
  }

  clearInputs(): void {
    this.newPost = '';
  }

}
