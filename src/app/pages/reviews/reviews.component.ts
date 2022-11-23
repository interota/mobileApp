import { Component, OnInit } from '@angular/core';
import { ReviewServiceService } from 'src/app/FireStore/review-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  constructor(private reviewService: ReviewServiceService) { }

  ngOnInit() {
    this.reviewService.getAllReviews();
  }

}
