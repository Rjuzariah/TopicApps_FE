import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatingService {

  constructor() { }
  
  getTimeAgo(timestamp: number): string {
    const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    const timeDifference = currentTime - timestamp;
    
    // Convert time difference to human-readable format
    if (timeDifference < 60) {
      return `${timeDifference} seconds ago`;
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(timeDifference / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  }
}
