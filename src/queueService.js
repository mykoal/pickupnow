// queueService.js

/**
 * A class representing a queue data structure.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return !this.isEmpty() ? this.items[0] : null;
    }

    size() {
        return this.items.length;
    }
}

export const initializeQueue = () => {
    let queue = localStorage.getItem('courtQueue');
    if (!queue) {
        queue = {};
        localStorage.setItem('courtQueue', JSON.stringify(queue));
    }
};

export const addToQueue = (courtId, playerDetails) => {
    const queueData = JSON.parse(localStorage.getItem('courtQueue')) || {};
    if (!queueData[courtId]) {
        queueData[courtId] = new Queue();
    } 
    else {
        // Convert the stored queue back into a Queue instance
        const storedQueue = queueData[courtId];
        queueData[courtId] = Object.assign(new Queue(), storedQueue);
    }

    queueData[courtId].enqueue(playerDetails);
    localStorage.setItem('courtQueue', JSON.stringify(queueData));
}; 

export const removeFromQueue = (courtId, playerId) => {
    let queueData = JSON.parse(localStorage.getItem('courtQueue')) || {};
    
    if (queueData[courtId]) {
        // Convert the stored queue back into a Queue instance
        const storedQueue = queueData[courtId];
        queueData[courtId] = Object.assign(new Queue(), storedQueue);

        queueData[courtId].items = queueData[courtId].items.filter(player => player.id !== playerId);
        localStorage.setItem('courtQueue', JSON.stringify(queueData));
    }
};

  
  