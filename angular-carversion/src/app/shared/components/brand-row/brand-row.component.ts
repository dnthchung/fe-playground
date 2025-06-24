import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brand } from '../../../core/models/brand';

@Component({
  selector: 'app-brand-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-row.component.html',
  styleUrl: './brand-row.component.scss'
})
export class BrandRowComponent {
  @Input() brands: Brand[] = [];
}
