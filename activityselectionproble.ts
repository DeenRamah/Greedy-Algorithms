type Activity = [number, number];

function activitySelection(activities: Activity[]): Activity[] {
    // Sort activities based on their finish times
    activities.sort((a, b) => a[1] - b[1]);
    
    const selectedActivities: Activity[] = [activities[0]];
    let lastFinishTime = activities[0][1];
    
    for (let i = 1; i < activities.length; i++) {
        if (activities[i][0] >= lastFinishTime) {
            selectedActivities.push(activities[i]);
            lastFinishTime = activities[i][1];
        }
    }
    
    return selectedActivities;
}

// Example usage:
const activities: Activity[] = [[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]];
const selectedActivities = activitySelection(activities);
console.log("Selected activities:", selectedActivities);
