import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss'
})
export class ScrollToTop {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Mostra o botão quando rolar mais de 300px
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop(): void {
    const start = window.scrollY;
    const duration = 1000; // 1 segundo
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, start * (1 - easeProgress));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }
}
