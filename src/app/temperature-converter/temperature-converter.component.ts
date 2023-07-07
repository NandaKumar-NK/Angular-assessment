import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent {
  temperature: number | null = null;
  selectedUnit: string = 'celsius';
  convertedTemperature: number | null = null;
  convertedUnit: string = '';
  errorMessage: string = '';

  convertTemperature() {
    this.errorMessage = '';
    if (isNaN(this.temperature as number)) {
      this.errorMessage = 'Please enter a valid number for the temperature.';
      return;
    }

    if (this.selectedUnit === 'celsius') {
      this.convertedTemperature = (this.temperature as number * 9 / 5) + 32;
      this.convertedUnit = 'Fahrenheit';
    } else if (this.selectedUnit === 'fahrenheit') {
      this.convertedTemperature = (this.temperature as number - 32) * 5 / 9;
      this.convertedUnit = 'Celsius';
    }
  }
}
