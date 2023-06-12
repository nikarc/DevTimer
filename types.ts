export interface Job {
  title: string;
  description?: string;
  timers: Timer[];
}

export interface Timer {
  title: string;
  // TODO: Markdown?
  notes?: string;
  duration: number;
}
