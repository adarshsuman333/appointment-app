import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent {

  newAppointmentTitle : string = '';
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if(this.newAppointmentTitle.trim() && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: 1,
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
      alert(this.appointments.length);
      }
    }

  }
