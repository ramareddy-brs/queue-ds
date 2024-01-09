/** 
 Author : Build Rise Shine 

Created : 2023 

Script : Queue 

Description : Implementation of Queue Data Structure

  The Queue class represents a custom implementation of a queue data structure in JavaScript. 
  It provides methods to perform basic queue operations, such as adding elements to the back of 
  the queue (enqueue) and removing elements from the front of the queue (dequeue). 
  
  The queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, 
  meaning the first element added to the queue will be the first one to be removed. The example 
  demonstrates how to create an instance of the Queue class and perform enqueue and dequeue 
  operations on it.
  
(c) Copyright by BRS Studio. 
**/

//  Queue operations using array

class Queue {
  constructor(){
    this.items = [];
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek(){
    if(!this.isEmpty()){
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.peek());

