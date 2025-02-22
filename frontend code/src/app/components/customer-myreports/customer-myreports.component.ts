import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-reports',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './customer-myreports.component.html',
  styleUrl: './customer-myreports.component.css'
})
export class CustomerMyreportsComponent {

    posts: any[] = [];
    description: string = '';
    abuser: string = '';
    evidence: string = '';
    searchQuery: string = ''; // Search query
    successMessage: string = ''; // Success message

    selectedAbuseType: string = 'Harassment & Bullying';
    abuseTypes: string[] = [
      'Harassment & Bullying',
      'Discrimination',
      'Workplace Misconduct',
      'Fraud & Corruption',
      'Safety Violations',
      'Crime & Illegal Activities',
      'Domestic Violence',
      'Child Abuse',
      'Cyberbullying',
      'Hate Speech',
      'Scams & Fraud',
      'Identity Theft',
      'Online Harassment',
      'Sexual Harassment',
      'Academic Misconduct',
      'Public Safety Concerns'
    ];

    selectedLocation: string = 'Kolkata';
    location: string[] = [
      'Kolkata',
      'Mumbai',
      'Chennai',
      'Bangalore',
      'New Delhi',
      'Ahmedabad',
      'Noida',
      'Hyderabad'
    ];

    constructor(private postService: PostService, private router: Router) {}

    ngOnInit(): void {
      this.fetchPosts();
    }

    navigateToCommentsPage(reportsId: any): void {
      localStorage.setItem('reportsId', reportsId);
      this.router.navigate(['/customer/customer-reports/report-comments']);
    }

    fetchPosts(): void {
      this.postService.getReportsByUserId(localStorage.getItem('id')).subscribe({
        next: (data) => {
          console.log(data);
          this.posts = data;
        },
        error: (error) => {
          console.error('Error fetching reports', error);
        }
      });
    }

    addPost(): void {
      if (!this.description.trim()) return;

      const postData = {
        description: this.description,
        location: this.selectedLocation,
        abuseType: this.selectedAbuseType,
        whoAbused: this.abuser,
        evidence: this.evidence,
        user: { id: Number(localStorage.getItem('id')) }
      };

      console.log(postData);

      this.postService.addReport(postData).subscribe({
        next: (response) => {
          console.log("Report successfully added:", response);
          this.successMessage = "Report submitted successfully!"; // Show success message
          this.fetchPosts(); // Refresh reports dynamically
          this.clearInputs(); // Clear input fields
          setTimeout(() => this.successMessage = '', 3000); // Hide success message after 3 sec
        },
        error: (error) => {
          console.error('Error adding report', error);
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

    // Clear form inputs after submission
    clearInputs(): void {
      this.description = '';
      this.abuser = '';
      this.evidence = '';
      this.selectedLocation = 'Kolkata';
      this.selectedAbuseType = 'Harassment & Bullying';
    }
}
