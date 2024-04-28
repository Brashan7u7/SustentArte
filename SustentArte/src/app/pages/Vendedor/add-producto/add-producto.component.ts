import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [CommonModule], // Only CommonModule is needed
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {images = [0, 1, 2, 3];  // Array to hold image upload indexes (0-3)
  imagePreviews: string[] = []; // Array to store image preview URLs
  selectedImage: File | null = null;
  currentImageIndex = 0; // Track the current image index

  myForm = new FormGroup({
    image1: new FormControl(null),
    image2: new FormControl(null),
    image3: new FormControl(null),
    image4: new FormControl(null),
  });

  constructor(private sanitizer: DomSanitizer) {}

  onFileSelected(event: any, index: number) {
    if (index > this.currentImageIndex) {
      return; // Don't allow selecting images out of order
    }
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews[index] = e.target.result;
      };
      reader.readAsDataURL(this.selectedImage);
      this.myForm.get(`image${index + 1}`);
      this.currentImageIndex = index + 1; // Update current image index
    }
  }

  getPreviewUrl(file: any) {
    if (!file) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
  }
}
