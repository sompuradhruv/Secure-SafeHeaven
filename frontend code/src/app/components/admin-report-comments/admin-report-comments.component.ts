import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin-report-comments',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './admin-report-comments.component.html',
  styleUrl: './admin-report-comments.component.css'
})
export class AdminReportCommentsComponent {

  posts: any[] = [];
  newPost: any = '';
  successMessage: string = ''; // Success message

  abuseTypes: string[] = [
    'Harassment & Bullying', 'Discrimination', 'Workplace Misconduct',
    'Fraud & Corruption', 'Safety Violations', 'Crime & Illegal Activities',
    'Domestic Violence', 'Child Abuse', 'Cyberbullying', 'Hate Speech',
    'Scams & Fraud', 'Identity Theft', 'Online Harassment', 'Sexual Harassment',
    'Academic Misconduct', 'Public Safety Concerns'
  ];

  locations: string[] = [
    'Kolkata', 'Mumbai', 'Chennai', 'Bangalore', 'New Delhi', 
    'Ahmedabad', 'Noida', 'Hyderabad'
  ];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.generateBarChart();
    this.generatePieChart();
  }

    // 🚩 Generate random bar chart for incidents
    private generateBarChart(): void {
      const incidentData = this.locations.map(() => Math.floor(Math.random() * 100)); // Random data for incidents
      const abuseData = this.abuseTypes.slice(0, 5).map(() => Math.floor(Math.random() * 50)); // Random data for abuse types
  
      const ctx = document.getElementById('incidentBarChart') as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.locations,
          datasets: [{
            label: 'Incidents by City',
            data: incidentData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Abuse Types (Random)',
            data: abuseData,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  
    // 🚩 Generate pie chart for domestic violence distribution
    private generatePieChart(): void {
      const domesticViolenceData = this.locations.map(() => Math.floor(Math.random() * 20));
  
      const ctx = document.getElementById('domesticViolencePieChart') as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.locations,
          datasets: [{
            label: 'Domestic Violence Cases by City',
            data: domesticViolenceData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(199, 199, 199, 0.6)',
              'rgba(83, 102, 255, 0.6)'
            ]
          }]
        },
        options: {
          responsive: true
        }
      });
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
