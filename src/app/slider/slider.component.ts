import { Component, OnInit, OnDestroy,ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']  
})
export class SliderComponent implements OnInit, OnDestroy {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @Input() name: any; 
  counter: number = 1;
  intervalId: any;
  stateMusic = false;

  reproducirMusica(): void {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    audioElement.play();
    this.stateMusic= true;
  }

  detenerMusica(): void {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    audioElement.pause();
    audioElement.currentTime = 0;
    this.stateMusic = false;
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.counter = this.counter >= 6 ? 1 : this.counter + 1;
      const radioBtn = document.getElementById('radio' + this.counter) as HTMLInputElement;
      if (radioBtn) {
        radioBtn.checked = true;
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}