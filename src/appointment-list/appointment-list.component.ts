import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent {

  //Properties to hold the new appointment title and date
  newAppointmentTitle : string = '';

  //Initializing the new appointment date to the current date
  newAppointmentDate : Date = new Date();

  //Array to hold the appointments
  appointments: Appointment[] = [];

  //Method to add a new appointment to the appointments array
  addAppointment() {
    //Checking if the new appointment title is not empty and the new appointment date is valid before adding it to the appointments array
    if(this.newAppointmentTitle.trim() && this.newAppointmentDate){
      //Creating a new appointment object with the new appointment title and date, and an id that is one more than the current length of the appointments array
      let newAppointment: Appointment = {
        id: this.appointments.length + 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      //Pushing the new appointment to the appointments array
      this.appointments.push(newAppointment);

      //Clearing the form after hitting the add button
      this.newAppointmentTitle = '';

      // Resetting the date to the current date
      this.newAppointmentDate = new Date();

      // Alerting the number of appointments in the list
      // alert(this.appointments.length);
      }
    }

    deleteAppointment(index: number) {
      //Removing the appointment at the specified index from the appointments array using the splice method. The splice method takes two arguments: the index of the item to be removed and the number of items to remove (in this case, we want to remove just one item).
      this.appointments.splice(index, 1);
    }

  }
