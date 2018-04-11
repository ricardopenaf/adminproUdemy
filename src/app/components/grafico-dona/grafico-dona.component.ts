import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

 // Doughnut
@Input('ChartLabels') public doughnutChartLabels: string[] = [];
@Input('ChartData') public doughnutChartData: number[] = [350, 450, 100];
@Input('ChartType') public doughnutChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
