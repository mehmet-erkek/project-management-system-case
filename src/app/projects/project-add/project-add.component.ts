import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['Not Started', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      this.projectService.addProject(this.projectForm.value).subscribe({
        next: () => {
          console.log('Project added successfully');
          this.router.navigate(['/projects']); // Navigate to projects list after adding
        },
        error: (error) => {
          console.error('Error adding project:', error);
          // Handle error scenario, e.g., show error message to user
        }
      });
    }
  }
}