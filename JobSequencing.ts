class Job {
    constructor(
        public jobId: number,
        public profit: number,
        public deadline: number
    ) {}
}

function jobSequencing(jobs: Job[]): { scheduledJobs: number[], totalProfit: number } {
    // Sort jobs based on profit in descending order
    jobs.sort((a, b) => b.profit - a.profit);
    
    const maxDeadline = Math.max(...jobs.map(job => job.deadline));
    const slots: (number | null)[] = Array(maxDeadline).fill(null);
    let totalProfit = 0;
    
    for (const job of jobs) {
        for (let j = Math.min(maxDeadline, job.deadline) - 1; j >= 0; j--) {
            if (slots[j] === null) {
                slots[j] = job.jobId;
                totalProfit += job.profit;
                break;
            }
        }
    }
    
    const scheduledJobs = slots.filter(slot => slot !== null) as number[];
    return { scheduledJobs, totalProfit };
}

// Example usage:
const jobs = [
    new Job(1, 100, 2),
    new Job(2, 19, 1),
    new Job(3, 27, 2),
    new Job(4, 25, 1),
    new Job(5, 15, 3)
];
const result = jobSequencing(jobs);
console.log("Scheduled jobs:", result.scheduledJobs);
console.log("Total profit:", result.totalProfit);
