export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter += 1;
        console.log('Active to inactive: ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActive(){
        this.inactiveToActiveCounter += 1;
        console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
    }
}