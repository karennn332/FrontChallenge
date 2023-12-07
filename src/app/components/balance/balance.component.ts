import { Component, OnInit } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit {


  public chart : any;

ngOnInit(): void {
   }
   createChart(){
    this.chart = new Chart("MyChart", { 
      type: 'bar' as ChartType,
      data:{
      
        labels: ['Lunes', 'Martes', 'Mircoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo',],
        
      datasets: [{
        
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
       },
     });
    
     }
}
