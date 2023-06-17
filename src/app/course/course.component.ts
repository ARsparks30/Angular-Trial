import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses;
  constructor(service: CourseService) {
    // let service = new CourseService();
    this.courses = service.getCourses();
  }
  title = 'Beauty of nature is here!!!!';
  imageUrl =
    'https://cdn.nimbusthemes.com/2017/09/09233338/Free-Nature-Backgrounds-Sunset-by-Pixabay.jpg';
  colspan = 2;

  isFav = true;

  isActive = false;

  color = '#17a2b8';

  sent = 'write something here!';

  number = 94.058;
  money = 4893728;

  onClick() {
    this.isFav = !this.isFav;
  }

  onKeyEnter() {
    console.log(this.sent);
  }

  onSave() {
    console.log('button was clicked');
    this.color = '#ff008a';
  }

  onKeyUp(email: any) {
    console.log(email);
  }

  // onKeyUp($event: any) {
  //   console.log($event.target.value);
  // }

  // getTitle() {
  //   return this.title;
  // }

  // courses = ['course1', 'course2', 'course3'];

  ngOnInit(): void {}
}
