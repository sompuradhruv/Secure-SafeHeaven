import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-reports',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})

export class AdminReportsComponent {

    posts: any[] = [];
    description: string = '';
    abuser: string = '';
    evidence: string = '';
    searchQuery: string = ''; // Search query
    successMessage: string = ''; // Success message

    constructor(private postService: PostService, private router: Router) {}

    ngOnInit(): void {
      this.fetchPosts();
    }

    navigateToCommentsPage(reportsId: any): void {
      localStorage.setItem('reportsId', reportsId);
      this.router.navigate(['/admin/admin-report-comments']);
    }

    fetchPosts(): void {
      this.postService.getReports().subscribe({
        next: (data) => {
          console.log(data);
          this.posts = data;
        },
        error: (error) => {
          console.error('Error fetching reports', error);
        }
      });
    }

    // Function to filter reports based on search input
    filteredReports(): any[] {
      if (!this.searchQuery.trim()) {
        return this.posts;
      }
      return this.posts.filter(post =>
        post.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.abuseType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.whoAbused.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Clear search input
    clearSearch(): void {
      this.searchQuery = '';
    }

}

